("use client");
import { Carousel } from "flowbite-react";
import {
  DuelistImage,
  BeMightyCloneImage,
  LemingCorporateLawImage,
  FurnitureImage,
} from "../assets";

import React from "react";

function Portfolio() {
  const projects = [
    {
      title: "Duelist: Gaming Dashboard Project",
      link: "https://gaming-dashboard-enhancement-git-main-johnlouielgithub.vercel.app/",
      preview: DuelistImage,
      logoPreview: "",
    },
    {
      title: "Leming Corporate Law",
      link: "https://johnlouielgithub.github.io/Leming-Corporate-Law-Web/",
      preview: LemingCorporateLawImage,
      logoPreview: "",
    },
    {
      title: "BeMighty Web Clone",
      link: "https://johnlouielgithub.github.io/Be-Mighty-clone/",
      preview: BeMightyCloneImage,
      logoPreview: "",
    },
    {
      title: "Furniture Landing Page",
      link: "https://johnlouielgithub.github.io/html-projects-2023/",
      preview: FurnitureImage,
      logoPreview: "",
    },
  ];

  const leftArrow = () => {
    return (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    );
  };
  const rightArrow = () => {
    return (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    );
  };

  // eslint-disable-next-line no-undef
  const rightButton = React.createElement(
    "div",
    {
      className:
        "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10 hidden group-hover:inline-flex",
    },
    rightArrow()
  );

  const leftButton = React.createElement(
    "div",
    {
      className:
        "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10 hidden group-hover:inline-flex",
    },
    leftArrow()
  );

  const StaticCarousel = () => {
    return (
      <Carousel
        leftControl={leftButton}
        rightControl={rightButton}
        slide={false}
        className="hidden h-560 w-5/6"
      >
        {projects.map((project, key) => {
          return (
            <img
              key={key}
              alt="..."
              src={project.preview}
              className="h-full brightness-75 object-cover duration-200 ease-linear"
            />
          );
        })}
      </Carousel>
    );
  };

  const Project = () => {
    return projects.map((project, key) => {
      return (
        <div className="mb-4 last-of-type:mb-0 md:mb-0" key={key}>
          <div className="text-center flex flex-col justify-center items-center">
            <img
              src={
                project.preview ??
                "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="project preview"
              className="mb-4 w-full h-60 xl:h-80 object-cover duration-500"
            />
            <h4 className="mb-4 font-bold">{project.title}</h4>
            <a href={project.link} target="_blank" rel="noreferrer">
              <div className="visit-button">Visit</div>
            </a>
          </div>
        </div>
      );
    });
  };

  return (
    <div
      className="bg-gray-100 dark:bg-zinc-700 py-12 px-4 lg:px-20 xl:px-40"
      id="portfolio"
    >
      <h3>PORTFOLIO</h3>
      <h2 className="text-center text-2xl lg:text-3xl font-semibold my-4">
        MY PROJECT COLLECTION
      </h2>
      <p className="mb-4 md:text-center">
        Check out my diverse range of projects that showcase my front-end
        development skills.
      </p>
      <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:gap-8 md:auto-cols-auto lg:grid-cols-2 lg:grid-rows-2 lg:gap-4">
        {Project()}
      </div>
      <div className="group h-max flex justify-center">{StaticCarousel()}</div>
    </div>
  );
}

export default Portfolio;
