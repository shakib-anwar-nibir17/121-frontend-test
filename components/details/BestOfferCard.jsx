import { Button } from "@/components/ui/button";
import { BsArrowRight } from "react-icons/bs";

export default function BestOfferCard({ isOpenOffer, handleOpenOffer }) {
  return (
    <div className="border rounded-2xl p-4 min-h-[227px] mt-6 bg-[#F3F3F3]">
      <h3 className="text-3xl font-medium text-[#FF1E7C] capitalize text-center mt-2">
        GET BEST DEALS
      </h3>
      <p className="text-center text-lg text-[#4D5156] mt-2">
        Request pricing from all sellers on our platform.{" "}
      </p>
      {isOpenOffer && (
        <h1 className="text-center font-bold text-main-950 my-2">
          How many product you want to purchase?
        </h1>
      )}
      {isOpenOffer && (
        <form>
          <div className="ml-8 pr-8 mt-4 transition">
            <div className="mb-5">
              <label
                htmlFor="login_name"
                className="text-main-950 inline-block mb-1.5 font-normal"
              >
                Product Quantity*
              </label>
              <div className="border border-gray-200  h-12 rounded-lg overflow-hidden">
                <input
                  className="py-2.5 px-4 w-full focus:outline-none bg-transparent"
                  id="login_name"
                  type="number"
                  placeholder="Type required quantity .. "
                />
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="login_name"
                className="text-main-950 inline-block mb-1.5 font-normal"
              >
                Request Note*
              </label>
              <div className="border border-gray-200 h-24 rounded-lg overflow-hidden">
                <textarea
                  className={`py-2.5 px-4 w-full h-full focus:outline-none bg-transparent`}
                  id="login_name"
                  type="text"
                  placeholder="Type your message here"
                />
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className={`w-full py-3 text-lg  
               bg-[#219F0C] hover:bg-[#219F0C]/90 mt-3`}
          >
            <p className="flex items-center gap-3">
              Get Best Offers <BsArrowRight size={24} className="mt-1" />
            </p>
          </Button>
        </form>
      )}
      <Button
        onClick={handleOpenOffer}
        className={`w-full py-3 text-lg  ${isOpenOffer ? "hidden" : "visible"}
               bg-[#219F0C] hover:bg-[#219F0C]/90 mt-3`}
      >
        <p className="flex items-center gap-3">
          Get Best Offers <BsArrowRight size={24} className="mt-1" />
        </p>
      </Button>
    </div>
  );
}
