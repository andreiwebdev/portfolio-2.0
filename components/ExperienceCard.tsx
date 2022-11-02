import React from "react";
import Image from "next/image";

type Props = {
    role: string;
    company: string;
    started: string;
    ended: string;
    summary: Array<string>;
    stacks: Array<string>;
};

export default function ExperienceCard({
    role,
    company,
    started,
    ended,
    summary,
    stacks,
}: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] sm:w-[450px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 transition-opacity duration-200 overflow-hidden">
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">{role}</h4>
                <p className="font-bold text-2xl mt-1">{company}</p>
                <div className="flex space-x-2 my-2">
                    {stacks.map((stack) => (
                        <Image
                            className="h-10 w-10 "
                            src={stack}
                            width={10}
                            height={10}
                            alt="experience image"
                        />
                    ))}
                </div>
                <p className="uppercase py-5 text-gray-300">
                    {started} - {ended}
                </p>

                <ul className="list-disc space-y-4 ml-5 text-lg">
                    {summary.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}
