import { fetchApi } from "@/utils/fetchApi";
import HTMLReactParser from "html-react-parser";

const ContactUs = async () => {
  const data = await fetchApi({ endpoint: `contentdata/21?offset=0&limit=1` });

  return (
    <div className="mx-auto container px-4 sm:px-6 sm:pt-8 lg:px-8 xl:pt-24 xl:pb-16">
      {data && data?.length > 0 ?
        data.map((item, index) => {
          return (
            item?.is_active && (
              <article key={"contact" + index} className="prose prose-h1:font-normal prose-h1:my-3 prose-p:my-2 max-w-none">{HTMLReactParser(item?.content_description)}</article>
            )
          );
        })
        : null}
    </div>
  );
}

export default ContactUs