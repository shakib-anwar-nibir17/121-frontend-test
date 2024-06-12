import Image from 'next/image';
import contentUrl from "../../../lib/contentUrl";
import { fetchApi } from "@/utils/fetchApi";

const ShopAdvertisement = async () => {
    const data = await fetchApi({ endpoint: `contentdata/13?offset=0&limit=3`, revalidationTime: 3600 });

    return (
        <>
            <div className="w-full flex gap-8 snap-x overflow-x-auto scrollbar-none md:py-8">
                {data && data?.length ? data.map((item, index) => {
                    return item?.is_active && item?.content_image?.length > 0 && item?.content_image.map((content, index) => {
                        return (
                            <div
                                className="rounded-2xl bg-gray-100 bg-cover flex-shrink-0 w-full max-w-[469px]"
                                key={`shop_ads_${index}`}
                            >
                                <Image
                                    src={content?.is_active ? contentUrl(content?.image_url) : "http://gcdnb.pbrd.co/images/tilPZiWNfqP9.png"}
                                    alt={content?.alter_text}
                                    width={447}
                                    height={207}
                                    className="object-cover  h-[207px] w-full mx-auto rounded-2xl"
                                    priority={false}
                                />

                            </div>
                        )
                    })
                }) : null}
            </div>
        </>
    );
}

export default ShopAdvertisement