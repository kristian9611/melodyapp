const instrumentos = {
  Clarinete: {
    titulo: "Clarinete",
    descripcion:
      "El nuevo YCL-255 es el comienzo perfecto para los jóvenes estudiantes de clarinete. Hecho en resistente resina ABS, son fáciles de sujetar. Con su nuevo apoyo para el pulgar ajustable y anilla para el cordón, ofrecen todavía una mayor comodidad al tocar. Al eliminar el anillo de metal de la campana, hemos dado al instrumento un peso aún más ligero, pero sin comprometer su robustez. Una afinación muy precisa, y una respuesta inmediata, ayuda a los estudiantes a producir un sonido redondo y claro.",
    precio: "USD 753",
    image_path: "/img/clarinete.png",
    type: "vientos",
  },

  Flauta: {
    titulo: "Flauta",
    descripcion:
      "Con un diseño de brazo de punta puntiagudo líder en la industria y una revisión y actualización completas de muchos aspectos del proceso de producción, las flautas intermedias de la serie 400 destacan la consistencia y la calidad de Yamaha que mantienen fuertes estas flautas y el canto para los flautistas jóvenes",
    precio: "USD 2500",
    image_path: "/img/flauta.png",
    type: "vientos",
  },
  Saxofon: {
    titulo: "Saxofon",
    descripcion:
      "Los instrumentos Conductor son desarrollados con tecnología y supervisión japonesa, ofreciendo la mas alta calidad y sonido. Su construcción y anatomía proporciona respuesta rápida y precisa, combinadas con el confort ideal para intérpretes que buscan un instrumento fiable, cómodo y de excelente sonido.",
    precio: "USD 468",
    image_path: "/img/saxofon.png",
    type: "vientos",
  },
  Trompeta: {
    titulo: "Trompeta",
    descripcion:
      "La trompeta Ozeki está hecha de un hermoso latón lacado y viene completa con un estuche de transporte con riata, una boquilla plateada 5C, un paño especial de joyería y un par de guantes blancos. El tono es excepcional y es una excelente herramienta para estudiantes de todas las edades.",
    precio: "USD 182",
    image_path: "/img/trompeta.png",
    type: "vientos",
  },
  Afinador: {
    titulo: "Afinador para guitarra y violín",
    descripcion:
      "Afinador rapido y preciso que sirve para todo instrumento musical tales como guitarra, violin, bajo, ukelele.",
    precio: "USD 9.5",
    image_path: "/img/afinador.png",
    type: "music-gear",
  },
  Correa: {
    titulo: "Correa de guitarra y bajo",
    descripcion:
      "El Classic Vibe '70s Jazz Bass, es un guiño a la evolución de la década de 1970 del J Bass, que combina el lujo y la versatilidad que lo hizo famoso con el tono masivo de sus pastillas duales de alnico de bobina simple diseñadas por Fender. Incluye un perfil de mástil delgado y cómodo en forma de C con un diapasón de radio de 9.5, es fácil de tocar y posee trastes estrechos y altos, así como un puente de estilo vintage con selletas de barril ranurado para una sólida estabilidad de cuerdas. Este modelo de retroceso de Squier también cuenta con un clavijero inspirado en la década de 1970, herrajes niquelados de aspecto rico y un elegante acabado de cuello brillante con tinte vintage",
    precio: "USD 62",
    image_path: "/img/correa.png",
    type: "music-gear",
  },
  Pedal1: {
    titulo: "Pedal de efecto para instrumento de cuerda Zoom G1X Four negro",
    descripcion:
      "Compatible con guitarra eléctrica. Incluye 70 efectos. Incluye pedal de expresión. Posee pantalla LCD. Trae conector de entrada jack mono, jack stereo, usb micro-b. Trae conector de salida jack stereo. Sonidos de alta calidad.",
    precio: "USD 123",
    image_path: "/img/pedal1.png",
    type: "music-gear",
  },
  Pedal2: {
    titulo: "Pedal de efecto para instrumento de cuerda Zoom G1X Four negro",
    descripcion:
      "Pedalera/ Pedal GE300 es un procesador multiefectos para instrumento que combina la serie Micro Preamp, la tecnología Tone Capture, un módulo de sintetizador polifónico de tres voces y una amplia gama de efectos y herramientas de procesamiento de guitarra para ofrecer un módulo extraordinariamente creativo.",
    precio: "USD 925",
    image_path: "/img/pedal2.png",
    type: "music-gear",
  },
 Guitarraac: {
    titulo: "Guitarra acústica Cort MR600F para diestros natural satin",
    descripcion:
      "Pedalera/ Pedal GE300 es un procesador multiefectos para instrumento que combina la serie Micro Preamp, la tecnología Tone Capture, un módulo de sintetizador polifónico de tres voces y una amplia gama de efectos y herramientas de procesamiento de guitarra para ofrecer un módulo extraordinariamente creativo.",
    precio: "USD 325",
    image_path: "/img/guitarraac.png",
    type: "cuerdas",
  },
  Guitarrael1: {
    titulo: "Guitarra eléctrica Cort CR Series CR250 de caoba black transparent con diapasón de jatoba",
    descripcion:
      "Fabricada en caoba. Con 6 cuerdas y 22 trastes. El largo de escala es de 24.75. El puente es fijo. Incluye 2 micrófonos humbucker. Controles de selector de micrófonos, tono y volumen. Sonidos fuertes y firmes con un estilo propio.",
    precio: "USD 467",
    image_path: "/img/guitarrael1.png",
    type: "cuerdas",
  },
  Guitarra: {
    titulo: "Guitarra clásica Yamaha C40 para diestros natural gloss",
    descripcion:
      "Tapa de abeto. Acabado de gloss. El largo de escala es 650mm. Tiene 6 cuerdas de nailon. Guitarra versátil que se adapta a una gran variedad de estilos musicales.",
    precio: "USD 132",
    image_path: "/img/guitarra.png",
    type: "cuerdas",
  },
  Guitarrael2: {
    titulo: "Guitarra eléctrica Squier by Fender Classic Vibe '70s Stratocaster de arce natural brillante con diapasón de laurel indio",
    descripcion:
      "Fabricada en arce con acabado brillante. Con 6 cuerdas y 21 trastes. El largo de escala es de 25.5 . El puente es tremolo. Incluye 3 micrófonos simples. Controles de selector de micrófonos, tono y volumen. Palanca incluida. Sonidos fuertes y firmes con un estilo propio.",
    precio: "USD 536",
    image_path: "/img/guitarrael2.png",
    type: "cuerdas",
  },
};

module.exports = instrumentos;
