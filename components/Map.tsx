"use client";

import { MapIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Map() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div>
                <button
                    onClick={() => setOpen(true)}
                    className="rounded-lg overflow-hidden w-7 h-7 bg-[#c3af6c] flex"
                >
                    <MapIcon className="w-6 h-6 m-auto text-white rouned-xl" />
                </button>
            </div>

            {open &&
                createPortal(
                    <div
                        className="fixed top-0 left-0 z-10 flex w-full h-full p-8 overflow-y-auto bg-black bg-opacity-25"
                        onClick={() => setOpen(false)}
                    >
                        <div className="relative bg-white rounded-lg overflow-hidden m-auto max-w-full w-full h-[80%] md:w-[800px] md:h-[700px] md:py-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.691780178394!2d55.255038600000006!3d25.146109199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69093cf1905d%3A0xc204395cca339c7!2zSnVtZWlyYSBVbml2ZXJzaXR5INis2KfZhdi52Kkg2KzZhdmK2LHYpw!5e0!3m2!1sen!2sae!4v1678172659679!5m2!1sen!2sae"
                                className="w-full h-full overflow-hidden border-none rounded-lg"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                            <div className="absolute top-4 right-4">
                                <button
                                    type="button"
                                    className="inline-flex items-center p-2 text-sm font-medium text-center text-black bg-white border border-black rounded-full hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-200"
                                >
                                    <XMarkIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}
