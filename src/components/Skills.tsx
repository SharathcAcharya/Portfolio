import { SectionTitle } from './ui/SectionTitle';
import { SiHtml5, SiCss3, SiJavascript, SiCplusplus, SiGit, SiAngular, SiMysql, SiMongodb } from 'react-icons/si';
import { FaReact, FaNodeJs, FaJava, FaPython, FaAws } from 'react-icons/fa';

const skills = [
  { name: 'Python', icon: FaPython, color: '#306998' },
  { name: 'Java', icon: FaJava, color: '#f7b731' },
  { name: 'C++', icon: SiCplusplus, color: '#00599c' },
  { name: 'HTML', icon: SiHtml5, color: '#e34f26' },
  { name: 'CSS', icon: SiCss3, color: '#1572b6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'React', icon: FaReact, color: '#61dafb' },
  { name: 'Angular', icon: SiAngular, color: '#dd0031' },
  { name: 'Node.js', icon: FaNodeJs, color: '#68a063' },
  { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'AWS', icon: FaAws, color: '#ff9900' },
  { name: 'Git', icon: SiGit, color: '#f34f29' },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-8">
        <SectionTitle>Skills</SectionTitle>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* skills */}
          <div>
            <div className="flex flex-wrap gap-6 justify-center">
              {skills.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-2 sm:p-4 sm:border border-gray-300 dark:border-gray-600 rounded-lg shadow-md hover:shadow-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-transform duration-300 transform hover:scale-110"
                >
                  <tech.icon size={40} color={tech.color} />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-2">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
