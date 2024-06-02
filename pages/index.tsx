import type { NextPage } from "next";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import CreatedWith from "../components/created-with";

import FrameComponent from "../components/footer";
import Testimonial from "../components/testimonial";
import FrequentlyAsked from "../components/frequentlyAsked";
import Image from "../components/image";

const AppLandingPage: NextPage = () => {
  return (
    <div className="w-full relative rounded-[50px] bg-white overflow-hidden flex flex-col items-start justify-start pt-10 pb-[41.3px] pr-[25px] pl-[175px] box-border gap-[115px] leading-[normal] tracking-[normal] text-left text-lg text-black font-clash-display mq750:gap-[57px] mq750:pl-[87px] mq750:box-border mq450:gap-[29px] mq450:pl-5 mq450:box-border">
      <FrameComponent3 />
      <div className="w-[638px] flex flex-row items-start justify-start relative max-w-full text-[106.4px]">
        <b className="h-[107px] w-[89px] absolute !m-[0] bottom-[62.02px] left-[-34px] leading-[106.38px] capitalize inline-block [transform:_rotate(-28deg)] [transform-origin:0_0] z-[6] mq450:text-13xl mq450:leading-[43px] mq1050:text-[53px] mq1050:leading-[64px]">
          a
        </b>
        <FrameComponent2 />
      </div>
      <FrameComponent1 />
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[179.7px] pr-0 pl-[432px] box-border max-w-full text-9xl mq750:pl-[108px] mq750:box-border mq450:pb-[117px] mq450:box-border mq1050:pl-[216px] mq1050:box-border">
        <div className="w-[562px] flex flex-col items-start justify-start gap-[33px] max-w-full mq750:gap-[16px]">
          <div className="w-[388px] flex flex-row items-start justify-start py-0 px-[63px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
            <h3 className="m-0 flex-1 relative text-inherit leading-[28px] capitalize font-semibold font-inherit z-[8] mq450:text-3xl mq450:leading-[22px]">
              fully customizable
            </h3>
          </div>
          <p className="m-0 self-stretch h-[140px] relative text-lg leading-[28px] capitalize font-medium text-gray-500 inline-block z-[8]">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
      <Testimonial/>
      <FrequentlyAsked/>
      
      <div className="w-[1090px] flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full">
        <CreatedWith />
      </div>
      <Image/>
      <div className="w-[1091px] flex flex-col items-end justify-start gap-[92px] max-w-full lg:gap-[46px] mq750:gap-[23px]">
        <FrameComponent />
       
      </div>
    </div>
  );
};

export default AppLandingPage;
