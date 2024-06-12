import Image from 'next/image'
import Link from 'next/link'
import contentUrl from "@/lib/contentUrl";

const SearchSuggestion = ({ showSearchSuggestions, searchProductData }) => {
    return (
        <div className={`${showSearchSuggestions ? "visible" : "hidden"} bg-white absolute top-9 xl:top-[3.2rem] w-[calc(100%+2px)] -left-[1px] z-10 pb-3 border-r border-b border-l border-primary-200 rounded-b-lg`}>
            <div className="border-t mx-2 h-2"></div>
            <div className="px-2 xl:px-8">
                {searchProductData?.slice(0, 10)?.map((product, i) => (
                    <Link
                        key={product.product_id + i}
                        href={`/details/${product?.supplierproduct_id}`}
                        className="flex items-center gap-4 xl:gap-6 py-1 xl:py-[6px] cursor-pointer"
                    >
                        <div className="w-8 h-8 flex-shrink-0 flex items-center">
                            <Image
                                src={product?.product_images?.length > 0 ? contentUrl(product?.product_images[0].image_url) : "http://gcdnb.pbrd.co/images/tilPZiWNfqP9.png"}
                                alt={product?.product_images?.[0]?.alter_text}
                                width={32}
                                height={32}
                                loading={'lazy'}
                                className=""
                            />
                        </div>
                        <p>{product.product_name}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SearchSuggestion