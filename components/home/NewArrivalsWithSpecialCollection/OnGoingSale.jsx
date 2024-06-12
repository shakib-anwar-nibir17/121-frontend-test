import { Button } from "@/components/ui/button";
import contentUrl from "@/lib/contentUrl";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

export default function OnGoingSale({ info }) {
  return (
    <div className="card px-4 md:flex justify-center items-center xl:block">
      <div>
        <div className="text-center pt-6 xl:pt-10">
          <p className="text-primary-800 text-sm">{info?.content_caption}</p>
          <p className="text-main-950 font-bold  text-xl xl:text-3xl leading-[2.25] py-2">
            {info?.content_caption}
          </p>
          <div className="leading-[1.78] capitalize text-sm text-primary-950 pb-4 xl:pb-7">
            {HTMLReactParser(info?.content_description)}
          </div>
          <Link
            href={info?.is_external_link ? info?.page_link : "/"}
            target="_blank"
            className={`${info?.is_external_link ? "visible" : "hidden"}`}
          >
            <Button className="rounded-full py-2 px-6 bg-main-900">View</Button>
          </Link>
        </div>

        <div className="mx-auto w-64 py-2 h-auto pb-4">
          <Image
            className="w-36 h-36 sm:w-44 sm:h-44 mx-auto object-cover"
            width={100}
            height={100}
            src={`${info?.content_image?.length > 0
              ? contentUrl(info?.content_image[0].image_url)
              : ""
              }`}
            alt={info?.content_image[0].alter_text}
          />
        </div>
      </div>
    </div>
  );
}
