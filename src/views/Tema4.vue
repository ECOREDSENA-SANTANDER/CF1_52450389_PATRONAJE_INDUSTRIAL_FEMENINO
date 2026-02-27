<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Tema 4

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}", alt='Imagen decorativa.'
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 Dentro del diseño de modas, la moda se comprende como un fenómeno social y cultural que trasciende la noción de un conjunto aislado de prendas, en la medida en que expresa formas de identidad, pertenencia y contexto. Desde esta perspectiva, se plantea que la moda no se limita a la presencia de tendencias o elementos materiales, sino que funciona como un entramado construido socialmente a partir de normas y acuerdos sobre lo que se considera pertinente o aceptado en determinados entornos (Kawamura, 2005).

    
    p.mb-5 A partir de este enfoque, el sector reconoce la moda como un sistema articulado, razón por la cual distintos aportes teóricos emplean la denominación sistema moda para describir su funcionamiento integral.


    .cajon.color-secundario.p-4.p-lg-5
      p.mb-0 #[b Sistema moda:] se concibe como un conjunto interrelacionado que abarca no solo las prendas de vestir, sino también accesorios, complementos y calzado, además de procesos creativos, productivos y de circulación que se transforman de acuerdo con dinámicas culturales, tecnológicas y de mercado. Esta condición sistémica explica su capacidad de adaptación continua frente a cambios en hábitos de uso, contextos sociales y variaciones en las preferencias colectivas.

    
    separador
    #t_4_1.titulo-segundo.mb-5
      h2 4.1 Universos del vestuario

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        img(src='@/assets/curso/tema4/2.png', alt='Texto que describa la imagen')

    
    p.mb-5 La organización de los universos de vestuario permite relacionar el propósito de uso de la prenda con sus características funcionales, formales y contextuales. Esta clasificación facilita la toma de decisiones en procesos de diseño, patronaje y selección de materiales, al considerar las condiciones en las que la prenda será utilizada.

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto
          h5 Tabla 1. 
          | Clasificación de universos del vestuario por ocasión de uso
        .table-responsive
          table.tabla-a.tab1
            thead
              tr
                th Universo
                th Uso
                th Ejemplos
            tbody
              tr
                td #[b Formal]
                td Contextos de etiqueta, actos protocolarios y encuentros sociales de carácter solemne.
                td Trajes de gala, vestidos de noche, conjuntos formales estructurados.
              tr
                td #[b Informal o casual]
                td Actividades cotidianas y situaciones de uso diario.
                td Pantalones en denim, camisetas, camisas de uso diario, calzado cómodo, vestidos ligeros.
              tr
                td #[b Deportivo o funcional]
                td Práctica de actividad física o labores que requieren desempeño específico.
                td Conjuntos deportivos, uniformes médicos, overoles de trabajo.
              tr
                td #[b Oficina o ejecutivo]
                td Entornos laborales y escenarios asociados a gestión administrativa o negocios.
                td Trajes ejecutivos, blusas formales, pantalones de vestir.
              tr
                td #[b Ceremonia y festivo]
                td Eventos sociales y culturales como bodas, graduaciones o celebraciones religiosas.
                td Vestidos largos, trajes formales, indumentaria tradicional para celebraciones.
              tr
                td #[b Fantasía]
                td Producciones escénicas, audiovisuales o celebraciones temáticas.
                td Disfraces, vestuario teatral, trajes de época o caracterización.
              tr
                td #[b #[em Swimwear] (vestuario de agua)]
                td Actividades recreativas en playa, piscina u otros espacios acuáticos.
                td Vestidos de baño, salidas de baño, prendas ligeras para permanencia en zonas húmedas.
              tr
                td #[b #[em Lingeriewear] (vestuario interior)]
                td Uso como primera capa en contacto directo con el cuerpo.
                td Conjuntos de ropa interior.
              tr
                td #[b #[em Sleepwear] (vestuario de descanso)]
                td Períodos de reposo o sueño.
                td Pijamas y prendas destinadas al descanso.
        figcaption Fuente: SENA, (2025)

    .cajon.color-secundario.t4.p-4.p-lg-5.mb-5
      p.mb-0 #[b Ocasión de uso:] contempla los posibles escenarios en los que una persona o grupos de personas usan una prenda de acuerdo al contexto, esto es pactado culturalmente y hace parte de la identidad culturar individual y grupal.

    
    p.mb-4 A continuación, encontrará ejemplos de prendas de moda casual en la línea femenina.  

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-lg-0.mb-4
        .titulo-sexto
          h5 Figura 17. 
          | Prendas casuales en algodón
        .bg2.p-4
          img.img-t.img-a.my-lg-5.mb-lg-5.mt-lg-5(src='@/assets/curso/tema4/3.png' alt='Conjunto de prendas y calzado de uso cotidiano compuesto por blusa, camisas, vestido, camiseta a rayas, pantalón, jeans y zapatos. Las piezas corresponden a vestuario casual organizado por tipologías superiores, inferiores y complementos.')
      .col-lg-6
        .titulo-sexto
          h5 Figura 18. 
          | Prendas casuales de vestido y complementos
        .bg2.p-4
          img.img-t.img-a(src='@/assets/curso/tema4/4.png' alt='Conjunto de vestuario casual compuesto por chaqueta corta de mezclilla, vestido largo de tirantes, bolso de mano, aretes y sandalias. La combinación organiza prendas y accesorios para un atuendo de uso diario con enfoque funcional y estilístico.')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-lg-0.mb-4
        .titulo-sexto
          h5 Figura 19. 
          | Prendas casuales en tejido de poliéster
        .bg2.p-4
          img.img-t.img-a.my-lg-5.mb-lg-5.mt-lg-5(src='@/assets/curso/tema4/5.png' alt='Conjunto casual compuesto por chaleco acolchado, camiseta a rayas, prenda inferior ajustada y botas, organizado como atuendo de uso cotidiano.')
      .col-lg-6
        .titulo-sexto
          h5 Figura 20. 
          | Prendas casuales de sudadera y pantalón
        .bg2.p-4
          img.img-t.img-a(src='@/assets/curso/tema4/6.png' alt='Conjunto casual compuesto por prenda superior de manga amplia, pantalón holgado, bolso, accesorios y calzado deportivo, organizado como atuendo de uso cotidiano.')
      

    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-2(src="@/assets/curso/tema4/7.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-3 Gamas de mercado - universos de vestuarios - ocasiones de uso. 
              p.mb-0 Se invita a consultar el video para comprender cómo el vestuario se adapta a diferentes contextos, estilos y funciones, según las ocasiones de uso y las necesidades del mercado. 
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(href='https://www.youtube.com/watch?v=VsTacEciP3k' target="_blank")
                span Ir al sitio
                i.fas.fa-circle-play


    separador
    #t_4_2.titulo-segundo.mb-5
      h2 4.2 Gamas de mercados

    
    p.mb-5 Las gamas de mercado se clasifican de acuerdo a líneas de mercado dentro del sector e industria de la moda, en la siguiente figura se presentan las principales categorías y su relación dentro del mercado.


    .row.justify-content-center.align-items-center.mb-2
      .col-lg-10
        .titulo-sexto
          h5 Figura 21. 
          | Sistema moda y gamas de mercado
    .bg2.p-lg-5.p-4.mb-5
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-7
          img.img-a.img-t(src='@/assets/curso/tema4/9.svg' alt='Esquema jerárquico del sistema de la moda organizado en forma de pirámide, que clasifica desde alta costura y lujo hasta mercado masivo y moda económica según nivel de exclusividad y producción.')
        .col-lg-5
          img.img-t.img-a(src='@/assets/curso/tema4/8.png' alt='Esquema jerárquico del sistema de la moda organizado en forma de pirámide, que clasifica desde alta costura y lujo hasta mercado masivo y moda económica según nivel de exclusividad y producción.')
          

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Tipología de prendas femeninas


    p.mb-5 Las tipologías de las prendas se clasifican en función de la estructura corporal. Por esta razón, para completar la etapa de conceptualización, resulta necesario realizar una clasificación que permita identificar las partes de las prendas según la arquitectura del cuerpo. En este sentido, se presenta el siguiente video.

  
    h4.mb-4 Categoría de prendas - tipologías - bitácora de formas


    p.mb-4 Se invita a consultar el video “Categoría de prendas - tipologías - bitácora de formas”.
    

    .row.justify-content-center.align-items-center.mb-0        
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/leHGYnfUxGk?si=DpWVCWWLS-yiNTHG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video. CATEGORÍA DE PRENDAS - TIPOLOGÍAS - BITÁCORA DE FORMAS


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
