"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import Link from 'next/link';
import { Pagination } from 'swiper/modules';
import contentUrl from '../../lib/contentUrl';

const SliderAds = ({ data, height, width }) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="swiper"
      >
        {data.length > 0 && data.map((item) => (
          item?.is_active && item?.content_image?.length > 0 && item.content_image.map((content, index) => (
            <SwiperSlide key={index}>
              {item?.is_external_link ?
                <Link href={item?.page_link} >
                  <Image
                    className="object-cover h-full w-full"
                    src={contentUrl(content?.image_url)}
                    alt={content?.alter_text}
                    width={width}
                    height={height}
                    priority={false}
                  />
                </Link>
                :
                <Image
                  className="object-cover h-full w-full"
                  src={contentUrl(content?.image_url)}
                  alt={content?.alter_text}
                  width={width}
                  height={height}
                  priority="true"
                />
              }
            </SwiperSlide>
          ))
        ))}
      </Swiper>
      {/* <SwiperSlide key={index} className='swiper-wrapper'>
            <Image
              className="object-cover h-full w-full"
              src={contentUrl(item?.image_url)}
              alt={item?.image_name}
              width={width}
              height={height}
            />
          </SwiperSlide> */}
    </>
  )
}

export default SliderAds