 
import "./lazyLoader.styles.css";

export default function LazyLoaderComponent() {
  return (
    <div className=" z-[300] w-full bg-black h-[100vh] flex justify-center text-center items-center relative">
      {/* From Uiverse.io by fanishah */}
      <svg className="w-0 gegga">
        <defs>
          <filter id="gegga">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="0 0 0 0 1  0 0 0 0 0  0 0 0 0 1  0 0 0 0.6 0"
              result="neonGlow"
            />
            <feBlend in="SourceGraphic" in2="neonGlow" mode="screen" />
          </filter>
        </defs>
      </svg>
      <svg className="snurra filter-[url(#gegga)] glow-svg" width="200" height="200" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="linjärGradient">
            <stop className="stopp1" offset="0"></stop>
            <stop className="stopp2" offset="1"></stop>
          </linearGradient>
          <linearGradient
            y2="160"
            x2="160"
            y1="40"
            x1="40"
            gradientUnits="userSpaceOnUse"
            id="gradient"
            xlinkHref="#linjärGradient"
          ></linearGradient>
        </defs>
        <path
          className="halvan animate-snurr1"
          d="m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64"
        ></path>
        <circle className="strecken animate-snurr1" cx="100" cy="100" r="64"></circle>
      </svg>
      <svg className="skugga blur-md opacity-30 absolute transform translate-x-[3px] translate-y-[3px]" width="200" height="200" viewBox="0 0 200 200">
        <path
          className="halvan"
          d="m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64"
        ></path>
        <circle className="strecken" cx="100" cy="100" r="64"></circle>
      </svg>
   
   
    </div>
  );
}
