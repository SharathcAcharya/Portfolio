import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";
import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

interface AboutSection {
  icon: LucideIcon | IconType;
  title: string;
  description: string[];
  color: string;
}

const aboutSections: AboutSection[] = [
  {
    icon: User2,
    title: "Who I Am",
    description: [
      "A passionate MCA student with strong programming fundamentals.",
      "Dedicated to developing efficient and scalable software solutions.",
      "Eager to gain professional experience in software development.",
    ],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
    title: "What I Do",
    description: [
      "Build full-stack web applications using modern technologies.",
      "Create responsive and user-friendly interfaces.",
      "Implement efficient backend solutions and database integrations.",
    ],
    color: "bg-purple-600",
  },
  {
    icon: GoGoal,
    title: "My Goals",
    description: [
      "Secure a responsible career opportunity in software development.",
      "Enhance software functionality and performance in real-world projects.",
      "Stay updated with emerging technologies and industry trends.",
    ],
    color: "bg-green-600",
  },
  {
    icon: Lightbulb,
    title: "My Philosophy",
    description: [
      "Strong analytical approach to problem-solving.",
      "Effective communication and teamwork are key to success.",
      "Continuous learning and adaptation in technology.",
    ],
    color: "bg-orange-600",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      </div>

      <div className="container mx-auto px-8 relative">
        <SectionTitle>About Me</SectionTitle>

        {/* Introduction */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Hey there! 👋 I'm <span className="text-blue-600 font-semibold">Sharath</span>,
            a Full-Stack Developer and MCA student at St. Aloysius College, Mangalore.
            I love transforming ideas into scalable web applications and solving complex coding challenges. 
            Seeking a responsible career opportunity to apply my knowledge and programming skills in developing robust and efficient software solutions while contributing to the success of the company.
          </p>

          <div className="mt-6 flex justify-center">
            <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow">
              🚀 Passionate about building innovative solutions
            </span>
          </div>
        </div>

        {/* About Section Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {aboutSections.map(({ icon: Icon, title, description, color }) => (
            <div key={title} className="relative group">
              {/* Background Effect */}
              <div className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

              {/* Card Content */}
              <div className="relative bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4 space-x-4">
                  {/* Icon */}
                  <div className={`p-3 ${color} rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
                </div>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                  {description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
