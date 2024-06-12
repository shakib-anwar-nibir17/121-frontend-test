import Image from "next/image";
import Link from "next/link";

export default function Copyright() {
  return (
    <div className="border-t border-primary-200 bg-white">
      <div className="container px-4 sm:px-8 py-4 md:py-4 2xl:py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="order-last md:order-first">
            <p className="text-sm md:text-base 2xl:text-xl text-primary-600 font-normal leading-10">
              Copyright 2023 © <Link className='text-primary-900' href='/'>
                Tools121.
              </Link> All right reserved.
            </p>
          </div>
          <div className="my-2">
            <div className="">
              <Image
                className="w-full h-8"
                src={"/demo/payment.png"}
                width={100}
                height={100}
                alt="payment"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
