import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const BreadcrumbComponent = ({ category, subCategory, category_id }) => {

  return (
    <Breadcrumb
      className="pb-9 pt-[19px] text-[
      #01060D] px-4"
    >
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="md:text-lg text-base hover:underline" href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <p className="text-lg  text-[#01060D]">/</p>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <Link href={`/search-result?category=${category ?? ""}&category_id=${category_id ?? ""}&brand=""&brand_id=""&model=""&model_id=""&engine=""&engine_id=""`} className="text-lg hover:underline">
            {category}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <p className="text-lg text-black font-bold">/</p>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="text-lg text-black font-bold hover:underline">
            {subCategory}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
