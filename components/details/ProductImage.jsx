'use client';

import Image from "next/image";
import { FaSearchMinus, FaSearchPlus } from "react-icons/fa";
import contentUrl from "@/lib/contentUrl";
import { useCallback, useEffect, useState } from "react";

const ProductImage = ({ data, }) => {
    const [selectedImage, setSelectedImage] = useState([]);

    useEffect(() => {
        setSelectedImage([data?.product_images?.[0]]);
    }, [data]);

    const handleImageView = useCallback((p_image) => {
        setSelectedImage([p_image]);
    }, [selectedImage]);

    return (
        <div className="flex flex-col-reverse px-4">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <div
                    className="grid grid-cols-4 gap-6"
                    aria-orientation="horizontal"
                >
                    {data?.product_images &&
                        data?.product_images?.length > 0 &&
                        data?.product_images.map((p_image, index) => (
                            <button
                                id="tabs-2-tab-1"
                                className={`relative flex h-24 items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4 ${selectedImage?.[0]?.image_id === p_image?.image_id
                                    ? "pointer-events-none contrast-50"
                                    : "cursor-pointer"
                                    }`}
                                type="button"
                                key={index + p_image?.alter_text}
                                onClick={() => handleImageView(p_image)}
                            >
                                <span className="sr-only">Angled view</span>
                                <span className="absolute inset-0 overflow-hidden rounded-md">
                                    <Image
                                        src={contentUrl(p_image?.image_url)}
                                        width={100}
                                        height={100}
                                        alt={p_image?.alter_text}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </span>
                                <span
                                    className="ring-transparent pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                                    aria-hidden="true"
                                ></span>
                            </button>
                        ))}
                </div>
            </div>

            <div className="aspect-h-1 aspect-w-1 w-full border bottom-1">
                <div>
                    <Image
                        src={contentUrl(selectedImage?.[0]?.image_url)}
                        width={800}
                        height={400}
                        placeholder="blur"
                        blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcuPdGPQAHNALHiD7I4gAAAABJRU5ErkJggg==`}
                        alt="Angled front view with bag zipped and handles upright."
                        className="h-full w-full object-cover object-center sm:rounded-xl relative"
                    />
                    {/* search plus and search minus icon */}
                    <div className="flex gap-3 text-base md:text-2xl px-6 py-2 absolute right-0 bottom-2">
                        <FaSearchMinus className="text-main-200" />
                        <FaSearchPlus className="text-main-200" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductImage