/* ============================================================
   Historia del celu — datos de la campaña
   Editá este archivo para corregir cualquier afiche.
   No hace falta tocar app.js ni styles.css.

   Cada afiche:
     year      -> también es el nombre de la imagen: img/2007.jpg, etc.
     era       -> solo define el color de fondo del afiche tipográfico (1–8)
     model     -> firma de la esquina ("Nexus Phone 1 · 2007")
     headline  -> titular grande (voz corporativa de la época)
     body      -> bajada
     tagline   -> remate en itálica
     fine      -> LA LETRA CHICA: crece al tocarla (la revelación)
     concepts  -> conceptos del reverso (formato compacto)
     theorist  -> teórico/s del reverso ("" o "—" si va limpio)
     pedagogy  -> capa pedagógica del reverso (formato compacto)
     reverso   -> (opcional) texto divulgativo largo del dorso. Si está,
                  REEMPLAZA al formato compacto (concepts/theorist/pedagogy)
                  en esa tarjeta. Estructura:
                     reverso: {
                       subtitle: "Título corto del tema",
                       paras: [
                         "Primer párrafo…",
                         "Segundo párrafo…"        // podés poner 1, 2 o más
                       ],
                       pensar: "Preguntas para pensar, al pie del dorso."
                     }
                  (ver 2007–2009 más abajo como ejemplo completo)
     crossref  -> (opcional) botón de cruce en el reverso {to, label}
     draft     -> (opcional) true = copy provisorio, revisar

   PARA COMPLETAR LOS 17 AÑOS QUE FALTAN: pegá el bloque `reverso` de arriba
   dentro del afiche del año, después de `pedagogy`, y completá los textos.
   No hay que tocar app.js ni styles.css: el dorso lo toma solo.
   ============================================================ */

const THESIS = "El teléfono casi no cambió en veinte años. Vos sí.";

const THESIS_SUB =
  "Veinte modelos. La misma caja de vidrio y metal. Lo que evolucionó fue " +
  "todo lo que corre a través de ella — y todo lo que se llevó.";

/* Capítulos narrativos: la estructura del recorrido.
   Cada uno agrupa ~4 años bajo una tesis (prometer → conocer → cercar →
   capturar → encerrar). El campo `era` de cada afiche (más abajo) solo
   define el color de fondo del afiche tipográfico; no la estructura. */
const CHAPTERS = [
  { n: "I", name: "La promesa", from: 2007, to: 2010,
    blurb: "El teléfono llega prometiéndote el mundo en el bolsillo. La trampa ya está sembrada, pero todavía se siente como un regalo." },
  { n: "II", name: "Te conocen", from: 2011, to: 2014,
    blurb: "El aparato empieza a saber quién sos: qué decís, dónde estás, tu cuerpo, tu plata. El período del reconocimiento." },
  { n: "III", name: "El cerco", from: 2015, to: 2018,
    blurb: "Deciden qué ves, sellan el objeto contra vos, te identifican la cara y te venden una cura falsa. El lazo se ajusta." },
  { n: "IV", name: "La captura total", from: 2019, to: 2022,
    blurb: "Tus recuerdos, tu casa, tus movimientos y tu cuerpo: todo adentro del sistema. Ya no hay afuera." },
  { n: "V", name: "La jaula", from: 2023, to: 2026,
    blurb: "La realidad compartida colapsa, alquilás lo que antes tenías — y el último modelo es igual al primero, porque ya no te podés ir." }
];

const POSTERS = [
  {
    year: "2007", era: 1, model: "Nexus Phone 1 · 2007",
    headline: "Reinventamos el teléfono. Esto es solo el comienzo.",
    body: "Tres dispositivos en uno: música, teléfono y comunicador de internet. Lo que llevabas por separado, ahora en un solo objeto.",
    tagline: "No sabés lo que acabás de empezar.",
    fine: "El modelo original todavía es modesto: sin tienda de apps, sin conectividad total. Pero la promesa de fusión es la trampa: un objeto que reúne funciones dispersas terminará absorbiendo cada rincón de tu vida. Lo que viene: difuminado trabajo–vida, FOMO, la sensación de no estar nunca del todo presente.",
    concepts: "convergencia de medios · semilla del always-on",
    theorist: "McLuhan",
    pedagogy: "Potencia el acceso ubicuo y la multitarea; atrofia la tolerancia a no saber y la orientación sin pantalla.",
    reverso: {
      subtitle: "Convergencia",
      paras: [
        "En 2007 pasó algo simple pero enorme: tres aparatos que llevabas por separado —el reproductor de música, el teléfono y la computadora con internet— se fundieron en un solo objeto. A eso se le llama convergencia: cuando muchas funciones distintas se concentran en un mismo dispositivo. Parece pura comodidad, y lo es. Pero también significa que un único objeto empieza a acompañarte a todos lados, todo el tiempo.",
        "Marshall McLuhan, un pensador canadiense que estudió los medios de comunicación, tenía una idea justa para esto: toda tecnología que extiende una capacidad humana, al mismo tiempo amputa otra. El auto extiende tus piernas y atrofia el caminar. ¿Qué extendió el celular? El acceso a todo, siempre. ¿Y qué empezó a amputar? Quizás la experiencia de estar en un solo lugar, haciendo una sola cosa."
      ],
      pensar: "¿Qué cosas dejaste de hacer «por separado» desde que todo está en el teléfono? ¿Recordás la última vez que no supiste algo y te quedaste con la duda?"
    }
  },
  {
    year: "2008", era: 1, model: "Nexus Phone 2 · 2008",
    headline: "Hay una app para eso.",
    body: "Llega la tienda de aplicaciones. Más de 500 apps que transforman tu teléfono en lo que necesites — y crecen cada día.",
    tagline: "Tu vida, ahora fragmentada en íconos.",
    fine: "Cumplimos: en seis meses eran 10.000; en una década, millones. El 68% de las apps recopila tus datos sin que lo sepas. Las gratis nunca son gratis: vos sos el producto. Empieza el lock-in; salir será cada vez más caro.",
    concepts: "capitalismo de vigilancia · vendor lock-in · economía de plataformas",
    theorist: "Zuboff",
    pedagogy: "Habilita el just-in-time learning; atrofia la profundidad: se aprende a usar soluciones empaquetadas, no a razonarlas.",
    reverso: {
      subtitle: "La tienda de apps",
      paras: [
        "La tienda de aplicaciones cambió la naturaleza del teléfono: dejó de ser un aparato con funciones fijas y se volvió un contenedor infinito. Cualquier necesidad tuya podía convertirse en una app. Y acá aparece la trampa que casi nadie vio en 2008: muchas de esas apps eran gratis. ¿Cómo puede ser gratis algo que costó millones desarrollar? Porque el pago sos vos: tus datos, tus gustos, tus horarios, tus contactos.",
        "Shoshana Zuboff, profesora de Harvard, le puso nombre a un modelo que para 2008 ya llevaba años en marcha: el capitalismo de vigilancia. La materia prima de esta industria no es el petróleo ni el acero: es tu comportamiento, registrado y vendido para predecir (e influir) lo que vas a hacer después. A eso se le suma el segundo cierre de la trampa, el lock-in o encierro: cuanto más comprás, guardás y configurás en un ecosistema, más caro —en plata y en esfuerzo— se vuelve irte. Entre lo que saben de vos y lo que ya dejaste acá adentro, la puerta de salida se cierra sola."
      ],
      pensar: "¿Cuántas apps gratis usás? ¿Qué creés que dan a cambio? Si mañana quisieras cambiar de marca de teléfono, ¿qué perderías?"
    }
  },
  {
    year: "2009", era: 1, model: "Nexus Phone 3 · 2009",
    headline: "Nunca te pierdas nada.",
    body: "Notificaciones push. Amigos, noticias, emails: todo en tiempo real. Diseñadas para mantener tu atención.",
    tagline: "Interrumpimos tu vida para mejorarte.",
    fine: "Las notificaciones se optimizan mediante diseño persuasivo para interrumpir tu concentración cada 3–5 minutos. Los puntos rojos, sonidos y vibraciones explotan las mismas vías neurológicas que las máquinas tragamonedas. El usuario promedio revisa el teléfono 96 veces al día.",
    concepts: "economía de la atención · dark patterns · adicción conductual diseñada",
    theorist: "Schüll · Fogg · Harris",
    pedagogy: "Atrofia la atención sostenida y la lectura larga (del deep reading al skimming). Es el golpe central a la educación.",
    reverso: {
      subtitle: "Las notificaciones",
      paras: [
        "El punto rojo con un numerito parece un detalle de diseño. No lo es: es probablemente la pieza de ingeniería psicológica más eficaz de la década. Las notificaciones funcionan con recompensa variable: nunca sabés si lo que llegó es importante o basura, y esa incertidumbre es exactamente lo que te hace mirar. Es el mismo mecanismo de las máquinas tragamonedas, y no por casualidad.",
        "Natasha Dow Schüll, antropóloga, pasó años estudiando los casinos de Las Vegas y mostró cómo las tragamonedas se diseñan para inducir un estado de trance donde el tiempo desaparece. B.J. Fogg fundó en Stanford un laboratorio de «tecnología persuasiva» donde se formaron muchos diseñadores de estas interfaces. Y Tristan Harris, que trabajó en Google, se convirtió en arrepentido y denunciante: habla de la economía de la atención, donde tu atención es el recurso escaso que las empresas se disputan."
      ],
      pensar: "¿Cuántas veces al día mirás el teléfono sin que haya sonado? ¿Quién decidió que ese punto sea rojo y no gris? ¿Podés leer una página entera sin interrupciones?"
    }
  },
  {
    year: "2010", era: 2, model: "Nexus Phone 4 · 2010",
    headline: "Comparte cada momento. El mundo está esperando.",
    body: "Redes sociales integradas. Cámara frontal. Construí tu marca personal.",
    tagline: "Tu vida privada, ahora pública. Y permanente.",
    fine: "Efectos documentados: ansiedad social, depresión comparativa, distorsión de la autoimagen, adicción a la validación externa. Las adolescentes son particularmente vulnerables; la depresión juvenil aumentará 60% en la próxima década. Y mientras prometemos conexión, desplazamos la conversación cara a cara: juntos, pero solos.",
    concepts: "crisis de salud mental adolescente · desplazamiento del vínculo presencial · performatividad de la identidad",
    theorist: "Haidt · Turkle",
    pedagogy: "Potencia la autoexpresión; atrofia la conversación cara a cara y la escritura extensa, reducida al caption."
  },
  {
    year: "2011", era: 2, model: "Nexus Phone 5 · 2011",
    headline: "Conocé a Vera. Tu asistente personal que siempre escucha.",
    body: "Entiende lenguaje natural. Aprende de vos cada día.",
    tagline: "Hablá libremente. Estamos escuchando.",
    fine: "Vera graba audio continuamente «para mejorar el servicio». Las grabaciones se almacenan indefinidamente y pueden ser escuchadas por contratistas humanos. No existe un apagado real del micrófono.",
    concepts: "vigilancia acústica · offloading cognitivo",
    theorist: "Sparrow",
    pedagogy: "Atrofia la memoria y el saber-hacer: delegás en la voz lo que antes retenías."
  },
  {
    year: "2012", era: 2, model: "Nexus Phone 6 · 2012",
    headline: "Nuestros mapas. Tu mundo. Un solo dueño.",
    body: "Servicios de ubicación siempre activos.",
    tagline: "Siempre sabemos dónde estás. Por tu seguridad.",
    fine: "Sabemos dónde vivís, dónde trabajás, a quién visitás y a qué hora. Cada trayecto es un dato, y cada dato se vende. La ubicación siempre activa no es una función: es el producto.",
    concepts: "economía de datos de ubicación · vigilancia geoespacial",
    theorist: "Maguire",
    pedagogy: "Atrofia la orientación espacial y la construcción de mapas mentales propios."
  },
  {
    year: "2013", era: 3, model: "Nexus Phone 7 · 2013", draft: true,
    headline: "Tu huella. Tu seguridad. Tu identidad.",
    body: "Desbloqueá con el dedo. Sin contraseñas, sin fricción. Ya viene todo configurado.",
    tagline: "Tu cuerpo es la llave. Y la cerradura es nuestra.",
    fine: "Tu biometría no se puede cambiar como una contraseña: si se filtra, es para siempre. Y todo viene activado por defecto — la mayoría nunca toca esos ajustes. La dictadura de los defaults decide por vos qué compartís.",
    concepts: "biometría como control · la dictadura de los defaults",
    theorist: "Thaler-Sunstein · Lessig",
    pedagogy: "Atrofia la deliberación: la opción por defecto reemplaza a la elección consciente."
  },
  {
    year: "2014", era: 3, model: "Nexus Phone 8 · 2014", draft: true,
    headline: "Más grande. Para que quepa todo lo que vas a comprar.",
    body: "Pantalla que llena la mano. Pagá con un toque, sin sacar la billetera.",
    tagline: "Comprar nunca fue tan fácil de no pensar.",
    fine: "Pagar con un toque borra el dolor de gastar: cuanto menos lo sentís, más gastás. Cada compra es un dato más sobre vos. La conveniencia es el anzuelo.",
    concepts: "gamificación del consumo · fricción cero · datos de compra",
    theorist: "—",
    pedagogy: "Atrofia la relación consciente con el dinero y con el propio deseo."
  },
  {
    year: "2015", era: 3, model: "Nexus Phone 9 · 2015", draft: true,
    headline: "Un feed que te conoce mejor que vos.",
    body: "El algoritmo elige por vos. Siempre lo que más te engancha.",
    tagline: "La realidad está sobrevalorada. Tu burbuja es más cómoda.",
    fine: "El algoritmo prioriza lo que provoca ira, miedo e indignación, porque eso te retiene. La desinformación viraliza seis veces más rápido que la verdad. Dejás de ver el mundo: ves tu propio reflejo.",
    concepts: "filter bubbles · posverdad · sesgo de compromiso",
    theorist: "Pariser",
    pedagogy: "Atrofia la exposición a lo distinto y el pensamiento crítico; encierra en la cámara de eco."
  },
  {
    year: "2016", era: 4, model: "Nexus Phone 10 · 2016",
    headline: "El coraje de eliminar lo innecesario.",
    body: "Sin puerto de audífonos. Batería sellada. Sellado contra reparaciones.",
    tagline: "Menos opciones. Más dependencia. Llamalo progreso.",
    fine: "Eliminamos el puerto para venderte audífonos propietarios de 159 dólares. La batería sellada garantiza obsolescencia en 2–3 años. Las reparaciones independientes quedan bloqueadas. Generamos 50 millones de toneladas de e-waste al año. Tu dispositivo anterior fue diseñado para fallar.",
    concepts: "obsolescencia programada · right to repair · enshittification (inicio del arco) · e-waste",
    theorist: "Doctorow · Stiegler",
    pedagogy: "Atrofia las habilidades de reparación y la alfabetización material: no podés abrir, entender ni arreglar el objeto."
  },
  {
    year: "2017", era: 4, model: "Nexus Phone 11 · 2017",
    headline: "Mírate. Y déjanos mirarte.",
    body: "Face ID. Mapeo facial de 30.000 puntos.",
    tagline: "Sonreí. Ya te identificamos.",
    fine: "Cada vez que mirás el teléfono actualizamos tu mapa facial 3D. La tecnología se comparte con gobiernos para «seguridad pública». Es el fin del anonimato en espacios públicos: las protestas políticas se convierten en bases de datos de asistencia automática.",
    concepts: "vigilancia facial masiva · panóptico digital · fin del anonimato público · exportación de tecnología autoritaria",
    theorist: "Foucault",
    pedagogy: "Normaliza el monitoreo como condición ambiental; pedagogía de la docilidad."
  },
  {
    year: "2018", era: 4, model: "Nexus Phone 12 · 2018",
    headline: "Conocé cuánto tiempo perdiste. Luego perdé más.",
    body: "Screen Time. Reportes semanales. Límites de app (que vas a ignorar).",
    tagline: "El problema. La solución falsa. Todo en un dispositivo.",
    fine: "Herramientas de «bienestar digital» inefectivas por diseño, como respuesta a la crisis que creamos. Mientras tanto seguimos optimizando cada píxel para maximizar la adicción. 4,5 horas diarias equivalen a 10 años de tu vida si vivís hasta los 80.",
    concepts: "solucionismo tecnológico · teatro del bienestar digital · cronofagia",
    theorist: "Morozov · Byung-Chul Han",
    pedagogy: "Atrofia la autorregulación real: delega el autocontrol en una métrica externa que es puro teatro."
  },
  {
    year: "2019", era: 5, model: "Nexus Phone 13 · 2019", draft: true,
    headline: "Nunca pierdas un recuerdo. (Nosotros tampoco.)",
    body: "Backup automático en la nube. Tus fotos, mensajes y datos pasan solos de un teléfono a otro.",
    tagline: "Tus recuerdos, a salvo. En nuestros servidores.",
    fine: "El backup viene activado por defecto: tus fotos, mensajes y ubicación quedan en nuestros servidores desde el primer día. En 2019 se supo que contratistas humanos revisan ese contenido «para mejorar el servicio». Borrar la copia local no borra la nuestra.",
    concepts: "colonialismo de datos · custodia forzada · el default como captura",
    theorist: "Couldry-Mejias · Solove",
    pedagogy: "Atrofia la noción de lo privado: todo queda archivado, revisable y fuera de tu control."
  },
  {
    year: "2020", era: 5, model: "Nexus Phone 14 · 2020",
    headline: "Cuando el mundo se detiene. Tu pantalla no lo hace.",
    body: "5G. Tu única ventana al mundo exterior.",
    tagline: "Distanciamiento social. Dependencia digital total.",
    fine: "La pandemia aceleró la captura total de tu vida. El trabajo invadió tu hogar; los niños perdieron desarrollo social. No construimos herramientas para la crisis: construimos la crisis para que dependas de las herramientas.",
    concepts: "digitalización forzada · colonización del espacio doméstico · soledad tecnológica",
    theorist: "Turkle",
    pedagogy: "Habilita la alfabetización digital forzada; atrofia las habilidades sociales encarnadas y el aprendizaje colaborativo presencial (learning loss documentado)."
  },
  {
    year: "2021", era: 5, model: "Nexus Phone 15 · 2021",
    headline: "Tu salud, certificada. Tu movilidad, condicionada.",
    body: "Pasaporte de vacunación digital en tu billetera.",
    tagline: "Estado de vigilancia, ahora con certificado médico.",
    fine: "La infraestructura de rastreo es permanente. Las libertades cedidas en emergencia rara vez se recuperan.",
    concepts: "normalización de vigilancia bajo crisis · mission creep · ratchet effect · bioseguridad como gubernamentalidad",
    theorist: "Foucault · Agamben",
    pedagogy: "Atrofia la vigilancia crítica sobre el poder; entrena la aceptación del estado de excepción."
  },
  {
    year: "2022", era: 6, model: "Nexus Phone 16 · 2022",
    headline: "Detecta accidentes. Y todo lo demás que hacés.",
    body: "Acelerómetro, giroscopio, sensores que nunca duermen.",
    tagline: "Tu cuerpo genera datos. Nosotros los monetizamos.",
    fine: "Los sensores registran cada paso. Las aseguradoras compran estos datos; tu prima puede subir si no caminás lo suficiente. Tu cuerpo es un campo de datos monitoreado.",
    concepts: "datificación del cuerpo · medicina de vigilancia · discriminación algorítmica en seguros · biopolítica digital",
    theorist: "Lupton",
    pedagogy: "Atrofia la escucha del propio cuerpo (interocepción), delegada en métricas externas."
  },
  {
    year: "2023", era: 6, model: "Nexus Phone 17 · 2023",
    headline: "IA generativa. Ahora podés crear cualquier cosa.",
    body: "Imágenes, texto y voz. La creatividad, democratizada.",
    tagline: "La verdad está sobrevalorada. Creá la tuya.",
    fine: "Democratizamos la desinformación. Los deepfakes no consensuados explotan; la suplantación de voz es perfecta. Ya no podés creer lo que ves u oís. La realidad compartida colapsa. ¿Los datos de entrenamiento? Tus fotos de 2019.",
    concepts: "hiperrealidad · weaponización de IA generativa · muerte de la evidencia visual · violencia de género tecnológica",
    theorist: "Baudrillard",
    pedagogy: "Atrofia la evaluación de la evidencia; colapsa la base epistémica del aprendizaje. ¿Cómo enseñar a verificar si nada es verificable?",
    crossref: { to: "2019", label: "¿De dónde salieron los datos de entrenamiento? Del backup de 2019 →" }
  },
  {
    year: "2024", era: 6, model: "Nexus Phone 18 · 2024",
    headline: "Más caro. Más suscripciones. Mismas funciones.",
    body: "1.599 dólares el teléfono. 47 suscripciones recomendadas.",
    tagline: "Pagá más. Obtené menos. Enshittification completa.",
    fine: "Cada función útil ahora requiere suscripción. Pagás 347 dólares al mes en promedio. La propiedad fue reemplazada por renta perpetua: solo alquilás acceso revocable.",
    concepts: "enshittification (cierre del arco abierto en 2016) · subscriptification · rent-seeking · muerte de la propiedad digital",
    theorist: "Doctorow",
    pedagogy: "Atrofia la noción de propiedad estable: todo saber y herramienta queda condicionado a un pago recurrente."
  },
  {
    year: "2025", era: 7, model: "Nexus Phone 19 · 2025", draft: true,
    headline: "Rastreamos tu huella de carbono. Para que te sientas culpable.",
    body: "Créditos de carbono personales. Gamificá tu culpa climática.",
    tagline: "El planeta se quema. Pero la culpa es tuya.",
    fine: "Individualizamos la responsabilidad climática mientras las corporaciones emiten la mayor parte de los gases. El concepto mismo de «huella de carbono personal» lo popularizó una petrolera. Te damos una app para tu culpa; nos guardamos el problema.",
    concepts: "individualización de lo sistémico · pedagogía de la culpa",
    theorist: "—",
    pedagogy: "Atrofia el pensamiento sistémico: convierte un problema estructural en fracaso moral personal."
  },
  {
    year: "2026", era: 7, model: "Nexus Phone 20 · 2026", draft: true,
    headline: "El nuevo Nexus. Igual que el anterior. Pero más caro.",
    body: "Sin novedades este año. Actualizá igual.",
    tagline: "Ya no hace falta convencerte. Solo cobrarte.",
    fine: "El hardware casi no cambió en veinte años. Lo que cambió fuiste vos: ya no podés irte. La jaula no tiene llave porque aprendiste a no buscar la salida.",
    concepts: "servidumbre voluntaria · jaula de hierro",
    theorist: "La Boétie · Weber",
    pedagogy: "Síntesis: lo más atrofiado es la capacidad de imaginar la vida sin el dispositivo.",
    crossref: { to: "2007", label: "Volvé al principio. Era el mismo teléfono. →" }
  },
  {
    year: "21", era: 8, model: "Hoy", synthesis: true, draft: true,
    headline: THESIS,
    body: THESIS_SUB,
    // El afiche 21 rompe el formato: habla desde hoy, sin ironía.
    theorist: "McLuhan · Stiegler · Platón (Fedro)",
    pedagogy: "Toda extensión es una amputación (McLuhan). La técnica es pharmakon: remedio y veneno (Stiegler). Y la angustia — «esto nos hará tontos» — tiene 2.400 años (Platón, mito de Theuth)."
  }
];
