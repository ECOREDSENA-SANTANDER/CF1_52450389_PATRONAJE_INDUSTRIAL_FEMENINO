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
    

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.mb-lg-0.mb-4
        .titulo.mb-5
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
          .col-lg-2.col-md-2.col-4
            img.img-t.img-a.mb-lg-0.mb-4.my-1(src='@/assets/curso/tema5/4.svg' alt='AvatarTop')
          .col-lg-10.col-md-10.col-8
            p.mb-0 Las fibras textiles se organizan de acuerdo con su origen, lo que permite comprender sus propiedades físicas, su comportamiento durante los procesos de transformación y su pertinencia según el uso final. De manera general, se reconocen dos grandes grupos: fibras naturales y fibras químicas, cada uno con subdivisiones según la materia prima de procedencia.
        p.mb-0 #[b Clasificación de las fibras:] las fibras se clasifican según su origen. De manera general, se reconocen dos grandes grupos: las naturales y las químicas. A su vez, estos grupos se subdividen, como se presenta en la siguiente tabla.

    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
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

    
    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Hilos e hilatura

    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.mb-lg-0.mb-4
        img.mb-0(src='@/assets/curso/tema5/5.png' alt='AvatarTop')
        .bg14.p-4
          h3.mb-3 Hilo
          p.mb-0 se entiende como la agrupación de fibras textiles, continuas o discontinuas, que se integran mediante torsión hasta alcanzar una longitud suficiente para su utilización en la fabricación de estructuras textiles. Esta conformación permite obtener un elemento resistente y uniforme, apto para procesos posteriores de tejido.
      .col-lg-6
        img.mb-0(src='@/assets/curso/tema5/6.png' alt='AvatarTop')
        .bg15.p-4
          h3.mb-3.text-white Hilatura
          p.mb-0.text-white corresponde al proceso técnico mediante el cual los filamentos o fibras se transforman y organizan en hebras continuas, preparadas para la construcción de hilos y, posteriormente, de tejidos. Este procedimiento incide de manera directa en propiedades como la resistencia, la regularidad y el desempeño funcional del material en su uso final.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10
        .titulo-sexto
          h5 Figura 23. 
          | Hilaturas
        img.img-t.img-a(src='@/assets/curso/tema5/7.png' alt='Conjunto de ovillos de fibra textil natural organizados como materia prima para procesos de tejido y elaboración de productos artesanales.')
          

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .titulo.mb-5
          img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
          h3.mb-0 Tejidos

        p.mb-4 Los tejidos corresponden a estructuras textiles obtenidas a partir de la transformación y organización de fibras o hilos, cuya relación entre longitud, área y espesor les otorga cohesión y resistencia mecánica suficiente para su uso (Textile Terms and Definitions, The Textile Institute, citado por SENA, 2025). Estas estructuras permiten generar superficies flexibles con propiedades específicas según el método de construcción empleado.
        .bg11.p-4
          p.mb-0.mx-lg-5.mb-lg-3.mt-lg-3 De manera general, los tejidos se agrupan en dos categorías principales (tejidos planos y tejidos de punto), además de contemplar las estructuras no tejidas, las cuales se producen mediante procesos tecnológicos que no requieren entrelazado tradicional de hilos.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema5/8.png' alt='AvatarTop')


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
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


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
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
    .d-none
      img(src='@/assets/curso/tema5/t5.png' alt='')

    h4.mb-4(data-aos="fade-right") Caracterización de los textiles


    p.mb-4(data-aos="fade-left") Se invita a consultar el video para conocer las características, usos y aplicaciones de los textiles en la creación de prendas, una base clave para tomar decisiones acertadas en diseño y confección.
    

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")        
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/kL9UYOzJD3o?si=iwQDMQVj1n5wOq7j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video. Caracterización de los textiles


    separador
    #t_5_1.titulo-segundo.mb-5
      h2 5.1 Aprovechamiento

    
    p.mb-4(data-aos="fade-left") El aprovechamiento por metro de tela consiste en determinar cuánta tela se utiliza realmente para confeccionar una prenda en relación con la cantidad total comprada. Este cálculo es fundamental para optimizar costos, minimizar desperdicios y mejorar la eficiencia en producción.
    
    
    p.mb-5(data-aos="fade-right") Pasos para determinar el aprovechamiento:


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        PasosA.color-primario.mb-0(tipo="l")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7
              h4 Trazado de las piezas del patrón
              p.mb-2 Coloca las piezas del patrón sobre la tela respetando:
              p.mb-0 • El sentido del hilo (dirección de la urdimbre).
              p.mb-0 • Los márgenes de costura.
              p.mb-0 • El sentido del diseño o estampado, si aplica.
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema5/10.svg', alt='')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema5/11.svg', alt='')
            .col-lg-7.text-end
              h4 Distribución y encaje de piezas
              p.mb-0 Organiza las piezas para que ocupen el menor espacio posible dentro del ancho de la tela (normalmente 1.40 m o 1.50 m). Aquí se busca una disposición eficiente, como encajar piezas en ángulos o rotarlas si el diseño lo permite.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7
              h4 Medición de tela usada
              p.mb-0 Mide el largo total de tela utilizado una vez acomodadas todas las piezas. Por ejemplo: si las piezas distribuidas ocupan 0.95 metros del total de 1 metro adquirido, ese será tu valor de uso real.
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema5/12.svg', alt='')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-12.text-start
              h4.mx-lg-5.ps-lg-4 Cálculo del aprovechamiento
              p.mb-2.mx-lg-5.ps-lg-4 La fórmula para calcular el aprovechamiento es:
              .row.align-items-start.mb-4.mx-lg-5.ps-lg-4
                .col-lg-6
                  .titulo-sexto
                    h5 Figura 24.
                    |  Fórmula de aprovechamiento
                  img.img-t(src='@/assets/curso/tema5/16.svg', alt='Expresión matemática que define el aprovechamiento del material textil como la relación entre el área útil ocupada por los patrones y el área total del metro de tela, multiplicada por cien para obtener el porcentaje.')
                .col-lg-6
                  .titulo-sexto
                    h5 Figura 25.
                    |  Ejemplo de aplicación
                  img.img-t(src='@/assets/curso/tema5/17.svg', alt='Cálculo del aprovechamiento del material textil obtenido al dividir el área útil entre el área total del metro de tela y convertir el resultado a porcentaje, con un valor de setenta y seis puntos sesenta y siete por ciento.') 
              p.mb-0.mx-lg-5.ps-lg-4 Tela: 1 metro de largo x 1,50 metros de ancho = 1,5 m²
              p.mb-0.mx-lg-5.ps-lg-4 Área ocupada por los patrones: 1,15 m²
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7
              h4 Factores que afectan el aprovechamiento
              p.mb-0 • #[b Forma y número de piezas:] prendas con muchas piezas pequeñas tienden a generar más sobrantes.
              p.mb-0 • #[b Ancho de la tela:] a mayor ancho, más oportunidades de optimización.
              p.mb-0 • #[b Diseño o estampado:] telas con dibujos direccionados limitan la rotación de piezas.
              p.mb-0 • #[b Técnicas de corte:] el uso de #[em software] de corte o corte manual puede influir en el rendimiento.
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema5/13.svg', alt='Factores que afectan el aprovechamiento')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema5/14.svg', alt='Consideraciones adicionales')
            .col-lg-7.text-end
              h4 Consideraciones adicionales
              p.mb-0 Siempre se recomienda dejar un margen de seguridad del 5–10 % al comprar tela. El uso de retales sobrantes en otras prendas o complementos puede mejorar el rendimiento general.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7
              h4 Fichas técnicas en patronaje
              p.mb-0 Una ficha técnica en la industria de la moda es un documento esencial que recopila información detallada sobre una prenda de vestir y funciona como guía para su diseño, producción y control de calidad. Este documento facilita la comunicación entre los diversos equipos involucrados en el proceso de fabricación, asegurando que cada prenda cumpla con las especificaciones deseadas.
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema5/15.svg', alt='Fichas técnicas en patronaje')


    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Elementos clave de una ficha técnica


    .row.justify-content-center.align-items-stretch.mb-lg-3.mb-1.mb-md-4(data-aos="fade-left")
      .col-lg-4.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4.mb-md-4
        .bg16.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema5/18.svg')
          h3.mb-4.text-center Identificación del producto:
          p.mb-0.text-center incluye el nombre de la prenda, código o referencia, categoría y colección a la que pertenece. 
      .col-lg-4.col-md-6.ps-lg-0.pe-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-4
        .bg17.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema5/19.svg')
          h3.mb-4.text-center Detalles de diseño:
          p.mb-0.text-center proporciona descripciones precisas del estilo, tipo de cuello, mangas, cierres y otros elementos distintivos. 
      .col-lg-4.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-0
        .bg18.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema5/20.svg')
          h3.mb-4.text-center Especificaciones de materiales:
          p.mb-0.text-center detalla los tejidos, fornituras y otros materiales necesarios, incluyendo composición, color, proveedor y características especiales.


    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
      .col-lg-4.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4.mb-md-4
        .bg19.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema5/21.svg')
          h3.mb-4.text-center Medidas y tallas:
          p.mb-0.text-center ofrece tablas con dimensiones específicas para cada talla, asegurando la consistencia en el escalado y ajuste de las prendas.  
      .col-lg-4.col-md-6.ps-lg-0.pe-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-4
        .bg20.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema5/22.svg')
          h3.mb-4.text-center Instrucciones de confección
          p.mb-0.text-center describe los métodos de costura, tipos de puntadas, márgenes de costura y cualquier técnica especial requerida durante la fabricación.
      .col-lg-4.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-0
        .bg21.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema5/23.svg')
          h3.mb-4.text-center Detalles de acabado:
          p.mb-0.text-center especifica procesos adicionales como lavado, planchado, etiquetado y empaquetado, garantizando la presentación y calidad final del producto.

    
    .sub.p-2.mb-5(data-aos="fade-left")
      h4.mb-0.text-white.ps-3.pe-3 • Dentro del proceso de fabricación, existen diferentes tipos de fichas técnicas especializadas

    
    p.mb-5(data-aos="fade-right") En el proceso de fabricación de prendas, la ficha técnica es un documento esencial que organiza y comunica la información necesaria para llevar un diseño a producción. Permite estandarizar procesos, reducir errores y asegurar coherencia entre el diseño, el patronaje y la confección. Existen distintos tipos de fichas técnicas, cada una enfocada en aspectos específicos del desarrollo y control de la prenda.


    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Tipos de fichas técnicas en patronaje y confección

    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12.offset-lg-2
        .row.justify-content-center.align-items-end
          .col-lg-9.ps-lg-0
            .crd.crd--avatarHorizontal.crd--first.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.d-none.d-lg-block(src="@/assets/curso/tema5/24.svg", alt="alt")
                .col
                  h4.mb-2 a. Ficha técnica de patronaje:
                  p.mb-0 este documento registra de manera organizada el desarrollo del diseño plano acotado, incorporando las medidas correspondientes a una o varias tallas. Su función es orientar la construcción de los patrones básicos y sus transformaciones, asegurando que cada pieza responda a los criterios de ajuste, proporción y estandarización definidos para la prenda.
            .crd.crd--avatarHorizontal.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.d-none.d-lg-block(src="@/assets/curso/tema5/25.svg", alt="alt")
                .col
                  h4.mb-2 b. Ficha técnica de despiece:
                  p.mb-0 la ficha de despiece detalla cada componente que conforma la prenda, incluyendo piezas principales, forros, refuerzos y complementos estructurales. En este registro se especifican dimensiones, materiales, cantidad de piezas y particularidades constructivas, lo que facilita la organización del proceso de corte y la correcta identificación de cada elemento.
            .crd.crd--avatarHorizontal.crd--last.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.d-none.d-lg-block(src="@/assets/curso/tema5/26.svg", alt="alt")
                .col
                  h4.mb-2 c. Ficha técnica de escalado:
                  p.mb-0 la ficha de escalado se orienta al proceso de gradación de tallas, estableciendo los incrementos y proporciones necesarios para adaptar el patrón base a diferentes tamaños. Su objetivo es mantener coherencia en la estructura, el ajuste y la funcionalidad de la prenda en todas las referencias de talla.
          .col-lg-4.sob1.d-none.d-lg-block
            img.img-t(src="@/assets/curso/tema5/27.svg", alt="alt")


    h4.mb-4(data-aos="fade-left") Introducción a la ficha técnica


    p.mb-4(data-aos="fade-right") Se invita a consultar el video para conocer la función de las fichas técnicas en la fabricación de prendas de vestir y su importancia en el control y precisión del proceso de confección.
    

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")        
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/dcFVqOqjFg4?si=sEC4em5g_Gs-502z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video. Introducción a la ficha técnica



    
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
