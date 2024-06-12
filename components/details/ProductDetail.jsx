import BreadcrumbComponent from "@/components/details/BreadcrumbComponent";
import ProductImage from "@/components/details/ProductImage";
import RatingProduct from "@/components/details/RatingProduct";
import SubmitReview from "@/components/home/SubmitReview";
import Supplier from "@/components/home/Supplier";
import { CompareSvgComponent } from "@/components/icons/icons";
import { BDT_ICON } from "@/lib/constants";
import { CiHeart } from "react-icons/ci";

const ProductDetail = ({ data }) => {
  return (
    <main className="mx-auto container sm:px-6 sm:pt-8 lg:px-8">
      {/* breadcrumb */}
      <BreadcrumbComponent
        category={data?.category_name}
        category_id={data?.category_id}
        subCategory={data?.sub_category_name}
      />
      <div className="grid xl:grid-cols-12 gap-10">
        <div className="xl:col-span-8 2xl:col-span-9">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <ProductImage data={data} />

            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <p className="text-primary-900">{data?.tag_name}</p>
              <h1 className="text-2xl 2xl:text-3xl font-normal tracking-tight my-1 text-[#01060D]">
                {data?.product_name}
              </h1>

              <p className="text-lg text-[#4D5156]">
                Brand: {data?.brand_name}
              </p>

              <div className="mt-1.5 2xl:mt-3 flex items-center mb-5">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center mr-8">
                  <RatingProduct data={data} />

                  <p className="inline ml-2">
                    <strong className=" text-primary-950">
                      {Math.ceil(data?.average_rating ?? 0)}
                    </strong>
                    ({data?.rating_count})
                  </p>
                </div>
                <div>
                  <p className="text-lg text-primary-950">
                    {data?.review_count} reviews
                  </p>
                </div>
              </div>

              <div className="my-1.5 2xl:my-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-2xl tracking-tight text-gray-900">
                  <del className="text-[#CCCDCF] text-base">
                    {BDT_ICON} {data?.previous_price}
                  </del>{" "}
                  <span className="">
                    {BDT_ICON} {data?.new_price}
                  </span>
                </p>
              </div>

              <div className="flex items-center">
                <div>
                  <p className={`text-[${data?.stock_color}] text-lg`}>
                    {data?.stock > 0
                      ? `${data?.stock} Pieces In Stock`
                      : `${data?.stock}`}
                  </p>
                </div>
              </div>

              <div className="xl:mt-10 2xl:mt-14">
                <div className="flex items-center mb-8">
                  <div className="flex items-center mr-5">
                    <div className="mr-3">
                      <CompareSvgComponent />
                    </div>
                    <button>
                      <p className="text-[#01060D] text-lg">Add to compare</p>
                    </button>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3">
                      <CiHeart className="text-2xl text-[#808386]" />
                    </div>
                    <button>
                      <p className="text-[#01060D] text-lg">Add to wishlist</p>
                    </button>
                  </div>
                </div>
                <SubmitReview
                  sp_id={data?.supplierproduct_id}
                  // redirect={handleRedirect}
                />
              </div>
            </div>
          </div>
        </div>

        <Supplier s_id={data?.supplierproduct_id} />
      </div>
    </main>
  );
};

export default ProductDetail;
