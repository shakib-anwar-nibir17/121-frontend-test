import { Button } from "@/components/ui/button";
import contentUrl from "@/lib/contentUrl";
import HTMLReactParser from "html-react-parser";
import Link from "next/link";

export default function SpecialCollectionCard({ info }) {
  return (
    <div
      className="card bg-no-repeat bg-cover object-center lg:object-top overflow-hidden  max-h-[219px] 2xl:min-h-[280px] p-3"
      style={{
        backgroundImage: `url(${info?.content_image?.length > 0
          ? contentUrl(info?.content_image[0].image_url)
          : ""
          })`,
        // backgroundImage: `url("/demo/category_bg_images.png")`,
      }}
    >
      <div className="py-3 pl-2">
        <p className="text-primary-900 text-base font-medium mb-3">
          {info?.content_caption}
        </p>

        <h1 className="2xl:text-[32px] xl:text-2xl text-3xl sm:text-xl  font-bold text-main-950 leading-10">
          {info?.content_caption}
        </h1>
        <div className="text-black text-lg mt-3">
          {HTMLReactParser(info?.content_description)}
        </div>
        {/* <div className="mb-4">
          <div className="text-primary-950 pb-2">
            {HTMLReactParser(info?.content_description)}
          </div>
        </div> */}

        <Link
          href={info?.is_external_link ? info?.page_link : "/"}
          target="_blank"
          className={`${info?.is_external_link ? "visible" : "invisible"}`}
        >
          <Button className="rounded-full py-2 px-6">View</Button>
        </Link>
        {/* <Button className="rounded-full py-2 px-6">View</Button> */}
      </div>
    </div>
  );
}
