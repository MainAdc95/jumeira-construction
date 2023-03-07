"use client";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import TwitterIcon from "../icons/TwitterIcon";
import { useMemo } from "react";
import Map from "./Map";

export default function ReachMethods() {
    const links = useMemo(
        () => [
            {
                title: "Facebook",
                href: "https://www.facebook.com/jumeirauniversity",
                target: "_blank",
                icon: (
                    <div className="overflow-hidden bg-white rounded-lg">
                        <FacebookIcon className="text-[#c3af6c] w-7 h-7" />
                    </div>
                ),
            },
            {
                title: "Twitter",
                href: "https://twitter.com/JumeiraUni",
                target: "_blank",
                icon: (
                    <div className="overflow-hidden bg-white rounded-lg">
                        <TwitterIcon className="text-[#c3af6c] w-7 h-7" />
                    </div>
                ),
            },
            {
                title: "Linked In",
                href: "https://www.linkedin.com/company/jumeira-university/",
                target: "_blank",
                icon: (
                    <div className="overflow-hidden bg-white rounded-lg">
                        <LinkedinIcon className="text-[#c3af6c] w-7 h-7" />
                    </div>
                ),
            },
            {
                title: "Instagram",
                href: "https://www.instagram.com/jumeirauni/",
                target: "_blank",
                icon: (
                    <div className="overflow-hidden bg-white rounded-lg">
                        <InstagramIcon className="text-[#c3af6c] w-7 h-7" />
                    </div>
                ),
            },
            {
                title: "Email Address",
                href: "mailto: info@ju.ac.ae",
                target: "_blank",
                icon: (
                    <div className="rounded-lg overflow-hidden w-7 h-7 bg-[#c3af6c] flex">
                        <EnvelopeIcon className="w-6 h-6 m-auto text-white rouned-xl" />
                    </div>
                ),
            },
        ],
        []
    );

    return (
        <div className="flex gap-4">
            {links.map((link, i) => (
                <a key={i} href={link.href}>
                    {link.icon}
                </a>
            ))}

            <Map />
        </div>
    );
}
