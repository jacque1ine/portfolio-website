import Image from "next/image";
import React from "react";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  return (
    <>
      <div
        onClick={() => {
          window.open = { projectUrl };
        }}
        className="h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#119DA4] to-[#709dff] hover:scale-105 ease-in duration-300"
        width={900}
        height={600}
      >
        <a href={projectUrl} target="_blank" rel="noreferrer">
          <Image
            className="w-full rounded-t-xl group-hover:opacity-10"
            src={backgroundImg}
            width={900}
            height={500}
            alt="/"
          />
          <div className="group-hover:opacity-10">
            <div className="px-6 pt-3 pb-1 font-bold text-xl mb-2">{title}</div>
            <div className="px-6 pb-2">
              {tech.map((title) => {
                return (
                  <span
                    key={title}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {title}
                  </span>
                );
              })}
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default ProjectItem;
