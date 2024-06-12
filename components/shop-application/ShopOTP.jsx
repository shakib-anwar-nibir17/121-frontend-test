import { Button } from "../ui/button";

const ShopOTP = ({ setStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };
  return (
    <div className="flex justify-center">
      <div className="md:max-w-[448px] max-w-[350px]">
        <div>
          <h2 className="font-bold text-black md:text-4xl text-2xl">
            Verify Account
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="w-full md:mt-[74px] mt-8">
          <div class="flex justify-center">
            <input
              class="w-full h-16 text-center border rounded-l-md"
              type="text"
              maxlength="1"
              pattern="[0-9]"
              inputmode="numeric"
              autocomplete="one-time-code"
              placeholder="____"
              required
            />
            <input
              class="w-full h-16 text-center border"
              type="text"
              maxlength="1"
              pattern="[0-9]"
              inputmode="numeric"
              autocomplete="one-time-code"
              placeholder="____"
              required
            />
            <input
              class="w-full h-16 text-center border"
              type="text"
              maxlength="1"
              pattern="[0-9]"
              inputmode="numeric"
              autocomplete="one-time-code"
              placeholder="____"
              required
            />
            <input
              class="w-full h-16 text-center border rounded-r-md"
              type="text"
              maxlength="1"
              pattern="[0-9]"
              inputmode="numeric"
              autocomplete="one-time-code"
              placeholder="____"
              required
            />
          </div>
          <div>
            <p className="text-lg text-black mt-2 mb-2">
              Enter the code sent to your mobile.
            </p>
          </div>
          <div>
            <Button className="w-full py-4 mt-10" type="submit">
              Verify
            </Button>
            <p className="text-lg text-black mt-2 mb-2 text-center">
              Haven’t received it? Resend it after - <span>56</span>s
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopOTP;
