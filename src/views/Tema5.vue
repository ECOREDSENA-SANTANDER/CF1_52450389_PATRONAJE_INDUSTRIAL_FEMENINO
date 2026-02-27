<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Textiles


    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-primario.t5.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}", alt='Imagen decorativa.'
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 Los materiales textiles, tanto para aplicaciones de vestuario como para usos industriales, se originan a partir de fibras que constituyen la unidad básica de cualquier estructura textil. Estas fibras se transforman mediante procesos técnicos que incluyen la formación de filamentos, el hilado para obtener hilos y, posteriormente, la conformación de tejidos que dan lugar a las telas. La comprensión de esta secuencia permite interpretar cómo las características del material influyen en el comportamiento, la resistencia y la funcionalidad del producto final.
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .titulo.mb-5(data-aos="fade-left")
          img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
          h3.mb-0 Fibras textiles
        p.mb-0 Se entienden como la unidad sólida elemental que compone toda estructura textil. Cada fibra corresponde a un filamento que participa en la conformación de los hilos y, en consecuencia, de los tejidos y telas. Desde el punto de vista técnico, se considera fibra a aquel elemento cuya longitud es considerablemente mayor que su diámetro, condición que posibilita su entrelazado, torsión y transformación en estructuras textiles con propiedades específicas de resistencia, flexibilidad y adaptabilidad al uso.
      .col-lg-6
        .titulo-sexto
          h5 Figura 22. 
          | Fibras textiles
        img.img-t.img-a(src='@/assets/curso/tema5/2.png' alt='Conjunto de fibras vegetales enrolladas y sueltas empleadas en procesos artesanales de tejido y elaboración de objetos, organizadas como material base para trabajo manual.')
          

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema5/3.png' alt='AvatarTop')
      .col-lg-7
        .row.justify-content-center.align-items.mb-3
          .col-lg-2
            img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema5/4.svg' alt='AvatarTop')
          .col-lg-10
            p.mb-0 Las fibras textiles se organizan de acuerdo con su origen, lo que permite comprender sus propiedades físicas, su comportamiento durante los procesos de transformación y su pertinencia según el uso final. De manera general, se reconocen dos grandes grupos: fibras naturales y fibras químicas, cada uno con subdivisiones según la materia prima de procedencia.
        p.mb-0 #[b Clasificación de las fibras:] las fibras se clasifican según su origen. De manera general, se reconocen dos grandes grupos: las naturales y las químicas. A su vez, estos grupos se subdividen, como se presenta en la siguiente tabla.

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto
          h5 Tabla 2. 
          | Clasificación de las fibras
        .table-responsive
          table.tabla-a.tab2
            thead
              tr
                th Tipo de fibra
                th Origen
                th Subcategoría
                th Ejemplos
            tbody
              tr
                td.fw-bold(rowspan="7") Fibras naturales
                td(rowspan="2") Animales
                td Procedentes de glándulas sedosas.
                td Seda y seda salvaje.
              tr
                td Procedentes de folículos pilosos.
                td Pelo de alpaca, angora, buey, caballo, conejo, castor, camello, cachemira, cabra guanaco, llama, nutria, yak y vicuña.
              tr
                td(rowspan="4") Vegetales
                td Procedentes de las semillas.
                td Algodón.
              tr
                td Procedentes del tallo.
                td Lino, cáñamo, yute y ramio.
              tr
                td Procedentes de la hoja.
                td Esparto y sisal.
              tr
                td Procedentes del fruto.
                td Coco.
              tr
                td Minerales
                td No aplica.
                td Asbestos, fibra de vidrio y fibra de carbono.
              tr
                td.fw-bold(rowspan="6") Fibras químicas
                td Artificiales
                td Base proteínica.
                td De la caseína de la leche (Fibroína) y de algas (alginato).
              tr
                td(rowspan="5") Sintéticas
                td Base celulósica.
                td Rayones (viscosa, crupón y acetato).
              tr
                td Base metálica.
                td Oro, plata y cobre.
              tr
                td Por polimerización.
                td Polivinilo y poliacrílicos.
              tr
                td Por condensación.
                td Poliéster (tergal) y poliamida #[em (nylon)].
              tr
                td Por poliadición.
                td Poliuretano y poliespán.
        figcaption Fuente: SENA, (2025)

    
    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Hilos e hilatura

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        img.mb-0(src='@/assets/curso/tema5/5.png' alt='AvatarTop')
        .bg14.p-4
          h3.mb-3 Hilo
          p.mb-0 se entiende como la agrupación de fibras textiles, continuas o discontinuas, que se integran mediante torsión hasta alcanzar una longitud suficiente para su utilización en la fabricación de estructuras textiles. Esta conformación permite obtener un elemento resistente y uniforme, apto para procesos posteriores de tejido.
      .col-lg-6
        img.mb-0(src='@/assets/curso/tema5/6.png' alt='AvatarTop')
        .bg15.p-4
          h3.mb-3.text-white Hilatura
          p.mb-0.text-white corresponde al proceso técnico mediante el cual los filamentos o fibras se transforman y organizan en hebras continuas, preparadas para la construcción de hilos y, posteriormente, de tejidos. Este procedimiento incide de manera directa en propiedades como la resistencia, la regularidad y el desempeño funcional del material en su uso final.
 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto
          h5 Figura 23. 
          | Hilaturas
        img.img-t.img-a(src='@/assets/curso/tema5/7.png' alt='Conjunto de ovillos de fibra textil natural organizados como materia prima para procesos de tejido y elaboración de productos artesanales.')
          

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo.mb-5(data-aos="fade-left")
          img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
          h3.mb-0 Tejidos
        p.mb-4 Los tejidos corresponden a estructuras textiles obtenidas a partir de la transformación y organización de fibras o hilos, cuya relación entre longitud, área y espesor les otorga cohesión y resistencia mecánica suficiente para su uso (Textile Terms and Definitions, The Textile Institute, citado por SENA, 2025). Estas estructuras permiten generar superficies flexibles con propiedades específicas según el método de construcción empleado.
        .bg11.p-4
          p.mb-0.mx-lg-5.mb-lg-3.mt-lg-3 De manera general, los tejidos se agrupan en dos categorías principales (tejidos planos y tejidos de punto), además de contemplar las estructuras no tejidas, las cuales se producen mediante procesos tecnológicos que no requieren entrelazado tradicional de hilos.
      .col-lg-4
        img(src='@/assets/curso/tema5/8.png' alt='AvatarTop')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto
          h5 Tabla 3. 
          | Clasificación de tejidos
        .table-responsive
          table.tabla-a.tab3
            thead
              tr
                th Tipo de tela
                th Subtipo
                th Clasificación
                th Ejemplos
            tbody
              tr
                td.fw-bold(rowspan="5") Telas tejidas
                td(rowspan="3") Plano
                td Ligamentos fundamentales.
                td
                  .row
                    .col-12
                      p.mb-0 • Tafetán
                      p.mb-0 • Sarga (diagonal)
                      p.mb-0 • Raso
              tr
                td Ligamentos derivados.
                td
                  .row
                    .col-12
                      p.mb-0 • Esterilla / panamá / canastra
                      p.mb-0 • Espina / espiga
                      p.mb-0 • Sarga interrumpida (#[em broken twill])
              tr
                td Otros.
                td
                  .row
                    .col-12
                      p.mb-0 #[em • Dobby, jacquard,] rizo, afelpados, etc.
              tr
                td(rowspan="2") Punto
                td Por trama.
                td
                  .row
                    .col-12
                      p.mb-0 • Sencillo (Jersey, Lacoste)
                      p.mb-0 • Doble (#[em rib] o resortado, #[em interlock,] piqué)
              tr
                td Por urdimbre.
                td
                  .row
                    .col-12
                      p.mb-0 • #[em Tricot]
                      p.mb-0 • #[em Raschell]
              tr
                td.fw-bold Telas no tejidas
                td No aplica
                td No aplica.
                td
                  .row
                    .col-12
                      p.mb-0 • Guatas
                      p.mb-0 • Entretelas
        figcaption Fuente: SENA, (2025)


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/9.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5.brt
            p.mb-0 #[b Caracterización de los textiles:] las caracterizaciones de los textiles se organizan en función de su comportamiento y se relacionan con el peso del material, su estructura, fluidez, expansión y compresión. A continuación, se relacionan los aspectos más relevantes de cada una.
            br
            br
            p.mb-0 Para profundizar más en relación a cómo se caracterizan, se invita al aprendiz a seguir el siguiente llamado a la acción.


    h4.mb-4 Caracterización de los textiles


    p.mb-4 Se invita a consultar el video para conocer las características, usos y aplicaciones de los textiles en la creación de prendas, una base clave para tomar decisiones acertadas en diseño y confección.
    

    .row.justify-content-center.align-items-center.mb-0        
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/kL9UYOzJD3o?si=iwQDMQVj1n5wOq7j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video. Caracterización de los textiles


    separador
    #t_5_1.titulo-segundo.mb-5
      h2 5.1 Aprovechamiento

    
    p.mb-4 El aprovechamiento por metro de tela consiste en determinar cuánta tela se utiliza realmente para confeccionar una prenda en relación con la cantidad total comprada. Este cálculo es fundamental para optimizar costos, minimizar desperdicios y mejorar la eficiencia en producción.
    p.mb-5 Pasos para determinar el aprovechamiento:


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        PasosA.color-primario.mb-0(tipo="l")
    
          //- A
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7
              h4 Trazado de las piezas del patrón
              p Coloca las piezas del patrón sobre la tela respetando:
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.fa-circle
                  p.mb-0 El sentido del hilo (dirección de la urdimbre).
                li.d-flex.mb-1
                  i.fas.fa-circle
                  p.mb-0 Los márgenes de costura.
                li.d-flex.mb-0
                  i.fas.fa-circle
                  p.mb-0 El sentido del diseño o estampado, si aplica.
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema5/10.svg', alt='Trazado de las piezas del patrón')
    
          //- B
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema5/10.svg', alt='Distribución y encaje de piezas')
            .col-lg-7.text-start
              h4 Distribución y encaje de piezas
              p.mb-0 Organiza las piezas para que ocupen el menor espacio posible dentro del ancho de la tela (normalmente 1.40 m o 1.50 m). Aquí se busca una disposición eficiente, como encajar piezas en ángulos o rotarlas si el diseño lo permite.
    
          //- C
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7
              h4 Medición de tela usada
              p.mb-0 Mide el largo total de tela utilizado una vez acomodadas todas las piezas. Por ejemplo: si las piezas distribuidas ocupan 0.95 metros del total de 1 metro adquirido, ese será tu valor de uso real.
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema5/10.svg', alt='Medición de tela usada')
    
          //- D
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-12
              h4 Cálculo del aprovechamiento
              p La fórmula para calcular el aprovechamiento es:
              .row.align-items-start
                .col-lg-6
                  .titulo-sexto
                    h5 Figura 24.
                    |  Fórmula de aprovechamiento
                  p.mb-2
                    strong Aprovechamiento (%) = 
                    | (  Área útil utilizada por los patrones / Área total del metro de tela  ) x 100
                .col-lg-6
                  .titulo-sexto
                    h5 Figura 25.
                    |  Ejemplo de aplicación
                  p.mb-2
                    strong Aprovechamiento (%) = 
                    | ( 1.15 / 1.5 ) x 100 = 76.67%
              p.mb-0 Tela: 1 metro de largo x 1,50 metros de ancho = 1,5 m²
              p.mb-0 Área ocupada por los patrones: 1,15 m²
    
          //- E
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7
              h4 Factores que afectan el aprovechamiento
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.fa-circle
                  p.mb-0 #[strong Forma y número de piezas:] prendas con muchas piezas pequeñas tienden a generar más sobrantes.
                li.d-flex.mb-1
                  i.fas.fa-circle
                  p.mb-0 #[strong Ancho de la tela:] a mayor ancho, más oportunidades de optimización.
                li.d-flex.mb-1
                  i.fas.fa-circle
                  p.mb-0 #[strong Diseño o estampado:] telas con dibujos direccionados limitan la rotación de piezas.
                li.d-flex.mb-0
                  i.fas.fa-circle
                  p.mb-0 #[strong Técnicas de corte:] el uso de #[em software] de corte o corte manual puede influir en el rendimiento.
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema5/10.svg', alt='Factores que afectan el aprovechamiento')
    
          //- F
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema5/10.svg', alt='Consideraciones adicionales')
            .col-lg-7.text-end
              h4 Consideraciones adicionales
              p.mb-0 Siempre se recomienda dejar un margen de seguridad del 5–10 % al comprar tela. El uso de retales sobrantes en otras prendas o complementos puede mejorar el rendimiento general.
    
          //- G
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7
              h4 Fichas técnicas en patronaje
              p.mb-0 Una ficha técnica en la industria de la moda es un documento esencial que recopila información detallada sobre una prenda de vestir y funciona como guía para su diseño, producción y control de calidad. Este documento facilita la comunicación entre los diversos equipos involucrados en el proceso de fabricación, asegurando que cada prenda cumpla con las especificaciones deseadas.
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema5/10.svg', alt='Fichas técnicas en patronaje')
    
    
    
    
    



















    
</template>

<script>
export default {
  name: 'Tema5',
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
