import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, My name is Andrei Dragomir",
            "I-love-to-code.jsx",
            "<ContactMe />",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />

            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    Web Developer
                </h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#00d8ff" />
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="hero_btn">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="hero_btn">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="hero_btn">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="hero_btn">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
