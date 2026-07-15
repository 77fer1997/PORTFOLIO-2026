export const site = {
  name: 'Luis Calcina',
  shortName: 'LC',
  role: 'Desarrollador · Diseñador UI',
  description: 'Desarrollo productos digitales y diseño interfaces claras, accesibles y visualmente expresivas.',
  email: 'hello@luiscalcina.dev',
  location: 'Lima, Peru',
  availability: true,
  url: 'https://luiscalcina.dev',
  social: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
    instagram: 'https://instagram.com/',
  },
} as const;

export const navigation = [
  { label: 'Perfil', href: '/#profile' },
  { label: 'Proyectos', href: '/projects/' },
  { label: 'Trayectoria', href: '/#journey' },
  { label: 'Contacto', href: '/contact/' },
] as const;
