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
        commercial use.
        <br /><br />I had a great time at Nimbio. It challenged me perfectly and I
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
      <ul className="list-item pl-5 space-y-3">
        <li>
          <h2>
            <strong>Site Reliability Engineer</strong>
          </h2>
          <p>
            One of my main jobs at Nimbio was the primary site reliability
            engineer where I created new features, fixed and refactored existing
            bugs, and modernized the codebase updating the framework and all
            dependencies.
          </p>
        </li>
        <li>
          <h2>
            <strong>Mobile Hardware Integration</strong>
          </h2>
          <p>
            Along with helping updating and maintaining our mobile app
            (React-Native), I wrote custom bridge modules to connect our React
            Native application with native device hardware (iOS, Android).
          </p>
        </li>
        <li>
          <h2>
            <strong>Cross Company APIs</strong>
          </h2>
          <p>
            One of my primary duties was working with other companies to build
            and integrate APIs to connect their services and products with ours.
            The two most prominent companies I worked alongside with were UPS
            and Alfred Inc.
          </p>
        </li>
        <li>
          <h2>
            <strong>Production Software For a Fortune 500 Company (UPS)</strong>
          </h2>
          <p>
            I had the opportunity at Nimbio to build an app for UPS with near
            perfect QA reviews. UPS drivers in New York City still use it daily
            saving them up to hours a day.
          </p>
        </li>
      </ul>
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
      <br />
      <br />
      <a
        className="text-white underline"
        href="https://nimbio.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nimbio.com
      </a>
    </div>
  );
};

const PipaBrokerContent = () => {
  return (
    <div>
      <p>
        PIPA Broker is a licensed independent insurance broker based in Seattle,
        Washington licensed across the US in 47 states. I was hired as the
        Principal Engineer to take an existing MVP and turn it into a production
        ready, scalable, enterprise system.
      </p>
      <br />
      <ul className="list-item pl-5 space-y-3">
        <li>
          <h2>
            <strong>AI Integration</strong>
          </h2>
          <p>
            Custom built AI integration using a microservice architecture
            including AWS Lex, AWS Bedrock, and Claude.
          </p>
        </li>
        <li>
          <h2>
            <strong>DevOPs</strong>
          </h2>
          <p>
            I am responsible for the entire DevOPs pipeline including CI/CD,
            testing, and deployment using GitHub Actions and AWS services.
          </p>
        </li>

        <li>
          <h2>
            <strong>Multiple Partners and Counting</strong>
          </h2>
          <p>
            Pipa has contracts with 4 partners and counting where we implement
            their APIs into our system.
          </p>
        </li>
        <li>
          <h2>
            <strong>SEO</strong>
          </h2>
          <p>
            This project is structured for SEO optimization utilizing Core Web
            Vitals, quality backlinks, site navigation, descriptive URLs,
            aria-labeling, and strategic use of internal linking. I work closely
            with an SEO team of specialist to follow the best practices to
            ensure that we are getting the most out of our SEO efforts.
          </p>
        </li>
      </ul>
      <br />
      <br />
      <a
        className="text-white underline"
        href="https://pipabroker.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        PipaBroker.com
      </a>
    </div>
  );
};

const SocketShockContent = () => {
  return (
    <div>
      <p>
        SocketShock is my LLC. Under the name I run multiple endeavors
        identifying specific industry problems and creating focused solutions.
      </p>
      <br />
      <ul className="list-item pl-5 space-y-3">
        <li>
          <h2>
            <strong>APIs</strong>
          </h2>
          <p>
            Over 100 APIs written using OpenAPI Specification standards to
            seemlessly integrate with front-end caching libraries.
          </p>
        </li>
        <li>
          <h2>
            <strong>SDKs</strong>
          </h2>
          <p>
            Creation of SDKs to assist in writing mobile, web, and back-end
            services for reliable integration.
          </p>
        </li>
        <li>
          <h2>
            <strong>End-to-end Deployment</strong>
          </h2>
          <p>
            Designed, programmed, and deployed tooling, services, and end-to-end
            full stack applications for clients and personal monetary gain.
          </p>
        </li>
        <li>
          <h2>
            <strong>Automation</strong>
          </h2>
          <p>
            Creation of a suite of shell and python scripts to autonomize
            redundant steps in the deployment process of mobile applications.
          </p>
        </li>
        <br />
        <br />
      </ul>
    </div>
  );
};

const AgoraContent = () => {
  return (
    <div>
      <p>
        Agora was a contract position based out of Vancouver, B.C. I worked on a
        website that sold physical goods from private sellers to customers,
        similar to Etsy for concert attire. I implemented the payment system
        (Stripe) and the shipping API (2Ship). My tenure at Agora didn&apos;t
        end well. They hit some funding issues and after a late paycheck that I
        had been waiting for for over three weeks and counting, I was obligated
        to refuse to work any further until I was paid. I left short-after.
        <br />
        <br />
        My time there wasn&apos;t all bad, however, as I did gain the experience
        and was able to implement some APIs for production.
      </p>
      <br />
      <br />

      <ul className="list-item pl-5 space-y-3">
        <li>
          <h2>
            <strong>E-commerce Web Application</strong>
          </h2>
          <p>
            Agora was a startup where I was the first hired employee. The first
            stage was building the web app which was similar to Etsy for
            festival attire and accessories.
          </p>
        </li>
        <li>
          <h2>
            <strong>Payment System</strong>
          </h2>
          <p>At Agora, I implemented the payment API using Stripe.</p>
        </li>
        <li>
          <h2>
            <strong>Shipment API</strong>
          </h2>
          <p>
            I worked with the team at 2Ship to implement their API into our
            system. Agora was a Canada based company so this was a little more
            involved as we had to deal with international shipping.
          </p>
        </li>
      </ul>
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
      <br />
      <br />
      <a
        className="text-white underline"
        href="https://vamplitude.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vamplitude.com
      </a>
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
      <br />
      <a
        className="text-white underline"
        href="https://caffeladro.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        CaffeLadro.com
      </a>
    </div>
  );
};

const data = [
  {
    category: "PipaBroker",
    title: "Principal Engineer",
    src: "/pipabroker.webp",
    note: "2025 - present",
    content: <PipaBrokerContent />,
  },
  {
    category: "Nimbio Labs",
    title: "Software Engineer II",
    src: "/nimbioicon.svg",
    note: "2022 - 2024",
    content: <NimbioContent />,
  },
  {
    category: "SocketShock LLC",
    title: "Founder",
    src: "/socketshockicon.svg",
    note: "2024 - present",
    content: <SocketShockContent />,
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
