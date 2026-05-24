export interface Technology {
  name: string;
  category: string;
  color: string;
}

export const technologies: Technology[] = [
  { name: 'React.js', category: 'Frontend', color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', color: '#000000' },
  { name: 'TypeScript', category: 'Language', color: '#3178C6' },
  { name: 'Tailwind CSS', category: 'Styling', color: '#06B6D4' },
  { name: 'React Native', category: 'Mobile', color: '#61DAFB' },
  { name: 'Node.js', category: 'Backend', color: '#339933' },
  { name: 'GraphQL', category: 'API', color: '#E10098' },
  { name: 'PostgreSQL', category: 'Database', color: '#4169E1' },
  { name: 'MongoDB', category: 'Database', color: '#47A248' },
  { name: 'Firebase', category: 'Backend', color: '#FFCA28' },
  { name: 'AWS', category: 'Cloud', color: '#FF9900' },
  { name: 'Shopify', category: 'Commerce', color: '#96BF48' },
];
