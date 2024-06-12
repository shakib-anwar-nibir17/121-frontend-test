"use client";

import EShopApplication from "@/components/shop-application/EShopApplication";
import ShopOTP from "@/components/shop-application/ShopOTP";
import SuccessMessage from "@/components/shop-application/SuccessMessage";
import { useState } from "react";

const ShopApplicationPage = () => {
  const [step, setStep] = useState(1);

  return (
    <div>
      {step === 1 && <EShopApplication setStep={setStep} />}
      {step == 2 && <ShopOTP setStep={setStep} />}
      {step == 3 && <SuccessMessage />}
    </div>
  );
};

export default ShopApplicationPage;
