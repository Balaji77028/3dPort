import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

import { arrow } from "../assets/icons";

import React from "react";
import { experiences, skills, socialLinks } from "../constants";
const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello , I'm {}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Balaji
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Third-year Computer Science student from India, currently developing a
          user-friendly website. Passionate about coding and problem-solving.
          Aspiring full-stack web developer.
        </p>
      </div>
      {/* myskills */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
      </div>
      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div className="block-container w-20 h-20" key={skill.name}>
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Worked ON</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked on many projects based on diiferent
            technologies,leveling up my skills and teaming up with smart people
            here's the run down.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      {/* sociallinks */}
      {/* <hr className="border-slate-200 mt-5" /> */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Social Profiles</h3>
      </div>
      <div className="flex flex-wrap my-20 gap-16 justify-center items-center">
        {socialLinks.map((socialLink) => (
          <div className="lg:w-[400px] w-full" key={socialLink.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl  ${socialLink.theme}`} />
              <div className="btn-front rounded-xl   flex justify-center items-center">
                <img
                  src={socialLink.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain "
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col ">
              <h4 className="text-2xl font-poppins font-semibold">
                {socialLink.name}
              </h4>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={socialLink.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  visit
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200 mt-5" />
      <CTA />
    </section>
  );
};

export default About;
