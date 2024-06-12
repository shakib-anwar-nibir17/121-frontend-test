import BreadcrumbComponent from "@/components/details/BreadcrumbComponent";
import ProductImage from "@/components/details/ProductImage";
import RatingProduct from "@/components/details/RatingProduct";
import RelatedProducts from "@/components/details/RelatedProducts";
import SimilarProducts from "@/components/details/SimilarProducts";
import SubmitReview from "@/components/home/SubmitReview";
import Supplier from "@/components/home/Supplier";
import { CompareSvgComponent } from "@/components/icons/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BDT_ICON } from "@/lib/constants";
import { fetchApi } from "@/utils/fetchApi";
import HTMLReactParser from "html-react-parser";
import { CiHeart } from "react-icons/ci";

const ProductDetails = async ({ params }) => {
  const fetchPromises = [
    fetchApi({ endpoint: `get_product_with_details/${params.slug}` }),
    fetchApi({ endpoint: `visitorproductreview/${params.slug}` }),
  ];

  const [product, productReviews] = await Promise.allSettled(fetchPromises);
  const data = product?.value;
  const product_review_data = productReviews?.value;
  const tabTriggerClass =
    "border-gray-900 text-gray-200 flex-1 whitespace-nowrap px-1 py-2 text-base font-bold data-[state=active]:text-gray-900 data-[state=active]:bg-transparent data-[state=active]:border-b-2";

  const tabData = [
    { value: "description", label: "Description" },
    { value: "specification", label: "Specification" },
    { value: "reviews", label: `Reviews (${data?.review_count ?? 0})` },
    { value: "faq", label: "FAQ" },
  ];

  // console.log({ data, product_review_data })
  return (
    <>
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
                        <p className="text-[#01060D] text-lg">
                          Add to wishlist
                        </p>
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

      {/* tabs for product description, reviews etc */}
      <div className="">
        <Tabs defaultValue="description" className="mt-[100px] my-8">
          <TabsList className="border-b border-gray-200 w-full">
            <div className="container mx-auto space-x-4 sm:space-x-10 sm:px-8">
              {tabData.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.value}
                  className={tabTriggerClass}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </div>
          </TabsList>

          <div className="container mx-auto px-4 py-[14px] sm:px-8">
            <TabsContent value="description">
              <article className="prose prose-h1:font-normal prose-h1:my-3 prose-p:my-2 max-w-none flex flex-col xl:gap-12">
                {/* {HTMLReactParser(data?.delivery_note ?? "")} */}
                {data?.product_description?.split("\r\n").map((line, index) => (
                  <p className="text-lg leading-9" key={index}>
                    {line}
                  </p>
                ))}
              </article>
            </TabsContent>
            <TabsContent value="specification">
              <article className="prose prose-h1:font-normal prose-h1:my-3 prose-p:my-2 max-w-none">
                {HTMLReactParser(data?.product_specification ?? "")}
              </article>
            </TabsContent>
            <TabsContent value="reviews">
              {product_review_data &&
                product_review_data.length > 0 &&
                product_review_data.map((reveiw, index) => (
                  <div key={index}>{reveiw?.review}</div>
                ))}
            </TabsContent>
            <TabsContent value="faq">
              <article className="prose prose-h1:font-normal prose-h1:my-3 prose-p:my-2 max-w-none">
                {/* {HTMLReactParser(data?.delivery_note ?? "")} */}
                {data?.delivery_note?.split("\r\n").map((line, index) => (
                  <p
                    className="flex flex-col py-1 text-lg leading-9"
                    key={index}
                  >
                    {line}
                  </p>
                ))}
              </article>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      <RelatedProducts supplier_product_id={params?.slug} />

      <SimilarProducts supplier_product_id={params?.slug} />
    </>
  );
};

export default ProductDetails;
