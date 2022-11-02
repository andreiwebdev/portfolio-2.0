import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
    directionLeft?: boolean;
    logos: Array<string>;
};

export default function Skill({ directionLeft, logos }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            {logos.map((skill) => (
                <motion.div
                    initial={{
                        x: directionLeft ? -200 : 200,
                        opacity: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex flex-col items-center justify-center rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 p-3 ml-2"
                >
                    <Image
                        className="rounded-full"
                        src={skill}
                        alt="skill icon"
                    />
                </motion.div>
            ))}
        </div>
    );
}
