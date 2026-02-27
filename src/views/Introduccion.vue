<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/intro/1.png' alt='AvatarTop')
      .col-lg-7
        .row.justify-content-center.align-items.mb-3
          .col-lg-2
            img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/intro/2.svg' alt='AvatarTop')
          .col-lg-10
            p.mb-0 El patronaje industrial femenino constituye un proceso técnico fundamental para la materialización precisa de las prendas, al permitir convertir una propuesta de diseño en estructuras bidimensionales listas para su producción. Este procedimiento se basa en la traducción de la información proveniente de la figura humana en tres dimensiones hacia planos técnicos denominados patrones básicos, lo que exige una comprensión rigurosa de la configuración corporal para responder con exactitud a los requerimientos de ajuste, funcionalidad y uso.
        p.mb-0 En este contexto se abordará el componente formativo #[b “Estructura corporal y sistema de medidas”], el cual parte de los principios de la antropometría y los articula con nociones de biomecánica, morfología y ergonomía, con el fin de analizar el cuerpo femenino desde su organización y segmentación funcional. Este análisis conduce a la aplicación de un sistema técnico de medición cuya información resulta indispensable para la construcción de cuadros de tallas y la estandarización de procesos dentro del entorno productivo.
    p.mb-5 En consecuencia, el componente propicia el desarrollo de metodologías que facilitan la interpretación técnica de diseños y modelos pertenecientes a distintas tipologías de prendas, tomando como base la comprensión de la silueta femenina, las clasificaciones del vestuario y los universos de uso asociados a la moda casual.

    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

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
