"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import contentUrl from "../../lib/contentUrl";

const SliderMain = ({ data, height, width }) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        speed={5000}
        autoplay={{
          delay: 8000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="flex-1 mt-8 rounded-2xl h-full"
      >
        {data.length > 0 ? (
          data.map(
            (item) =>
              item?.is_active &&
              item?.content_image?.length > 0 &&
              item.content_image.map((content, index) => (
                <SwiperSlide key={index}>
                  {item?.is_external_link ? (
                    <Link href={item?.page_link}>
                      <div className="relative h-full lg:h-[510px] 2xl:h-[515px]">
                        <Image
                          className="object-cover h-full w-full"
                          src={contentUrl(content?.image_url)}
                          alt={content?.alter_text}
                          width={width}
                          height={height}
                          priority={true}
                          quality={25}
                        />
                      </div>
                    </Link>
                  ) : (
                    <div className="relative h-full lg:h-[510px] 2xl:h-[515px]">
                      <Image
                        className="object-cover h-full w-full"
                        src={contentUrl(content?.image_url)}
                        alt={content?.alter_text}
                        width={width}
                        height={height}
                        priority={true}
                        quality={25}
                      />
                    </div>
                  )}
                </SwiperSlide>
              ))
          )
        ) : (
          <SwiperSlide>
            <div className="relative h-full">
              <Image
                className="object-cover h-full w-full"
                src="/demo/main_slider.png"
                alt="logo"
                width={width}
                height={height}
                priority={true}
              />
              <div className="absolute inset-0 p-4 @xl:p-6 flex items-center">
                <div>
                  <Badge className="mb-1.5 @sm:py-1.5 @xl:mb-4">
                    Best Selling
                  </Badge>

                  <p className="text-sm @sm:text-base @xl:text-4xl font-light xl:pb-2 text-primary-950">
                    Get Your Car Parts
                  </p>
                  <p className="py-1 @xl:py-2 @2xl:py-0 text-xs @sm:text-base @xl:text-4xl @3xl:text-5xl font-bold xl:pb-8 text-primary-950">
                    From home
                  </p>
                  <p className="mb-2 @xs:mb-6 @3xl:mb-10 text-xs @xl:text-lg font-medium text-primary-950">
                    Offering up to 27% Discount
                  </p>

                  <Link href={"category"}>
                    <Button className="rounded-full text-xs py-1.5 font-medium @xs:text-xs @xl:text-base @xs:py-2 @xl:py-3 @lg:px-6 @xl:px-8">
                      Shop now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
};

export default SliderMain;
