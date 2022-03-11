export default {
  global: {
    componenteFormativo: 'Estructura organizacional y de cargos',
    descripcionCurso:
      'Las necesidades del mercado actual obligan a las organizaciones a tener un sistema de cargos bien definido, insumo básico, con el apoyo de la tecnología, para atraer e identificar el talento humano idóneo que se requiere al interior de la organización, en el cumplimiento de la estrategia definida por ella.',
    imagenBannerPrincipal: require('@/assets/curso/banner/imagen-banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/banner/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Organigrama',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de organigramas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Simbología',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Cultura organizacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diseño de cargos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Descripción y análisis de cargo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Herramientas para estructuración de cargos',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Alles, Martha. (2007). Dirección Estratégica de Recursos Humanos. Granica.',
    },
    {
      referencia:
        'Agüero, P.M.Z & de Peralta Ávila, R.M.G. (2012). La función de la organización y el análisis y descripción, las especificaciones, la matriz para elaborar el perfil de las competencias de los cargos u ocupaciones. EUMED-Universidad de Málaga.',
    },
    {
      referencia:
        'Chiavenato, Idalberto (2003). Gestión del Talento Humano. Mc Graw Hill.',
    },
    {
      referencia:
        'Cuestas, Armando. (2017). Gestión del Talento Humano y del Conocimiento. Ecoe Ediciones.',
    },
    {
      referencia:
        'Fernández Ríos, M. (1995). Análisis y descripción de puestos de trabajo: teoría, métodos y ejercicios. Ediciones Díaz de Santos.',
    },
    {
      referencia:
        'Gómez Daca, G. (2017).  Estructura Organizacional Web. Facultad de Educación, Universidad de Salamanca.',
    },
    {
      referencia:
        'Mejía, M.L (2004). Estructuras y cargos por procesos, orientados a resultados. Scientia et technical, 10(25), 2003-208.',
      link:
        'http://contenidosdigitales.ulp.edu.ar/exe/teoria_y_gestion/organigramas_ventajas_de_su_uso_y_tipos.html',
    },
  ],
  glosario: [
    {
      termino: 'Actividades',
      significado: 'Conjunto de tareas de tiene una persona en un cargo.',
    },
    {
      termino: 'Base de datos',
      significado:
        'Conjunto de datos pertenecientes a un mismo contexto, en este caso busca almacenar, sistemáticamente, los datos de los candidatos que participan en los procesos de selección de la organización y permite realizar consultas posteriores de las que se pueden extraer datos que permitan el cubrimiento de futuras vacantes.',
    },
    {
      termino: 'Burocracia',
      significado:
        'Sistema organizativo que se encarga de administrar y gestionar determinados asuntos, siguiendo un conjunto de reglas y procedimientos específicos.',
    },
    {
      termino: 'Cadena de mando',
      significado:
        'Relación que existe entre el conjunto de superiores sobre los que fluye la información y la toma de decisiones. Establece la relación entre superiores y colaboradores.',
    },
    {
      termino: 'Enriquecimiento de cargo',
      significado:
        'Reorganización y ampliación del cargo para proporcionar adecuación del cargo crecimiento profesional del ocupante.',
    },
    {
      termino: 'Línea staff',
      significado:
        'Son los cargos que establecen una relación de asesoría y servicio especializado en la organización.',
    },
    {
      termino: 'Niveles organizacionales',
      significado:
        'Los niveles o pirámide organizacionales corresponden a los tres niveles de gestión existentes en la mayoría de las organizaciones. Nivel estratégico, táctico y operacional.',
    },
    {
      termino: 'Ocupaciones',
      significado:
        'Similitudes en varios puestos de trabajo en diferentes organizaciones.',
    },
    {
      termino: 'Modelo de Competencias',
      significado:
        'Conjunto de procesos relacionados con las personas que integran la organización y que tienen como propósito alinearlas en pos de los objetivos organizacionales.',
    },
    {
      termino: 'Plan de Carrera',
      significado:
        'Secuencias de cargos que un trabajador ocupa a lo largo de su vida laboral.',
    },
    {
      termino: 'Posiciones',
      significado:
        'Diversas responsabilidades que asume una persona en el desempeño de su cargo dentro de las diferentes organizaciones con similitudes entre sí.',
    },
    {
      termino: 'Responsabilidades',
      significado:
        'Conjunto de actividades que conforman un proceso e involucran un logro o un resultado.',
    },
  ],
  complementario: [
    {
      texto:
        'Zamudio, M. (2020). ¿Qué es cultura organizacional? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rr_VKyWX9WQ',
    },
    {
      texto: 'SENA. (2019). Clasificación Nacional de Ocupaciones.',
      tipo: 'Página web',
      link: 'https://observatorio.sena.edu.co/Clasificacion/Cno',
    },
    {
      texto:
        'Fernández, M. (2019). Técnicas e instrumentos para recolección de datos [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1gM3QPRTbFQ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
