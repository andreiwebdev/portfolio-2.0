import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

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

export default function Skills({}: Props) {
    const skills = [
        {
            logos: [ReactImg, JsImg, SassImg],
            directionLeft: false,
        },
        {
            logos: [TailwindImg, JqueryImg, GitImg],
            directionLeft: false,
        },
        {
            logos: [WordpressImg, PhpImg, BootstrapImg],
            directionLeft: true,
        },
        {
            logos: [NpmImg, CssImg, HtmlImg],
            directionLeft: true,
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex relative flex-col text-center md:text-left max-w-[2000px] min-h-screen justify-center xl:space-y-0 mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Skills
            </h3>

            {skills.map((skill) => (
                <Skill
                    logos={skill.logos}
                    directionLeft={skill.directionLeft}
                />
            ))}
        </motion.div>
    );
}
