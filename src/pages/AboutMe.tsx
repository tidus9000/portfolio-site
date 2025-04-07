import React, { useState } from "react";

interface AboutMeProps {
  className?: string;
}

const WorkHistoryEntry: React.FC<{
  title: string;
  company: string;
  time: string;
  details: string;
}> = ({ title, company, time, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="work-history-entry">
      <h3>{title}</h3>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Time:</strong> {time}</p>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide Details" : "Show Details"}
      </button>
      {isOpen && <p className="details">{details}</p>}
    </div>
  );
};

const EducationHistoryEntry: React.FC<{
  title: string;
  company: string;
  time: string;
  details: string;
}> = ({ title, company, time, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="work-history-entry">
      <h3>{title}</h3>
      <p><strong>Institution:</strong> {company}</p>
      <p><strong>Time:</strong> {time}</p>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide Details" : "Show Details"}
      </button>
      {isOpen && <p className="details">{details}</p>}
    </div>
  );
};

const AboutMe: React.FC<AboutMeProps> = ({ className }) => {
  return (
    <div className={className}>
      <p>
        Hi! My name is Arthur Mudney. I'm a programmer, Indie game developer, and all-around cool dude (or so my friend tells me). 
        I'm someone who has had a varied career and experience in games and in game dev with projects ranging from small student work 
        to pioneering metaverse experiences and even a self-published game released on Steam.
      </p>
      <h1>Work History</h1>
      <div className="work-history">
        <WorkHistoryEntry
          title="Unity and Unreal Developer, Tools developer"
          company="Condense"
          time="November 2020 - November 2024"
          details="After completing my MSc, I quickly found work at Condense, a startup working in organising live virtual events through pioneering live streaming volumetric video technology.
          As an employee of a small team, starting out at only 7 people, I had to engage in a wide variety of responsibilities over my 4 years. Starting out with the development of an Augmented Reality app for iOS and Android devices and refactoring our Unity live streaming Volumetric Video plugin. After this, I began the work on an early Unreal 4 version of the plugin which involved learning how to unpack and decode Draco encoded meshes, h264 encoded textures and WAV audio. When initial work on the Unreal plugin was done, I headed up development on various bespoke apps for different events including an experience at Glastonbury festival in 2022 and a Virtual Reality Live event with Filipino actor and Singer James Ried. It was towards the end of this period that Condense began work on our own app to host virtual live events from - Studio 5. Studio 5 launched on Steam Early Access in April 2023. I was in charge of a lot of core development including networking and the managing of various different venues within the app. I was also in charge of many aspects of the steam backend for the game and liaising with the marketing team to organise the Steam store page and updates. From here I moved on to tools development and led the development of our Unity editor plugin: The Venue builder. This was a set of tools that allowed level designers to design custom venues for hosting live events in Studio 5 and gave them the ability to interact with our backend systems to set up events and parameters that allowed them to change aspects of their venue remotely in real time via our web app. In October 2024, I was unfortunately given notice of redundancy and during my notice period, my work transitioned to taking the work that had been done on the Unreal 4 plugin and porting it to Unreal Engine 5.
"
        />
        <WorkHistoryEntry
          title="Producer, Programmer and Xbox One developer"
          company="Practical Yolk Games"
          time="October 2019 - August 2021"
          details="In October 2019, two friends and I decided to formalise our work on a project we had all been working on in our
spare time. We founded Practical Yolk Games Ltd to manage the
release of our debut title: “Shell Corp”. On this project, I oversaw much
of the organisation and outreach aspects with some parts of
Programming. My work on this project has given me a great deal of experience not only with the AGILE development process but also in my ability to manage multiple projects at once while maintaining a consistent level of work. Shell Corp is now released on Steam. This work was done in my spare time alongside my MSc in Commercial Games Development.
"
        />
        <WorkHistoryEntry
          title="Sales Advisor"
          company="O2"
          time="March 2017 - November 2020"
          details="Responsibilities: Identifying needs for customers to advise appropriate products, keeping up to date with prices and tariffs on offer, achieving store sales targets.
"
        />
        <WorkHistoryEntry
          title="Moment Banker"
          company="Barclays"
          time="July 2015 - September 2016"
          details="Responsibilities: Engaging with customers and using interview techniques to identify needs, utilising a wide knowledge of products offered, Keeping up to date with current software and developments within the company.
"
        />
        <WorkHistoryEntry
          title="Deputy Manager, Senior Sales Assistant"
          company="GAME"
          time="December 2010 - July 2015"
          details="Responsibilities:
Leading a team of well motivated staff to achieve sales goals with incredible success
Running day to day business on Manager’s days off
Ensuring objectives and tasks that Manager sets are completed in a timely fashion
Key holder to the store
Stockroom manager over Christmas trading period
Cashing up and safe counting
Serving customers both on tills and on shop floor
Mentoring staff on store procedures

Over the 5 years that I worked for Game, I gained substantial experience. Starting as a Christmas temp sales assistant, I moved up to senior and eventually moved to different stores as Deputy Manager within Game and learnt a great deal on how different teams and individuals operate in order to achieve goals and targets. Furthering my qualities in leadership and allowing me to introduce new ideas to those stores to help improve their targets further.
"
        />
        <WorkHistoryEntry
          title="Deputy Maanager"
          company="Pier Trading Ltd"
          time="2007 - 2011"
          details="This position was my first taste of the world of work, where I quickly rose through the ranks to become deputy manager. Responsibilities included serving customers, ordering stock, planning the rota and independently running a coffee hut."
        />
              <h1>Education History</h1>
      <div className="education-history">
        <EducationHistoryEntry
          title="MSc Commercial Games Development"
          company="University of the West of England"
          time="Graduated November 2020"
          details="After graduating from UWE Games Tech with a 2:1, I made the decision to continue my studies and experience in the field of game development. Through my experience in CGD, I worked with external clients on projects and prototypes as well as in a large group commercial project for the university. Extending and adding to all the skills gained from my Undergraduate degree. I wrote my dissertation on the subject of integrating rhythm mechanics into different genres of video games and how doing so can affect player enjoyment depending on the implementation and genre."
        />
        <EducationHistoryEntry
          title="BSc (Hons) Games Technology"
          company="University of the West of England"
          time="Graduated July 2019"
          details="In 2016, I made the decision to study games technology at UWE. I saw taking this course as my return to the games industry with a hope to go on to programming positions. The skills that I have learned at UWE have been invaluable with an emphasis on the experience of the game industry. From my studies I have learned skills in C#, C++, Python as well as Git. In addition to these skills, I also learnt a great deal on working both on my own and in the context of a team, through the AGILE development process. This has been reflected in my grades where I achieved an award of 2:1. Full details of my projects can be found on my portfolio site ArthurMuddiman.com"
        />
        <EducationHistoryEntry
          title="A-Levels"
          company="Hove Park Sixth Form College"
          time="2005-2008"
          details="A-Level: Maths, Computing, Philosophy AS Level: Physics"
        />
        <EducationHistoryEntry
          title="GCSEs"
          company="Hove Park School"
          time="2003-2005"
          details="7 GCSEs grade C and above, including Mathematics, Science and English"
        />
        <p>
  My CV can be downloaded from <a href="https://drive.google.com/file/d/1J292Ai6dtstMjdpttOenJYDz8fRF7g7m/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>
</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;