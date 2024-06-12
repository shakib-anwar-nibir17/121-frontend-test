import ApplyForm from "@/components/shop-application/ApplyForm";
const EShopApplication = ({ setStep }) => {
  return (
    <div className="w-full">
      <div className="md:mb-12 mb-6">
        <h1 className="md:text-4xl text-2xl text-black font-bold mb-5">
          Apply for eshop
        </h1>
        <p className="md:text-xl text-sm font-medium">
          You can reach us anytime via sellers@tools121.com
        </p>
      </div>
      <ApplyForm setStep={setStep} />
    </div>
  );
};

export default EShopApplication;
