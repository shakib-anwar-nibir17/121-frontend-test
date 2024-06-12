"use client";
import ProductSmSkeleton from "@/components/element/ProductSmSkeleton";
import ShopAdsSkeleton from "@/components/element/ShopAdsSkeleton";
import ShopAdvertisement from "@/components/home/NewArrivalsWithSpecialCollection/ShopAdvertisement";
import ProductSmCard from "@/components/home/ProductSmCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useFetchProductsByFilterQuery } from "@/features/api/product";
import { Suspense, useState } from "react";

export default function Home({ params }) {
  console.log("params", params);
  const [inStock, setInStock] = useState(false);
  const [onSale, setOnSale] = useState(false);
  const [filterArg, setFilterArg] = useState({
    category: params.slug[0],
    sub_category: params.slug[2],
    offset_value: 0,
    limit_value: 20,
  });
  const { data, error, isLoading } = useFetchProductsByFilterQuery(
    {
      ...filterArg,
    },
    { skip: false }
  );

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

  return (
    <>

      {/* <nav
        className="flex mx-auto container snap-x overflow-x-auto scrollbar-none  px-4 pt-4 sm:px-6 md:pt-8 lg:px-8"
        aria-label="Breadcrumb"
      >
        <ol
          role="list"
          className="flex flex-shrink-0 items-center space-x-2 md:space-x-4"
        >
          <li>
            <div>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                Tools and Equipment
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <a
                href="#"
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                Gaskets and Seals
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <a
                href="#"
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current="page"
              >
                Tires & Wheels
              </a>
            </div>
          </li>
        </ol>
      </nav> */}

      <main className="mx-auto container px-4 sm:px-6 2xl:pt-8 lg:px-8 pb-12 mt-6 md:mt-0">
        <Suspense fallback={<ShopAdsSkeleton />}>
          <ShopAdvertisement />
        </Suspense>

        <div className="py-4">
          <div className="border-b flex justify-between pb-5">
            <div>
              <p className="text-primary-950 font-medium">
                Showing all products
              </p>
            </div>
            <div className=" hidden md:flex items-center space-x-8">
              {/* <div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="group inline-flex justify-center text-sm font-medium text-gray-900 hover:text-primary-950">
                    Sort by lastest
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
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div> */}
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
            {/* <div className="border-r max-w-xs w-full hidden md:block">
              <div className="md:pr-8 pt-8 space-y-5">
                <div className="border rounded-2xl">
                  <div className="border-b p-5">
                    <p className="text-gray-950 text-xl font-bold">
                      Filter by price
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="mb-4">
                      <Slider defaultValue={[33]} max={100} step={1} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="border rounded-lg text-xs border-gray-200 px-6 py-1">
                        100
                      </span>
                      <span className="border rounded-lg text-xs border-gray-200 px-6 py-1">
                        001
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-2xl">
                  <div className="border-b p-5">
                    <p className="text-gray-950 text-xl font-bold">
                      Product Status
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={inStock}
                          onClick={handleInStock}
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          In Stock
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={onSale}
                          onClick={handleOnSale}
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          On Sale
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-2xl">
                  <div className="border-b p-5">
                    <p className="text-gray-950 text-xl font-bold">
                      Filter by Brand
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Denso Corp
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Continental AG
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Hyundai Mobis
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Lear Corp
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="flex-1 md:pl-8 pt-6">
              <div className="grid mb-6 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 grid-cols-2 gap-4  2xl:grid-cols-5 md:gap-6">
                {error ? (
                  <>{`${error?.status} : ${error?.data?.detail}`}</>
                ) : isLoading ? (
                  <ProductSmSkeleton />
                ) : data ? (
                  data.length > 0 &&
                  data.map((item, index) => (
                    <ProductSmCard key={`latest_${index}`} product={item} />
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
