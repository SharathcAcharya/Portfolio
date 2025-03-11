import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

const projects = [
  {
    title: 'Art On Fleek',
    description: 'E-commerec application where we can buy art and craft related products.',
    image: '/assets/artonfleek.png',
    link: 'https://github.com/SharathcAcharya/art-on-fleek',
    github: 'https://github.com/SharathcAcharya/art-on-fleek',
    tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'Mysql'],
  },
  {
    title: 'Kalikamba Furnitures',
    description: 'E-commerec application where we can buy Furniture Products.',
    image: '/assets/kf.png',
    link: 'https://github.com/SharathcAcharya/',
    github: 'https://github.com/SharathcAcharya/',
    tags: ['Angular', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Portfolio',
    description: 'Modern Weather Application',
    image: '/assets/weather.png',
    link: 'https://globalforecast.netlify.app/',
    github: 'https://github.com/SharathcAcharya/weather_app',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'BG Remove Tool',
    description: 'This is a image background removal tool which i have created using HTML,CSS, and Javascript it gives real time output to the user.',
    image: '/assets/bg.png',
    link: 'https://bgremovetool.netlify.app/',
    github: 'https://github.com/SharathcAcharya/bg-removal',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/decodewithdeepak?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View More Projects
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}