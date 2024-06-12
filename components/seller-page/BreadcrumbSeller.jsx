import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
const BreadcrumbSeller = () => {
  return (
    <Breadcrumb
      className="pb-9 pt-[19px] text-[
    #01060D] px-4"
    >
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            className="md:text-lg text-base hover:underline"
            href="/"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <p className="text-lg  text-[#01060D]">/</p>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <Link href={`/#`} className="text-lg hover:underline">
            Seller Page
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <p className="text-lg text-black font-bold">/</p>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            className="text-lg text-black font-bold hover:underline"
          >
            Tesla Car Technology Ltd
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbSeller;
