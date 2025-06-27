export default {
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
        titulo: 'Validación de sistemas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Pruebas de <em>hardware</em>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Verificación de <em>software</em>',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Test de rendimiento',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Configuración final',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Personalización del usuario',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: '<em>Backup</em> y restauración',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Proceso general de preparación de datos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Protocolos de entrega',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Verificación de requerimientos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Documentación de entrega',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Capacitación básica',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Soporte post-entrega',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Políticas de garantía',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Mantenimiento programado',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Gestión de incidencias',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Conclusiones',
            hash: 't_4_4',
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
        download: 'downloads/228142_CF012_DU.pdf',
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
  global: {
    Name: 'Configuración y entrega de equipos de cómputo: protocolos y pruebas',
    Description:
      'La configuración y entrega de equipos de cómputo es un proceso integral que incluye protocolos y pruebas con los cuales se realiza la validación de sistemas para asegurar el correcto funcionamiento de <i>hardware</i> y <i>software</i>, la personalización del equipo según las necesidades del usuario, y el soporte post-entrega para garantizar un rendimiento óptimo a lo largo del tiempo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.svg'),
      },
    ],
  },
}
