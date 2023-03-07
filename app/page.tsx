// "use client";

import Image from "next/image";
import Link from "next/link";
import { SEO_DESCRIPTION } from "@lib/constants";
import ContactForm from "@components/ContactForm";
import ReachMethods from "@components/ReachMethods";
import ThreeScene from "@components/ThreeScene";

export default function Home() {
    return (
        <>
            <div className="relative md:h-screen h-[calc(80vh)] w-full">
                <ThreeScene />

                <div
                    className="absolute bottom-0 left-0 flex w-full h-full bg-bottom bg-no-repeat bg-contain -z-10 opacity-20 md:bg-offset-center"
                    style={{
                        backgroundImage: `url("/bg.svg")`,
                    }}
                />

                <div className="absolute left-0 flex w-full py-8 mx-auto mt-auto mb-24 -translate-y-1/2 pointer-events-none top-1/2">
                    <div className="container flex flex-col items-center mx-4 md:mx-auto">
                        <h2 className="md:text-4xl text-xl text-center bg-black text-[#c3af6c] mb-2 md:py-2 md:px-6 px-2 rounded-md opacity-80">
                            Get ready for a fresh new look! Our website is
                        </h2>
                        <h2 className="md:text-3xl text-lg text-center bg-black text-[#c3af6c] py-2 md:px-6 px-2 rounded-md opacity-80">
                            undergoing a major makeover.
                        </h2>
                    </div>
                </div>
            </div>

            <Link
                href="/"
                className="absolute md:top-10 md:left-10 top-5 left-5 -z-10 w-[100px] h-[105.86px] md:w-[160px] md:h-[169.4px]"
            >
                <Image
                    src="/logo.png"
                    alt="Jumeira"
                    fill
                    style={{
                        objectFit: "contain",
                    }}
                />
            </Link>

            <div className="absolute z-10 md:top-10 md:right-10 top-5 right-5">
                <ContactForm />
            </div>

            <div className="flex w-full py-4 bg-transparent border-t md:fixed md:z-10 md:bottom-5 md:py-0 md:border-t-0 border-t-white">
                <div className="container flex flex-col px-4 mx-auto">
                    <h2 className="tracking-normal text-center text-black text-md md:text-lg">
                        {SEO_DESCRIPTION}
                    </h2>

                    <div className="mx-auto mt-5">
                        <ReachMethods />
                    </div>
                </div>
            </div>
        </>
    );
}
