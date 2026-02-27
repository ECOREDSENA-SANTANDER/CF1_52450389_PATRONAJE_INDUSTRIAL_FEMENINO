<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estructura del cuerpo
    

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}", alt='Imagen decorativa.'
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 La estructura del cuerpo se comprende a partir de su arquitectura, entendida como la relación entre composición, organización y movimiento. Este enfoque resulta fundamental para sustentar teóricamente el patronaje y las distintas metodologías aplicadas en su desarrollo, en tanto permite analizar el cuerpo como un sistema funcional y dinámico.

    
    p.mb-4 Desde esta perspectiva, la estructura corporal se define por la organización y disposición de los segmentos corporales en función de principios biomecánicos (Norton, 2019). Dichos principios se relacionan con el movimiento y con factores anatómicos, morfológicos y posturales que inciden directamente en la estabilidad, la funcionalidad y la ergonomía del cuerpo en diversos contextos de uso, entre ellos, el diseño y la construcción de prendas de vestir.
    p.mb-5 A continuación, podrá encontrar los conceptos relacionados con la estructura corporal. 


    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Antropometría


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        img(src='@/assets/curso/tema1/3.png' alt='AvatarTop')
      .col-lg-9
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-5
            img(src='@/assets/curso/tema1/4.png' alt='AvatarTop')
          .col-lg-7
            .bg1.p-4
              p.mb-0 La antropometría se reconoce como una disciplina orientada a la medición y análisis de las dimensiones físicas y de las proporciones del cuerpo humano a lo largo de sus distintas etapas de desarrollo. Su alcance teórico y aplicado se articula con campos como la ergonomía, la nutrición y la medicina, en la medida en que aporta información objetiva para la valoración de condiciones corporales y funcionales. Estos datos permiten proyectar y ajustar espacios, objetos y sistemas de uso considerando las variaciones físicas presentes en diversos contextos.
        p.mb-0 En el ámbito de la elaboración de vestuario, la antropometría se aplica mediante el análisis ergonómico con el propósito de desarrollar prendas que favorezcan la movilidad, el ajuste adecuado y la funcionalidad durante el uso, garantizando coherencia entre las características corporales y las exigencias técnicas del patronaje industrial.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto
          h5 Figura 1. 
          | Figura femenina, masculina e infantil con medidas por partes del cuerpo
        .bg2.p-4
          img.img-a.img-t(src='@/assets/curso/tema1/5.svg' alt='Esquema antropométrico con tres figuras humanas: dos de persona adulta y una infantil. Se indican proporciones y medidas del cuerpo mediante líneas y números que señalan alturas, anchos y distancias entre segmentos corporales.')
          
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo.mb-5(data-aos="fade-left")
          img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
          h3.mb-0 Anatomía
        p.mb-4 La anatomía se comprende como una rama de la biología dedicada al estudio de la estructura de los seres vivos, con énfasis en la forma, la localización y la relación funcional entre órganos y sistemas (Cabrera, 2016). Este campo aporta fundamentos conceptuales para interpretar la organización corporal desde una perspectiva sistémica.
        .bg3.p-4
          p.mb-0.mx-lg-4 En el contexto de la elaboración de prendas de vestir, el conocimiento anatómico resulta pertinente porque orienta los procesos de adaptación, ajuste y funcionalidad de las prendas respecto a la configuración del cuerpo humano, favoreciendo soluciones de patronaje que respondan de manera coherente a sus características estructurales y de movimiento.
      .col-lg-4
        img(src='@/assets/curso/tema1/6.png' alt='AvatarTop')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto
          h5 Figura 2. 
          | Anatomía del cuerpo
        .bg2.p-4
          img.img-a.img-t(src='@/assets/curso/tema1/7.png' alt='Representación anatómica del cuerpo humano con disposición frontal y posterior. Se distinguen los principales grupos musculares organizados desde la cabeza hasta los pies para el estudio de la estructura corporal y sus zonas funcionales.')
          

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Biomecánica

    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/8.png' alt='AvatarTop')
      .col-lg-7
        .row.justify-content-center.align-items.mb-3
          .col-lg-2
            img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema1/9.svg' alt='AvatarTop')
          .col-lg-10
            p.mb-0 La biomecánica se reconoce como la disciplina encargada de estudiar los principios mecánicos que regulan el movimiento y la estructura del cuerpo humano, mediante el análisis de las fuerzas internas y externas que actúan sobre este y la respuesta del sistema musculoesquelético ante dichas cargas. Sus aplicaciones se extienden a campos como el diseño de prótesis, el deporte y los procesos de rehabilitación, en los que se requiere comprender el comportamiento funcional del cuerpo en acción.
        p.mb-0 En el ámbito del diseño y la construcción de prendas de vestir, la articulación entre anatomía y biomecánica se fundamenta en principios de adaptación, ajuste y funcionalidad, los cuales permiten considerar el cuerpo como un sistema dinámico que se desplaza, flexiona y requiere rangos de movimiento específicos.
    p.mb-5 Desde esta perspectiva, la comprensión integrada de la anatomía, la biomecánica y la ergonomía corporal posibilita el desarrollo de prendas que respondan de manera coherente a las necesidades físicas de las personas usuarias, favoreciendo una interacción adecuada entre el cuerpo y el vestuario, en términos de confort, movilidad y desempeño funcional (Sierra y Mosquera, 2013).


    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Morfología

    
    p.mb-5 La morfología del cuerpo humano hace referencia a la forma y estructura del cuerpo a partir de la relación y disposición de sus partes, esta rama resulta esencial en otras áreas y disciplinas como la anatomía, y fisiología.  


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto
          h5 Figura 3. 
          | Morfología del cuerpo humano
        .bg2.p-4
          img.img-a.img-t(src='@/assets/curso/tema1/10.png' alt='Representación anatómica del cuerpo humano con disposición anterior y posterior. Se identifican el sistema óseo y los músculos principales organizados de la cabeza a los pies para el estudio de la estructura corporal.')
          

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Ergonomía

    
    p.mb-5 La ergonomía se reconoce como una disciplina científica orientada al estudio de las interacciones entre las personas y los elementos que conforman un sistema (International Ergonomics Association, 2000). Su aplicación se sustenta en teorías, principios y métodos cuyo propósito es favorecer el bienestar, la seguridad y la eficiencia en las actividades cotidianas, mediante la adecuación de productos y entornos a las características humanas.


    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/11.png' alt='AvatarTop')
      .col-lg-8
        .bg4.p-4.mb-4
          p.mb-0.mx-lg-0 En el campo del diseño y la construcción de prendas de vestir, la ergonomía se vincula con el nivel de confort, funcionalidad y adaptabilidad que el vestuario puede ofrecer al cuerpo durante el desarrollo de las actividades diarias. Este enfoque busca facilitar el desempeño corporal sin restricciones, así como prevenir molestias o afecciones derivadas de un ajuste inadecuado o de soluciones constructivas que limiten el movimiento. Por ejemplo, una prenda inferior que restrinja la flexión de la rodilla puede generar incomodidad o sobrecarga articular, lo que evidencia la necesidad de considerar rangos de movilidad desde el patronaje y la confección.
        p.mb-0.mx-lg-4 En este sentido, uno de los propósitos del diseño de moda consiste en proyectar modelos de prendas con criterios ergonómicos, integrando procesos de confección coherentes y la selección pertinente de materiales, los cuales constituyen un factor estratégico para garantizar desempeño, durabilidad y confort en el uso.
    

    p.mb-5 En síntesis, la relación entre los conceptos asociados a la estructura corporal puede organizarse de la siguiente manera:


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        SlyderF(columnas="col-lg-4 col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                img.img-a.img-t.my-3(src='@/assets/curso/tema1/12.svg' alt='AvatarTop')
            h4.text-center.mb-4 Anatomía
            p.mb-2.text-center Disciplina que estudia la estructura, organización y disposición de las partes que conforman el cuerpo humano.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                img.img-a.img-t.my-3(src='@/assets/curso/tema1/13.svg' alt='AvatarTop')
            h4.text-center.mb-4 Biomecánica
            p.mb-2.text-center Campo que analiza el movimiento corporal y el funcionamiento del sistema musculoesquelético desde principios mecánicos.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                img.img-a.img-t.my-3(src='@/assets/curso/tema1/14.svg' alt='AvatarTop')
            h4.text-center.mb-4 Morfología
            p.mb-2.text-center Estudia la forma, configuración y proporciones del cuerpo, considerando su composición estructural y características externas.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                img.img-a.img-t.my-3(src='@/assets/curso/tema1/15.svg' alt='AvatarTop')
            h4.text-center.mb-4 Ergonomía
            p.mb-2.text-center Analiza la postura, el confort y la relación funcional entre el cuerpo y los elementos o entornos de uso, buscando optimizar la adaptación.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                img.img-a.img-t.my-3(src='@/assets/curso/tema1/16.svg' alt='AvatarTop')
            h4.text-center.mb-4 Antropometría
            p.mb-4.text-center Se encarga de la medición sistemática de las dimensiones corporales, proporcionando datos técnicos para su aplicación en distintos contextos productivos.


    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 División del cuerpo
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bg2.p-4.p-lg-5
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-7
                  p.mb-lg-5.mb-4 A partir de los conceptos previamente desarrollados, resulta necesario comprender cómo se organiza la división del cuerpo según sus segmentos y miembros, con el fin de interpretarlo de manera funcional dentro de los procesos de patronaje. Esta comprensión permite establecer una relación clara entre la estructura corporal y la clasificación técnica de las prendas, diferenciando aquellas destinadas a la zona superior y a la zona inferior del cuerpo, lo que facilita la toma de medidas, la definición de ajustes y la construcción adecuada de los patrones básicos.
                  img.img-t(src='@/assets/curso/tema1/35.png' alt='AvatarTop')
                .col-lg-5
                  .titulo-sexto
                    h5 Figura 4. 
                    | División del cuerpo
                  img.img-a.img-t(src='@/assets/curso/tema1/19.svg' alt='Representación anatómica del cuerpo humano con disposición anterior y posterior. Se identifican el sistema óseo y los músculos principales organizados de la cabeza a los pies para el estudio de la estructura corporal.')
          
    
    p.mb-5 Con base en la organización segmentaria del cuerpo, las prendas de vestir se clasifican en relación con los miembros superiores y los miembros inferiores, lo que facilita su comprensión técnica dentro de los procesos de patronaje y ajuste.

    
    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Prendas superiores
    

    p.mb-5 Se asocian con los segmentos correspondientes a la zona superior del cuerpo y su adaptación funcional.


    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
      .col-lg-4.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4.mb-md-4
        .bg5.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/20.svg')
          h3.mb-4.text-center Hombros y cuello
          p.mb-0 Corresponden a la zona estructural superior que define la base de soporte de prendas como camisas, camisetas, blusas y chaquetas. Su correcta construcción depende de la amplitud de hombros, la inclinación y el contorno cervical, factores que determinan el ajuste, la caída y la movilidad de la prenda.
      .col-lg-4.col-md-6.ps-lg-0.pe-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-4
        .bg6.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/21.svg')
          h3.mb-4.text-center Busto y torso
          p.mb-0 Comprenden el área de mayor volumen y proyección en la parte superior del cuerpo. Incluyen tipologías como tops y prendas interiores. En este segmento se analiza la adaptación de la prenda al volumen, la forma y la distribución del busto, garantizando equilibrio, soporte y comodidad.
      .col-lg-4.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-0
        .bg7.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/22.svg')
          h3.mb-4.text-center Cintura
          p.mb-0 Se establece como eje de referencia estructural y punto clave de ajuste. Funciona como transición entre las prendas superiores y ciertas tipologías intermedias, definiendo proporciones, entalle y armonía en la silueta general.

    
    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Prendas inferiores
    

    p.mb-5 Se relacionan con los segmentos correspondientes a la zona inferior del cuerpo y con los requerimientos de movilidad:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .row.justify-content-center.align-items-stretch.mb-0(data-aos="fade-right")
          .col-lg-4.col-md-6.mb-lg-0.mb-4
            .h-100.bg8.p-3
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-4.my-4
                  img.img-t.img-a(src='@/assets/curso/tema1/24.svg' alt='AvatarTop')
              .bg9.p-1.mb-4
                h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Caderas y glúteos
              p.mb-2.text-center Constituyen una zona clave en el patronaje de prendas inferiores como faldas, #[em leggings, shorts] y pantalones. Su construcción técnica se fundamenta en el contorno, la proyección y el volumen de esta área, determinando el ajuste, la caída y la estabilidad de la prenda sobre el cuerpo.
          .col-lg-4.col-md-6.mb-lg-0.mb-4
            .h-100.bg8.p-3
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-4.my-4
                  img.img-t.img-a(src='@/assets/curso/tema1/25.svg' alt='AvatarTop')
              .bg9.p-1.mb-4
                h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Muslos y piernas 
              p.mb-2.text-center Su análisis se relaciona con la definición del ancho, la línea lateral y la holgura funcional necesaria para garantizar movilidad, desplazamiento y confort durante el movimiento. Este segmento influye directamente en la ergonomía y el comportamiento dinámico de la prenda.
          .col-lg-4.col-md-6.mb-lg-0.mb-4
            .h-100.bg8.p-3
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-4.my-4
                  img.img-t.img-a(src='@/assets/curso/tema1/26.svg' alt='AvatarTop')
              .bg9.p-1.mb-4
                h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Tobillos y pies
              p.mb-2.text-center Se vinculan de manera complementaria con el diseño de prendas inferiores y accesorios como medias. Su consideración técnica depende del ajuste longitudinal, el largo de la prenda y la adaptación adecuada en la zona de terminación, asegurando proporción y funcionalidad.
      .col-lg-3
        img(src='@/assets/curso/tema1/23.png' alt='AvatarTop')

    
    h4.mb-4 Estructura del cuerpo


    p.mb-4 Se invita a explorar el video, donde se abordan nociones básicas de la estructura corporal como anatomía, ejes, antropometría, ergonomía, somatotipos, siluetas y posturas.
    

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9UZwjgAYxMY?si=PsFkCTLdDxwKqDWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video. Estructura del cuerpo


    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Tipos de siluetas femeninas

    
    .bg10.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right"): img(src='@/assets/curso/tema1/27.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-3.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/28.svg', alt='')
            p.mb-3(data-aos="fade-left") La tipología de silueta corresponde a la configuración global que adopta la forma corporal a partir de la relación entre proporciones y volúmenes, los cuales se perciben tanto en la tridimensionalidad del cuerpo como en su proyección sobre un plano. Este análisis permite identificar cómo se distribuyen los contornos, los ejes de equilibrio y las zonas de mayor o menor amplitud dentro de la estructura corporal.
            p.mb-0(data-aos="fade-left") Desde la perspectiva técnica del desarrollo de prendas femeninas, reconocer estas variaciones estructurales resulta determinante para definir criterios de ajuste, distribución de holguras y ubicación de líneas constructivas. La lectura adecuada de la forma corporal facilita establecer correspondencias entre las características físicas de la persona usuaria y las soluciones de diseño, favoreciendo funcionalidad, proporcionalidad y coherencia en el resultado final.

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto
          h5 Figura 5. 
          | Tipos de silueta femeninas
        .bg2.p-4
          img.img-a.img-t(src='@/assets/curso/tema1/29.svg' alt='Conjunto de cinco siluetas corporales femeninas con variaciones en proporciones de hombros, cintura y cadera. Se presentan distintos biotipos para clasificar la estructura corporal según su distribución de volumen.')
          
    
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12.clp
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Tipo de silueta 1")
            .row.justify-content-center.align-items-center
              .col-lg-5
                h4.mb-4.mx-lg-4 Silueta reloj de arena
                p.mb-4.mb-lg-0.mx-lg-4 Se reconoce por presentar una proporción equilibrada entre el ancho de hombros y caderas, mientras que la zona de la cintura se percibe más estrecha en relación con estos segmentos. Esta configuración genera una lectura corporal con predominio de curvas definidas y distribuidas de manera armónica respecto al volumen general del cuerpo femenino. 
              .col-lg-7
                .bgw.p-4
                  .titulo-sexto
                    h5 Figura 6. 
                    | Tipos de silueta femeninas
                  img.img-a.img-t(src='@/assets/curso/tema1/30.svg' alt='Silueta corporal femenina con proporción equilibrada entre hombros y cadera y cintura definida, correspondiente a un biotipo con distribución armónica del volumen corporal.')
          .tarjeta.color-a.p-4(titulo="Tipo de silueta 2")
            .row.justify-content-center.align-items-center
              .col-lg-5
                h4.mb-4.mx-lg-4 Silueta triangular o tipo pera
                p.mb-4.mb-lg-0.mx-lg-4 Se identifica por presentar mayor amplitud en la zona de caderas en comparación con el ancho de los hombros, lo que genera una relación descendente en la distribución del volumen corporal. En esta configuración, la cintura suele estar bien definida como punto de transición entre el tronco y la región inferior. 
              .col-lg-7
                .bgw.p-4
                  .titulo-sexto
                    h5 Figura 7. 
                    | Silueta triangular
                  img.img-a.img-t(src='@/assets/curso/tema1/31.svg' alt='Silueta corporal femenina con mayor amplitud en la zona de cadera respecto a los hombros y cintura moderadamente definida, correspondiente a un biotipo con concentración de volumen en el segmento inferior.')
          .tarjeta.color-a.p-4(titulo="Tipo de silueta 3")
            .row.justify-content-center.align-items-center
              .col-lg-5
                h4.mb-4.mx-lg-4 Silueta triángulo invertido
                p.mb-4.mb-lg-0.mx-lg-4 Se caracteriza por presentar mayor amplitud en el ancho de los hombros en relación con la zona de caderas, configurando una distribución del volumen corporal con predominio en el segmento superior. En esta tipología, la transición hacia la cintura suele percibirse con menor definición, mientras que la región inferior (incluidas caderas y piernas) tiende a mostrar menor proyección estructural.
              .col-lg-7
                .bgw.p-4
                  .titulo-sexto
                    h5 Figura 8. 
                    | Silueta #[em triángulo] invertido
                  img.img-a.img-t(src='@/assets/curso/tema1/32.svg' alt='Silueta corporal femenina con mayor amplitud en la zona de hombros respecto a la cadera y cintura poco marcada, correspondiente a un biotipo con concentración de volumen en el segmento superior.')
          .tarjeta.color-a.p-4(titulo="Tipo de silueta 4")
            .row.justify-content-center.align-items-center
              .col-lg-5
                h4.mb-4.mx-lg-4 Silueta rectangular
                p.mb-4.mb-lg-0.mx-lg-4 Se caracteriza por tener los hombros, la cintura y la cadera con medidas de anchos similares, es decir, las curvas en este tipo de silueta se verán más reducidas, formando más líneas semirrectas en la anatomía femenina. 
              .col-lg-7
                .bgw.p-4
                  .titulo-sexto
                    h5 Figura 9. 
                    | Silueta rectangular
                  img.img-a.img-t(src='@/assets/curso/tema1/33.svg' alt='Silueta corporal femenina con proporciones rectas entre hombros, cintura y cadera, correspondiente a un biotipo con distribución uniforme del volumen corporal.')
          .tarjeta.color-a.p-4(titulo="Tipo de silueta 5")
            .row.justify-content-center.align-items-center
              .col-lg-5
                h4.mb-4.mx-lg-4 Silueta ovalada
                p.mb-4.mb-lg-0.mx-lg-4 Se caracteriza por tener mayor volumen en el área abdominal de la mujer, es decir, se encontrará una figura poco definida con busto prominente y cadera más estrecha.  Las piernas se verán un poco más delgadas en relación a la proporción del torso. 
              .col-lg-7
                .bgw.p-4
                  .titulo-sexto
                    h5 Figura 10. 
                    | Silueta ovalada
                  img.img-a.img-t(src='@/assets/curso/tema1/34.svg' alt='Figura femenina con silueta de óvalo, caracterizada por una cintura menos definida y mayor volumen en la zona abdominal.')
    
</template>

<script>
export default {
  name: 'Tema1',
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
