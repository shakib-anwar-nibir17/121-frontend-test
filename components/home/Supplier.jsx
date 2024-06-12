"use client";
import BestOfferCard from "@/components/details/BestOfferCard";
import SellerInformation from "@/components/details/SellerInformation";
import { useGetSupplierInfoQuery } from "@/features/api/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Supplier({ s_id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenOffer, setIsOpenOffer] = useState(false);
  const router = useRouter();
  const { data, error, isLoading } = useGetSupplierInfoQuery(
    { s_id: s_id },
    { skip: !isOpen }
  );

  const handleOpenModal = () => {
    const token = Cookies.get("authToken");
    if (token) {
      setIsOpen(true);
      setIsOpenOffer(false);
    } else {
      router.push(`/signin`);
    }
  };
  const handleOpenOffer = () => {
    const token = Cookies.get("authToken");
    if (token) {
      setIsOpen(false);
      setIsOpenOffer(true);
    } else {
      router.push(`/signin`);
    }
  };

  console.log(data);

  return (
    <>
      <div className="xl:col-span-4 2xl:col-span-3">
        {/* seller information */}
        <SellerInformation
          data={data}
          isOpen={isOpen}
          handleOpenModal={handleOpenModal}
        />
        {/* Get offers */}
        <BestOfferCard
          isOpenOffer={isOpenOffer}
          handleOpenOffer={handleOpenOffer}
        />
      </div>
    </>
  );
}
