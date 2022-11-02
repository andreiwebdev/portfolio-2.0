import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProgrammingImg from "../images/programming.jpg";

type Props = {};

export default function About({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>

            <motion.div
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="-mb-20 md:mb-0 flex-shrink-0"
            >
                <Image
                    src={ProgrammingImg}
                    className="w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 mh:h-96 xl:w-[500px] xl:h-[600px]"
                    alt="Programming image HTML CSS JS"
                />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a{" "}
                    <span className="underline decoration-[#00d8ff]/50">
                        little
                    </span>{" "}
                    background
                </h4>
                <p className="text-sm">
                    I’m a Front-End Developer located in Bucharest, Romania.
                    Well-organised person, problem solver, independent employee
                    with high attention to detail. Fan of Video Games, MMA,
                    Music and TV Series. Interested in the entire frontend
                    spectrum and working on ambitious projects with positive
                    people.
                </p>
            </div>
        </motion.div>
    );
}
