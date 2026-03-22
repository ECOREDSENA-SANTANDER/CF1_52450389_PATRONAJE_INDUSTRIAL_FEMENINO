<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad_Completar_Frases
      //<ActividadCompletar :parrafo="parrafo"/>

      #Actividad_Cuestionario
      <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
//import ActividadCompletar from '@/views/plantilla/actividadCompletar/ActividadCompletar.vue'
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    //ActividadCompletar,
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Estructura corporal femenina y sistema de medidas.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos fundamentales de la estructura corporal, las medidas y su aplicación en el patronaje industrial femenino.',
      barajarPreguntas: true,
      titulo_aprobado: '¡FELICIDADES!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objeto de estudio de la antropometría en el contexto del patronaje industrial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La composición química de las fibras textiles utilizadas en la confección de prendas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La medición y análisis de las dimensiones y proporciones del cuerpo humano aplicadas al diseño de prendas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El estudio de los principios mecánicos que regulan el movimiento del sistema musculoesquelético.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La clasificación de los universos del vestuario según el contexto de uso de la prenda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del alcance de la antropometría como disciplina que fundamenta la toma de medidas y el ajuste técnico en el patronaje industrial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 2,
          texto:
            '¿De qué manera incide la biomecánica en el proceso de diseño y construcción de prendas de vestir?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determina la clasificación comercial de los tejidos según su composición fibrosa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Establece los criterios de color y estampado aplicables a los distintos universos del vestuario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permite considerar el cuerpo como un sistema dinámico con rangos de movimiento que la prenda debe respetar y facilitar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Define los parámetros de escalado de tallas para la producción industrial en serie.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de la relación entre biomecánica, ajuste y funcionalidad de la prenda en relación con el movimiento corporal.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el propósito de la ergonomía en el diseño de prendas de vestir?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar que la prenda reproduzca fielmente las proporciones del canon clásico de ocho cabezas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Favorecer el bienestar, la funcionalidad y la movilidad del cuerpo durante el uso de la prenda, evitando restricciones o molestias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Establecer la gama de mercado más adecuada para cada tipología de prenda según el público objetivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Determinar el tipo de tejido que optimiza el aprovechamiento del material en el proceso de corte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del enfoque ergonómico como criterio de diseño que articula confort, movilidad y funcionalidad en la construcción de prendas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la característica principal que define a la silueta triangular o tipo pera?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Presenta mayor amplitud en el ancho de los hombros en relación con la zona de caderas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Muestra proporciones similares entre hombros, cintura y caderas, con curvas reducidas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Presenta mayor volumen en el área abdominal con busto prominente y caderas estrechas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Registra mayor amplitud en la zona de caderas respecto al ancho de los hombros, con cintura bien definida.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación de la clasificación de siluetas femeninas y la identificación precisa de las proporciones que caracterizan la silueta triangular.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 5,
          texto:
            '¿Qué caracteriza a la silueta reloj de arena dentro de la tipología de siluetas femeninas?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Proporción equilibrada entre hombros y caderas, con cintura notoriamente más estrecha que ambos segmentos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Mayor proyección en el área abdominal y caderas estrechas en relación con el torso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Hombros más anchos que las caderas con transición poco definida hacia la cintura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Medidas similares en hombros, cintura y caderas sin marcación de curvas significativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de las proporciones que definen la silueta reloj de arena y su distribución armónica de volúmenes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },

        {
          id: 6,
          texto:
            'Dentro de la clasificación técnica de las medidas corporales, ¿cuál corresponde a las medidas de largo?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las que se toman perimetralmente sobre la figura tridimensional del cuerpo, como el contorno de cintura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las que se toman en sentido horizontal, como el ancho de pecho.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las que se toman en sentido vertical, como los talles y longitudes del cuerpo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Las que se obtienen a partir del área proyectada de la silueta sobre un plano bidimensional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de la clasificación de medidas corporales y la distinción entre largos, anchos y contornos según su dirección de toma.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },

        {
          id: 7,
          texto:
            '¿Qué unidad base utiliza el sistema métrico decimal en los procesos de patronaje industrial?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La pulgada, utilizada de manera predominante en contextos de producción de América Latina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La yarda, empleada principalmente en mercados de habla inglesa y producción internacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El metro, empleado de manera predominante en la mayoría de países de América Latina y entornos industriales vinculados a la confección.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El pie, unidad estándar del sistema imperial para medición de prendas y patrones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los sistemas de medida empleados en patronaje y la distinción entre el sistema métrico decimal y el sistema inglés.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },

        {
          id: 8,
          texto:
            '¿Cómo se obtiene una medida de contorno en el proceso de toma de medidas corporales?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Midiendo en sentido vertical desde un punto de referencia anatómico hasta el extremo del segmento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Midiendo en sentido horizontal entre dos puntos laterales del mismo segmento corporal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Midiendo de forma perimetral alrededor de la figura tridimensional del cuerpo, como en la cintura o el busto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Midiendo la distancia en diagonal entre dos puntos de referencia anatómicos no alineados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación del procedimiento de toma de medidas de contorno y su distinción respecto a largos y anchos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },

        {
          id: 9,
          texto:
            '¿Qué expresa el concepto de canon en el estudio de las proporciones de la figura humana?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La relación numérica entre el peso corporal y la estatura utilizada para clasificar el tipo de silueta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un modelo de referencia que establece relaciones de proporcionalidad consideradas equilibradas dentro de un contexto histórico y cultural.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El porcentaje de aprovechamiento del tejido en relación con el área total del patrón trazado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La secuencia técnica de operaciones para la construcción del patrón básico a partir de las medidas corporales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del concepto de canon como referencia proporcional de la figura humana y su relevancia en el patronaje.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },

        {
          id: 10,
          texto:
            '¿Cuál es la función principal del cuadro de tallas dentro del proceso de patronaje industrial?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar el tipo de maquinaria requerida para la confección de cada referencia de prenda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar y estandarizar la información corporal necesaria para el desarrollo de patrones reproducibles en serie.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Clasificar los universos del vestuario según el contexto de uso y el mercado objetivo de la colección.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Establecer los criterios de aprovechamiento del tejido en función del número de piezas del patrón.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de la función del cuadro de tallas como herramienta de estandarización que articula la información corporal con el desarrollo técnico del patronaje.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 11,
          texto:
            '¿Cómo se define el sistema moda desde una perspectiva técnica e integral?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un conjunto de tendencias estacionales definidas por los diseñadores de alta costura para cada temporada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un inventario de prendas clasificadas por color, material y precio según el segmento de mercado objetivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un conjunto interrelacionado que abarca prendas, accesorios, procesos creativos, productivos y de circulación, que se transforma según dinámicas culturales y de mercado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un protocolo de selección de materiales textiles basado en criterios de durabilidad y funcionalidad para cada universo del vestuario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del sistema moda como estructura articulada que trasciende la noción de prenda aislada e integra procesos creativos, productivos y culturales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 12,
          texto:
            '¿A qué universo del vestuario pertenece una prenda destinada a la práctica de actividad física o a labores que requieren desempeño funcional específico?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Universo formal, orientado a contextos de etiqueta y actos protocolarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Universo sleepwear, destinado a periodos de reposo y descanso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Universo deportivo o funcional, que incluye conjuntos deportivos, uniformes médicos y overoles de trabajo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Universo casual o informal, asociado a actividades cotidianas y situaciones de uso diario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación de la clasificación de universos del vestuario y la identificación correcta de las prendas según su contexto y propósito de uso.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 13,
          texto:
            '¿Cuál de los siguientes ejemplos corresponde al universo de vestuario ceremonial y festivo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Pantalones en denim, camisetas de uso diario y calzado cómodo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Conjuntos deportivos de alto rendimiento y uniformes de trabajo técnico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Vestidos de noche, trajes de gala y conjuntos formales estructurados para actos solemnes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Vestidos largos, trajes formales e indumentaria tradicional para bodas y graduaciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los criterios que distinguen el universo ceremonial del universo formal y de otros segmentos del vestuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 14,
          texto:
            '¿A qué grupo y subgrupo pertenece el algodón dentro de la clasificación de fibras textiles?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fibra química artificial, de base celulósica, obtenida mediante procesos de transformación industrial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fibra natural de origen animal, procedente de folículos pilosos de mamíferos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Fibra sintética obtenida por polimerización, con propiedades de resistencia y elasticidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Fibra natural de origen vegetal, procedente de la semilla de la planta del algodón.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de la clasificación de fibras textiles y la identificación precisa del algodón dentro de las fibras naturales de origen vegetal.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es la diferencia fundamental entre los tejidos planos y los tejidos de punto?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los tejidos planos se forman mediante el entrelazado de hilos de urdimbre y trama; los de punto se forman mediante mallas o lazadas entrelazadas que les confieren elasticidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Los tejidos planos son siempre más livianos que los de punto, lo que determina su uso en prendas de verano.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los tejidos de punto se producen exclusivamente en telares industriales automatizados, mientras los planos se tejen a mano.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los tejidos planos son exclusivos para prendas superiores y los de punto para prendas inferiores, según la estructura corporal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación de las diferencias estructurales entre tejidos planos y tejidos de punto, y su implicación en el comportamiento y uso de las prendas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 16,
          texto:
            '¿Qué mide el indicador de aprovechamiento en el proceso de corte de prendas de vestir?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La cantidad de prendas producidas por hora en la línea de confección industrial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La relación porcentual entre el área ocupada por los patrones y el área total del tejido tendido, indicando el nivel de eficiencia en el uso del material.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El peso promedio del tejido consumido por prenda en cada referencia de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El número de capas de tejido que pueden tenderse simultáneamente sin afectar la calidad del corte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del concepto de aprovechamiento como indicador de eficiencia en el uso del tejido durante el proceso de tizado y corte.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 17,
          texto:
            '¿Cuál de los siguientes factores limita la rotación de las piezas del patrón durante el tizado, afectando directamente el aprovechamiento del tejido?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El uso de software especializado de corte, que optimiza automáticamente la distribución de los moldes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La cantidad de tallas incluidas en la curva de tallas del pedido de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El tipo de maquinaria utilizada en el proceso de corte del tejido tendido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La presencia de diseños o estampados con dirección definida en el tejido, que impide la rotación libre de las piezas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los factores que condicionan el aprovechamiento del tejido y la identificación de los estampados direccionados como restricción técnica en el tizado.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es la función de la ficha técnica de despiece dentro del proceso de patronaje y confección?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar los incrementos y proporciones necesarios para adaptar el patrón base a diferentes tallas de la colección.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Detallar cada componente de la prenda (piezas principales, forros, refuerzos) con sus dimensiones, materiales y particularidades constructivas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Describir el estilo general de la prenda, incluyendo boceto, paleta de color y temporada de uso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Establecer las instrucciones de lavado, planchado y etiquetado para la presentación final del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación de los tipos de fichas técnicas en patronaje y la identificación precisa de la función que cumple la ficha de despiece en el proceso productivo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 19,
          texto:
            '¿Qué objetivo persigue la ficha técnica de escalado dentro del proceso de producción de prendas?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Orientar la construcción del patrón base a partir de las medidas y especificaciones registradas para una talla específica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar el método de costura, las puntadas y los márgenes aplicables a cada operación de ensamble.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Establecer los incrementos y proporciones para adaptar el patrón base a diferentes tallas, manteniendo coherencia estructural y funcionalidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Documentar la clasificación de los materiales e insumos necesarios para la confección de cada referencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de la ficha técnica de escalado como herramienta que garantiza la coherencia proporcional y estructural del patrón en todas las referencias de talla.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 20,
          texto:
            '¿Con qué criterio se clasifica una prenda como "prenda inferior" dentro de la división del cuerpo en patronaje?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Por relacionarse con los segmentos correspondientes a la zona inferior del cuerpo (caderas, muslos, piernas y tobillos) y sus requerimientos de ajuste y movilidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Por estar confeccionada en tejido de punto, que permite mayor elasticidad y adaptación al movimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Por ser destinada al universo deportivo o funcional, donde se requiere mayor rango de movilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Por utilizar el sistema métrico decimal como referencia de toma de medidas en su proceso de patronaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del criterio de clasificación de las prendas según la división del cuerpo y la relación entre los segmentos corporales inferiores y las tipologías de prendas correspondientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
      ],
      mensaje_final_aprobado:
        'Posee una buena comprensión sobre los conceptos fundamentales para el desarrollo del componente. ¡Siga explorando este fascinante mundo de las energías renovables!',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
