"use client";
import ProductSmSkeleton from "@/components/element/ProductSmSkeleton";
import ProductSmCard from "@/components/home/ProductSmCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  useFetchProductsByFilterQuery,
  useImageSearchByUrlMutation,
  useImageSearchMutation,
  useTextSearchMutation,
} from "@/features/api/product";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home({ searchParams }) {
  const [inStock, setInStock] = useState(false);
  const [onSale, setOnSale] = useState(false);
  const [filterArg, setFilterArg] = useState({
    offset_value: 0,
    limit_value: 20,
  });
  const [searchResult, setSearchResult] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const filter_params = useSelector((state) => state.filterParams.params);
  const searchData = useSelector((state) => state.searchProduct);
  const [searchProduct, { data: searchByTextResult, error: searchByTextError, isLoading: isSearchByTextLoading }] = useTextSearchMutation();
  const [searchByImage, { data: searchByImageResult, error: searchByImageError, isLoading: isSearchByImageLoading }] = useImageSearchMutation();
  const [searchByImageUrl, { data: searchByImageUrlResult, error: searchByImageUrlError, isLoading: isSearchByImageUrlLoading }] = useImageSearchByUrlMutation();
  const filters = {
    category: searchParams.category_id,
    brand: searchParams.brand_id,
    model: searchParams.model_id,
    engine: searchParams.engine_id
  }
  const filtered_params = Object.fromEntries(
    Object.entries(filters)
      .filter(([k, v]) => v !== "" && !isNaN(v))
      .map(([k, v]) => [k, Number(v)])
  );
  const { data: searchByCategoryResult, error: isSearchByCategoryError, isLoading: isSearchByCategoryLoading } = useFetchProductsByFilterQuery(
    {
      ...filtered_params,
      ...filterArg,
    },
    { skip: !searchParams?.category_id && !searchParams?.brand_id && !searchParams?.model_id && !searchParams?.engine_id }
  );

  useEffect(() => {
    if (searchParams?.weblink) {
      searchByImageUrl({ weblink: searchParams?.weblink });
    } else if (searchParams?.search_type === "image_search") {
      searchByImage({ imageFile: searchData.searchImageFile });
    } else if (searchParams?.text_file === "" || typeof searchParams?.text_file === "string") {
      searchProduct({ text_file: searchParams?.text_file ?? "" })
    }
  }, [searchParams])

  useEffect(() => {
    if (searchParams?.weblink) {
      setIsDataLoading(isSearchByImageUrlLoading)
      setSearchResult(searchByImageUrlResult);
    } else if (searchParams?.search_type === "image_search") {
      setIsDataLoading(isSearchByImageLoading)
      setSearchResult(searchByImageResult);
    } else if (searchParams?.text_file === "" || typeof searchParams?.text_file === "string") {
      setIsDataLoading(isSearchByTextLoading)
      setSearchResult(searchByTextResult)
    } else if (searchParams?.category_id || searchParams?.brand_id || searchParams?.model_id) {
      setIsDataLoading(isSearchByCategoryLoading)
      setSearchResult(searchByCategoryResult)
    }
  }, [searchByTextResult, searchByImageResult, searchByImageUrlResult, searchByCategoryResult, isSearchByTextLoading, isSearchByImageLoading, isSearchByImageUrlLoading, isSearchByCategoryLoading])

  // console.log({ searchImage: searchData.searchImageFile, searchParams, filter_params })
  // console.log({ searchByTextResult, searchByImageResult, searchByImageUrlResult, searchByCategoryResult })
  // console.log({ isDataLoading, isSearchByTextLoading, isSearchByImageLoading, isSearchByImageUrlLoading, isSearchByCategoryLoading })

  const handleInStock = () => {
    setInStock(!inStock);
    if (inStock === false) {
      setFilterArg({
        ...filterArg,
        in_stock: 8,
      });
    }
    if (inStock === true) {
      const { in_stock, ...rest } = filterArg;
      setFilterArg(rest);
    }
  };

  const handleOnSale = () => {
    setOnSale(!onSale);
    if (onSale === false) {
      setFilterArg({
        ...filterArg,
        on_sale: 9,
      });
    }
    if (onSale === true) {
      const { on_sale, ...rest } = filterArg;
      console.log("rest", rest);
      setFilterArg(rest);
    }
  };

  const handleLimit = (limit) => {
    setFilterArg({
      ...filterArg,
      limit_value: limit,
    });
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      padding: "10px",
      cursor: "pointer",
      borderRadius: "5px",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none", // Hide the separator
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: "0", // Remove padding around the dropdown indicator
      // color: 'black', // Set the color of the arrow
      // fontSize: '18px', // Adjust the font size as needed
    }),
  };

  return (
    <>
      <main className="mx-auto container px-4 sm:px-6 2xl:pt-8 lg:px-8 pb-12 mt-6">
        <div className="py-4">
          <div className="border-b flex justify-between pb-5">
            <div>
              <p className="text-primary-950 font-medium">
                Showing search results
              </p>
            </div>
            <div className=" hidden md:flex items-center space-x-8">
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="group inline-flex justify-center text-sm font-medium text-gray-900 hover:text-primary-950">
                    <string className="font-semibold mr-2">Showing:</string>
                    <span>{filterArg?.limit_value} item</span>
                    <svg
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-900 group-hover:text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="bg-white">
                    <DropdownMenuItem onClick={() => handleLimit(10)}>
                      10
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleLimit(25)}>
                      25
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleLimit(50)}>
                      50
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleLimit(100)}>
                      100
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex-1 md:pl-8 pt-6">
              <div className="grid mb-6 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 grid-cols-2 gap-4  2xl:grid-cols-5 md:gap-6">
                {searchByTextError ? (
                  <>{`${searchByTextError?.status} : ${searchByTextError?.data?.detail}`}</>
                ) : isDataLoading ? (
                  <ProductSmSkeleton />
                ) : searchResult ? (
                  searchResult.length > 0 &&
                  searchResult.map((item, index) => (
                    <ProductSmCard key={`search_${index}`} product={item} />
                  ))
                ) : null}
              </div>

              {/* <div className="text-center">
                <Button
                  className="px-6 py-2"
                  onClick={() => handleLimit(filterArg?.limit_value + 20)}
                >
                  Load More
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
