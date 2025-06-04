"use client";

import { VerticalListHeroSection } from "@/components/ui/HeroSections";

const ExperienceListComponent = () => {
  return (
    <div className="flex flex-row flex-wrap">
      <VerticalListHeroSection
        header="Languages"
        items={[
          "Typescript/Javascript/ES6",
          "Python",
          "Bash",
          "Java",
          "HTML",
          "CSS",
          "C",
          "SQL",
          "Kotlin ",
          "Swift",
          "Objective-C",
          "Ruby",
        ]}
      />
      <VerticalListHeroSection
        header="Database Technologies"
        items={[
          "Postgresql",
          "MySQL",
          "SQLite",
          "Psycopg",
          "SQLAlchemy",
          "DjangoORM",
          "MongoDB",
          "Prisma",
        ]}
      />
      <VerticalListHeroSection
        header="Deployment and CI/CD"
        items={[
          "Git",
          "Flask",
          "Ansible",
          "Terraform",
          "Jenkins",
          "Github Actions",
          "Nginx",
          "Gunicorn",
        ]}
      />
      <VerticalListHeroSection
        header="CDNs"
        items={["AWS", "Heroku", "Google Cloud", "On-prem"]}
      />
      <VerticalListHeroSection
        header="Micro-controllers"
        items={["ATMEGA128", "ESP32"]}
      />
      <VerticalListHeroSection
        header="Testing Frameworks"
        items={[
          "Jest",
          "React Testing Library",
          "Storybook",
          "Playwright",
          "Selenium",
          "Puppeteer",
          "Pytest",
          "Mocha",
          "Cypress",
        ]}
      />
      <VerticalListHeroSection
        header="Fundamental Concepts"
        items={[
          "Linux",
          "Design Patterns",
          "Data Structures",
          "Common Algorithms",
          "Networking",
          "System Architecture",
        ]}
      />
    </div>
  );
};
export default ExperienceListComponent;
