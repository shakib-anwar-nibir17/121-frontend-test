import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

export default function CategoryCard({ item }) {
  return (
    <>
      <Popover>
        <PopoverTrigger className="border-b hover:bg-primary-50 cursor-pointer px-4 py-1.5 2xl:px-6  xl:py-4 flex justify-between items-center w-full">
          <div className="flex items-center space-x-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 27.107 23.125"
                className="w-5 h-5 2xl:w-6 2xl:h-6"
              >
                <g data-name="Group 12187">
                  <g data-name="Group 12186">
                    <path
                      d="M15.544 0H4.86a.878.878 0 1 0 0 1.756h4.565a11.649 11.649 0 0 0-2.577 2.2H.878a.878.878 0 0 0 0 1.757h4.7a11.54 11.54 0 0 0 .531 12.53H3.616a.878.878 0 0 0 0 1.756H7.64a11.636 11.636 0 0 0 1.784 1.375H.969a.878.878 0 0 0 0 1.756h14.575a11.563 11.563 0 1 0 0-23.125Zm0 21.369a9.806 9.806 0 1 1 9.806-9.806 9.817 9.817 0 0 1-9.806 9.806Z"
                      data-name="Path 3312"
                    />
                  </g>
                </g>
                <g data-name="Group 12189">
                  <g data-name="Group 12188">
                    <path
                      d="M15.544 4.389a7.171 7.171 0 0 0-4.266 12.937.673.673 0 0 0 .11.08 7.16 7.16 0 0 0 8.313 0l.06-.04a1.75 1.75 0 0 0 .05-.04 7.171 7.171 0 0 0-4.266-12.937Zm.878 1.828a5.432 5.432 0 0 1 3.933 2.859l-2.274.739a3.094 3.094 0 0 0-1.659-1.207V6.217Zm.448 5.345a1.326 1.326 0 1 1-1.326-1.326 1.327 1.327 0 0 1 1.326 1.326Zm-2.2-5.345v2.391a3.094 3.094 0 0 0-1.659 1.207l-2.274-.739a5.432 5.432 0 0 1 3.927-2.859Zm-2.972 9.151a5.414 5.414 0 0 1-1.5-4.623l2.275.739v.077a3.066 3.066 0 0 0 .636 1.873Zm3.851 1.611a5.382 5.382 0 0 1-2.431-.577l1.4-1.934a3.075 3.075 0 0 0 2.052 0l1.4 1.934a5.384 5.384 0 0 1-2.426.58Zm3.851-1.611L18 13.435a3.066 3.066 0 0 0 .636-1.873v-.077l2.275-.739a5.414 5.414 0 0 1-1.5 4.623Z"
                      data-name="Path 3313"
                    />
                  </g>
                </g>
              </svg>
            </span>
            <span className="text-sm font-normal text-primary-950 xl:text-base 2xl:text-lg">
              {item.category_name}
            </span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-primary-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </PopoverTrigger>

        <PopoverContent className="bg-white p-0" side="right" align="start">
          {item?.sub_categories &&
            item?.sub_categories.length > 0 &&
            item?.sub_categories.map((sub_cat, index) => (
              <Link
                href={`/category/${item?.category_id}/sub-category/${sub_cat?.subcategory_id}`}
                className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-lg"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
                key={index}
              >
                {sub_cat?.sub_category_name}
              </Link>
            ))}
        </PopoverContent>
      </Popover>
    </>
  );
}
