import { fetchApi } from "@/utils/fetchApi";
import contentUrl from "../../lib/contentUrl";

const Discount = async () => {
  const data = await fetchApi({ endpoint: `contentdata/5?offset=0&limit=1` });

  return (
    <>
      {data && data?.length ? data.map((item, index) => {
        return item?.is_active &&
          (
            <div
              className="rounded-2xl bg-no-repeat bg-cover w-full py-4 md:py-6 xl:py-8 md:flex items-center justify-between px-8 overflow-hidden xl:my-12"
              style={{
                backgroundImage: `url(${item?.content_image?.length > 0 ? contentUrl(item?.content_image[0].image_url) : "/demo/promoImage.png"})`,
              }}
              key={`discount_${index}`}
            >
              <div className="pb-1.5">
                <p className="text-white font-normal text-center text-base md:text-left xl:text-xl pb-1.5">
                  {item?.content_caption}
                </p>
                <p className="text-base font-normal md:text-left text-center text-[#B3B4B6]">
                  Use discount code in checkout page
                </p>
              </div>

              <div className="flex justify-center space-x-2">
                <span className="w-6 h-6">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 35 23"
                  >
                    <path
                      fill="#fff"
                      d="M34.102 9.066c.4-.053.7-.394.7-.798V2.711c0-.998-.813-1.81-1.812-1.81H2.805c-.998 0-1.81.812-1.81 1.81v5.557c0 .404.298.745.698.798A2.865 2.865 0 0 1 4.172 11.9a2.865 2.865 0 0 1-2.479 2.834c-.4.053-.699.395-.699.798v5.557c0 .999.813 1.811 1.811 1.811H32.99c.999 0 1.811-.812 1.811-1.81v-5.558a.805.805 0 0 0-.699-.798 2.865 2.865 0 0 1-2.478-2.834 2.865 2.865 0 0 1 2.478-2.834Zm-.91 7.114v4.91c0 .108-.093.2-.202.2H12.787v-1.588a.805.805 0 0 0-1.61 0v1.588H2.805a.204.204 0 0 1-.201-.2v-4.91a4.484 4.484 0 0 0 3.178-4.28c0-1.99-1.325-3.72-3.178-4.279v-4.91c0-.109.092-.2.201-.2h8.372v1.588a.805.805 0 0 0 1.61 0V2.51H32.99c.11 0 .201.092.201.202v4.91a4.485 4.485 0 0 0-3.177 4.278c0 1.99 1.324 3.72 3.177 4.28ZM12.786 7.704v2.394a.805.805 0 0 1-1.61 0V7.704a.805.805 0 0 1 1.61 0Zm0 6v2.392a.805.805 0 0 1-1.61 0v-2.393a.805.805 0 0 1 1.61 0Zm8.572-4.851c0-1.44-1.17-2.61-2.61-2.61a2.613 2.613 0 0 0-2.609 2.61c0 1.439 1.17 2.61 2.61 2.61 1.439 0 2.61-1.171 2.61-2.61Zm-3.609 0a1 1 0 0 1 2 0 1 1 0 0 1-2 0Zm8.26-1.065-6.092 9.004a.804.804 0 1 1-1.333-.902l6.091-9.004a.805.805 0 0 1 1.333.902Zm-.137 4.55a2.613 2.613 0 0 0-2.61 2.61c0 1.44 1.171 2.61 2.61 2.61 1.439 0 2.61-1.17 2.61-2.61 0-1.439-1.171-2.61-2.61-2.61Zm0 3.61a1 1 0 0 1 0-2 1 1 0 0 1 0 2Z"
                    />
                  </svg>
                </span>
                <p className="text-white">{item?.discount_code}</p>
              </div>
            </div>
          )
      }) : null}
    </>
  );
}

export default Discount