<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-10.col-sm-7.col-lg-4
        figure
          img(data-aos="fade-in")(src="../assets/curso/intro/1.png" alt="Imagen decorativa")
      .col-lg-8
        p En la era digital, las redes sociales han dejado de ser simples plataformas de entretenimiento para convertirse en herramientas esenciales del marketing. Han transformado la manera en que las marcas se comunican y conectan con sus audiencias. Diseñar estrategias efectivas en estos espacios requiere comprender el ecosistema digital, identificar audiencias y establecer objetivos claros que permitan una conexión significativa con los usuarios.
        .row.p-3.bg-color-terciario-t5.rounded-3.align-items-center.justify-content-center
          .col-lg-9.p-0
            p.mb-0 Desde una perspectiva de marketing digital, las redes sociales favorecen la creación de comunidades digitales bien estructuradas, impulsando el crecimiento de las empresas que aplican esta estrategia. Al vincular la automatización, el análisis de datos y la viralidad como elementos clave en su desarrollo, se logra una comunicación más eficiente, una segmentación precisa del público objetivo y una optimización de contenidos que fortalecen la interacción y el engagement, generando resultados sostenibles y alineados con los objetivos comerciales.
          .col-lg-3.d-none.d-lg-block
            figure
              img(data-aos="fade-in")(src="../assets/curso/intro/2.png" alt="Imagen decorativa")

    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/OFIskkY1D68" title="Análisis estratégico del mercado internacional" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
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
