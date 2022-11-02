import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectImg1 from "../images/project-img1.png";
import ProjectImg2 from "../images/project-img2.png";
import ProjectImg3 from "../images/project-img3.png";
import ProjectImg4 from "../images/project-img4.png";
import ProjectImg5 from "../images/project-img5.png";
import ProjectImg6 from "../images/project-img6.png";

type Props = {};

export default function Projects({}: Props) {
    const projects = [
        {
            name: "Safle - Crypto Dashboard",
            text: "React.js, SCSS, JS, NPM, GIT",
            image: "images/project-img1.png",
            link: "https://app.getsafle.com/",
        },
        {
            name: "Cacique - Gambling Website",
            text: "jQuery, Bootstrap, SCSS, PHP, GIT",
            image: "images/project-img2.png",
            link: "https://cacique-casino.co/",
        },
        {
            name: "JerseyCasinos - Gambling Website",
            text: "jQuery, Bootstrap, SCSS, PHP, GIT",
            image: "images/project-img3.png",
            link: "https://jersey-casinos.com/",
        },
        {
            name: "Facibanionline - Gambling Website",
            text: "jQuery, Bootstrap, SCSS, PHP, GIT",
            image: "images/project-img4.png",
            link: "http://facibanionline.ro/",
        },
        {
            name: "Casino.com.ro - Gambling Website",
            text: "jQuery, Bootstrap, SCSS, PHP, GIT",
            image: "images/project-img5.png",
            link: "http://casino.com.ro/",
        },
        {
            name: "Supercazino - Gambling Website",
            text: "jQuery, Bootstrap, SCSS, PHP, GIT",
            image: "images/project-img6.png",
            link: "https://supercazino.ro/",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#00d8ff]/80">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen"
                    >
                        <motion.a
                            href={project.link}
                            target="_blank"
                            initial={{
                                y: -300,
                                opacity: 0,
                            }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src={`${project.image}`} alt="" />
                        </motion.a>

                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#00d8ff]/50">
                                    Project {index + 1} of {projects.length}:
                                </span>{" "}
                                <br />
                                {project.name}
                            </h4>

                            <p className="text-lg text-center">
                                {project.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#00d8ff]/20 left-0 h-[500px] -skew-y-12"></div>
        </motion.div>
    );
}
