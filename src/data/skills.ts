import { SkillCategory } from '@/types';

export const skillCategories: readonly SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    description: 'Core languages utilized for software logic, object-oriented design, and algorithms.',
    skills: [
      { name: 'Java', category: 'programming', isPrimary: true },
      { name: 'JavaScript', category: 'programming', isPrimary: true },
      { name: 'Python', category: 'programming', isPrimary: true },
      { name: 'C', category: 'programming', isPrimary: false },
      { name: 'C++', category: 'programming', isPrimary: false },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Constructing responsive, modern user interfaces with strict type-safety.',
    skills: [
      { name: 'React.js', category: 'frontend', isPrimary: true },
      { name: 'TypeScript', category: 'frontend', isPrimary: true },
      { name: 'HTML5', category: 'frontend', isPrimary: true },
      { name: 'CSS3', category: 'frontend', isPrimary: true },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Engineering robust server-side architectures, RESTful endpoints, and enterprise services.',
    skills: [
      { name: 'Java', category: 'backend', isPrimary: true },
      { name: 'Spring Boot', category: 'backend', isPrimary: true },
      { name: 'REST APIs', category: 'backend', isPrimary: true },
      { name: 'Spring Data JPA', category: 'backend', isPrimary: true },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Designing relational schemas, persistence entities, and high-performance queries.',
    skills: [
      { name: 'PostgreSQL', category: 'database', isPrimary: true },
      { name: 'SQL', category: 'database', isPrimary: true },
    ],
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    description: 'Exploration of cryptographic privacy mechanisms and decentralized standards.',
    skills: [
      { name: 'Web3', category: 'blockchain', isPrimary: true },
      { name: 'Blockchain fundamentals', category: 'blockchain', isPrimary: true },
      { name: 'Smart Contracts', category: 'blockchain', isPrimary: true },
      { name: 'ERC-5564', category: 'blockchain', isPrimary: true },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Developer tooling and workflows for version control, testing, and collaboration.',
    skills: [
      { name: 'Git', category: 'tools', isPrimary: true },
      { name: 'GitHub', category: 'tools', isPrimary: true },
      { name: 'Postman', category: 'tools', isPrimary: true },
      { name: 'VS Code', category: 'tools', isPrimary: true },
    ],
  },
];
