<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo ofrece una visión clara y comprensiva sobre los pilares del <em>Community Management</em>, abordando de manera organizada aspectos fundamentales como el ecosistema digital, el plan de redes sociales, y la planificación estratégica de contenidos. Se exploran herramientas prácticas para la gestión de redes sociales, el aprovechamiento de plataformas, así como la automatización responsable y el uso ético de la inteligencia artificial en la interacción con comunidades en línea.
    p Además, se profundiza en la importancia de crear experiencias significativas a través de la publicación, el diálogo constante y el análisis de resultados. También se destaca el papel que juega la confidencialidad en la gestión de datos y la construcción de confianza.
    .row.justify-content-center
      .mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo entorno digital del community management desarrolla una visión integral del papel del community manager en el entorno digital actual. Abarca contenidos fundamentales como el ecosistema digital, la elaboración del plan de redes sociales y la planificación estratégica de contenidos. Además, ofrece herramientas prácticas para la gestión efectiva de plataformas, el uso responsable de la automatización y la aplicación ética de la inteligencia artificial en la interacción con las comunidades en línea. El componente también enfatiza la importancia de generar experiencias significativas mediante publicaciones relevantes, el diálogo continuo con los usuarios y el análisis de métricas para mejorar la toma de decisiones. Finalmente, se subraya el valor de la confidencialidad y la adecuada gestión de los datos personales como elementos clave para fortalecer la confianza digital.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
