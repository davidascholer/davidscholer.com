"use client";

import { Card, Carousel } from "@/components/ui/CardCarousel";

export default function AppleCardsCarouselComponent() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 mt-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-primary font-sans">
        Relevant Work Experience
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const NimbioContent = () => {
  return (
    <div>
      <p>
        Nimbio Labs is a software company that also had it&apos;s own hardware.
        We specialized in security tech for property access for both home and
        commercial use. My main position at Nimbio was working with other
        companies to build and integrate APIs to connect their services and
        products with ours. The two most prominent companies I worked alongside
        with were UPS and Alfred Inc. Outside of the API integrations, my other
        major role was the primary site reliability engineer. I would create new
        features, fix and refactor existing bugs, and assist with maintaining
        the mobile app for Android and iOS. <br />
        <br />I had a great time at Nimbio. It challenged me perfectly and I
        grew so much. My biggest claim to fame working there was I built an app
        for UPS with near perfect QA reviews. UPS drivers in New York City still
        use it on a daily basis saving them up to hours a day.
        <br />
        <br />
        Management shakeups within USPS seized an ongoing contract negotiation
        causing funding to be pulled. 95% of the staff were laid off including
        the CEO. Otherwise, I would have loved to have stayed in that role.
      </p>
      <br />
      <br />
      <iframe
        title="vimeo-player"
        src={
          "https://player.vimeo.com/video/1063715574?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        }
        className="bg-black rounded-lg aspect-video w-full max-w-lg"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const SocketShockContent = () => {
  return (
    <div>
      <p>SocketShock is my LLC. Under the name, I run multiple endeavors:</p>
      <br />
      <p className="text-[.9rem]">
        <b>David Scholer</b> <br />
        - Contract work and freelance projects. <br />
        <b>ApiUFO</b> <br />
        - A series of many API focused applications I
        have deployed. These apps include a variety of marketing strategies
        including affiliate marketing and ads. <br />
        <b>HackRec</b> <br />
        - Video walk-throughs of popular programming
        libraries. This one has low monetary gain so I don&apos;t get around to
        working on this much. <br />
      </p>
    </div>
  );
};

const AgoraContent = () => {
  return (
    <div>
      <p>
        Agora was essentially a contract position based out of Vancouver, B.C. I
        worked on a website that sold physical goods from private sellers to
        customers, similar to Etsy for concert attire. I implemented the payment
        system (Stripe) and the shipping API (2Ship). My tenure at Agora
        didn&apos;t end well. They hit some funding issues and after a late
        paycheck that I had been waiting for for over three weeks and counting,
        I was obligated to refuse to work any further until I was paid. I left
        short-after.
        <br />
        <br />
        My time there wasn&apos;t all bad, however, as I did gain the
        experience and was able to implement some APIs for production.
      </p>
    </div>
  );
};

const VamplitudeContent = () => {
  return (
    <div>
      <p>
        Vamplitude is the name I previously used for writing freelance software
        and e-commerce applications before creating my LLC. During this time, I
        created many websites, website integrations, and applications for IOS,
        Android, Clover and Square.
      </p>
    </div>
  );
};
const LadroContent = () => {
  return (
    <div>
      <p>
        I ran a high volume coffee shop next to the Space Needle while finishing
        up school and getting my programming career rolling. While this
        isn&apos;t a programming specific job, it was absolutely vital to
        helping me expand my management experience and team leadership skills.
        Being a team mediator, training employees, organizing people, ensuring
        the employees were efficient but still maintained a healthy work/life
        balance were all hard skills that translate to any management position.
        <br />
        <br />
        This position was more small business owner than manager. I was
        responsible for hiring, training, and managing a team of 10+ employees
        in a fast-paced environment. I was responsible for all of the day-to-day
        operations of the store including: keeping track of all of the financial
        data, training, inventory, and scheduling. Utilizing my software skills,
        I wrote custom software to help me with inventory, scheduling, and waste
        that led to increased profit margins every quarter while I was there.
      </p>
    </div>
  );
};

const data = [
  {
    category: "SocketShock LLC",
    title: "Founder",
    src: "/socketshockicon.svg",
    note: "2024 - present",
    content: <SocketShockContent />,
  },
  {
    category: "Nimbio Labs",
    title: "Software Engineer II",
    src: "/nimbioicon.svg",
    note: "2022 - 2024",
    content: <NimbioContent />,
  },
  {
    category: "Agora",
    title: "Full Stack Developer",
    src: "/agora.png",
    note: "2022",
    content: <AgoraContent />,
  },
  {
    category: "Vamplitude",
    title: "Contract Software Engineer",
    src: "/vamplitude.svg",
    note: "2017 - 2022",
    content: <VamplitudeContent />,
  },
  {
    category: "Ladro",
    title: "Manager",
    src: "/ladroicon.svg",
    note: "2014 - 2020",
    content: <LadroContent />,
  },
];
