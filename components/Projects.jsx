import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import gardenizeImg from "../public/assets/projects/Gardenize.png";
import writehereImg from "../public/assets/projects/writehere.png";
import btfImg from "../public/assets/projects/BackToTheFuture.jpeg";
import zaraImg from "../public/assets/projects/ZaraWebsite.jpg";
import yelpImg from "../public/assets/projects/Yelp.jpeg";
import carImg from "../public/assets/projects/UsedCar.jpeg";
import nbaImg from "../public/assets/projects/nba.png";

const Projects = () => {
  return (
    <>
      <div id="projects" className="w-full">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
          <p className="text-xl tracking-widest uppercase text-[#119DA4]">
            Projects
          </p>
          <h2 className="py-4">What I&apos;ve Built</h2>

          <p className="py-5 uppercase text-sm tracking-widest text-gray-600">
            Web Development
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Gardenize"
              backgroundImg={gardenizeImg}
              projectUrl="https://github.com/jacque1ine/Ellehacks-Gardenize"
              tech="React, Express, Firebase, Tailwind, Cohere, StabilityAI, OpenAI "
            />
            <ProjectItem
              title="write:here"
              backgroundImg={writehereImg}
              projectUrl="https://github.com/jacque1ine/Hackville-write-here"
              tech="React, Next.js, Tailwind, Google Cloud Vision, Vercel"
            />
            <ProjectItem
              title="NBA Sports Standing"
              backgroundImg={nbaImg}
              projectUrl="https://github.com/jacque1ine/SportsStanding"
              tech="HTML, CSS, Js, Bootstrap"
            />
            <ProjectItem
              title="Zara Redesigned"
              backgroundImg={zaraImg}
              projectUrl="https://github.com/jacque1ine/ZaraRedesigned"
              tech="HTML, CSS, Js"
            />
            <ProjectItem
              title="Back To the Future Zork"
              backgroundImg={btfImg}
              projectUrl="https://github.com/jacque1ine/BackToTheFutureZork"
              tech="Java"
            />
          </div>

          <h3>Data/Artificial Intelligence</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Yelp Sentiment Analysis (NLP)"
              backgroundImg={yelpImg}
              projectUrl="https://github.com/jacque1ine/Review-Sentiment-Analysis"
              tech="Python, Pandas, Numpy, Matplotlib, Seaborn, SciKitLearn, Spacy"
            />

            <ProjectItem
              title="Buying a Car"
              backgroundImg={carImg}
              projectUrl="https://github.com/jacque1ine/Buying-Used-Car"
              tech="Python, Pandas, Numpy, Matplotlib, Seaborn, SciKitLearn"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
