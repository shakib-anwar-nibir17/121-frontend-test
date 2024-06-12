import { fetchApi } from "@/utils/fetchApi";

const AboutUs = async () => {
  const data = await fetchApi({ endpoint: `contentdata/12?offset=0&limit=1` });

  return (
    <>
      <div className="mx-auto container px-4 sm:px-6 sm:pt-8 lg:px-8 xl:pt-24 xl:pb-16">
        {data && data?.length > 0 ? data.map((item, index) => {
          return (
            item?.is_active && (
              <div
                dangerouslySetInnerHTML={{
                  __html: item?.content_description,
                }}
              ></div>
            )
          )
        })
          : null}
      </div>
    </>
  );
}

export default AboutUs