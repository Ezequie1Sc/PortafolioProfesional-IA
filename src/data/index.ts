import type { Project, Skill, SocialLink, NavLink, Certificate } from '../types';

export const navLinks: NavLink[] = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Certificados', href: '#certificados' },
  { name: 'Contacto', href: '#contacto' },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ezequiel-salazar-194975340/',
    icon: '/icons/linkedin.svg',
    hoverColor: 'hover:text-blue-400',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Ezequie1Sc',
    icon: '/icons/github.svg',
    hoverColor: 'hover:text-purple-400',
  },
];

export const certificates: Certificate[] = [
  
  {
  id: 11,
  title: 'Responsive Web Design Certification',
  issuer: 'freeCodeCamp',
  date: '2026',
  image: '/Certificates/diseñoweb.png',
  credentialUrl: '/Certificates/Certificado_EzequielWeb.pdf',
  skills: [
    'HTML',
    'CSS',
    'Diseño Web Responsivo',
    'Accesibilidad',
    'Flexbox',
    'CSS Grid'
  ],
  category: 'programacion'
},


{
  id: 12,
  title: 'Foundational C# with Microsoft Certification',
  issuer: 'Microsoft',
  date: '2026',
  image: '/Certificates/csharp.png',
  credentialUrl: '/Certificates/csharp.pdf',
  skills: [
    'C# Fundamentals',
    'Variables & Data Types',
    'Control Structures',
    'Object-Oriented Programming',
    'Software Development Basics'
  ],
  category: 'programacion'
},


{
    id: 13,
    title: 'Desarrollo con IA',
    issuer: 'BIG school',
    date: '2026',
    image: '/Certificates/IADesarrollo.png',
    credentialUrl: '/Certificates/IADesarrollo.pdf',
    skills: ['Desarrollo con IA', 'Fundamentos de IA', 'Aplicaciones Prácticas'],
    category: 'ia'
},

{
  id: 15,
  title: 'Front-End Development Libraries',
  issuer: 'freeCodeCamp',
  date: '2026',
  image: '/Certificates/react.png',
  credentialUrl: '/Certificates/FrontedCertificado.pdf',
  skills: [
    'React',
    'React Hooks',
    'React Router',
    'State Management',
    'Performance Optimization',
    'Testing',
    'Bootstrap',
    'Sass',
    'CSS Frameworks',
    'TypeScript',
    'Responsive Design',
    'Front-End Development'
  ],
  category: 'programacion'
},

  {
    id: 1,
    title: 'Python Programming',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    image: '/Certificates/python.png',
    credentialUrl: '/Certificates/PythonEssentials.pdf',
    skills: ['Python', 'Automatización', 'Scripting', 'Fundamentos'],
    category: 'programacion'
  },
  {
  id: 14,
  title: 'JavaScript Algorithms and Data Structures Certification',
  issuer: 'freeCodeCamp',
  date: '2026',
  image: '/Certificates/certificadeJS.png',
  credentialUrl: '/Certificates/Certificado_JS.pdf',
  skills: [
    'JavaScript',
    'ES6+',
    'Algoritmos',
    'Estructuras de Datos',
    'Programación Funcional',
    'Programación Orientada a Objetos'
  ],
  category: 'programacion'
},
  {
    id: 9,
    title: 'Python Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    image: '/Certificates/im.png',
    credentialUrl: '/Certificates/PythonEssentials2.pdf',
    skills: ['Python', 'Programación Orientada a Objetos', 'Automatización', 'Estructuras de Datos', 'Control de Flujo', 'Scripting'],
    category: 'programacion'
  },
  {
    id: 2,
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    image: '/Certificates/IntroductionCibersecurity.png',
    credentialUrl: '/Certificates/cybersecurity.pdf',
    skills: ['Seguridad Informática', 'Protección de Redes', 'Ciberseguridad'],
    category: 'ciberseguridad'
  },
     {
  id: 10,
  title: 'Claude Code in Action',
  issuer: 'Anthropic',
  date: '2026-04-04',
  image: '/Certificates/code.png',  
  credentialUrl: '/Certificates/code.pdf',
  skills: ['Claude Code', 'AI Assistants', 'Code Generation', 'LLM Integration'],
  category: 'ia'
},

  {
    id: 3,
    title: 'Modern AI',
    issuer: 'Cisco',
    date: '2024',
    image: '/Certificates/modernIA.png',
    credentialUrl: '/Certificates/IntrotoModernAI.pdf',
    skills: ['Inteligencia Artificial', 'Machine Learning', 'IA Moderna'],
    category: 'ia'
  },
{
  "id": 4,
  "title": "Integración de Inteligencia Artificial en Escenarios de Aprendizaje",
  "issuer": "Tecnológico Nacional de México",
  "date": "2025-07-08",
  "image": "/Certificates/diplomaenseñanzaconIA.png",
  "credentialUrl": "/Certificates/DIPLOMA.pdf",
  "skills": ["Integración de IA en educación", "Escenarios de aprendizaje con IA", "IA aplicada a la docencia"],
  "category": "ia"
},
  {
    id: 5,
    title: 'English Level B1 Certification',
    issuer: 'Instituto Tecnologico Superior De Calkini',
    date: '2022',
    image: '/Certificates/constanciaB1ingles.png',
    credentialUrl: '/Certificates/constancia.pdf',
    skills: ['Inglés Intermedio', 'Comprensión', 'Comunicación'],
    category: 'idiomas'
  },
  {
    id: 6,
    title: 'Professional Communication',
    issuer: 'LinkedIn Learning',
    date: '2026',
    image: '/Certificates/professionalCommunication.png',
    credentialUrl: '/Certificates/Cert.pdf',
    skills: ['Comunicación Efectiva', 'Habilidades Profesionales', 'Soft Skills'],
    category: 'profesional'
  },
  {
    id: 7,
    title: 'Advanced SQL',
    issuer: 'Kaggle',
    date: '2026',
    image: '/Certificates/AdvancedSQL.png',
    credentialUrl: '/Certificates/AdvancedSQL.png',
    skills: ['Advanced SQL', 'JOINs', 'UNION', 'Window Functions', 'Query Optimization', 'BigQuery'],
    category: 'datos'
  },
  {
    id: 8,
    title: 'Intro to SQL',
    issuer: 'Kaggle',
    date: '2026',
    image: '/Certificates/IntrotoSQL.png',
    credentialUrl: '/Certificates/IntrotoSQL.png',
    skills: ['SQL', 'BigQuery', 'SELECT', 'GROUP BY', 'JOIN', 'Query Fundamentals'],
    category: 'datos'
  },
 

];

// ===== PROYECTOS=====
export const projects: Project[] = [
  // ===== APLICACIONES MÓVILES =====
  {
    id: 3,
    title: 'Invernadero Mobile',
    description: 'Sistema de monitoreo para invernaderos con visualización en tiempo real y control automático de riego.',
    image: '/proyectos/Invernadero/i_1.png',
    demoVideo: '/InveAPK.webm', // Video que se mostrará en la galería
    icon: '/icons/flutter.svg',
    type: 'mobile',
    technologies: [
      { name: 'Flutter', icon: '/icons/flutter.svg', bgColor: 'bg-blue-600' },
      { name: 'Dart', icon: '/icons/dart.svg', bgColor: 'bg-blue-500' },
      { name: 'Flask', icon: '/icons/flask.svg', bgColor: 'bg-gray-600' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', bgColor: 'bg-blue-700' },
      { name: 'Python', icon: '/icons/python.svg', bgColor: 'bg-green-600' },
    ],
    images: ['/proyectos/Invernadero/i_2.png', '/proyectos/Invernadero/i_3.png'],
    color: 'green',
    github: 'https://github.com/Ezequie1Sc/ServerInvernadero',
    problem: 'Agricultores perdían cosechas por falta de monitoreo preciso y riego ineficiente.',
    solution: 'Sistema IoT con sensores que automatiza el riego basado en datos reales.',
    howItWorks: [
      'Sensores ESP32 miden condiciones cada 5 minutos',
      'Algoritmo decide cuándo activar el riego',
      'App muestra datos en tiempo real',
      'Alertas push para condiciones críticas'
    ],
    impact: 'Redujo consumo de agua en 60% y aumentó producción en 45%.'
},
  {
    id: 1,
    title: 'Sigel ITC Mobile',
    description: 'Aplicación móvil para gestión académica que permite a estudiantes y profesores administrar inventario de laboratorios, entregar trabajos prácticos y realizar seguimiento de asignaciones.',
    image: '/proyectos/1.png',
    icon: '/icons/flutter.svg',
    type: 'mobile',
    technologies: [
      { name: 'Flutter', icon: '/icons/flutter.svg', bgColor: 'bg-blue-600' },
      { name: 'Dart', icon: '/icons/dart.svg', bgColor: 'bg-blue-500' },
      { name: 'Flask', icon: '/icons/flask.svg', bgColor: 'bg-gray-600' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', bgColor: 'bg-blue-700' },
      { name: 'Python', icon: '/icons/python.svg', bgColor: 'bg-green-600' },
    ],
    images: ['/proyectos/9.png', '/proyectos/3.png', '/proyectos/4.png', '/proyectos/D_3.png', '/proyectos/D_4.png', '/proyectos/D_5.png', '/proyectos/D_6.png'],
    color: 'blue',
    github: 'https://github.com/Ezequie1Sc/SIGEL',
    problem: 'Estudiantes y profesores enfrentaban dificultades para gestionar inventarios de laboratorio, entregar trabajos prácticos y hacer seguimiento de asignaciones de manera centralizada.',
    solution: 'Sistema móvil integral con IA que automatiza la gestión académica, permitiendo control de inventario en tiempo real, entregas digitales y seguimiento personalizado.',
    howItWorks: [
      'API en Flask que procesa todas las solicitudes del sistema',
      'Base de datos PostgreSQL para almacenamiento seguro',
      'App Flutter con interfaz intuitiva',
      'Notificaciones push para recordatorios'
    ],
    impact: 'Reduce tiempos de gestión en un 65% y eliminó el 90% de errores en inventario.'
  },
  {
    id: 2,
    title: 'Barber Shop App',
    description: 'Aplicación integral para barberías que facilita la reserva de turnos, la compra de productos y la gestión de clientes.',
    image: '/proyectos/barberia/b_1.png',
    demoVideo: '/barberAPK.webm',
    icon: '/icons/flutter.svg',
    type: 'mobile',
    technologies: [
      { name: 'Flutter', icon: '/icons/flutter.svg', bgColor: 'bg-blue-600' },
      { name: 'Dart', icon: '/icons/dart.svg', bgColor: 'bg-blue-500' },
      { name: 'Flask', icon: '/icons/flask.svg', bgColor: 'bg-gray-600' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', bgColor: 'bg-blue-700' },
      { name: 'Python', icon: '/icons/python.svg', bgColor: 'bg-green-600' },
    ],
    images: ['/proyectos/barberia/b_2.png', '/proyectos/barberia/b_3.png', '/proyectos/barberia/b_4.png', '/proyectos/barberia/b_5.png'],
    color: 'purple',
    github: 'https://github.com/Ezequie1Sc/BarberApk',
    problem: 'Barberías perdían clientes por falta de sistema de reservas y mala gestión de turnos.',
    solution: 'App todo-en-uno que digitaliza reservas 24/7, catálogo de productos y sistema de fidelización.',
    howItWorks: [
      'Sincronización en tiempo real de disponibilidad',
      'Pasarela de pagos integrada',
      'Base de datos centralizada',
      'Notificaciones automáticas'
    ],
    impact: 'Aumentó reservas en 80% y generó 40% más ingresos por venta de productos.'
  },
 
{
    id: 5,
    title: 'VideoJuego',
    description: 'Juego arcade donde controlas un personaje que atrapa regalos mientras esquiva objetos peligrosos.',
    image: '/game.webp',
    demoVideo: '/VideoGameAPK.webm',
    icon: '/icons/flutter.svg',
    type: 'mobile',
    technologies: [
      { name: 'Flutter', icon: '/icons/flutter.svg', bgColor: 'bg-blue-600' },
      { name: 'Dart', icon: '/icons/dart.svg', bgColor: 'bg-blue-500' },
    ],
    images: ['/game1.webp'],
    color: 'orange',
    github: 'https://github.com/Ezequie1Sc/love_apk',
   problem: 'Falta de opciones de entretenimiento rápido y accesible para sesiones cortas en dispositivos móviles.',
    solution: 'Juego arcade que mejora reflejos mientras ofrece experiencia divertida.',
    howItWorks: [
      'Control táctil para mover personaje',
      'Sistema de colisiones',
      'Dificultad progresiva',
      'Sistema de puntuación y récords'
    ],
   impact: 'Diseñado para ofrecer una experiencia entretenida y accesible para sesiones cortas de juego.'
  },
 
  

  // ===== APLICACIONES WEB =====
 

  {
  id: 19,
  title: 'Jobly',
  description: 'Plataforma web desarrollada en Angular para explorar vacantes tecnológicas, filtrar oportunidades por categoría, guardar empleos favoritos y consultar detalles de cada oferta desde una interfaz moderna, responsiva y minimalista.',
  image: '/icons/jobly.webp',
  icon: '/icons/angular.svg.svg',
  type: 'web',
  technologies: [
    { name: 'Angular', icon: '/icons/angular.svg.svg', bgColor: 'bg-red-500' },
    { name: 'TypeScript', icon: '/icons/tp.svg', bgColor: 'bg-blue-500' },
    { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', bgColor: 'bg-cyan-500' },
    { name: 'API REST', icon: '/icons/api.svg.svg', bgColor: 'bg-green-500' },
    { name: 'Vercel', icon: '/icons/Vercel.svg', bgColor: 'bg-black' },
  ],
  images: [
    '/proyectos/jobly/1.png',
    '/proyectos/jobly/2.png',
    '/proyectos/jobly/3.png'
  ],
  color: 'blue',
  github: 'https://github.com/Ezequie1Sc/techhire-dashboard.git',
  demoUrl: 'https://techhire-dashboard.vercel.app/',
  problem: 'Los usuarios que buscan empleo en tecnología suelen navegar entre múltiples plataformas con interfaces saturadas, filtros poco claros y una experiencia poco práctica para encontrar, guardar y revisar oportunidades relevantes.',
  solution: 'Se desarrolló una aplicación web moderna con Angular que centraliza vacantes tecnológicas en una interfaz limpia, rápida y responsiva. La plataforma permite explorar empleos, aplicar filtros por categoría, consultar detalles y guardar vacantes favoritas mediante almacenamiento local.',
  howItWorks: [
    'Consume vacantes desde una API externa de empleos tecnológicos',
    'Muestra las oportunidades en tarjetas limpias y responsivas',
    'Permite filtrar empleos por categoría o tecnología',
    'Incluye una vista de detalle para consultar la información completa de cada vacante',
    'Permite guardar y administrar vacantes favoritas con localStorage',
    'Cuenta con diseño adaptable para dispositivos móviles y de escritorio'
  ],
  impact: 'Jobly ofrece una experiencia más clara y ordenada para buscar empleos tecnológicos, reduciendo la saturación visual y facilitando que los usuarios encuentren oportunidades relevantes de forma rápida desde cualquier dispositivo.'
},
  {
    id: 15,
    title: 'Restaurant Website',
    description: 'Plataforma web para venta de desayunos sorpresa con contacto directo vía WhatsApp.',
    image: '/proyectos/web/webcasita.webp',
    icon: '/icons/react.svg',
    type: 'web',
    technologies: [
      { name: 'HTML', icon: '/icons/html.svg', bgColor: 'bg-orange-600' },
      { name: 'CSS', icon: '/icons/css.svg', bgColor: 'bg-blue-600' },
      { name: 'TypeScript', icon: '/icons/tp.svg', bgColor: 'bg-blue-600' },
    ],
    images: ['/proyectos/plenum/1.png', '/proyectos/plenum/2.png', '/proyectos/plenum/3.png'],
    color: 'orange',
    github: 'https://github.com/Ezequie1Sc/web-casita',
    demoUrl: 'https://web-casita.vercel.app/',
    problem: 'Negocios gastronómicos no tenían presencia digital para recibir pedidos.',
    solution: 'Landing page optimizada que conecta directamente con WhatsApp.',
    howItWorks: [
      'Galería visual de productos',
      'Sistema de personalización',
      'Botón flotante de WhatsApp',
      'Diseño responsive'
    ],
    impact: 'Aumentó pedidos en 200% en el primer mes.'
  },

  {
  id: 17,
  title: 'SkillMatch - Plataforma de Formación de Equipos',
  description: 'Plataforma web diseñada para analizar habilidades, intereses y roles de estudiantes con el fin de generar equipos de trabajo equilibrados para proyectos académicos y eventos de innovación.',
  image: '/proyectos/web/skill.webp',
  icon: '/icons/react.svg',
  type: 'web',
  technologies: [
    { name: 'React', icon: '/icons/react.svg', bgColor: 'bg-cyan-500' },
    { name: 'TypeScript', icon: '/icons/tp.svg', bgColor: 'bg-blue-600' },
    { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', bgColor: 'bg-sky-500' },
    { name: 'Python', icon: '/icons/python.svg', bgColor: 'bg-yellow-500' },
    { name: 'FastAPI', icon: '/icons/Fastapi.svg', bgColor: 'bg-green-600' },
  ],
  images: [
    '/proyectos/skillmatch/1.png',
    '/proyectos/skillmatch/2.png',
    '/proyectos/skillmatch/3.png'
  ],
  color: 'purple',
  github: 'https://github.com/Ezequie1Sc/skill-match-demo.git',
  demoUrl: 'https://skill-match-demo-nine.vercel.app/landing-page',
  problem: 'La formación de equipos en proyectos académicos suele realizarse de manera informal, basándose en amistades o decisiones rápidas, lo que genera grupos desequilibrados, distribución desigual de responsabilidades y una menor eficiencia en el desarrollo de proyectos.',
  solution: 'Se desarrolló una plataforma web que permite registrar perfiles de estudiantes, analizar habilidades, intereses y roles preferidos para generar equipos equilibrados de forma automática, mejorando la colaboración y organización.',
  howItWorks: [
    'Registro de estudiantes y creación de perfiles',
    'Captura de habilidades, intereses y roles preferidos',
    'Análisis de información mediante el sistema',
    'Generación automática de equipos equilibrados',
    'Visualización de métricas y estadísticas en un dashboard administrativo'
  ],
  impact: 'Facilitó la organización de equipos de trabajo, mejoró la distribución de habilidades dentro de los grupos y permitió a docentes y organizadores tomar decisiones basadas en datos para optimizar proyectos colaborativos.'
},
{
  id: 18,
  title: 'Kermés Rockera 2026',
  description: 'Landing page promocional desarrollada para difundir la Kermés Rockera 2026, un evento organizado por la Fundación Avanza Amor y Liderazgo Vida, con información del evento, temática, actividades y medios de contacto.',
  image: '/proyectos/web/kermes.webp',
  icon: '/icons/html.svg',
  type: 'web',
  technologies: [
    { name: 'HTML5', icon: '/icons/html.svg', bgColor: 'bg-orange-500' },
    { name: 'CSS3', icon: '/icons/css.svg', bgColor: 'bg-blue-500' },
    { name: 'JavaScript', icon: '/icons/javascript.svg', bgColor: 'bg-yellow-500' },
    { name: 'Vercel', icon: '/icons/Vercel.svg', bgColor: 'bg-black' },
  ],
  images: [
    '/proyectos/kermes/1.png',
    '/proyectos/kermes/2.png',
    '/proyectos/kermes/3.png'
  ],
  color: 'blue',
  github: 'https://github.com/Ezequie1Sc/Kermes.git',
  demoUrl: 'https://kermes-six.vercel.app/',
  problem: 'La Fundación Avanza Amor y Liderazgo Vida necesitaba una forma moderna y accesible de promocionar la Kermés Rockera 2026, centralizando la información del evento y facilitando su difusión en redes sociales y medios digitales.',
  solution: 'Se desarrolló una landing page responsiva con una identidad visual inspirada en la temática rockera del evento. El sitio permite presentar información relevante de manera clara y atractiva, mejorando el alcance y la experiencia de los visitantes.',
  howItWorks: [
    'Presenta la información principal del evento en una sección destacada',
    'Muestra detalles como fecha, horario y temática',
    'Incluye información sobre la fundación organizadora',
    'Facilita el acceso a redes sociales y canales de contacto',
    'Se adapta automáticamente a dispositivos móviles y de escritorio'
  ],
  impact: 'La landing page fortaleció la presencia digital del evento, facilitó la difusión de la información y proporcionó una experiencia visual profesional para los asistentes potenciales.'
},

{
  id: 16,
  title: 'Sitio Web para Técnico de Climatización',
  description: 'Página web profesional para promocionar servicios de climatización, instalaciones y mantenimiento con contacto directo vía WhatsApp.',
  image: '/proyectos/tecnicoa.png',
  icon: '/icons/html.svg',
  type: 'web',
  technologies: [
    { name: 'HTML', icon: '/icons/html.svg', bgColor: 'bg-orange-600' },
    { name: 'CSS', icon: '/icons/css.svg', bgColor: 'bg-blue-600' },
    { name: 'JavaScript', icon: '/icons/javascript.svg', bgColor: 'bg-yellow-500' },
  ],
  images: [
    '/proyectos/tecnico/1.png',
    '/proyectos/tecnico/2.png',
    '/proyectos/tecnico/3.png'
  ],
  color: 'blue',
  github: 'https://github.com/Ezequie1Sc/IceCold.git',
  demoUrl: 'https://tecnico-miguel.vercel.app/',
  problem: 'Muchos técnicos independientes carecen de una presencia digital profesional para mostrar sus servicios y facilitar el contacto con clientes potenciales.',
  solution: 'Desarrollo de una landing page moderna y responsive que presenta los servicios ofrecidos y permite la comunicación inmediata mediante WhatsApp.',
  howItWorks: [
    'Presentación de servicios de climatización',
    'Galería de trabajos realizados',
    'Información de contacto visible',
    'Botón flotante de WhatsApp',
    'Diseño adaptable a dispositivos móviles'
  ],
  impact: 'Mejoró la visibilidad online del negocio y facilitó la captación de nuevos clientes.'
},


   {
    id: 6,
    title: 'Células Plenum',
    description: 'Plataforma web informativa para el programa de formación "Células Plenum".',
    image: '/proyectos/web/plenum.webp',
    icon: '/icons/bootstrap.svg',
    type: 'web',
    technologies: [
      { name: 'HTML', icon: '/icons/html.svg', bgColor: 'bg-orange-600' },
      { name: 'CSS', icon: '/icons/css.svg', bgColor: 'bg-blue-600' },
      { name: 'Bootstrap', icon: '/icons/bootstrap.svg', bgColor: 'bg-purple-600' },
    ],
    images: ['/proyectos/plenum/1.png', '/proyectos/plenum/2.png', '/proyectos/plenum/3.png'],
    color: 'blue',
    github: 'https://github.com/Ezequie1Sc/Practica-Web',
    demoUrl: 'https://practica-web-kappa.vercel.app/',
    problem: 'El programa formativo no tenía presencia digital profesional.',
    solution: 'Sitio web moderno que presenta información de manera organizada y atractiva.',
    howItWorks: [
      'Navegación por unidades temáticas',
      'Sección de estadísticas interactivas',
      'Galería de recursos descargables',
      'Formulario de contacto integrado'
    ],
    impact: 'Aumentó consultas al programa en 150%.'
  },

{
  id: 20,
  title: 'Portafolio Demo',
  description: 'Portafolio web desarrollado con HTML, CSS y JavaScript para presentar proyectos, habilidades técnicas y experiencia mediante una interfaz moderna y responsiva.',
  image: '/web.png',
  icon: '/icons/html.svg',

  type: 'web',

  technologies: [
    { name: 'HTML5', icon: '/icons/html.svg', bgColor: 'bg-orange-600' },
    { name: 'CSS3', icon: '/icons/css.svg', bgColor: 'bg-blue-600' },
    { name: 'JavaScript', icon: '/icons/javascript.svg', bgColor: 'bg-yellow-500' },
  ],

  images: [
    '/proyectos/portafolio-demo/1.png',
    '/proyectos/portafolio-demo/2.png',
    '/proyectos/portafolio-demo/3.png'
  ],

  color: 'orange',

  github: 'https://github.com/Ezequie1Sc/Portafolio-demo',
  demoUrl: 'https://portafolio-demo-liard.vercel.app/',

  problem: 'Muchos desarrolladores necesitan una forma profesional y atractiva de presentar sus proyectos, habilidades y experiencia en un solo lugar.',

  solution: 'Se desarrolló un portafolio moderno, responsivo y modular utilizando HTML, CSS y JavaScript, incorporando navegación intuitiva, animaciones e interfaz adaptable a cualquier dispositivo.',

  howItWorks: [
    'Presenta proyectos mediante tarjetas organizadas e interactivas.',
    'Incluye una sección de habilidades técnicas con iconografía personalizada.',
    'Permite alternar entre tema claro y oscuro.',
    'Cuenta con formulario de contacto y navegación completamente responsiva.'
  ],

  impact: 'Facilita la presentación profesional del perfil del desarrollador, mejora la experiencia del usuario y sirve como demostración práctica de habilidades en desarrollo web frontend.'
},

{
  id: 16,
  title: 'Atmosfera — Dashboard Meteorologico',
  description: 'App del clima con diseno editorial que consume APIs REST gratuitas para mostrar datos meteorologicos en tiempo real de cualquier ciudad del mundo.',
  image: '/proyectos/web/atmosfera.webp',
  icon: '/icons/js.svg',
  type: 'web',
  technologies: [
    { name: 'HTML5', icon: '/icons/html.svg', bgColor: 'bg-orange-600' },
    { name: 'CSS3', icon: '/icons/css.svg', bgColor: 'bg-blue-500' },
    { name: 'JavaScript ES6+', icon: '/icons/javascript.svg', bgColor: 'bg-yellow-500' },
  ],
  images: [
    '/proyectos/atmosfera/dashboard.png',
    '/proyectos/atmosfera/metrics.png',
    '/proyectos/atmosfera/responsive.png'
  ],
  color: 'orange',
  github: 'https://github.com/Ezequie1Sc/Weather-app',
  demoUrl: 'https://weather-app-theta-one-68.vercel.app/',
  problem: 'Necesidad de consultar el clima actual de cualquier ciudad del mundo de forma rapida y visualmente clara, sin distracciones publicitarias ni interfaces sobrecargadas.',
  solution: 'Aplicacion web con arquitectura modular que integra Open-Meteo (datos meteorologicos) y Nominatim (geocodificacion), mostrando informacion climatica completa con un diseno editorial minimalista y tipografia cuidada.',
  howItWorks: [
    'Busqueda inteligente de ciudades con sugerencias en tiempo real y banderas de paises',
    'Geocodificacion via Nominatim para convertir nombres de ciudades en coordenadas',
    'Peticiones asincronas a Open-Meteo para obtener datos meteorologicos actuales y prevision de 5 dias',
    'Sistema de favoritos con persistencia en localStorage',
    'Renderizado dinamico de metricas: temperatura, sensacion termica, humedad, viento, rafagas, presion y visibilidad',
    'Iconos meteorologicos profesionales con diferenciacion visual por colores (soleado, nublado, lluvia, nieve, tormenta)',
    'Deteccion automatica de dia/noche para ajustar iconos',
    'Sistema de cache inteligente de 10 minutos para optimizar consultas',
    'Manejo de errores con banner informativo',
    'Diseno totalmente responsive con grid adaptativo'
  ],
  impact: 'Aplicacion meteorologica profesional sin dependencia de APIs de pago. Arquitectura escalable con sistema de favoritos persistente, busqueda global y prevision extendida. Codigo modular preparado para integrar nuevas funcionalidades.'
},

  {
    id: 7,
    title: 'JavaScript Laboratory',
    description: 'Laboratorio interactivo con 27 ejercicios de lógica en JavaScript.',
    image: '/proyectos/web/image2.png',
    icon: '/icons/javascript.svg',
    type: 'web',
    technologies: [
      { name: 'HTML', icon: '/icons/html.svg', bgColor: 'bg-orange-600' },
      { name: 'CSS', icon: '/icons/css.svg', bgColor: 'bg-blue-600' },
      { name: 'JavaScript', icon: '/icons/javascript.svg', bgColor: 'bg-yellow-600' },
    ],
    images: ['/proyectos/js-lab/1.png', '/proyectos/js-lab/2.png', '/proyectos/js-lab/3.png', '/proyectos/js-lab/4.png'],
    color: 'purple',
    github: 'https://github.com/Ezequie1Sc/Ejercicios-de-Javascript',
    demoUrl: 'https://ejercicios-de-javascript.vercel.app/',
    problem: 'Estudiantes carecían de herramienta práctica para aprender JavaScript.',
    solution: 'Laboratorio digital con ejercicios progresivos y ejecución en tiempo real.',
    howItWorks: [
      '27 ejercicios por nivel de dificultad',
      'Editor de código integrado',
      'Sistema de validación',
      'Interfaz limpia sin distracciones'
    ],
    impact: '+100 estudiantes, 92% reportó mejora significativa.'
  },
  {
    id: 8,
    title: 'Portafolio Web',
    description: 'Portafolio profesional con React y TypeScript.',
     image: './portafolioweb.png',
    icon: '/icons/react.svg',
    
    type: 'web',
    technologies: [
      { name: 'React', icon: '/icons/react.svg', bgColor: 'bg-cyan-600' },
      { name: 'TypeScript', icon: '/icons/tp.svg', bgColor: 'bg-blue-600' },
      { name: 'CSS', icon: '/icons/css.svg', bgColor: 'bg-blue-600' },
    ],
    images: ['/proyectos/portafolio/1.png', '/proyectos/portafolio/2.png', '/proyectos/portafolio/3.png'],
    color: 'green',
    github: 'https://github.com/Ezequie1Sc/Portafolio',
    demoUrl: 'https://portafolio-phi-six-35.vercel.app/',
    problem: 'Desarrolladores necesitan destacar profesionalmente con un portafolio moderno.',
    solution: 'Portafolio con arquitectura limpia y animaciones suaves.',
    howItWorks: [
      'Componentes reutilizables con TypeScript',
      'Galería interactiva con filtros',
      'Sección de habilidades con tarjetas',
      'Formulario de contacto funcional'
    ],
   impact: 'Mejoró la presentación de mis proyectos y facilitó la evaluación técnica por reclutadores.'
  },

  // ===== PROYECTOS BACKEND =====
  {
    id: 9,
    title: 'API Sigel ITC',
    description: 'Backend en Python con Flask para sistema de organización académica.',
    image: '/proyectos/backend/sigelServer.png',
    icon: '/icons/python.svg',
    type: 'backend',
    technologies: [
      { name: 'Python', icon: '/icons/python.svg', bgColor: 'bg-green-600' },
      { name: 'Flask', icon: '/icons/flask.svg', bgColor: 'bg-gray-600' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', bgColor: 'bg-blue-700' },
    ],
    images: ['/proyectos/backend/sigelServer.png', '/proyectos/backend/sigel4.png', '/proyectos/backend/sigel3.png', '/proyectos/backend/sigel5.png', '/proyectos/backend/ss.png'],
    color: 'blue',
    github: 'https://github.com/Ezequie1Sc/SIGEL/tree/main/Backend/server',
    problem: 'Sistema académico necesitaba backend robusto para múltiples usuarios concurrentes.',
    solution: 'API RESTful con autenticación JWT y arquitectura modular escalable.',
    howItWorks: [
      'Autenticación JWT con refresh tokens',
      'Endpoints RESTful documentados',
      'Pool de conexiones optimizado',
      'Middleware de logging'
    ],
    impact: 'Soporta +1000 usuarios concurrentes con respuesta <200ms.'
  },
  {
    id: 10,
    title: 'API Invernadero',
    description: 'API RESTful para monitoreo y control de invernaderos.',
    image: '/proyectos/backend/inverServer.png',
    icon: '/icons/python.svg',
    type: 'backend',
    technologies: [
      { name: 'Python', icon: '/icons/python.svg', bgColor: 'bg-green-600' },
      { name: 'Flask', icon: '/icons/flask.svg', bgColor: 'bg-gray-600' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', bgColor: 'bg-blue-700' },
    ],
    images: ['/proyectos/backend/inverServer.png', '/proyectos/backend/inver1.png'],
    color: 'green',
    github: 'https://github.com/Ezequie1Sc/ServerInvernadero',
    problem: 'Sistemas IoT necesitaban backend confiable para procesar datos en tiempo real.',
    solution: 'API especializada en IoT con procesamiento de sensores y lógica de decisión.',
    howItWorks: [
      'WebSockets para datos en tiempo real',
      'Algoritmo de decisión automática',
      'Base de datos time-series',
      'Endpoints para estadísticas'
    ],
    impact: 'Procesa 1000 lecturas/segundo, activa riego en <500ms.'
  },
  {
    id: 11,
    title: 'API Barber',
    description: 'API para gestión de barberías con sistema de reservaciones y auditoría.',
    image: '/proyectos/backend/baServer.png',
    icon: '/icons/python.svg',
    type: 'backend',
    technologies: [
      { name: 'Python', icon: '/icons/python.svg', bgColor: 'bg-green-600' },
      { name: 'Flask', icon: '/icons/flask.svg', bgColor: 'bg-gray-600' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', bgColor: 'bg-blue-700' },
    ],
    images: ['/proyectos/backend/baServer.png', '/proyectos/backend/ba01.png', '/proyectos/backend/ba0.png', '/proyectos/backend/ba4.png', '/proyectos/backend/ba3.png', '/proyectos/backend/ba2.png', '/proyectos/backend/ba1.png'],
    color: 'purple',
    github: 'https://github.com/Ezequie1Sc/BarberServer',
    problem: 'Negocios necesitaban sistema confiable que evitara dobles reservas.',
    solution: 'API robusta con validación de disponibilidad y control de concurrencia.',
    howItWorks: [
      'Validación atómica de disponibilidad',
      'Sistema de colas para reservas concurrentes',
      'Logging detallado para auditoría',
      'Cache distribuido'
    ],
    impact: 'Eliminó 100% de dobles reservas, respuesta <150ms.'
  },

  // ===== APLICACIONES DESKTOP =====
  {
    id: 12,
    title: 'Barbería Desktop',
    description: 'Sistema de escritorio integral para barberías con gestión de citas e inventario.',
    image: '/v_2.webp',
    icon: '/icons/csharp.svg',
    type: 'desktop',
    technologies: [
      { name: 'C#', icon: '/icons/csharp.svg', bgColor: 'bg-purple-600' },
      { name: '.NET', icon: '/icons/dotnet.svg', bgColor: 'bg-purple-700' },
      { name: 'SQL Server', icon: '/icons/sql.svg', bgColor: 'bg-red-600' },
    ],
    images: ['/proyectos/dekstop/barber/ba0.jpg', '/proyectos/dekstop/barber/ba1.png', '/proyectos/dekstop/barber/ba2.png', '/proyectos/dekstop/barber/ba3.png', '/proyectos/dekstop/barber/ba4.png', '/proyectos/dekstop/barber/ba5.png', '/proyectos/dekstop/barber/b6Admin.png'],
    color: 'orange',
    github: 'https://github.com/Ezequie1Sc/Barberia',
    problem: 'Barberías manejaban operaciones en papel con pérdida de información.',
    solution: 'Sistema completo que centraliza citas, clientes, inventario y ventas.',
    howItWorks: [
      'Dashboard con métricas en tiempo real',
      'Calendario visual de reservas',
      'Alertas de stock bajo',
      'Reportes exportables'
    ],
    impact: 'Aumentó eficiencia operativa en 70% y redujo pérdidas en 50%.'
  },
  {
    id: 13,
    title: 'Control Escolar',
    description: 'Aplicación de escritorio para gestión de inventarios y reportes académicos.',
    image: '/proyectos/control.png',
    icon: '/icons/java.svg',
    type: 'desktop',
    technologies: [
      { name: 'Java', icon: '/icons/java.svg', bgColor: 'bg-orange-600' },
      { name: 'Swing', icon: '/icons/java.svg', bgColor: 'bg-orange-700' },
      { name: 'MySQL', icon: '/icons/mysql.svg', bgColor: 'bg-blue-600' },
    ],
    images: ['/proyectos/dekstop/escuela/es1.png', '/proyectos/dekstop/escuela/es2.png', '/proyectos/dekstop/escuela/es3.png', '/proyectos/dekstop/escuela/es4.png', '/proyectos/dekstop/escuela/es5.png', '/proyectos/dekstop/escuela/es6.png', '/proyectos/dekstop/escuela/es7.png', '/proyectos/dekstop/escuela/es8.png', '/proyectos/dekstop/escuela/es9.png', '/proyectos/dekstop/escuela/es10.png'],
    color: 'purple',
    github: 'https://github.com/Ezequie1Sc/ControlEscolar',
    problem: 'Instituciones carecían de sistema integrado para gestión administrativa.',
    solution: 'Sistema desktop con módulos de inventario, facturación y reportes.',
    howItWorks: [
      'Módulo de inventario con entradas/salidas',
      'Sistema de facturación integrado',
      'Generador de reportes personalizables',
      'Control de acceso por roles'
    ],
    impact: 'Redujo pérdidas de inventario en 80%, reportes de 4h a 5min.'
  },
  {
    id: 14,
    title: 'Inventario',
    description: 'Software de escritorio para gestión completa de inventarios y facturación.',
    image: '/inve.webp',
    icon: '/icons/csharp.svg',
    type: 'desktop',
    technologies: [
      { name: 'C#', icon: '/icons/csharp.svg', bgColor: 'bg-purple-600' },
      { name: '.NET Core', icon: '/icons/dotnet.svg', bgColor: 'bg-purple-700' },
      { name: 'SQL Server', icon: '/icons/sql.svg', bgColor: 'bg-red-600' },
    ],
    images: ['/proyectos/dekstop/inventario/logiin.png', '/proyectos/dekstop/inventario/welcome.png', '/proyectos/dekstop/inventario/d2.png', '/proyectos/dekstop/inventario/d3.png', '/proyectos/dekstop/inventario/prove.png', '/proyectos/dekstop/inventario/d1.png', '/proyectos/dekstop/inventario/producto.png', '/proyectos/dekstop/inventario/ventas.png', '/proyectos/dekstop/inventario/admin.png', '/proyectos/dekstop/inventario/admin1.png'],
    color: 'green',
    github: 'https://github.com/Ezequie1Sc/Inventario',
    problem: 'PYMEs sufrían descontrol de inventario con métodos manuales.',
    solution: 'Sistema profesional con control preciso y alertas automáticas.',
    howItWorks: [
      'Alertas de stock mínimo/máximo',
      'Dashboard con KPIs',
      'Historial con auditoría'
    ],
    impact: 'Redujo quiebres de stock en 85% y ahorró 40 horas/mes.'
  }
];
// ===== SKILLS =====
export const skills: Skill[] = [
  {
    id: 1,
    title: 'Frontend Web',
    category: '01',
    frontGradient: 'from-blue-500 to-purple-600',
    backGradient: 'from-blue-400 to-purple-500',
    badgeText: 'Interfaces Modernas',
    badgeBorder: 'border-blue-700/50',
    badgeBg: 'bg-blue-900/30',
    badgeColor: 'text-blue-300',
    skills: [
      { name: 'Angular', icon: 'https://cdn.simpleicons.org/angular/DD0031', containerBg: 'from-blue-500/20 to-blue-600/30' },
      { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', containerBg: 'from-blue-400/20 to-blue-500/30' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6', containerBg: 'from-blue-400/20 to-blue-500/30' },
      { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/38BDF8', containerBg: 'from-purple-500/20 to-indigo-600/30' },
    ],
    backTitle: 'Desarrollo Frontend',
    backDescription: 'Construcción de aplicaciones web modernas, rápidas y responsivas:',
    backPoints: [
      'SPAs con Angular y React usando TypeScript',
      'Diseño atómico y componentes reutilizables',
      'Estilizado ágil con Tailwind CSS',
      'Consumo eficiente de APIs REST',
    ],
    backBadge: 'Angular • React • TS • Tailwind',
    backBadgeBg: 'bg-blue-900/50',
  },
  {
    id: 2,
    title: 'Backend y APIs',
    category: '02',
    frontGradient: 'from-green-500 to-teal-600',
    backGradient: 'from-green-400 to-teal-500',
    badgeText: 'REST • Sockets',
    badgeBorder: 'border-green-700/50',
    badgeBg: 'bg-green-900/30',
    badgeColor: 'text-green-300',
    skills: [
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', containerBg: 'from-green-500/20 to-teal-600/30' },
      // CORREGIDO: C# a Gris Claro (#CCCCCC) en lugar de Blanco para que se vea sobre el fondo oscuro
      { name: 'C#', icon: '/icons/csharp.svg', containerBg: 'from-green-400/20 to-teal-500/30' },
      { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/437291', containerBg: 'from-teal-500/20 to-emerald-600/30' },
      // CORREGIDO: Flask a Gris Claro (#CCCCCC)
      { name: 'Flask', icon: 'https://cdn.simpleicons.org/flask/CCCCCC', containerBg: 'from-teal-500/20 to-emerald-600/30' },
    ],
    backTitle: 'Desarrollo Backend',
    backDescription: 'Construcción de servidores, APIs y lógica de negocio escalable:',
    backPoints: [
      'APIs RESTful con Flask, .NET Core y Spring Boot',
      'WebSockets para comunicación en tiempo real',
      'Autenticación JWT y manejo de sesiones',
      'Arquitectura en capas y clean code',
    ],
    backBadge: 'Flask • .NET • Spring Boot',
    backBadgeBg: 'bg-green-900/50',
  },
  {
    id: 3,
    title: 'Bases de Datos',
    category: '03',
    frontGradient: 'from-yellow-500 to-amber-600',
    backGradient: 'from-yellow-400 to-amber-500',
    badgeText: 'SQL',
    badgeBorder: 'border-yellow-700/50',
    badgeBg: 'bg-yellow-900/30',
    badgeColor: 'text-yellow-300',
    skills: [
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1', containerBg: 'from-yellow-500/20 to-amber-600/30' },
      // CORREGIDO: El slug correcto para SQL Server es 'microsoftsqlserver' y color Gris Claro (#CCCCCC)
      { name: 'SQL Server', icon: '/icons/sql.svg', containerBg: 'from-yellow-400/20 to-amber-500/30' },
      { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1', containerBg: 'from-amber-500/20 to-orange-600/30' },
      { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/3FCF8E', containerBg: 'from-amber-500/20 to-orange-600/30' },
    ],
    backTitle: 'Bases de Datos',
    backDescription: 'Experiencia en diseño, administración y optimización de datos:',
    backPoints: [
      'Modelado de bases de datos relacionales (Normalización)',
      'Consultas avanzadas (JOINs, Window Functions)',
      'Integración con Supabase y Backend as a Service',
      'Migraciones y control de versiones de esquemas',
    ],
    backBadge: 'PostgreSQL • SQL Server • Supabase',
    backBadgeBg: 'bg-yellow-900/50',
  },
  {
    id: 4,
    title: 'Desarrollo Móvil',
    category: '04',
    frontGradient: 'from-purple-500 to-indigo-600',
    backGradient: 'from-purple-400 to-indigo-500',
    badgeText: 'Híbrido',
    badgeBorder: 'border-purple-700/50',
    badgeBg: 'bg-purple-900/30',
    badgeColor: 'text-purple-300',
    skills: [
      { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/02569B', containerBg: 'from-purple-500/20 to-indigo-600/30' },
      { name: 'Dart', icon: 'https://cdn.simpleicons.org/dart/0175C2', containerBg: 'from-purple-400/20 to-indigo-500/30' },
      { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28', containerBg: 'from-indigo-500/20 to-blue-600/30' },
    ],
    backTitle: 'Desarrollo Móvil',
    backDescription: 'Aplicaciones multiplataforma nativas con alto rendimiento:',
    backPoints: [
      'Diseño de interfaces con Material Design',
      'Gestión de estado con BLoC / Provider',
      'Integración con Firebase (Auth, Firestore, Push)',
      'Publicación en Play Store y App Store',
    ],
    backBadge: 'Flutter • Dart • Firebase',
    backBadgeBg: 'bg-purple-900/50',
  },
  {
    id: 5,
    title: 'Hardware e IoT',
    category: '05',
    frontGradient: 'from-red-500 to-pink-600',
    backGradient: 'from-red-400 to-pink-500',
    badgeText: 'IoT • Sensores',
    badgeBorder: 'border-red-700/50',
    badgeBg: 'bg-red-900/30',
    badgeColor: 'text-red-300',
    skills: [
      { name: 'Arduino', icon: 'https://cdn.simpleicons.org/arduino/00979D', containerBg: 'from-red-500/20 to-pink-600/30' },
      { name: 'ESP32', icon: 'https://cdn.simpleicons.org/espressif/E7352C', containerBg: 'from-pink-500/20 to-rose-600/30' },
      { name: 'Micropython', icon: 'https://cdn.simpleicons.org/micropython/CCCCCC', containerBg: 'from-red-400/20 to-pink-500/30' },
    ],
    backTitle: 'Hardware y Embebidos',
    backDescription: 'Desarrollo de soluciones IoT y sistemas embebidos:',
    backPoints: [
      'Prototipado rápido con Arduino y ESP32',
      'Programación en Micropython y C++',
      'Comunicación MQTT y conectividad WiFi',
    ],
    backBadge: 'ESP32 • MQTT • Sensores',
    backBadgeBg: 'bg-red-900/50',
  },
  {
    id: 6,
    title: 'DevOps & Herramientas',
    category: '06',
    frontGradient: 'from-indigo-500 to-violet-600',
    backGradient: 'from-indigo-400 to-violet-500',
    badgeText: 'CI/CD • Colaboración',
    badgeBorder: 'border-indigo-700/50',
    badgeBg: 'bg-indigo-900/30',
    badgeColor: 'text-indigo-300',
    skills: [
      { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032', containerBg: 'from-indigo-500/20 to-violet-600/30' },
      { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/CCCCCC', containerBg: 'from-indigo-400/20 to-violet-500/30' }, // Gris claro
      // CORREGIDO: VS Code a Gris Claro (#CCCCCC) en lugar de Blanco
      { name: 'VS Code', icon: '/icons/vscode.svg', containerBg: 'from-violet-500/20 to-purple-600/30' },
      { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/CCCCCC', containerBg: 'from-violet-500/20 to-purple-600/30' }, // Gris claro
    ],
    backTitle: 'Flujo de Trabajo Profesional',
    backDescription: 'Dominio de herramientas esenciales para el desarrollo en equipo:',
    backPoints: [
      'Control de versiones con Git (Ramificación y Merge)',
      'Despliegue continuo con Vercel',
      'Metodologías Ágiles (Scrum/Kanban)',
      'Pruebas de APIs con Postman',
    ],
    backBadge: 'Git • CI/CD • Vercel • Postman',
    backBadgeBg: 'bg-indigo-900/50',
  },
];