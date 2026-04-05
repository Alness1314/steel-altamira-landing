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

export type Service = {
  title: string
  description: string
  icon: 'structure' | 'welding' | 'distribution'
}

export type ContactDetail = {
  title: string
  value: string
  href: string
  icon: 'mail' | 'phone' | 'location'
}

export type ProcessStep = {
  title: string
  description: string
}

export type SocialLink = {
  label: string
  href: string
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
    eyebrow: 'Ingenieria y suministro en acero',
    title: 'Soluciones industriales en acero para proyectos exigentes',
    description: 'Altamira Steel integra fabricacion, corte y abastecimiento especializado para operaciones que requieren precision, continuidad y respuesta tecnica confiable.',
    primaryAction: {
      label: 'Solicitar cotizacion',
      href: '#contacto',
      variant: 'primary',
    } satisfies ActionLink,
    secondaryAction: {
      label: 'Ver servicios',
      href: '#servicios',
      variant: 'secondary',
    } satisfies ActionLink,
    metrics: [
      { value: '20+', label: 'anos de experiencia' },
      { value: '350+', label: 'proyectos entregados' },
      { value: '24/7', label: 'respuesta comercial' },
    ] satisfies Metric[],
    highlights: ['Ejecucion especializada', 'Calidad trazable', 'Cobertura industrial'],
  },
  services: {
    title: 'Nuestros Servicios',
    description: 'Capacidad tecnica y operativa para atender fabricacion estructural, procesos de corte y abastecimiento continuo de acero para industria y construccion.',
    items: [
      {
        title: 'Fabricacion de Estructuras',
        description: 'Construccion y montaje de estructuras metalicas con enfoque en resistencia, tolerancias y seguridad operativa.',
        icon: 'structure',
      },
      {
        title: 'Corte y Soldadura',
        description: 'Corte laser, oxicorte y soldadura especializada para piezas, ensambles y componentes industriales.',
        icon: 'welding',
      },
      {
        title: 'Distribucion de Acero',
        description: 'Suministro confiable de placas, perfiles y materiales de acero con tiempos de entrega coordinados.',
        icon: 'distribution',
      },
    ] satisfies Service[],
  },
  about: {
    title: 'Sobre Nosotros',
    description: 'Mas de 20 anos impulsando proyectos de acero con una mezcla de experiencia tecnica, control de calidad y acompanamiento comercial cercano.',
    body: 'Trabajamos con procesos medibles, equipos especializados y una cadena de suministro pensada para responder con rapidez a requerimientos industriales. Nuestro objetivo es que cada entrega llegue lista para integrarse a tu operacion sin friccion.',
    highlight: 'Cobertura nacional para proyectos metalmecanicos, estructurales y de manufactura especializada.',
    stats: [
      { value: '98%', label: 'entregas a tiempo' },
      { value: '120+', label: 'clientes industriales' },
      { value: '15k', label: 'toneladas gestionadas' },
    ] satisfies Metric[],
  },
  process: {
    title: 'Como trabajamos',
    description: 'Un flujo corto, tecnico y claro para convertir requerimientos industriales en entregas listas para operar.',
    steps: [
      {
        title: 'Levantamiento tecnico',
        description: 'Revisamos especificaciones, volumen, tolerancias y condiciones de entrega para definir el alcance real del proyecto.',
      },
      {
        title: 'Produccion y control',
        description: 'Ejecutamos fabricacion, corte y soldadura con seguimiento de tiempos, calidad y coordinacion con tu operacion.',
      },
      {
        title: 'Entrega y continuidad',
        description: 'Programamos despacho y suministro para que el material llegue cuando tu frente de trabajo lo necesita.',
      },
    ] satisfies ProcessStep[],
  },
  contact: {
    title: 'Contactanos',
    description: 'Cuentanos el alcance de tu proyecto y preparamos una propuesta ajustada a volumen, tiempos y especificaciones tecnicas.',
    details: [
      {
        title: 'Correo',
        value: 'info@aceroindustrial.com',
        href: 'mailto:info@aceroindustrial.com',
        icon: 'mail',
      },
      {
        title: 'Telefono',
        value: '555-123-4567',
        href: 'tel:+525551234567',
        icon: 'phone',
      },
      {
        title: 'Direccion',
        value: 'Av. Industria 123, Ciudad, MX',
        href: 'https://maps.google.com/?q=Av.+Industria+123',
        icon: 'location',
      },
    ] satisfies ContactDetail[],
    socials: [
      { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
      { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
      { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    ] satisfies SocialLink[],
    submitLabel: 'Enviar',
  },
}