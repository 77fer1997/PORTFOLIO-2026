export const disciplines = [
  { number: '01', name: 'Desarrollo', statement: 'Construyo experiencias.', description: 'Convierto ideas en interfaces rápidas, accesibles y expresivas.', topics: ['Astro', 'TypeScript', 'JavaScript', 'UI responsive', 'Aplicaciones web', 'Desarrollo creativo'] },
  { number: '02', name: 'Diseño', statement: 'Diseño identidades.', description: 'Doy jerarquía, ritmo y una voz visual propia a la información.', topics: ['Diseño UI', 'Dirección de arte', 'Sistemas de diseño', 'Prototipado', 'Tipografía', 'Diseño de interacción'] },
  { number: '03', name: 'Producto digital', statement: 'Resuelvo problemas.', description: 'Conecto objetivos, necesidades de usuario y decisiones técnicas para construir productos útiles.', topics: ['Arquitectura de información', 'Experiencia de usuario', 'Prototipado', 'Accesibilidad', 'Optimización', 'Iteración'] },
] as const;

export const skillGroups = {
  Desarrollo: ['Astro', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'UI responsive'],
  Interacción: ['Three.js', 'GSAP', 'Motion', 'Código creativo'],
  Diseño: ['Figma', 'Diseño UI', 'Sistemas de diseño', 'Prototipado'],
  Producto: ['UX', 'Accesibilidad', 'Arquitectura', 'Prototipado'],
  Herramientas: ['Git', 'APIs', 'Node.js', 'Inteligencia artificial'],
} as const;
