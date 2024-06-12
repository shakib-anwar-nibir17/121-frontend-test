import Link from "next/link";

export default function TitleWithViewAll({ title, href }) {
  return (
    <div className="flex justify-between items-center py-4 sm:py-5">
      <p className="font-bold text-base sm:text-xl xl:text-2xl text-slate-950">
        {title}
      </p>
      {href &&
        <Link
          href={href}
          className="text-sm sm:text-base xl:text-xl flex items-center space-x-2 font-semibold text-primary-800 group hover:text-primary-900"
        >
          <span>View All</span>
          <span className="w-6 sm:w-8">
            <svg
              className="w-full h-auto text-primary-800 group-hover:text-primary-900"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 27.561 14.123"
            >
              <g data-name="right-arrow">
                <g data-name="Group 12208">
                  <path
                    fill="currentColor"
                    stroke=""
                    strokeWidth=".5"
                    d="M27.081 6.603 20.943.465a.614.614 0 1 0-.865.865l5.089 5.095H.864a.614.614 0 0 0 0 1.228h24.3l-5.089 5.089a.614.614 0 1 0 .865.865l6.138-6.138a.614.614 0 0 0 .003-.866Z"
                    data-name="Path 3314"
                  />
                </g>
              </g>
            </svg>
          </span>
        </Link>
      }
    </div>
  );
}
