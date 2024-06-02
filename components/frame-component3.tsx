import type { NextPage } from "next";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <header
      className={`w-[1198px] flex flex-row items-start justify-center max-w-full text-left text-8xs-2 text-black font-plus-jakarta-sans ${className}`}
    >
      <div className="w-[982px] flex flex-row items-start justify-between gap-[20px] max-w-full">
        <div className="w-[427px] flex flex-col  pt-[17px] box-border max-w-full">
          <div className="self-stretch flex flex-row gap-[40px]  max-w-full mq450:gap-[20px]">
            <div className="flex  right-[40px]  ">
            <img
      className=""
      loading="lazy"
      alt=""
      src="/frame.svg"
    />
            <img
                className="  "
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <b className=" font-extrabold inline-block min-w-[9px]">
                TM
              </b>
            </div>
            <nav className="m-0 flex-1 flex flex-row items-start justify-start gap-[24px] max-w-full text-left text-xl text-black font-clash-display mq750:hidden">
              <a className="[text-decoration:none] relative leading-[26px] capitalize font-bold text-tomato inline-block min-w-[60px] z-[8] hover:text-black hover:bg-pink-400">
                home
              </a>
              <a className="[text-decoration:none] hover:bg-pink-400 flex-1 relative leading-[26px] capitalize font-medium text-[inherit] inline-block min-w-[89px] whitespace-nowrap z-[8]">
                about us
              </a>
              <a className="[text-decoration:none] hover:bg-pink-400 relative leading-[26px] capitalize font-medium text-[inherit] inline-block min-w-[68px] z-[8]">
                pricing
              </a>
              <a className="[text-decoration:none] hover:bg-pink-400 flex-1 relative leading-[26px] capitalize font-medium text-[inherit] z-[8]">
                features
              </a>
            </nav>
          </div>
        </div>
        <button className="cursor-pointer  [border:none] py-4 px-[46px] bg-black w-[180px] rounded flex flex-row items-start justify-start box-border z-[8] hover:bg-blue-300 ">
          <div className="h-[60px] w-[180px] relative rounded bg-black hidden" />
          <a className="[text-decoration:none] flex-1 relative text-lg leading-[28px] capitalize font-medium font-clash-display text-white hover:text-black text-left z-[1]">
            download
          </a>
        </button>
      </div>
      
    </header>
  );
};

export default FrameComponent3;
