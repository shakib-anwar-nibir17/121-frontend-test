'use client'
import HTMLReactParser from "html-react-parser";
import { useGetContentDataByIdQuery } from "../../features/api/product";
import AdsSliderSkeleton from "../element/AdsSliderSkeleton";
import { usePathname } from "next/navigation";

export default function Information() {
  const pathname = usePathname();
  const { data, error, isLoading } = useGetContentDataByIdQuery({ content_data_id: 6, limit: 1 });
  const hide = pathname === "/about-us" || pathname === "/contact-us";

  return (
    <div className={`${hide ? "hidden" : "block"} bg-[#f2f3f3] py-8 sm:py-16 2xl:py-24`}>
      <div className="container mx-auto px-4 sm:px-8">
        {/* <div id="footer_info"></div> */}
        {isLoading ? <AdsSliderSkeleton /> : data ?
          data.length > 0 && data.map(item => {
            if (item.is_active === true) {
              return <div key={item.id} className="prose max-w-none">
                {HTMLReactParser(item?.content_description)}
              </div>
            }
          }) : null
        }
      </div>
    </div>
  );
}
