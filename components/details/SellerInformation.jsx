import { Button } from "@/components/ui/button";
import { VscSend } from "react-icons/vsc";

const SellerInformation = ({ isOpen, handleOpenModal, data }) => {
  return (
    <div className="border rounded-2xl p-6">
      <p className="text-xl font-bold text-primary-900 mb-2">
        Contact With Seller
      </p>
      <p className="text-base font-normal text-[#4D5156]">
        Choose how many product you want to purchase & get guaranteed discount.
      </p>

      <div className="flex flex-col mt-9">
        <div className="flex items-center gap-3">
          <VscSend size={32} fill="#01060D" />
          <div>
            <p className="text-lg font-bold text-[#4D5156]">
              Seller Information
            </p>
            {!isOpen && (
              <p className="font-normal text-base text-[#4D5156]">
                +88 0 XXXXXXXXXX
              </p>
            )}
          </div>
        </div>
        {isOpen && (
          <>
            <div className="flex flex-col pl-20 gap-3 transition">
              <ol className="list-disc text-[#4D5156]">
                <li> {data?.supplier_name}</li>
                <li> {data?.mobile}</li>
                <li>{data?.email}</li>
                <li>{data?.website}</li>
              </ol>
            </div>
            <div>
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
                        className="py-2.5 px-4 w-full focus:outline-none"
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
                        className={`py-2.5 px-4 w-full h-full focus:outline-none bg-[#ECF4FF]`}
                        id="login_name"
                        type="text"
                        placeholder="Type your message here"
                      />
                    </div>
                  </div>
                </div>
                <Button type="submit" className={`w-full py-3 text-lg mt-4`}>
                  Request for Quotation{" "}
                </Button>
              </form>
            </div>
          </>
        )}
      </div>

      <Button
        onClick={handleOpenModal}
        className={`w-full py-3 text-lg ${isOpen ? "hidden" : "mt-28"}`}
      >
        Request for Quotation
      </Button>
    </div>
  );
};

export default SellerInformation;
