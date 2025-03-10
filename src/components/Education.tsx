import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'MCA',
    institution: 'St. Aloysius College, Mangalore',
    period: 'Pursuing',
    score: 'CGPA: 6.83 (Sem 1), 6.93 (Sem 2)',
  },
  {
    degree: 'BCA',
    institution: 'Srinivas University, Mangalore',
    period: '2023',
    score: 'CGPA: 8.11',
  },
  {
    degree: 'PUC',
    institution: 'Besant National PU College, Mangalore',
    period: '2020',
    score: '63.83%',
  },
  {
    degree: 'SSLC',
    institution: 'Ashoka Vidyalaya, Mangalore',
    period: '2018',
    score: '73.92%',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu) => (
            <EducationCard key={edu.degree} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}