import { fetchApi } from "@/utils/fetchApi";

const TermsAndServices = async () => {
  const data = await fetchApi({ endpoint: `contentdata/22?offset=0&limit=1` });

  return (
    <div className="">
      <div className="mx-auto container px-4 sm:px-6 sm:pt-8 lg:px-8 xl:pt-24 xl:pb-16">
        {data && data?.length ?
          data.map((item, index) => {
            return (
              item?.is_active && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: item?.content_description,
                  }}
                ></div>
              )
            );
          })
          : null}
      </div>
    </div>
  );
}

export default TermsAndServices