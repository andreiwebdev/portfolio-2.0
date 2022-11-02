import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

import HtmlImg from "../images/stack/html.svg";
import BootstrapImg from "../images/stack/bootstrap.svg";
import CssImg from "../images/stack/css.svg";
import JqueryImg from "../images/stack/jquery.svg";
import JsImg from "../images/stack/js.svg";
import PhpImg from "../images/stack/php.svg";
import ReactImg from "../images/stack/react.svg";
import SassImg from "../images/stack/sass.svg";
import TailwindImg from "../images/stack/tailwind.svg";
import WordpressImg from "../images/stack/wordpress.svg";
import NpmImg from "../images/stack/npm.svg";
import GitImg from "../images/stack/git.svg";

type Props = {};

export default function Experience({}: Props) {
    const companies = [
        {
            name: "DevX Digital",
            role: "React.js Developer",
            started: "Jan 2022",
            ended: "Present",
            summary: [
                "Worked alongside other developers of varying Development and React experience",
                "I actively participated on the front-end side in the development of a crypto exchange platform using an API sourced from the client",
                "I also participated in the development of a browser extension",
                "Bug Fixing",
            ],
            stacks: [
                ReactImg,
                JsImg,
                SassImg,
                GitImg,
                TailwindImg,
                HtmlImg,
                CssImg,
                NpmImg,
            ],
        },
        {
            name: "Ogooga",
            role: "Web Developer",
            started: "Apr 2021",
            ended: "Present",
            summary: [
                "I have developed many projects on the front-end side in the casino industry using bootstrap 4 or 5, jquery, vanilla js",
            ],
            stacks: [
                BootstrapImg,
                SassImg,
                JsImg,
                PhpImg,
                JqueryImg,
                GitImg,
                WordpressImg,
                NpmImg,
            ],
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Experience
            </h3>

            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#00d8ff]/80">
                {companies.map((company) => (
                    <ExperienceCard
                        role={company.role}
                        company={company.name}
                        started={company.started}
                        ended={company.ended}
                        summary={company.summary}
                        stacks={company.stacks}
                    />
                ))}
            </div>
        </motion.div>
    );
}
