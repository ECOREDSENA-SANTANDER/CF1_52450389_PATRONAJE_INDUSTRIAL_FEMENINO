<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Análisis de medidas y cuadro de tallas


    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}", alt='Imagen decorativa.'
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 Con base en el análisis previo y en la correcta toma de medidas, este apartado aborda el procedimiento para la construcción del cuadro de tallas y su aplicabilidad dentro de los procesos técnicos de patronaje, en tanto herramienta que organiza y estandariza la información corporal necesaria para el desarrollo de patrones.

    
    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Proporción y canon


    p.mb-5 La relación entre proporción y canon se vincula con la manera en que se estudia la correspondencia entre las partes del cuerpo y su altura total, tradicionalmente expresada mediante la referencia de cuántas veces la longitud de la cabeza se integra en la estatura corporal. Para su comprensión, se precisan los siguientes conceptos:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        img(src='@/assets/curso/tema3/2.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.g-0
          .col-lg-6
            .tarjeta.bg12.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.h-100
                TarjetaAudio.color-acento-botones.mb-3(
                texto="a) Canon"
                :audio="require('@/assets/actividad/audio/screen-change.mp3')"
            )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.mb-0 Se entiende como un modelo de referencia que reúne características consideradas ideales dentro de un contexto histórico y cultural determinado, utilizado para analizar la organización y equilibrio de la figura humana en términos de proporcionalidad.
          .col-lg-6
            .tarjeta.bg13.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.h-100
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="b) Proporción"
                :audio="require('@/assets/actividad/audio/screen-change.mp3')"
              )
                p.mb-0 Hace referencia a la relación de correspondencia, equilibrio y coherencia existente entre las partes que conforman un todo. Este principio se aplica en campos como el arte, el diseño de vestuario, la arquitectura y otras disciplinas proyectuales, donde la armonía estructural resulta determinante.
          

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Importancia de la proporción en el diseño


    p.mb-4 La aplicación del principio de proporcionalidad en el diseño de prendas permite establecer relaciones coherentes entre los diferentes componentes de un modelo y la configuración corporal de la persona usuaria. Este criterio contribuye a lograr equilibrio estructural, funcionalidad y adecuada distribución de volúmenes, favoreciendo que la prenda responda de manera consistente a las características físicas y a los requerimientos de uso.


    p.mb-4 A continuación, se presenta el ejemplo de la figura humana femenina en canon y proporción. 

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-lg-0.mb-4
        .titulo-sexto
          h5 Figura 14. 
          | Canon femenino con 8 cabezas
        .bg2.p-lg-5.p-4
          img.img-t.img-a(src='@/assets/curso/tema3/3.svg' alt='Plantilla de proporciones del cuerpo femenino con eje central y líneas de referencia horizontales para ubicar alturas relativas. A un costado se incluyen variaciones de rostro organizadas por niveles para relacionar la estructura corporal con la escala de la cabeza.')
      .col-lg-6
        .titulo-sexto
          h5 Figura 15. 
          | Proporción de la figura humana Vitruvian
        .bg2.p-lg-5.p-4
          img.img-t.img-a.my-lg-4.mb-lg-5(src='@/assets/curso/tema3/4.svg' alt='Esquema proporcional del cuerpo humano inscrito en un círculo y un cuadrado, con extremidades extendidas para establecer relaciones de medida entre altura, envergadura y distribución de segmentos corporales.')
      

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Proporciones corporales


    p.mb-5 La proporción corporal hace referencia a la relación matemática y armoniosa entre las partes del cuerpo humano (Esparza, 1993). Esta proporción está dada en todas las etapas del desarrollo del ser humano, desde su nacimiento hasta la vejez.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto
          h5 Figura 16. 
          | Proporción de acuerdo con las etapas de crecimiento
        .bg2.p-4
          img.img-a.img-t(src='@/assets/curso/tema3/5.svg' alt='Secuencia de proporciones corporales desde recién nacido hasta persona adulta, organizada según la relación entre la altura total y el número de cabezas. Se describen cambios progresivos en la longitud de los segmentos corporales a lo largo del crecimiento.')
          

    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-2(src="@/assets/curso/tema3/6.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-3 Conozca sobre cuadro de tallas y deducción de medidas.
              p.mb-0 2_Anexo_2_Análisis_de_tallas_y_medidas
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/2_Anexo_2_Analisis_de_tallas_y_medidas.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download


</template>

<script>
export default {
  name: 'Tema3',
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
