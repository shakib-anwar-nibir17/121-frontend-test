import { BDT_ICON } from "@/lib/constants";
import Image from "next/image";
import contentUrl from "../../lib/contentUrl";
import Link from "next/link";
import { fetchApi } from "@/utils/fetchApi";

const QuotationProduct = async () => {
  const data = await fetchApi({ endpoint: `visitor_product_quotation/?offset_value=0&limit_value=10`, cacheType: "no-store" });

  return (
    <>
      {data ?
        data.length > 0 ? data.map((item, index) => (
          <div key={index} className="rounded-lg relative group border border-[#d9dadb] px-4 py-6 2xl:py-11 2xl:px-8 mb-8 sm:mb-4 md:mb-0">
            <div className="sm:flex items-center">
              <div className="w-32 h-32 flex items-center xl:w-36 xl:h-36 2xl:w-48 2xl:h-48 mx-auto flex-shrink-0">
                <Image
                  src={item?.product_images?.length > 0 ? contentUrl(item?.product_images[0].image_url) : "http://gcdnb.pbrd.co/images/tilPZiWNfqP9.png"}
                  alt={item?.product_name}
                  className="w-full h-full"
                  width={100}
                  height={100}
                  priority={false}
                />
              </div>

              <div className="sm:pl-5 md:pl-2 xl:pl-5 text-center sm:text-left">
                <p className="font-medium text-lg hover:underline 2xl:text-2xl text-slate-950 leading-7 line-clamp-1 pb-2 2xl:pb-4">
                  <Link href={`/details/${item?.supplierproduct_id}`}>
                    {item.product_name}
                  </Link>
                </p>
                <p className="py-1.5 text-primary-900">Auto Parts</p>
                <p className="flex items-center text-lg">
                  Price:
                  <span className="text-2xl ml-2 text-gray-950">{BDT_ICON} {item?.new_price}</span>{" "}
                </p>
              </div>
            </div>
          </div>
        )) : "No Quotation Product Available!" : null
      }
    </>
  );
}

export default QuotationProduct