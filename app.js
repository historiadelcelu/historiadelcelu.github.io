/* ============================================================
   Historia del celu — lógica del micrositio
   Depende de data.js (POSTERS, CHAPTERS, THESIS...)
   Sin librerías. Funciona como sitio estático (GitHub Pages).
   ============================================================ */

(function () {
  "use strict";

  const stream = document.getElementById("stream");
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"]/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
    );

  /* ---- construcción del riel: separadores de capítulo + tarjetas ---- */
  const chapterFor = (year) =>
    CHAPTERS.find((c) => year >= c.from && year <= c.to) || null;

  let lastChapter = null;

  POSTERS.forEach((p) => {
    if (!p.synthesis) {
      const ch = chapterFor(parseInt(p.year, 10));
      if (ch && ch !== lastChapter) {
        stream.insertAdjacentHTML("beforeend", chapterSeparator(ch));
        lastChapter = ch;
      }
    }
    stream.insertAdjacentHTML("beforeend", p.synthesis ? synthesisCard(p) : posterCard(p));
  });

  /* Detección robusta de imágenes: si img/AÑO.jpg existe, mostramos la
     imagen limpia (clase has-img); si no, queda el afiche tipográfico.
     El chequeo de .complete cubre las imágenes YA cacheadas, cuyo evento
     load no vuelve a dispararse. */
  document.querySelectorAll(".front__img").forEach((img) => {
    const front = img.closest(".front");
    const show = () => front.classList.add("has-img");
    const hide = () => img.remove();
    if (img.complete) {
      (img.naturalWidth > 0 ? show : hide)();
    } else {
      img.addEventListener("load", show);
      img.addEventListener("error", hide);
    }
  });

  function chapterSeparator(c) {
    const range = c.from + "\u2013" + c.to;
    return `
      <div class="chapter-sep">
        <div class="chapter-sep__head">
          <span class="chapter-sep__num">${esc(c.n)}</span>
          <span class="chapter-sep__name">${esc(c.name)}</span>
          <span class="chapter-sep__line"></span>
          <span class="chapter-sep__range">${range}</span>
        </div>
        <p class="chapter-sep__blurb">${esc(c.blurb)}</p>
      </div>`;
  }

  /* ---- una tarjeta-afiche (frente + reverso) ---- */
  function posterCard(p) {
    const theorist = p.theorist && p.theorist !== "—"
      ? `<div class="back__block"><div class="back__label">Teórico</div>
           <div class="back__theorist">${esc(p.theorist)}</div></div>`
      : "";
    const cross = p.crossref
      ? `<button class="back__cross" data-goto="${esc(p.crossref.to)}">${esc(p.crossref.label)}</button>`
      : "";
    const draft = p.draft ? `<span class="badge-draft">borrador</span>` : "";

    return `
    <article class="card" id="a${esc(p.year)}" data-era="${p.era}" data-year="${esc(p.year)}">
      <div class="card__inner">

        <div class="face front" role="button" tabindex="0"
             aria-label="Afiche ${esc(p.year)}. Tocá para girar.">
          <img class="front__img" alt="Afiche ${esc(p.year)}" src="img/${esc(p.year)}.jpg">
          ${draft}
          <span class="front__flip" aria-hidden="true">↻</span>
          <div class="front__year">${esc(p.year)}</div>
          <h2 class="front__headline">${esc(p.headline)}</h2>
          <p class="front__body">${esc(p.body)}</p>
          <p class="front__tagline">${esc(p.tagline)}</p>

          <div class="finestrip" role="button" tabindex="0"
               aria-label="Leer la letra chica">
            <span class="finestrip__label">Letra chica — tocá para leer</span>
            <span class="finestrip__peek">${esc(p.fine)}</span>
          </div>

          <div class="reveal" aria-hidden="true">
            <div class="reveal__kicker">Lo que no te dijimos</div>
            <p class="reveal__text">${esc(p.fine)}</p>
            <button class="reveal__close" type="button">Cerrar</button>
          </div>
        </div>

        <div class="face back" role="button" tabindex="0"
             aria-label="Reverso ${esc(p.year)}. Tocá para volver.">
          <div class="back__year">${esc(p.year)}</div>
          <div class="back__block">
            <div class="back__label">Conceptos</div>
            <div class="back__concepts">${esc(p.concepts)}</div>
          </div>
          ${theorist}
          <div class="back__block">
            <div class="back__label">Capa pedagógica</div>
            <div class="back__pedagogy">${esc(p.pedagogy)}</div>
          </div>
          ${cross}
          <div class="back__return">↻ tocá para volver al afiche</div>
        </div>

      </div>
    </article>`;
  }

  /* ---- afiche 21: síntesis, sin flip ---- */
  function synthesisCard(p) {
    return `
    <article class="card card--synthesis" id="a21" data-era="8" data-year="21">
      <div class="card__inner">
        <div class="face synthesis">
          <div class="synthesis__kicker">Epílogo · Hoy</div>
          <h2 class="synthesis__thesis">${esc(p.headline)}</h2>
          <p class="synthesis__sub">${esc(p.body)}</p>
          <p class="synthesis__theory">${p.pedagogy
            .replace(/McLuhan/, "<b>McLuhan</b>")
            .replace(/Stiegler/, "<b>Stiegler</b>")
            .replace(/Platón/, "<b>Platón</b>")}</p>
          <div class="synthesis__actions">
            <button class="synthesis__btn" data-goto="2007">Volver a 2007</button>
            <button class="synthesis__btn" data-top>Volver al inicio</button>
            <button class="synthesis__btn" disabled>Usá esta campaña · próximamente</button>
          </div>
        </div>
      </div>
    </article>`;
  }

  /* ============================================================
     INTERACCIÓN (delegada: un solo listener para todo el riel)
     - tocar la letra chica  -> crece la revelación
     - tocar el resto        -> gira la tarjeta
     - tocar el reverso      -> vuelve
     - botones de cruce      -> navegan a otro año
     ============================================================ */

  function closeAllReveals(except) {
    document.querySelectorAll(".reveal.open").forEach((r) => {
      if (r !== except) {
        r.classList.remove("open");
        r.setAttribute("aria-hidden", "true");
      }
    });
  }

  function handleActivate(target) {
    // cruces y navegación
    const goto = target.closest("[data-goto]");
    if (goto) { navigateTo(goto.getAttribute("data-goto")); return; }
    if (target.closest("[data-top]")) {
      window.scrollTo({ top: 0, behavior: "smooth" }); return;
    }

    // cerrar la revelación
    if (target.closest(".reveal__close")) {
      const rev = target.closest(".reveal");
      rev.classList.remove("open"); rev.setAttribute("aria-hidden", "true"); return;
    }
    // abrir la revelación (letra chica)
    const strip = target.closest(".finestrip");
    if (strip) {
      const rev = strip.parentElement.querySelector(".reveal");
      const willOpen = !rev.classList.contains("open");
      closeAllReveals(rev);
      rev.classList.toggle("open", willOpen);
      rev.setAttribute("aria-hidden", willOpen ? "false" : "true");
      return;
    }
    // clic dentro de la revelación abierta: no hacer nada (dejar leer)
    if (target.closest(".reveal.open")) return;

    // girar (frente o reverso)
    const card = target.closest(".card");
    if (card && !card.classList.contains("card--synthesis")) {
      closeAllReveals(null);
      card.classList.toggle("flipped");
    }
  }

  stream.addEventListener("click", (e) => handleActivate(e.target));
  stream.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") &&
        e.target.matches(".front,.back,.finestrip,.reveal__close,[data-goto],[data-top]")) {
      e.preventDefault();
      handleActivate(e.target);
    }
  });

  function navigateTo(year) {
    const el = document.getElementById("a" + year);
    if (!el) return;
    document.querySelectorAll(".card.flipped").forEach((c) => c.classList.remove("flipped"));
    closeAllReveals(null);
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.querySelector(".card__inner").animate(
      [{ boxShadow: "0 0 0 0 rgba(127,178,255,.0)" },
       { boxShadow: "0 0 0 3px rgba(127,178,255,.7)" },
       { boxShadow: "0 0 0 0 rgba(127,178,255,0)" }],
      { duration: 1400, easing: "ease-out" }
    );
  }

  /* ---- botón "entrar al recorrido" de la portada ---- */
  const enter = document.getElementById("enter");
  if (enter) {
    enter.addEventListener("click", () => {
      stream.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
})();
