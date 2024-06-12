import { Button } from "@/components/ui/button";
import contentUrl from "@/lib/contentUrl";
import HTMLReactParser from "html-react-parser";
import Link from "next/link";

export default function SpecialCollectionCard({ info }) {
  return (
    <div
      className="card bg-no-repeat max-h-[250px] sm:min-h-[280px] 2xl:min-h-[260px] bg-cover object-center overflow-hidden p-6 sm:p-3"
      style={{
        backgroundImage: `url(${info?.content_image?.length > 0
            ? contentUrl(info?.content_image[0].image_url)
            : ""
          })`,
      }}
    >
      <div className="py-3 pl-2">
        <p className="text-main-900 text-base font-medium mb-3">
          {info?.content_caption}
        </p>

        <h1 className="2xl:text-[32px] xl:text-2xl text-3xl sm:text-xl font-bold text-main-950 leading-6 2xl:leading-10">
          {info?.content_caption}
        </h1>

        <div className="text-black text-lg mt-3">
          {HTMLReactParser(info?.content_description)}
        </div>

        {/* <div className="mb-2">
          <div className="text-primary-950 pb-2"></div>
        </div> */}
        <Link
          href={info?.is_external_link ? info?.page_link : "/"}
          target="_blank"
          className={`${info?.is_external_link ? "visible" : "invisible"}`}
        >
          <Button className="rounded-full py-2 2xl:py-2.5 px-6">View</Button>
        </Link>
        {/* <Button className="rounded-full py-2 2xl:py-2.5 px-6 mt-3 2xl:mt-6">
          View
        </Button> */}
      </div>
    </div>
  );
}
