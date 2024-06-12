import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import contentUrl from "../../../lib/contentUrl";
import { fetchApi } from "@/utils/fetchApi";

const LeftBanner = async () => {
  const data = await fetchApi({ endpoint: `contentdata/4?offset=0&limit=1`, cacheType: "no-store" });

  return (
    <>
      {data && data?.length ? data.map((item, index) => (
        item?.is_active && <Link href={`${item?.is_external_link ? item?.page_link : '/'}`} className={`${item?.is_external_link ? 'pointer-events-auto' : 'pointer-events-none'}`} key={`ad_${index}`}>
          <div className="relative">
            <Image
              width={1000}
              height={100}
              src={item?.content_image?.length > 0 ? contentUrl(item?.content_image[0].image_url) : "http://gcdnb.pbrd.co/images/tilPZiWNfqP9.png"}
              alt={item?.content_image?.[0]?.alter_text}
              className="object-cover rounded-xl border w-full mx-auto md:h-[300px] lg:h-[500px]"
              priority={false}
            />
            <Badge className="absolute top-3 right-3 text-gray-800">Advertisement</Badge>
          </div>
        </Link>
      )) : null}
    </>
  );
}

export default LeftBanner