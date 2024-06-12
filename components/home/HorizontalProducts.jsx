import HorizontalCard from "@/components/home/HorizontalCard";
import { fetchApi } from "@/utils/fetchApi";

const HorizontalProducts = async () => {
  const data = await fetchApi({ endpoint: `products_filter_price_range/?product_type=2&offset_value=0&limit_value=3`, cacheType: "no-store" });

  return (
    <>
      <div className="container sm:px-8 px-4 sm:py-12 md:py-24 overflow-hidden">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 sm:gap-7 gap-7">
          {data && data?.length ? data.map((item, index) => (
            <HorizontalCard key={'HorizontalProducts' + index} product={item} />
          )) : null}
        </div>
      </div>
    </>
  );
}

export default HorizontalProducts