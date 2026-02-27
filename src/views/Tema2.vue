<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis y clasificación de las medidas
    

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-acento-botones.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}", alt='Imagen decorativa.'
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 El análisis de medidas implica organizar y sistematizar los datos obtenidos del cuerpo humano, ya que esta información orienta de manera directa el desarrollo técnico del patronaje y la construcción de la moldería. En este sentido, resulta necesario disponer de un sistema de medidas estructurado que permita identificar, ordenar y clasificar cada registro según su función dentro del proceso.

    
    p.mb-5 La correcta interpretación de estas medidas facilita su aplicación en la elaboración de patrones básicos, al establecer relaciones proporcionales entre los distintos segmentos corporales y los requerimientos de ajuste, holgura y funcionalidad que exige la prenda. De este modo, la clasificación técnica de las medidas se convierte en un soporte fundamental para garantizar coherencia entre la estructura corporal y la solución constructiva propuesta.

    
    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Sistemas de medidas – clasificación


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/2.png' alt='AvatarTop')
      .col-lg-7
        .row.justify-content-center.align-items.mb-3
          .col-lg-2
            img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema2/3.svg' alt='AvatarTop')
          .col-lg-10
            p.mb-0 En el ámbito del patronaje, el sistema de medidas corresponde al conjunto organizado de procedimientos utilizados para obtener, registrar y aplicar los datos derivados de la medición corporal. La precisión en este proceso resulta determinante para la construcción de patrones de prendas de vestir, ya que de la calidad del registro depende el nivel de ajuste, adaptación y funcionalidad que la prenda alcance durante su uso.
        p.mb-0 El proceso de medición influye directamente en la forma en que la prenda se adapta al cuerpo, considerando relaciones de proporcionalidad, confort y desempeño funcional, con el propósito de lograr coherencia entre la estructura corporal y la solución constructiva desarrollada.

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-4 De manera general, los sistemas de medidas empleados en patronaje se clasifican en:
        .bg11.p-4
          p.mb-4.le #[b a) Sistema inglés (toma como unidad base la pulgada):] se utiliza de forma tradicional en procesos de patronaje en contextos productivos de países como Estados Unidos, Inglaterra y Australia.
          p.mb-0.le #[b b) Sistema internacional o métrico decimal (toma como unidad base el metro):] se emplea de manera predominante en la mayoría de países de América Latina y en diversos entornos industriales y educativos vinculados a la confección.
      .col-lg-4
        img(src='@/assets/curso/tema2/4.png' alt='AvatarTop')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto
          h5 Figura 11. 
          | Escala de fracciones de pulgada del sistema inglés
        .bg2.p-4
          img.img-a.img-t(src='@/assets/curso/tema2/5.svg' alt='Escala fraccionaria entre uno y dos que organiza divisiones sucesivas del segmento en dieciseisavos, octavos, cuartos, medios y tres cuartos para referencia de medidas proporcionales.')
          

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto
          h5 Figura 12. 
          | Centímetros (metro)
        .bg2.p-4
          img.img-a.img-t(src='@/assets/curso/tema2/6.svg' alt='Escala métrica lineal graduada de cero a cinco centímetros, con subdivisiones regulares que permiten precisar medidas cortas en unidades y fracciones de centímetro.')
          

    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-2(src="@/assets/curso/tema2/7.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-3 Clasificación de las medidas
              p.mb-0 Conozca sobre los sistemas de medidas empleados en la confección de prendas de vestir.
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/1_Anexo_1_Clasificacion_de_las_medidas.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download
    

    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Las medidas
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-5
            img.img-a.img-t(src="@/assets/curso/tema2/8.svg")
          .col-lg-7
            .bg1.p-lg-5.p-4
              p.mb-lg-1.mt-lg-2 Las medidas corresponden a valores numéricos que permiten describir el tamaño y las proporciones de una figura, objeto o segmento corporal. En los procesos de patronaje de prendas, estos datos se obtienen mediante el uso de la cinta métrica flexible, aplicada de forma lineal y perimetral para registrar longitudes, anchos y contornos de las diferentes zonas del cuerpo.
        p.mb-0 En el contexto colombiano, la práctica formativa y productiva suele emplear el sistema métrico decimal, registrando las mediciones principalmente en centímetros, aunque en algunos entornos técnicos también se contempla el uso de pulgadas según requerimientos específicos.
      .col-lg-3
        img.img-a.img-t.mx-lg-2(src="@/assets/curso/tema2/9.png")

    
    p.mb-4 A continuación, se presentan aspectos relevantes para la toma y organización de la información corporal:

    
    p.mb-5 #[b Medidas corporales:] se obtienen a partir de puntos de referencia anatómicos definidos, considerando criterios antropométricos que permiten ubicar con precisión cada registro. Estas mediciones tienen en cuenta volúmenes y relieves estructurales del cuerpo, con el fin de garantizar coherencia entre la configuración corporal y los requerimientos de construcción de la prenda. De acuerdo con su función dentro del patronaje, estas medidas se agrupan en tres categorías principales.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-4
        AcordionA.activor(tipo="b" clase-tarjeta="tarjeta tarjeta--griss").mb-5
          .row.align-items-center(titulo="Largos")
            .col-lg-12
              p.mb-0 Las medidas se toman de forma vertical y estas hacen referencia a los largos y talles del cuerpo.
          .row.align-items-center(titulo="Anchos")
            .col-lg-12
              p.mb-0 La medida se toma de manera horizontal y corresponden a los anchos del cuerpo, como el ancho de pecho. 
          .row.align-items-center(titulo="Contornos")
            .col-lg-12
              p.mb-0 La medida se toma teniendo en cuenta la figura 3D del cuerpo humano, por ejemplo: todo el contorno de la cintura.
        p.mb-0 En la siguiente figura se presentan largos, anchos y contornos de la figura humana. 
      .col-lg-7
        .titulo-sexto
          h5 Figura 13. 
          | Clasificación de las medidas
        .bg2.p-4
          img.img-t.img-a(src='@/assets/curso/tema2/10.svg' alt='Esquema técnico de medición corporal aplicado a confección de prendas. Se señalan puntos y trayectos para tomar medidas como contornos, largos, anchos y alturas en cabeza, tronco, cintura, cadera, mangas y piernas para el ajuste del vestuario.')
      

    h4.mb-4 Clasificación de medidas


    p.mb-4 Se invita a consultar el video para conocer cómo desarrollar patrones de prendas de vestir, desde la identificación de formas corpóreas y conceptos básicos de anatomía, hasta el diseño del molde básico.
    

    .row.justify-content-center.align-items-center.mb-0        
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/ppOfZh4ZzQg?si=xtuIvSvG1pL8dZBT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video. Clasificación de medidas


</template>

<script>
export default {
  name: 'Tema2',
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
