import React from "react";
import { motion } from "framer-motion";

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

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                src="https://via.placeholder.com/600x800"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 mh:h-96 xl:w-[500px] xl:h-[600px]"
            />

            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a{" "}
                    <span className="underline decoration-[#00d8ff]/50">
                        little
                    </span>{" "}
                    background
                </h4>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dicta tenetur dolorem quia maxime, dolorum, at vitae dolor
                    animi asperiores minima, id amet? Optio, unde excepturi
                    maiores delectus doloribus in veniam sequi dolores? Sapiente
                    fuga, vero fugit deleniti iusto commodi enim delectus eaque
                    maiores laudantium placeat ducimus, saepe necessitatibus
                    libero amet optio, iure aut suscipit rerum ab rem! Nihil,
                    nobis veritatis.
                </p>
            </div>
        </motion.div>
    );
}
