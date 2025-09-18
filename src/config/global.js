export default {
  global: {
    Name: 'Entorno digital del <em>community management</em>',
    Description:
      'Este componente formativo permite al aprendiz comprender el uso estratégico de las redes sociales para conectar con audiencias específicas, segmentar públicos, estructurar planes de redes sociales y diseñar contenido que genere interacción, <em>engagement</em> y valor, fortaleciendo así las estrategias de <em>marketing</em> digital según objetivos definidos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
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
        titulo: 'Ecosistema digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Redes sociales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Audiencias',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Plan de redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Elementos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Características',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estructura',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estrategias de contenido',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Componentes',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Adaptabilidad',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Viralidad',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Automatización',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Inteligencia artificial',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Publicación y <em>engagement</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Interacción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Principios',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Fomento',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Medición de participación',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Confidencialidad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Normatividad',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Privacidad de datos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Ética en el manejo de la información',
            hash: 't_6_3',
          },
        ],
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA1_63220007_DU.pdf',
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
  complementario: [
    {
      tema: 'Ecosistema digital',
      referencia:
        'Coronando, L. 2009. <em>La función del Community Manager</em>. AERCO y Territorio creativo',
      tipo: 'Libro',
      link: 'https://www.academia.edu/7171462/Community_manager_espan_ol',
    },
    {
      tema: 'Redes sociales',
      referencia:
        'Bernal, I., Barboza, A. M., & Flores, A. J. (2023). <em>Las redes Sociales como estrategia de marketing digital: Un análisis bibliométrico. Vinculatégica EFAN, 9</em>(6), 16-30. https://doi.org/10.29105/vtga9.6-437',
      tipo: 'Artículo',
      link: 'https://doi.org/10.29105/vtga9.6-437',
    },
    {
      tema: 'Redes sociales',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2024). Tipos de redes sociales [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tdEv-yO1Uvg',
    },
    {
      tema: 'Plan de redes sociales',
      referencia:
        'Seosve Academy. (2024). Plan de Redes Sociales [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/5oSeEhww7QI?si=Fx_DsiAc8dAAsZ3U',
    },
    {
      tema: 'Plan de redes sociales',
      referencia:
        'SEOSVE. (2021). Cómo se hace un plan de redes sociales [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KXd6BioXc8c',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'conjunto de instrucciones o pasos que se siguen para resolver un problema o realizar una tarea.',
    },
    {
      termino: '<em>Branding</em>',
      significado:
        'identidad de una marca, lo que la hace única y reconocible, representa todo lo que la marca transmite: su personalidad, su propósito, su forma de comunicar y hasta cómo hace sentir a las personas.',
    },
    {
      termino: '<em>Engagement</em>',
      significado:
        'nivel de compromiso, conexión e interacción que los consumidores y usuarios tienen con una marca.',
    },
    {
      termino: 'Gamificación',
      significado:
        'arte de convertir actividades en experiencias entretenidas y motivadoras, usando elementos de juegos para captar la atención y fomentar la participación.',
    },
    {
      termino: '<em>Hashtags</em>',
      significado:
        'palabras o frases clave precedidas por el símbolo # que ayudan a organizar y descubrir contenido en redes sociales.',
    },
    {
      termino: 'Identidad digital',
      significado:
        'huella que dejamos en el mundo online, formada por todo lo que compartimos, publicamos y cómo interactuamos en internet.',
    },
    {
      termino: '<em>Influencer</em>',
      significado:
        'persona que tiene el poder de influir en las opiniones, decisiones o comportamientos de una audiencia a través de su presencia en redes sociales y plataformas digitales.',
    },
    {
      termino: '<em>Marketing</em> digital',
      significado:
        'conjunto de estrategias y acciones que se llevan a cabo en internet para promocionar productos, servicios o marcas.',
    },
    {
      termino: 'Métrica',
      significado:
        'datos y números que sirven para medir el desempeño de una estrategia, campaña o actividad en el mundo digital.',
    },
    {
      termino: '<em>Microblogging</em>',
      significado:
        'forma de compartir contenido en internet de manera breve, rápida y frecuente, generalmente a través de plataformas como X (Twitter), Tumblr o Threads.',
    },
    {
      termino: 'Monetización',
      significado:
        'proceso de generar ingresos a partir de un producto, servicio, contenido o plataforma digital.',
    },
    {
      termino: '<em>Networking</em>',
      significado:
        'práctica de crear y fortalecer relaciones profesionales con otras personas dentro de un sector o industria.',
    },
    {
      termino: '<em>Reels</em>',
      significado:
        'videos cortos y dinámicos que se pueden crear y compartir en plataformas como Instagram y Facebook.',
    },
    {
      termino: 'Viralidad',
      significado:
        'fenómeno en el que un contenido, ya sea un video, imagen, publicación o meme, se comparte masivamente en poco tiempo, alcanzando a miles o incluso millones de personas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chen, W. (2019). Ecosistema digital. En L. Schintler & C. McNeely (Eds.), Encyclopedia of Big Data. Springer.',
      link: 'https://doi.org/10.1007/978-3-319-32001-4_336-1',
    },
    {
      referencia:
        'Ferreira, A. C. (2022, julio 18). <em>Cómo crear un plan de social media en 10 pasos (+ plantilla)</em>. InboundCycle.',
      link:
        'https://www.inboundcycle.com/blog-de-inbound-marketing/pasos-plan-de-social-media-plantilla',
    },
    {
      referencia:
        'Fontalba, T. (s.f.). <em>Los KPIs más importantes en redes sociales según los objetivos</em>. Ttandem Digital Studio.',
      link:
        'https://www.ttandem.com/blog/los-kpis-mas-importantes-en-redes-sociales-segun-los-objetivos/',
    },
    {
      referencia:
        'Westerman, D., Spence, P. R., & Van Der Heide, B. (2014). Social media as information source: Recency of updates and credibility of information. <em>Journal of Computer-Mediated Communication</em>, 19(2), 171–183.',
      link: 'https://doi.org/10.1111/jcc4.12041',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nicolas Cruz Ríos',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Heydy Cristina González García',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack junior</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Ivan Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
