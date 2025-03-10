import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Timeline } from './ui/Timeline';

const experiences = [
  {
    title: 'Web Development Intern',
    company: 'Prodigy InfoTech',
    period: 'Nov 2023 - Dec 2023',
    description: [
      'Developed responsive, mobile-friendly web pages.',
      'Optimized API calls to improve response time.',
      'Worked with modern web technologies and frameworks.'
    ].join(' '),
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Experience</SectionTitle>
        <Timeline items={experiences} />
      </div>
    </section>
  );
}