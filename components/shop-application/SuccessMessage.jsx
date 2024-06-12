import { GreenTickSVG } from "../icons/icons";

const SuccessMessage = () => {
  return (
    <div className="flex flex-col justify-center items-center md:mt-[75px]">
      <GreenTickSVG />
      <h1 className="text-4xl text-black font-bold mt-[44px]">
        Successfully Applied
      </h1>
      <p className="mt-4 text-lg text-center max-w-[301px]">
        We will verify your request & get back to you shortly.
      </p>
    </div>
  );
};

export default SuccessMessage;
