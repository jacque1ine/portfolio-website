import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/Me.png";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="w-full md:h-screen p-2 flex items-center py-16"
      >
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-[#119DA4]">
              About
            </p>
            <h2 className="py-4">Who is Jacqueline?</h2>
            <p className="py-2 text-gray-600">
              Hi! I&apos;m Jacqueline, a software developer and{" "}
              <a
                className="underline"
                href="https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering"
                target="_blank"
                rel="noreferrer"
              >
                Systems Design Engineering Student
              </a>{" "}
              at the University of Waterloo.{" "}
            </p>
            <ul className="list-disc pl-5">
              <li className="pb-2">
                Passionate about web development, data, and machine learning.{" "}
              </li>
              <li className="pb-2">
                {" "}
                Worked at{" "}
                <a
                  className="underline"
                  href="https://www.rbcroyalbank.com/personal.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  RBC
                </a>{" "}
                as a full-stack developer co-op for two terms, and at{" "}
                <a
                  className="underline"
                  href="https://www.tieit.ai/"
                  target="_blank"
                  rel="noreferrer"
                >
                  TIEIT AI
                </a>{" "}
                as a Quality Assurance intern.{" "}
              </li>
              <li className="pb-2">
                Love to play ultimate frisbee, read, hike, and hang out with my
                family and friends!
              </li>
            </ul>

            <div className="pt-5">
              <i>Currently seeking Fall 2023 internships</i>
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
