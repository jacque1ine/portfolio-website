import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/Me.png";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="w-full md:h-screen px-5 p-2 flex items-center py-16 "
      >
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-[#119DA4]">
              About
            </p>
            <h2 className="py-4">Who is Jacqueline?</h2>
            <p className="py-2 text-gray-600 font-medium">
              Hi! I&apos;m Jacqueline, a product-oriented software engineer:)
              <br></br>
              <br></br>
              I&aposm currently a Software Engineering Intern at{" "}
              <a
                className="no-underline font-bold hover:underline"
                href="https://www.linkedin.com/company/carta--/"
                target="_blank"
                rel="noreferrer"
              >
                Carta
              </a>
              , a Series G San Francisco-based equity management software
              company, and{" "}
              <a
                className="no-underline hover:underline"
                href="https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering"
                target="_blank"
                rel="noreferrer"
              >
                Systems Design Engineering
              </a>{" "}
              Student at the University of Waterloo.
            </p>
            <br></br>I am also...
            <ul className="list-disc pl-5">
              <li className="pb-2">
                Currently building pro-bono tech for non-profits with{" "}
                <a
                  className="no-underline hover:underline"
                  href="https://uwblueprint.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  UW Blueprint and leading a team of 12 developers as a Product
                  Manager.
                </a>
              </li>
              <li>
                Prioritizing reading more - favourite book is When Breathe
                Becomes Air, By Paul Kalanithi:&#41;{" "}
              </li>
              <li className="pb-2">
                Love to play ultimate frisbee and hike{" "}
                {"(would love to get some book recs:)"}
              </li>

              <li className="pb-2">
                {" "}
                Prev @{" "}
                <a
                  className="underline"
                  href="https://www.rbcroyalbank.com/personal.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  RBC
                </a>{" "}
                ,{" "}
                <a
                  className="underline"
                  href="https://www.tieit.ai/"
                  target="_blank"
                  rel="noreferrer"
                >
                  TIEIT AI
                </a>{" "}
                and{" "}
                <a
                  className="underline"
                  href="https://www.crunchbase.com/organization/pointclickcare"
                  target="_blank"
                  rel="noreferrer"
                >
                  PointClickCare
                </a>
                .
              </li>
            </ul>
            <div className="pt-5">
              <i>Currently seeking Winter 2025 internships</i>
            </div>
            {/* <Link href="/#projects">
              <p className="py-2 text-gray-600 underline cursor-pointer">
                Check out some of my latest projects.
              </p>
            </Link> */}
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={AboutImg} className="rounded-xl" alt="/" priority />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
