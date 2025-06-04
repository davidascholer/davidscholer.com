import AnimatedTestimonials from "@/components/ui/AnimatedTestimonials";

export default function AnimatedTestimonialsComponent() {
  const testimonials = [
    {
      quote:
        "While in school, I maintained a respectable gpa while working 40+ hours a week to pay tuition, rent, and other bills. I had to take many breaks to save up money to keep my head above water. Many of my professors at Seattle Central had taught or were teaching at UW as well so I spent close to 5 cumulative years (in terms of credits) there concurrently working on my bachelor's degree at a cheaper tuition rate and smaller class sizes.",
      name: "Seattle Central College",
      designation: "Associate Of Science - Dean's List",
      designation2: "2008-2017",
      src: "/seattlecentral.webp",
    },
    {
      quote:
        "I had attempted to complete my bachelor's degree but having no financial help, the tuition and course load were too much to handle. Everything I have learned since college significantly outweighs my final year of course material. College was just the beginning of my true studies in software engineering and app development.",
      name: "University of Washington",
      designation: "Electrical Engineering - Incomplete",
      designation2: "2017-2018",
      src: "/uw.webp",
    },
    {
      quote:
        "In lieu of my last year at University, I took the Full Stack Developer Certification course at North Seattle College. I already had nearly all of the required classes needed so the tuition was doable. It was a great experience and I learned a lot.",
      name: "North Seattle College",
      designation: "Full Stack Developer Certification",
      designation2: "2018",
      src: "/northseattle.webp",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
