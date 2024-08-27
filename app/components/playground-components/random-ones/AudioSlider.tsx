export default function AudioSlider() {
  return (
    <div className="relative flex flex-col scale-75 w-[430px] rounded-[40px] bg-[#232428]/90 border backdrop-blur-3xl border-white/10 hover:border-[#fd6c12]/30 overflow-hidden transition-colors ease-out duration-150">
      <div
        className="absolute top-0 bottom-0 left-0 right-0"
        style={{
          WebkitBackdropFilter: "blur(4px) brightness(100%)",
          backdropFilter: "blur(4px) brightness(100%)",
          boxShadow: "inset 0px 0px 34px 20px #232428",
        }}
      ></div>
      <div className="flex flex-col px-6 py-14 gap-8 z-20">
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-[-20px] left-[-20px] bg-[#fd6c12]/10 w-[290px] h-[290px] blur-[80px]"></div>
        <div className="flex items-center gap-2 text-[#FD6C12]">
          <span className="w-6 h-6">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 10 8"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Audio"
                transform="translate(0.000000, 0.500000)"
                stroke="currentColor"
                stroke-width="1"
                fill-rule="evenodd"
                stroke-linecap="round"
              >
                <line x1="8.5" y1="0.493135" x2="8.5" y2="6.50687" id="Line-5">
                  <animate
                    attributeType="XML"
                    attributeName="y1"
                    values="2;0;2"
                    keyTimes="0;0.5;1"
                    dur=".8s"
                    repeatCount="indefinite"
                  ></animate>
                  <animate
                    attributeType="XML"
                    attributeName="y2"
                    values="5;7;5"
                    keyTimes="0;0.5;1"
                    dur=".8s"
                    repeatCount="indefinite"
                  ></animate>
                </line>
                <line x1="6.5" y1="0.789016" x2="6.5" y2="6.21098" id="Line-4">
                  <animate
                    attributeType="XML"
                    attributeName="y1"
                    values="0;2;0"
                    keyTimes="0;0.5;1"
                    dur=".5s"
                    repeatCount="indefinite"
                  ></animate>
                  <animate
                    attributeType="XML"
                    attributeName="y2"
                    values="7;5;7"
                    keyTimes="0;0.5;1"
                    dur=".5s"
                    repeatCount="indefinite"
                  ></animate>
                </line>
                <line x1="4.5" y1="1.67582" x2="4.5" y2="5.32418" id="Line-3">
                  <animate
                    attributeType="XML"
                    attributeName="y1"
                    values="1;3;1"
                    keyTimes="0;0.5;1"
                    dur=".6s"
                    repeatCount="indefinite"
                  ></animate>
                  <animate
                    attributeType="XML"
                    attributeName="y2"
                    values="6;4;6"
                    keyTimes="0;0.5;1"
                    dur=".6s"
                    repeatCount="indefinite"
                  ></animate>
                </line>
                <line x1="2.5" y1="1.14678" x2="2.5" y2="5.85322" id="Line-2">
                  <animate
                    attributeType="XML"
                    attributeName="y1"
                    values="2;1;2"
                    keyTimes="0;0.5;1"
                    dur=".7s"
                    repeatCount="indefinite"
                  ></animate>
                  <animate
                    attributeType="XML"
                    attributeName="y2"
                    values="5;6;5"
                    keyTimes="0;0.5;1"
                    dur=".7s"
                    repeatCount="indefinite"
                  ></animate>
                </line>
                <line x1="0.5" y1="1.67582" x2="0.5" y2="5.32418" id="Line-1">
                  <animate
                    attributeType="XML"
                    attributeName="y1"
                    values="3;0;3"
                    keyTimes="0;0.5;1"
                    dur=".9s"
                    repeatCount="indefinite"
                  ></animate>
                  <animate
                    attributeType="XML"
                    attributeName="y2"
                    values="4;7;4"
                    keyTimes="0;0.5;1"
                    dur=".9s"
                    repeatCount="indefinite"
                  ></animate>
                </line>
              </g>
            </svg>
          </span>
          <p className="text-sm text-[#fd6c12]">Sound mode</p>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="flex items-center justify-center overflow-visible whitespace-nowrap"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            }}
          >
            <h1 className="text-white/40 text-center font-sans font-thin text-4xl w-[248px] flex-shrink-0">
              Enhance Vocals
            </h1>
            <h1 className="text-white text-center font-sans font-thin text-4xl w-[248px] flex-shrink-0">
              Bass Boost
            </h1>
            <h1 className="text-white/40 text-center font-sans font-thin text-4xl w-[248px] flex-shrink-0">
              Custom Sound
            </h1>
          </div>
          <div className="flex justify-between text-white">
            <svg
              width="2"
              height="16"
              viewBox="0 0 2 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M1 15L1 1"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
              />
            </svg>
            <svg
              width="2"
              height="16"
              viewBox="0 0 2 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M1 15L1 1"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
              />
            </svg>
            <svg
              width="2"
              height="16"
              viewBox="0 0 2 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M1 15L1 1"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
              />
            </svg>
            <svg
              width="2"
              height="16"
              viewBox="0 0 2 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M1 15L1 1"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
              />
            </svg>
            <svg
              width="2"
              height="16"
              viewBox="0 0 2 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M1 15L1 1"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <svg
              width="2"
              height="16"
              viewBox="0 0 2 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M1 15L1 1"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
              />
            </svg>
            <svg
              width="2"
              height="16"
              viewBox="0 0 2 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M1 15L1 1"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
              />
            </svg>
            <svg
              width="2"
              height="16"
              viewBox="0 0 2 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M1 15L1 1"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
              />
            </svg>
            <svg
              width="2"
              height="16"
              viewBox="0 0 2 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M1 15L1 1"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="h-10 pl-2.5 pr-5 py-2.5 bg-gradient-to-b from-[#020202] to-[#0b0b0c] rounded-[40px] border border-white/10 justify-between items-center inline-flex overflow-visible hover:border-[#fd6c12]/30 transition-colors ease-out duration-150">
            <div
              id="slider"
              className="w-[180px] h-5 relative bg-gradient-to-r from-[#fd6c12] to-[#fdf8e4] rounded-[40px] shadow-inner blur-[0.30px]"
              style={{
                boxShadow:
                  "0px 0px 3px 1px #E06841 inset, " +
                  "0px 0px 2px 0px rgba(255, 140, 0, 0.70), " +
                  "0px 0px 7px 0px rgba(255, 119, 70, 0.20), " +
                  "0px 0px 12px 0px rgba(255, 95, 42, 0.50), " +
                  "0px 0px 32px 0px rgba(255, 150, 115, 0.50)",
                filter: "blur(0.10px)",
              }}
            ></div>
            <div className="w-1.5 h-1.5 bg-[#333438] rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-[#333438] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
