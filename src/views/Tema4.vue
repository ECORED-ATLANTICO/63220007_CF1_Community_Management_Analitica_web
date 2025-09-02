<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Publicación y <em>engagement</em>

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-12.col-lg-9
        p Publicar contenido en redes sociales no se trata solo de compartir información, sino de generar conexiones significativas con la audiencia. El <em>engagement</em> o interacción mide el nivel de compromiso de los usuarios con una marca, reflejado en acciones como comentarios, reacciones, compartidos y participación en dinámicas.
        .row.justify-content-center.align-items-center.bg-color-secundario-s5.p-3.rounded-4.mb-4.mb-lg-0
          .col-xl-1.d-none.d-xl-block
            img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/2.png', alt='imagen decorativa')
          .col-xl-11
            p.mb-0 Para fortalecer esta conexión, es clave aplicar estrategias efectivas y seguir principios de creación de contenido atractivo, algunas de las estrategias para optimizar la publicación de contenido y potenciar el <em>engagement</em> son:
      .col-10.col-sm-8.col-lg-3
        figure
          img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/1.png', alt='imagen decorativa')

    .row.justify-content-center.align-items-center.px-3.py-5.mb-3.mb-lg-5
      .col-10.col-sm-8.col-lg-4.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema4/3.png', alt='imagen decorativa')

      .col-xl-8.mb-3.mb-lg-0.factores-slider.p-4.rounded-4
        SlyderF(columnas="col-lg-6 my-2 drop-shadow")
          .tarjeta.p-4.py-5.card-decoration.rounded-3
            .row.justify-content-center.mb-3
              .col-6
                img.w-90.mb-3(src='@/assets/curso/temas/tema4/4.png' alt='Icon decarativo')
            h5.mb-4.text-center Calendario de contenido
            p.text-center Planificar publicaciones según fechas clave, tendencias y objetivos estratégicos.

          .tarjeta.p-4.py-5.card-decoration.rounded-3
            .row.justify-content-center.mb-3
              .col-6
                img.w-90.mb-3(src='@/assets/curso/temas/tema4/5.png' alt='Icon decarativo')
            h5.mb-4.text-center Diversificación de formatos
            p.text-center Alternar imágenes, videos, textos, encuestas y transmisiones en vivo para mantener el interés.

          .tarjeta.p-4.py-5.card-decoration.rounded-3
            .row.justify-content-center.mb-3
              .col-6
                img.w-90.mb-3(src='@/assets/curso/temas/tema4/6.png' alt='Icon decarativo')
            h5.mb-4.text-center Uso de llamadas a la acción (CTA)
            p.text-center Incluir frases que motiven la participación, como “comenta tu opinión” o “comparte con tus amigos”.
          .tarjeta.p-4.py-5.card-decoration.rounded-3
            .row.justify-content-center.mb-3
              .col-6
                img.w-90.mb-3(src='@/assets/curso/temas/tema4/7.png' alt='Icon decarativo')
            h5.mb-4.text-center Optimización del horario de publicación
            p.text-center Publicar en momentos donde la audiencia está más activa para mejorar el alcance.

          .tarjeta.p-4.py-5.card-decoration.rounded-3
            .row.justify-content-center.mb-3
              .col-6
                img.w-90.mb-3(src='@/assets/curso/temas/tema4/8.png' alt='Icon decarativo')
            h5.mb-4.text-center Interacción proactiva
            p.text-center Responder comentarios, agradecer interacciones y generar conversaciones para fortalecer la comunidad.

          .tarjeta.p-4.py-5.card-decoration.rounded-3
            .row.justify-content-center.mb-3
              .col-6
                img.w-90.mb-3(src='@/assets/curso/temas/tema4/9.png' alt='Icon decarativo')
            h5.mb-4.text-center Colaboraciones estratégicas
            p.text-center Aliarse con <em>influencers</em> o marcas afines para ampliar el alcance y generar mayor <em>engagement</em>.

    p.mb-4.mb-lg-5 Para captar la atención del público y fomentar la interacción en redes sociales, es fundamental desarrollar contenido que sea visualmente llamativo, relevante y emocionalmente conectivo. A continuación, se presentan estrategias y principios esenciales para lograrlo:

    .row.justify-content-center.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        .tarjeta.conservas-slyder.p-4.p-lg-5.pb-lg-4
          SlyderA(tipo="b")
            div.px-5.py-3
              h5 Relevancia
              p Contenido alineado con intereses y necesidades de la audiencia. Uso de calendario de contenido.
            div.px-5.py-3
              h5 Diversificación de formatos
              p Alternar entre imágenes, videos, textos, encuestas, <em>lives</em>, entre otros.
            div.px-5.py-3
              h5 Claridad y concisión
              p Mensajes directos, comprensibles y con llamados a la acción (CTA).
            div.px-5.py-3
              h5 Calidad visual
              p Uso de imágenes y diseños de alta resolución alineados con la identidad de marca.
            div.px-5.py-3
              h5 Emoción y conexión
              p Generar empatía y cercanía. Responder comentarios y agradecer interacciones.
            div.px-5.py-3
              h5 Tendencias y actualidad
              p Integrar temáticas virales y publicar en horarios estratégicos.
            div.px-5.py-3
              h5 Innovación y creatividad
              p Presentar ideas frescas, formatos únicos y establecer colaboraciones estratégicas.
      .col-10.col-lg-4
        figure
          img(data-aos="fade-down")(src='@/assets/curso/temas/tema4/10.png', alt='imagen decorativa')
    


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
