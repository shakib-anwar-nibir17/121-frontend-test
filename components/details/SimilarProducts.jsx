import ProductSmCard from "@/components/details/ProductSmCard";
import TitleWithViewAll from "@/components/home/TitleWithViewAll";
import { fetchApi } from "@/utils/fetchApi";

const SimilarProducts = async ({ supplier_product_id }) => {
  const data = await fetchApi({ endpoint: `get_similer_product/?supplier_product_id=${supplier_product_id}&offset=0&limit=4` });

  return (
    <div>
      <div className="container @container sm:px-8 px-4 overflow-hidden mb-8">
        <TitleWithViewAll title={"Similar Products"} />
        <hr />
      </div>

      <div className="container @container sm:px-8 px-4 pb-6 lg:pb-12 xl:pb-24 overflow-hidden">
        <div className="grid grid-cols-2 @md:grid-cols-2 @sm:grid-cols-2 @2xl:grid-cols-3 @6xl:grid-cols-4 gap-2 @md:gap-6 @lg:gap-8 @xl:gap-6">
          {data && data?.length > 0 ? data.map((item, index) => (
            <ProductSmCard key={`similer_${index}`} product={item} />
          )) : 'No data found!'}
        </div>
      </div>
    </div>
  );
}

export default SimilarProducts