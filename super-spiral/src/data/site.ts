export const site = {
  name: 'Luis Calcina',
  shortName: 'LC',
  role: 'Desarrollador · Diseñador UI',
  description: 'Desarrollo productos digitales y diseño interfaces claras, accesibles y visualmente expresivas.',
  email: 'luferct1997@gmail.com',
  location: 'Lima, Peru',
  availability: true,
  url: 'https://luiscalcina.dev',
  social: {
    github: 'https://github.com/77fer1997',
    linkedin: 'https://www.linkedin.com/in/luis-calcina/',
    instagram: 'https://www.instagram.com/luis.fernando.calcina/',
  },
} as const;

export const navigation = [
  { label: 'Perfil', href: '/#profile' },
  { label: 'Proyectos', href: '/projects/' },
  { label: 'Trayectoria', href: '/#journey' },
  { label: 'Contacto', href: '/contact/' },
] as const;
