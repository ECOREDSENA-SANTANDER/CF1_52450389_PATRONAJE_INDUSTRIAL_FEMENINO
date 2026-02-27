<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 El componente “Estructura corporal femenina y sistema de medidas” integra de manera articulada el estudio de la estructura del cuerpo (desde la antropometría, anatomía, biomecánica, morfología y ergonomía) con el análisis y clasificación de las medidas. A partir de esta base, se abordan los sistemas de medición, la proporción frente al canon, la deducción de medidas y la construcción de tallas y cuadros normativos. Finalmente, el proceso se vincula con el contexto de la moda, considerando los universos del vestuario, las tipologías de prendas femeninas, los textiles y los usos, lo que permite comprender la relación entre cuerpo, medida y aplicación productiva dentro del patronaje industrial.
    

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Organizado en cuatro ejes temáticos: estructura del cuerpo, análisis y clasificación de medidas, análisis de medidas y tallas, y moda. Cada eje se subdivide en conceptos clave como antropometría, tipos de siluetas, proporciones, normativas, universos del vestuario y tipología de prendas femeninas, abordando de forma técnica y estructurada la relación entre el cuerpo y la indumentaria desde una perspectiva de diseño.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
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
