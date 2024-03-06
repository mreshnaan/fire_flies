import HorizontalTitle from "./HorizontalTitle";
import { useState } from "react";
import axios from 'axios';


import { LoadingSpinner } from "./ui/spinner";
import { useToast } from "./ui/use-toast";
import { supabase } from "@/lib/supabase";
// import { identifyContact } from "@/lib/sendX";


function NewsLetter() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (email) {
      try {
        setLoading(true);
        const URL = "https://sendx.cryptocanary.xyz/contact"
        const {data} = await axios.post(URL, {email})
       
        await supabase.from("fireflies").upsert({
          email,
        });

        console.log("response -->", data)

        toast({
          title: "Success",
        });
        setEmail("");
        setLoading(false);
      } catch (error: any) {
        console.log("error -->", error.message)
        setLoading(false);
        toast({
          title: "Something went wrong",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="flex items-center w-full flex-col pt-[50px] pb-[50px] xl:pt-[150px] xl:pb-[100px] ">
      <div
        className={`xl:hidden w-full flex flex-row items-center justify-start gap-[20px] py-[50px]`}
      >
        <div className="w-[267px] h-[0px] opacity-30 border border-zinc-500"></div>
        <p
          className={
            "font-bold text-[10px] xl:text-[12px] text-[#505D65] uppercase  w-fit"
          }
        >
          newsletter
        </p>
      </div>
      <div className="flex flex-col xl:flex-row w-[330px] gap-8 xl:w-[1280px] 2xl:w-[1538px] xl:gap-[80px] 2xl:gap-[140px] ">
        <div className="flex flex-col items-center xl:flex-row xl:items-start gap-[30px] xl:gap-[60px] ">
          <HorizontalTitle
            title="newsletter"
            mainContainerClassName="gap-[60px] hidden xl:flex"
          />
          <div className="flex flex-col gap-[30px]">
            <h1 className=" text-[24px] leading-[31.2px] text-center xl:w-[550px] 2xl:w-[671px] xl:text-left text-[#505D65] 2xl:text-[48px] font-bold 2xl:leading-[62.4px] xl:text-[28px] xl:leading-[28px]">
              Fireflies $FFT Token<br></br> Newsletter
            </h1>
            <h1 className=" text-[40px] leading-[44px] text-center xl:text-left xl:w-[550px] 2xl:w-[671px] 2xl:text-[80px] text-[#505D65] 2xl:leading-[88px] uppercase font-bold xl:text-[60px] xl:leading-[68px]">
              <span className="text-[#F6484F]">Stay Informed:</span> Subscribe
              for the Latest on $FFT Token
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 xl:gap-[60px] ">
          <p className="text-[12px] leading-[18px] text-[#505D65] xl:w-[550px]  2xl:w-[671px] xl:text-[20px] xl:leading-[30px]">
            Dive into the evolving world of Fireflies and stay updated on all
            things $FFT Token. Subscribe to our dedicated newsletter for the
            latest news, insights, and updates on $FFT Token developments,
            including market trends, new use cases, and exclusive offers for
            token holders. Whether you're a seasoned token investor or new to
            the world of digital currencies, our newsletter is tailored to keep
            you informed and ahead of the curve.
          </p>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex items-center relative bg-[#F1F1F2] w-[330px] h-[50px]  pl-[24px]  xl:pl-[28px] xl:w-[510px] 2xl:w-[610px] xl:h-[70px] rounded-[50px] overflow-hidden">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="bg-[#F1F1F2] placeholder:text-[#505D65] xl:w-full xl:text-[20px] text-[16px] leading-[24px] text-justify xl:pr-[14rem] xl:leading-[30px] focus-visible:ring-0 border-none  rounded-none focus-visible:outline-none outline-none border-0 focus:ring-0"
                  placeholder="Your Email Address"
                  required
                />
                <button
                  type="submit"

                  className="absolute w-[135px] h-[50px] text-[12px] left-[205px] leading-[15.6px] xl:left-[307px] 2xl:left-[407px] xl:text-[18px] xl:leading-[23px] font-bold uppercase subscription-btn-bg xl:w-[207px] xl:h-[70px] xl:gap-[12px] rounded-[50px] text-[#FFF] flex items-center justify-center"
                >
                  {!loading && (
                    <svg
                      className="w-[24px] h-[24px] xl:w-[30px] xl:h-[30px]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M8.26885 6.68759L20.6968 2.54584C26.2739 0.68718 29.3041 3.73129 27.4596 9.30727L23.317 21.7325C20.5357 30.0892 15.9686 30.0892 13.1873 21.7325L11.9577 18.0445L8.26885 16.8151C-0.0896155 14.0344 -0.0896155 9.4829 8.26885 6.68759Z"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 17L17 12"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                  {loading && (
                    <LoadingSpinner className="text-white stroke-white" />
                  )}
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
          <p className="w-[330px] text-[12px] leading-[18px] xl:w-[500px]  2xl:w-[671px] text-[#505D65] text-justify xl:text-[20px] xl:leading-[30px]">
            Be at the forefront of digital currency innovation in travel –
            subscribe now and never miss a beat on the $FFT Token journey with
            Fireflies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
