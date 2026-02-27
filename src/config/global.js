export default {
  global: {
    Name: 'Estructura corporal femenina y sistema de medidas',
    Description:
      'El reconocimiento de la estructura corporal femenina posibilita una comprensión integral del movimiento, la silueta y los sistemas de medida. Por ello, este componente aborda desde los fundamentos de la antropometría hasta los procedimientos técnicos de toma de medidas, con el fin de interpretar la figura humana en tres dimensiones y trasladarla de forma precisa al plano bidimensional, base para el patronaje industrial. De manera complementaria, se revisan los conceptos generales de los universos de vestuario y las gamas de mercado propias de la moda casual.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estructura del cuerpo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de siluetas femeninas',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis y clasificación de las medidas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Las medidas',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis de medidas y cuadro de tallas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Universos del vestuario',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Gamas de mercados',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Textiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Aprovechamiento',
            hash: 't_5_1',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Fichas técnicas en patronaje',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      */
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  /*
  complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],
  */
  glosario: [
    {
      termino: 'Anatomía',
      significado:
        'disciplina biológica que estudia la estructura, organización y relación funcional de los órganos y sistemas del cuerpo.',
    },
    {
      termino: 'Antropometría',
      significado:
        'área del conocimiento dedicada a la medición y análisis de las dimensiones y proporciones corporales.',
    },
    {
      termino: 'Biomecánica',
      significado:
        'estudio de los principios mecánicos que explican el movimiento y el comportamiento funcional del sistema musculoesquelético.',
    },
    {
      termino: 'Canon',
      significado:
        'modelo de referencia que establece relaciones de proporcionalidad consideradas equilibradas dentro de la figura humana.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'disciplina que analiza la interacción entre las personas y los elementos de un sistema para favorecer bienestar, seguridad y funcionalidad.',
    },
    {
      termino: 'Escalado',
      significado:
        'proceso técnico mediante el cual se gradúan las tallas a partir de un patrón base manteniendo proporciones estructurales.',
    },
    {
      termino: 'Estructura corporal',
      significado:
        'organización y disposición de los segmentos del cuerpo en relación con su función y movimiento.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'documento que registra información precisa sobre procesos, medidas, materiales y características constructivas de una prenda.',
    },
    {
      termino: 'Fibra textil',
      significado:
        'unidad sólida elemental cuya longitud es mayor que su diámetro y que permite la formación de hilos y tejidos.',
    },
    {
      termino: 'Hilatura',
      significado:
        'proceso mediante el cual las fibras se transforman en hebras continuas aptas para la elaboración de hilos.',
    },
    {
      termino: 'Hilo',
      significado:
        'conjunto de fibras continuas o discontinuas que se agrupan y tuercen para su uso en la fabricación de tejidos.',
    },
    {
      termino: 'Patronaje',
      significado:
        'proceso técnico que traduce las dimensiones corporales en planos bidimensionales para construir patrones de prendas.',
    },
    {
      termino: 'Proporción',
      significado:
        'relación de correspondencia y equilibrio entre las partes que conforman un todo.',
    },
    {
      termino: 'Silueta',
      significado:
        'configuración general de la forma corporal determinada por la distribución de volúmenes y proporciones.',
    },
    {
      termino: 'Tejido',
      significado:
        'estructura textil obtenida mediante la organización o enlace de hilos o fibras que genera una superficie cohesionada.',
    },
  ],
  referencias: [
    {
      referencia:
        'Barbero, S., & Cozzo, B. (2010). Habemus Vestem, la moda acude a la llamada de Dios. Revista Diagonal, 10, 6.',
      link: '',
    },
    {
      referencia:
        'Cabrera, R. (2016). Introducción a la kinesiología. Universidad Nacional del Nordeste.',
      link: '',
    },
    {
      referencia:
        'Dearing, J. W. (2009). Applying diffusion of innovation theory to intervention development. Research on Social Work Practice, 19(5), 503–518.',
      link: '',
    },
    {
      referencia:
        'Equipo de Desarrollo Curricular, SENA. (2020). Programa Técnico en Patronaje Industrial de Prendas de Vestir. Centro de Manufactura en Textil y Cuero, Distrito Capital.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez Rengifo, L., Moncayo Velazco, A. X., Tanaka, K., Kimura, F., & Moreno Brand, D. (2011). Manual de patronaje básico e interpretación de diseños. Bogotá: SENA, Japan International Cooperation Agency (JICA).',
      link: '',
    },
    {
      referencia:
        'Hall, S. J. (2021). Basic biomechanics (9th ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Historias hiladas. (2021). 5 claves para tomar medidas corporales.',
      link: '',
    },
    {
      referencia:
        'International Ergonomics Association. (2000). Definition of ergonomics.',
      link: '',
    },
    {
      referencia:
        'Kawamura, Y. (2023). Fashion-ology: An Introduction to Fashion Studies. Bloomsbury Publishing.',
      link: '',
    },
    {
      referencia:
        'Kawamura, Y. (2005). Fashion-ology: An introduction to fashion studies. Berg.',
      link: '',
    },
    {
      referencia:
        'King, C. W. (1965). Fashion adoption: A rebuttal to the trickle-down theory.',
      link: '',
    },
    {
      referencia:
        'Mendizábal, R. (2020). Historia y evolución de la alta costura. Editorial de Moda y Diseño.',
      link: '',
    },
    {
      referencia:
        'Norton, K. (2019). Anthropometry and biomechanics: Foundations for human movement analysis. Routledge.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (1995). El estado físico: Uso e interpretación de la antropometría.',
      link: '',
    },
    {
      referencia:
        'Paredro. (2021). Fractales, geometría y otros juegos matemáticos en la moda de hoy.',
      link: '',
    },
    {
      referencia:
        'Posner, H. (2016). Marketing de moda (2ª ed.). Editorial Gustavo Gili.',
      link: '',
    },
    {
      referencia:
        'Salinas, R. (1994). Color harmony 2. La armonía en el color, nuevas tendencias, Guía para la combinación creativa de colores. Editorial La Armonía del Color.',
      link: '',
    },
    {
      referencia:
        'Sierra Landines, L. M., & Mosquera Ochoa, D. (2013). El cuerpo como fundamento para el diseño de vestuario: Estudio morfológico y anatómico del cuerpo humano a través de la biomecánica y la ergonomía (Trabajo de grado). Universidad Pontificia Bolivariana, Medellín, Colombia.',
      link: '',
    },
    {
      referencia:
        'Simmel, G. (1957). Fashion. The American Journal of Sociology, Vol. 62(6), 541-558.',
      link: '',
    },
    {
      referencia:
        'Universidad de Málaga. (2022). Módulo 1: Morfología, estructura y función del cuerpo humano.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
