"use client";
import ProductQuotationForm from "@/components/home/ProductQuotationForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRef } from "react";
import { ModalCameraSVG, UploadIconSVG } from "../icons/icons";

const AskForProducts = () => {
  const logoRef = useRef();
  return (
    <div>
      <Dialog>
        <DialogTrigger className="text-black text-xl inline-flex items-center gap-3 hover:text-black/80">
          Find Your Products Ask for Quote Here!
        </DialogTrigger>

        <DialogContent className="bg-white xl:max-w-[970px] overflow-y-scroll max-h-[80vh]">
          <DialogHeader className="text-2xl text-[#7E7E7E] mt-10 mb-6">
            Ask for Quotation
          </DialogHeader>
          <DialogDescription>
            <div className="px-8 w-full border-2 border-[#CCE4F0] bg-[#F5F9FF] rounded-lg">
              <div className="flex justify-center items-center gap-5 mt-24">
                <UploadIconSVG />
                <div>
                  <input ref={logoRef} type="file" hidden accept="image/*" />
                  <p className="text-xl">
                    Drag an image here or{" "}
                    <button
                      onClick={() => logoRef.current.click()}
                      className="text-xl underline text-main-900"
                    >
                      Upload a file
                    </button>
                  </p>
                </div>
              </div>
              <p className="text-lg text-center my-4">Or,</p>
              <div className="flex justify-center mt-11 mb-16">
                <ModalCameraSVG />
              </div>
            </div>
            <div className="px-8 mt-8 border border-slate-200 mb-7"></div>
            <ProductQuotationForm />
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AskForProducts;
