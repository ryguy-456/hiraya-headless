
const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact Me',
    },

    hero: {
      eyebrow: 'Drupal Developer · Web Experience Specialist',
      lead: 'Building accessible, scalable Drupal experiences for organizations that need reliable digital platforms.',
      viewWork: 'View My Work',
      contact: 'Contact Me',
      noticeTitle: '👋 Available for Web Development Projects',
      noticeDescription: "Have a project in mind? Let's discuss how I can help.",
      consultation: 'Schedule a Consultation',
      dismiss: 'Dismiss availability notice',
    },

    about: {
      eyebrow: 'About Me',
      title: 'Building better web experiences with Drupal.',
      paragraph1: "I'm Ryan Buenconsejo, a Drupal Developer and Web Experience Specialist focused on building accessible, maintainable, and user-centered digital experiences.",
      paragraph2: 'I have hands-on experience developing and supporting enterprise Drupal websites, working with content architecture, custom components, Twig templating, accessibility, and deployment workflows.',
      paragraph3: 'My approach combines strong CMS knowledge with practical front-end development and a focus on creating experiences that are reliable for both users and the teams who maintain them.',
      stat1: 'Years Web Experience',
      stat2: 'Enterprise CMS',
      stat3: 'Accessibility',
      stat4: 'Deployment Platform',
    },

    experience: {
      eyebrow: 'Experience',
      title: 'Building and supporting enterprise Drupal platforms.',
      role: 'Web Developer',
      summary: 'Developed and supported enterprise Drupal websites serving multiple cooperative organizations, with a focus on accessibility, content architecture, front-end implementation, and reliable deployment workflows.',
      highlights: [
        'Developed and maintained Drupal 8, 9, and 10 websites across approximately 10–12 cooperative sites.',
        'Built and maintained content types, taxonomies, Views, Webforms, custom blocks, Twig templates, and reusable components.',
        'Managed development, testing, QA, and production deployments through Pantheon.',
        'Applied WCAG 2.1 AA and Section 508 accessibility practices throughout development and content implementation.',
        'Collaborated with stakeholders, content teams, and project partners to troubleshoot issues and deliver website updates.',
        'Provided Tier 2 technical support and troubleshooting for website and digital platform issues.',
      ],
    },

    skills: {
      eyebrow: 'Skills',
      title: 'Technical skills and areas of expertise.',
      description: 'A combination of Drupal development, front-end implementation, development workflows, and accessibility practices.',
      groups: [
        {
          title: 'Drupal Development',
          description: 'Drupal 8–11, custom modules, content types, taxonomies, Views, Webforms, custom blocks, Twig, and content architecture.',
          tags: ['Drupal', 'Twig', 'Views', 'Webforms', 'PHP'],
        },
        {
          title: 'Front-End Development',
          description: 'Building responsive interfaces and reusable components with HTML, CSS, JavaScript, Twig, and modern front-end practices.',
          tags: ['HTML', 'CSS', 'JavaScript', 'Twig', 'React'],
        },
        {
          title: 'Development Workflow',
          description: 'Local Drupal development, version control, dependency management, command-line tools, and deployment workflows.',
          tags: ['Git', 'GitHub', 'DDEV', 'Drush', 'Composer', 'Pantheon'],
        },
        {
          title: 'Accessibility & QA',
          description: 'Accessibility-focused development, quality assurance, content validation, responsive testing, and standards-based web practices.',
          tags: ['WCAG 2.1 AA', 'Section 508', 'QA', 'Responsive Design', 'SEO'],
        },
      ],
    },

    toolkit: {
      eyebrow: 'Drupal Toolkit',
      title: 'Modern tools for building Drupal experiences.',
      description: 'The tools and technologies I use to build, customize, test, and deploy Drupal websites.',
      items: [
        {
          title: 'Drupal Canvas',
          description: 'A visual page-building experience for creating layouts and reusable components within Drupal.',
        },
        {
          title: 'Single Directory Components',
          description: 'Organizing component templates, styles, and functionality into reusable, maintainable units.',
        },
        {
          title: 'Twig & Theming',
          description: 'Creating custom Drupal front-end experiences with Twig templates, CSS, and JavaScript.',
        },
        {
          title: 'Drush & Composer',
          description: 'Managing Drupal projects, dependencies, configuration, and command-line development tasks.',
        },
        {
          title: 'Local Development',
          description: 'Using DDEV and Docker to create consistent local Drupal development environments.',
        },
        {
          title: 'Git & Pantheon',
          description: 'Managing source code, collaborating through Git, and deploying across Pantheon environments.',
        },
      ],
    },

    projects: {
      eyebrow: 'Projects',
      title: "A few things I've built.",
      description: 'A selection of projects demonstrating my experience with Drupal, front-end development, and modern web technologies.',
      projectType: 'Drupal Project',
      viewWork: 'View My Drupal Work',
    },

    contact: {
      eyebrow: "Let's Connect",
      title: 'Have a Drupal project or opportunity?',
      description: "I'm always interested in connecting with teams looking to build reliable, accessible, and maintainable digital experiences.",
      email: 'Email Me',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },

    footer: {
      tagline: 'Building accessible and reliable web experiences with Drupal.',
      rights: 'All rights reserved.',
    },
  },

  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contáctame',
    },

    hero: {
      eyebrow: 'Desarrollador Drupal · Especialista en Experiencias Web',
      lead: 'Creo experiencias digitales accesibles y escalables con Drupal para organizaciones que necesitan plataformas digitales confiables.',
      viewWork: 'Ver mi trabajo',
      contact: 'Contáctame',
      noticeTitle: '👋 Disponible para proyectos de desarrollo web',
      noticeDescription: '¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte.',
      consultation: 'Programar una consulta',
      dismiss: 'Cerrar aviso de disponibilidad',
    },

    about: {
      eyebrow: 'Sobre mí',
      title: 'Creando mejores experiencias web con Drupal.',
      paragraph1: 'Soy Ryan Buenconsejo, desarrollador Drupal y especialista en experiencias web, enfocado en crear experiencias digitales accesibles, fáciles de mantener y centradas en el usuario.',
      paragraph2: 'Tengo experiencia práctica desarrollando y manteniendo sitios web empresariales con Drupal, trabajando con arquitectura de contenido, componentes personalizados, plantillas Twig, accesibilidad y procesos de implementación.',
      paragraph3: 'Mi enfoque combina un sólido conocimiento de sistemas de gestión de contenido con desarrollo front-end y la creación de experiencias confiables tanto para los usuarios como para los equipos que las mantienen.',
      stat1: 'Años de experiencia web',
      stat2: 'CMS empresarial',
      stat3: 'Accesibilidad',
      stat4: 'Plataforma de implementación',
    },

    experience: {
      eyebrow: 'Experiencia',
      title: 'Desarrollo y mantenimiento de plataformas empresariales con Drupal.',
      role: 'Desarrollador web',
      summary: 'Desarrollé y mantuve sitios web empresariales con Drupal para múltiples organizaciones cooperativas, con énfasis en accesibilidad, arquitectura de contenido, desarrollo front-end y procesos confiables de implementación.',
      highlights: [
        'Desarrollé y mantuve sitios web con Drupal 8, 9 y 10 para aproximadamente 10–12 cooperativas.',
        'Creé y mantuve tipos de contenido, taxonomías, Views, Webforms, bloques personalizados, plantillas Twig y componentes reutilizables.',
        'Gestioné procesos de desarrollo, pruebas, control de calidad e implementaciones de producción mediante Pantheon.',
        'Apliqué prácticas de accesibilidad WCAG 2.1 AA y Section 508 durante el desarrollo y la implementación de contenido.',
        'Colaboré con partes interesadas, equipos de contenido y socios de proyectos para resolver problemas y entregar actualizaciones.',
        'Proporcioné soporte técnico de nivel 2 y resolución de problemas relacionados con sitios web y plataformas digitales.',
      ],
    },

    skills: {
      eyebrow: 'Habilidades',
      title: 'Conocimientos técnicos y áreas de especialización.',
      description: 'Una combinación de desarrollo Drupal, implementación front-end, flujos de trabajo de desarrollo y prácticas de accesibilidad.',
      groups: [
        {
          title: 'Desarrollo Drupal',
          description: 'Drupal 8–11, módulos personalizados, tipos de contenido, taxonomías, Views, Webforms, bloques personalizados, Twig y arquitectura de contenido.',
          tags: ['Drupal', 'Twig', 'Views', 'Webforms', 'PHP'],
        },
        {
          title: 'Desarrollo Front-End',
          description: 'Creación de interfaces adaptables y componentes reutilizables con HTML, CSS, JavaScript, Twig y prácticas modernas de desarrollo front-end.',
          tags: ['HTML', 'CSS', 'JavaScript', 'Twig', 'React'],
        },
        {
          title: 'Flujo de Trabajo de Desarrollo',
          description: 'Desarrollo local con Drupal, control de versiones, gestión de dependencias, herramientas de línea de comandos y procesos de implementación.',
          tags: ['Git', 'GitHub', 'DDEV', 'Drush', 'Composer', 'Pantheon'],
        },
        {
          title: 'Accesibilidad y Control de Calidad',
          description: 'Desarrollo enfocado en la accesibilidad, control de calidad, validación de contenido, pruebas adaptables y estándares web.',
          tags: ['WCAG 2.1 AA', 'Section 508', 'QA', 'Diseño adaptable', 'SEO'],
        },
      ],
    },

    toolkit: {
      eyebrow: 'Herramientas de Drupal',
      title: 'Herramientas modernas para crear experiencias con Drupal.',
      description: 'Las herramientas y tecnologías que utilizo para crear, personalizar, probar e implementar sitios web con Drupal.',
      items: [
        {
          title: 'Drupal Canvas',
          description: 'Una experiencia visual para crear diseños de página y componentes reutilizables dentro de Drupal.',
        },
        {
          title: 'Componentes de Directorio Único',
          description: 'Organización de plantillas, estilos y funcionalidades en componentes reutilizables y fáciles de mantener.',
        },
        {
          title: 'Twig y Temas',
          description: 'Creación de experiencias front-end personalizadas con plantillas Twig, CSS y JavaScript.',
        },
        {
          title: 'Drush y Composer',
          description: 'Gestión de proyectos Drupal, dependencias, configuración y tareas de desarrollo mediante la línea de comandos.',
        },
        {
          title: 'Desarrollo Local',
          description: 'Uso de DDEV y Docker para crear entornos locales de desarrollo Drupal consistentes.',
        },
        {
          title: 'Git y Pantheon',
          description: 'Gestión de código fuente, colaboración mediante Git e implementación en los distintos entornos de Pantheon.',
        },
      ],
    },

    projects: {
      eyebrow: 'Proyectos',
      title: 'Algunos proyectos que he desarrollado.',
      description: 'Una selección de proyectos que demuestra mi experiencia con Drupal, desarrollo front-end y tecnologías web modernas.',
      projectType: 'Proyecto Drupal',
      viewWork: 'Ver mis proyectos Drupal',
    },

    contact: {
      eyebrow: 'Conectemos',
      title: '¿Tienes un proyecto u oportunidad relacionada con Drupal?',
      description: 'Siempre me interesa conectar con equipos que buscan crear experiencias digitales confiables, accesibles y fáciles de mantener.',
      email: 'Envíame un correo',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },

    footer: {
      tagline: 'Creando experiencias web accesibles y confiables con Drupal.',
      rights: 'Todos los derechos reservados.',
    },
  },
}

export default translations
