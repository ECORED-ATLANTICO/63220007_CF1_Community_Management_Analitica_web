<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Confidencialidad de la información

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema6/1.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2
      .col-lg-10
        p.banner-text La confidencialidad de la información es un pilar fundamental en la gestión de datos dentro del entorno digital. Su correcta aplicación garantiza la protección de la privacidad de los usuarios, el cumplimiento de normativas legales y la construcción de relaciones de confianza entre empresas y consumidores.

    Separador

    #t_6_1(data-aos='zoom-in-right').titulo-segundo.color-secundario.z-2
      h3 6.1.	Normatividad

    p.mb-5 Las regulaciones sobre protección de datos han evolucionado para adaptarse a los desafíos del mundo digital. Algunas de las normativas más relevantes incluyen:

    .row.mb-4.mb-lg-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/2.png', alt='Imagen decorativa')
          .tarjeta.shadow
            .p-4
              h5.text-center.mb-4 Reglamento general de protección de Datos (GDPR) - Unión Europea: 
              p.text-center establece principios de transparencia, consentimiento informado y derecho al olvido.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/3.png', alt='Imagen decorativa')
          .tarjeta.shadow
            .p-4
              h5.text-center.mb-4 Ley 1581 de 2012 - Colombia:
              p.text-center regula el tratamiento de datos personales y establece derechos como el <em>habeas data</em>.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/4.png', alt='Imagen decorativa')
          .tarjeta.shadow
            .p-4
              h5.text-center.mb-4 Ley de Privacidad de Datos de California (CCPA) - EE.UU.:
              p.text-center protege la información de los consumidores y exige a las empresas mayor transparencia.

      .col-sm-6.col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/2.png', alt='Imagen decorativa')
          .tarjeta.shadow
            .p-4
              h5.text-center.mb-4 ISO 27001 - Estándar Internacional:
              p.text-center define buenas prácticas para la gestión de seguridad de la información.

    .cajon.color-terciario.p-4(data-aos="fade-left")
      p.mb-0 En el ámbito empresarial, Google ha adoptado políticas alineadas con el cumplimiento del GDPR, facilitando a los usuarios la gestión de su información personal y brindándoles la posibilidad de solicitar la eliminación de sus datos en cualquier momento.

    Separador

    #t_6_2(data-aos='zoom-in-right').titulo-segundo.color-secundario.z-2
      h3 6.2.	Privacidad de Datos en Redes Sociales

    p.mb-4.mb-lg-5 Las redes sociales manejan grandes volúmenes de información personal, lo que plantea desafíos en términos de privacidad. Los aspectos clave incluyen:

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-12
        .titulo-sexto.color-adicional.mb-4
          h5 Figura 5.
          span Aspectos claves de la privacidad de datos en redes sociales
        img.d-md-none(data-aos="fade-up")(src="@/assets/curso/temas/tema6/6-mobile.png", alt="La figura muestra cuatro aspectos claves de privacidad de datos en redes sociales.Consentimiento explícito: las plataformas deben obtener autorización clara para el uso de datos personales. Configuraciones de privacidad: los usuarios deben tener control sobre quién accede a su información. Cifrado de datos: la seguridad en la transmisión de información es esencial para evitar filtraciones. Uso de algoritmos de IA: la recopilación de datos debe ser transparente y ética.")
        img.d-none.d-md-block.mb-3(data-aos="fade-up")(src="@/assets/curso/temas/tema6/6.png", alt="La figura muestra cuatro aspectos claves de privacidad de datos en redes sociales.Consentimiento explícito: las plataformas deben obtener autorización clara para el uso de datos personales. Configuraciones de privacidad: los usuarios deben tener control sobre quién accede a su información. Cifrado de datos: la seguridad en la transmisión de información es esencial para evitar filtraciones. Uso de algoritmos de IA: la recopilación de datos debe ser transparente y ética.")
        figcaption <strong>Fuente:</strong> SENA, 2025.

    Separador

    #t_6_3(data-aos='zoom-in-right').titulo-segundo.color-secundario.z-2
      h3 6.3.	Ética en el manejo de la información

    p.mb-4.mb-lg-5 El manejo ético de la información digital implica adoptar prácticas responsables que protejan la privacidad y la seguridad de los datos. Los principios fundamentales incluyen:

    .row.justify-content-center.align-items-center
      .col-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down")(src='@/assets/curso/temas/tema6/7.png', alt='imagen decorativa')
      .col-lg-8
        LineaTiempoD.color-secundario.custom-timeline
          .row(numero="1" titulo="Transparencia")
            p.text-small Informar a los usuarios sobre cómo se recopilan y utilizan sus datos.

          .row(numero="2" titulo="Minimización de datos")
            p.text-small Recopilar solo la información estrictamente necesaria.

          .row(numero="3" titulo="Responsabilidad corporativa.")
            p.text-small Las empresas deben garantizar el cumplimiento de normativas y evitar el uso indebido de datos.

          .row(numero="4" titulo="Protección contra ciberataques")
            p.text-small Implementar medidas de seguridad para prevenir accesos no autorizados.






</template>

<script>
export default {
  name: 'Tema6',
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
