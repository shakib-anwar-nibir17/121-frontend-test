import ProductSmCard from "@/components/details/ProductSmCard";
import TitleWithViewAll from "@/components/home/TitleWithViewAll";
import { fetchApi } from "@/utils/fetchApi";

const RelatedProducts = async ({ supplier_product_id }) => {
  const data = await fetchApi({ endpoint: `get_related_product/?supplier_product_id=${supplier_product_id}&offset=0&limit=4` });

  return (
    <div>
      <div className="container @container sm:px-8 px-4 mb-8 overflow-hidden">
        <TitleWithViewAll title={"Related Products"} />
        <hr />
      </div>

      <div className="container @container sm:px-8 px-4 pb-6 lg:pb-12 xl:pb-24 overflow-hidden">
        <div className="grid grid-cols-2 @md:grid-cols-2 @sm:grid-cols-2 @2xl:grid-cols-3 @6xl:grid-cols-4 gap-2 @md:gap-6 @lg:gap-8 @xl:gap-6">
          {data && data?.length > 0 ? data.map((item, index) => (
            <ProductSmCard key={`related_${index}`} product={item} />
          )) : 'No data found!'}
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts