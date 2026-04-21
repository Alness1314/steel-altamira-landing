export type NavItem = {
  label: string
  href: string
}

export type ActionLink = {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
}

export type Metric = {
  value: string
  label: string
}

export type HeroSpotlight = {
  eyebrow: string
  title: string
  description: string
}

export type Service = {
  title: string
  description: string
  icon: 'structure' | 'welding' | 'distribution'
}

export type ContactDetail = {
  title: string
  value: string
  href?: string
  icon: 'mail' | 'phone' | 'location'
}

export type ProcessStep = {
  title: string
  description: string
}

export type SocialLink = {
  label: string
  href?: string
  icon: 'facebook' | 'instagram' | 'linkedin'
}

export const landingContent = {
  brand: {
    name: 'Altamira',
    tag: 'Steel',
  },
  navigation: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ] satisfies NavItem[],
  hero: {
    eyebrow: 'Soluciones integrales en construccion, comercializacion y servicios industriales',
    title: 'Altamira Steel',
    description:
      'Somos un grupo de especialistas de alto nivel dedicados a ofrecer soluciones integrales en construccion, comercializacion y servicios industriales. Transformamos la experiencia de nuestros expertos en resultados de precision, con seguridad, calidad tecnica y eficiencia operativa en cada proyecto.',
    primaryAction: {
      label: 'Contactar a operaciones',
      href: '#contacto',
      variant: 'primary',
    } satisfies ActionLink,
    secondaryAction: {
      label: 'Ver servicios',
      href: '#servicios',
      variant: 'secondary',
    } satisfies ActionLink,
    metrics: [
      { value: 'Calidad', label: 'cumplimiento tecnico y legal en cada entrega' },
      { value: 'Cero', label: 'accidentes como estandar de seguridad' },
      { value: 'Nacional', label: 'vision de liderazgo y confianza en el sector' },
    ] satisfies Metric[],
    highlights: ['Construccion', 'Comercializacion', 'Servicios industriales'],
    spotlight: {
      eyebrow: 'Aliado estrategico',
      title: 'Precision operativa',
      description: 'Consolidamos experiencia tecnica, seguridad y eficiencia para responder con precision en cada proyecto.',
    } satisfies HeroSpotlight,
  },
  services: {
    title: 'Servicios',
    description: 'Obra mecanica, herreria y soldadura para proyectos industriales con ejecucion tecnica y control de calidad.',
    items: [
      {
        title: 'Obra Mecanica',
        description:
          'Fabricacion de plataformas, escaleras marinas, pasos de gato, estructuras y soportes. Incluye fabricacion y montaje de ductos de acero al carbon e inoxidable, asi como maniobras y montajes de equipos, tanques, gruas viajeras, subestaciones, tuberias y ductos.',
        icon: 'structure',
      },
      {
        title: 'Herreria',
        description: 'Fabricacion de puertas, ventanas, portones, escaleras y otras soluciones metalicas segun las necesidades del proyecto.',
        icon: 'welding',
      },
      {
        title: 'Soldadura',
        description:
          'Trabajos de soldadura en tuberia, soporteria y accesorios, con inspeccion y pruebas no destructivas para el aseguramiento de la calidad.',
        icon: 'distribution',
      },
    ] satisfies Service[],
  },
  about: {
    title: 'Nosotros',
    description:
      'Altamira Steel transforma la experiencia de especialistas de alto nivel en resultados de precision para construccion, comercializacion y servicios industriales.',
    body:
      'Nos consolidamos como el aliado estrategico que garantiza seguridad, calidad tecnica y eficiencia operativa en cada proyecto. Nuestro enfoque combina ejecucion especializada, cumplimiento tecnico y una operacion responsable con las personas, el entorno y los objetivos de cada cliente.',
    highlight: 'Seguridad, calidad tecnica y eficiencia operativa en cada proyecto.',
    badgeValue: 'Alto nivel',
    badgeLabel: 'de especializacion',
    stats: [
      { value: '3', label: 'lineas principales de servicio' },
      { value: 'Cero', label: 'accidentes como prioridad operativa' },
      { value: 'Nacional', label: 'objetivo de liderazgo y confianza' },
    ] satisfies Metric[],
  },
  process: {
    title: 'Politicas, objetivo y direccion',
    description:
      'La operacion de Altamira Steel se sustenta en calidad, seguridad, sostenibilidad y una vision clara de liderazgo nacional.',
    steps: [
      {
        title: 'Calidad',
        description:
          'Garantizamos la entrega de servicios y productos que superan las expectativas del cliente y cumplen rigurosamente con todas las especificaciones tecnicas y requerimientos legales aplicables.',
      },
      {
        title: 'Seguridad y Medio Ambiente',
        description:
          'Nuestra prioridad absoluta es la integridad de las personas y del entorno. Trabajamos bajo el estandar de cero accidentes con gestion proactiva de riesgos, capacitacion continua y responsabilidad ambiental en cada proyecto.',
      },
      {
        title: 'Objetivo',
        description:
          'Consolidar a Altamira Steel como el lider y referente de confianza en el sector de la construccion y mantenimiento a nivel nacional, mediante excelencia operativa, innovacion tecnologica y un modelo de negocio sostenible.',
      },
      {
        title: 'Mision',
        description:
          'Proveer soluciones integrales de Acero en infraestructura, construcción y servicios integrales que impulsen el desarrollo exitoso de nuestros clientes, fundamentadas en la excelencia técnica, calidad en el servicio, seguridad operativa y un magnífico equipo humano comprometido con el bienestar social y la sostenibilidad ambiental.',
      },
      {
        title: 'Vision',
        description:
          'Ser reconocida como empresa líder nacional en soluciones integrales de Acero e infraestructura industrial, destacándonos por nuestra capacidad de innovar, excelencia operativa, satisfacción total de nuestros clientes y un modelo de negocios sostenible que redefine los estándares de calidad y seguridad en el séctor.',
      },
    ] satisfies ProcessStep[],
  },
  contact: {
    title: 'Contacto',
    description: 'Atendemos solicitudes de cotizacion, planeacion de trabajos y seguimiento operativo para proyectos industriales.',
    details: [
      {
        title: 'Correo',
        value: 'corporativo@altamirasteel.com',
        icon: 'mail',
      },
      {
        title: 'Telefono',
        value: '+52 833 120 4698',
        icon: 'phone',
      },
      {
        title: 'Cobertura',
        value: 'Cobertura regional en el sur de Tamaulipas y norte de Veracruz, con capacidad de expansión a otras zonas',
        icon: 'location',
      },
    ] satisfies ContactDetail[],
    socials: [
      { label: 'Facebook', icon: 'facebook' },
      { label: 'Instagram', icon: 'instagram' },
      { label: 'LinkedIn', icon: 'linkedin' },
    ] satisfies SocialLink[],
    submitLabel: 'Solicitar contacto',
    footerNote: 'Escribenos para cotizaciones, planeacion de trabajos y seguimiento operativo de tus proyectos industriales.',
  },
}