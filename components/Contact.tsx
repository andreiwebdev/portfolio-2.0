import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function Contact({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:dandrei.web@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.subject} ${formData.message} ${formData.email}`;
    };

    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Contact Me
            </h3>

            <div className="flex flex-col space-y-10">
                {/* h3 */}
                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#00d8ff] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">+40736876529</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#00d8ff] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">dandrei.web@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#00d8ff] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">Bucharest, Romania</p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col space-y-2 w-fit mx-auto"
                >
                    <div className="flex space-x-2">
                        <input
                            {...register("name")}
                            placeholder="Name"
                            className="contact_input"
                            type="text"
                        />
                        <input
                            {...register("email")}
                            placeholder="Email"
                            className="contact_input"
                            type="email"
                        />
                    </div>

                    <input
                        {...register("subject")}
                        placeholder="Subject"
                        className="contact_input"
                        type="text"
                    />

                    <textarea
                        {...register("message")}
                        placeholder="Message"
                        className="contact_input"
                    />
                    <button
                        type="submit"
                        className="bg-[#00d8ff] py-5 px-10 rounded-md text-black font-bold text-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
