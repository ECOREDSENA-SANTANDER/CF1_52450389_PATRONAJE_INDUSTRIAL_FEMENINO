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
      tema: 'Usos y consumo energético según contexto.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales del componente formativo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡FELICIDADES!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del patronaje industrial femenino?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto:
                'Transformar la figura corporal en estructuras bidimensionales para producción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseñar tendencias de moda internacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaborar únicamente prendas artesanales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Clasificar fibras textiles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos del patronaje y su función en la traducción técnica de la estructura corporal.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la función principal de la antropometría en los procesos relacionados con el diseño y construcción de prendas de vestir?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar tendencias de mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Seleccionar colores de temporada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Definir estilos de pasarela.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Medir y analizar dimensiones y proporciones corporales para su aplicación técnica.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos de medición corporal y su aplicación en procesos de diseño y patronaje.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 3,
          texto:
            '¿Qué aspecto del cuerpo humano estudia la biomecánica cuando se relaciona con el desarrollo funcional del vestuario?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Las tendencias culturales de uso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La composición química de los tejidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los principios mecánicos que regulan el movimiento y la respuesta del sistema musculoesquelético.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La clasificación de accesorios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio del movimiento corporal y su relación con la funcionalidad del vestuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 4,
          texto:
            '¿Qué disciplina permite analizar la interacción entre el cuerpo y los elementos del sistema de uso para garantizar confort, seguridad y desempeño funcional?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Ergonomía.', esCorrecta: true },
            { id: 'b', texto: 'Morfología.', esCorrecta: false },
            { id: 'c', texto: 'Canon.', esCorrecta: false },
            { id: 'd', texto: 'Segmentación de mercado.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de la ergonomía y su importancia en la adaptación funcional de las prendas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 5,
          texto:
            '¿Con qué segmentos corporales se relacionan principalmente las prendas clasificadas como superiores dentro del análisis estructural del cuerpo?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Hombros, cuello, busto y torso.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Tobillos y pies.', esCorrecta: false },
            { id: 'c', texto: 'Caderas y muslos.', esCorrecta: false },
            { id: 'd', texto: 'Rodillas y pantorrillas.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de la segmentación corporal aplicada a la clasificación técnica de prendas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 6,
          texto:
            '¿Cuál característica estructural permite identificar la silueta reloj de arena dentro del análisis de tipologías corporales femeninas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Mayor volumen abdominal.', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Proporción equilibrada entre hombros y caderas con cintura definida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Hombros considerablemente más anchos que caderas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ausencia de contraste entre segmentos corporales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de la identificación de tipologías de silueta y su relación con la estructura corporal.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 7,
          texto:
            '¿Qué sistema de medición se emplea de manera predominante en los procesos formativos y productivos del sector confección en la mayoría de países latinoamericanos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Sistema inglés basado en pulgadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sistema artesanal tradicional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sistema empírico sin unidades estandarizadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sistema internacional o métrico decimal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los sistemas de medición empleados en contextos formativos y productivos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 8,
          texto:
            '¿Cómo se organizan técnicamente las medidas corporales para facilitar su aplicación en la elaboración de patrones básicos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Según tipos de tejidos.', esCorrecta: false },
            { id: 'b', texto: 'Según su figura.', esCorrecta: false },
            { id: 'c', texto: 'Por temporadas de moda.', esCorrecta: false },
            {
              id: 'd',
              texto: 'En largos, anchos y contornos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de la organización técnica de las medidas para la construcción de patrones.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 9,
          texto:
            '¿Por qué el concepto de sistema moda se comprende como una estructura social y productiva dentro del sector vestuario?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Porque se limita a la elaboración de prendas aisladas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque incluye únicamente tendencias estéticas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque integra prendas, accesorios, procesos culturales y dinámicas de mercado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Porque se restringe a eventos de pasarela.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de la moda como sistema social y productivo dentro del sector vestuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la finalidad principal de la ficha técnica de escalado dentro del proceso de desarrollo de prendas?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto:
                'Adaptar el patrón base a diferentes tallas manteniendo proporciones estructurales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Definir combinaciones cromáticas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar proveedores de insumos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer campañas publicitarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio del proceso de gradación de tallas y su importancia en la estandarización productiva.',
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
