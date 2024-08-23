"use client";

export default function LocationCard() {
  return (
    <div className="relative overflow-hidden w-[320px] h-[80px] cursor-pointer ring-1 ring-black/10 rounded-[20px] transition-all duration-300 ease-in-out group transform-gpu hover:shadow-[0px_16px_40px_-12px_rgba(0,0,0,0.40),0px_8px_16px_-4px_rgba(0,0,0,0.04),0px_2px_4px_0px_rgba(0,0,0,0.08);]">
      <div className="absolute z-30 flex flex-col gap-1 h-full w-full justify-center px-4 ">
        <div className="flex gap-1 items-center text-white ">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5084 2.98624C16.1964 2.69141 16.8919 3.38698 16.5971 4.07491L11.2374 16.5808C10.9371 17.2816 9.92989 17.2397 9.68881 16.5164L8.16444 11.9433C8.08191 11.6957 7.88764 11.5014 7.64006 11.4189L3.06695 9.89454C2.34369 9.65346 2.3018 8.64623 3.00253 8.34592L15.5084 2.98624Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <h3 className="text-[16px] font-semibold">Based in Spain</h3>
        </div>
        <p className="text-[13px] font-medium text-white opacity-70">
          Working Remotely
        </p>
      </div>
      <video
        className="h-full w-full object-cover object-left contrast-200 saturate-150 transition-all ease-in-out group-hover:scale-[1.5]"
        autoPlay
        loop
        muted
        src="https://videos.pexels.com/video-files/16567078/16567078-hd_1920_1080_30fps.mp4"
      ></video>
      <div
        className="absolute left-0 top-0 bottom-0 w-full backdrop-blur-[40px] bg-black/40 overflow-hidden rounded-[20px]"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 0.3) 100%)",
        }}
      />
    </div>
  );
}
