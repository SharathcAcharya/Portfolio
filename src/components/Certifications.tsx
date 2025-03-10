import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "Prodigy InfoTech",
    issuer: "Prodigy InfoTech",
    date: "Dec 2024",
    link: "https://www.linkedin.com/posts/sharath-acharya-21a19524b_certificate-activity-7278072314116689921-hyHg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3I9_YBG2BYjOx6-NF5B9k_2filSNN_aHg",
    image: "public/assets/pro.png",
  },
  {
    title: "Python for Data Analysis",
    issuer: "GreatLearningAcademy",
    date: "Oct 2024",
    link: "https://olympus.mygreatlearning.com/courses/47906/certificate?pb_id=581",
    image: "public/assets/py.png",
  },
  {
    title: "Advanced Software Engineering	Job Simulation",
    issuer: "Forage",
    date: "Mar 2025",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_FPNLvzZgxCbyDdNgv_1741097179088_completion_certificate.pdf",
    image:"public/assets/walmart.png",
  },
  {
    title: "Android Training Course Bundle",
    issuer: "Infosys SpringBoard",
    date: "Jul 2024",
    link: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_01384789919575244856028_shared/overview",
    image: "public/assets/android.png",
  },
];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    focusOnSelect: false,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Certifications</SectionTitle>
        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            {certifications.map((cert, index) => (
              <div key={`${cert.title}-${index}`} className="px-4 focus-visible:outline-none">
                <CertificationCard {...cert} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
