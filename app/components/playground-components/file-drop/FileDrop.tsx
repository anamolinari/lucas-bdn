"use client";

export default function FileDrop() {
  return (
    <div className="w-full h-full items-center justify-center text-center group transition duration-500 hover:duration-200 group-hover:duration-200">
      <div className="scale-[0.8] mt-2">
        <div className="flex justify-center isolate duration-500">
          <span className="relative -mr-6 left-1.5 top-3 -rotate-[17deg] group-hover:-translate-x-7 group-hover:-rotate-[30deg] group-hover:translate-y-0.5 transition duration-500 group-hover:duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="74"
              height="90"
              fill="none"
            >
              <g filter="url(#a)">
                <g filter="url(#b)">
                  <path
                    fill="url(#c)"
                    d="M43.224 5H21.8c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C9 11.08 9 13.32 9 17.8v46.4c0 4.48 0 6.72.872 8.432a8 8 0 0 0 3.496 3.496C15.08 77 17.32 77 21.8 77h30.4c4.48 0 6.72 0 8.432-.872a7.999 7.999 0 0 0 3.496-3.496C65 70.92 65 68.68 65 64.2V26.776c0-1.467 0-2.2-.166-2.891a6 6 0 0 0-.718-1.735c-.371-.605-.89-1.124-1.928-2.162L50.012 7.812c-1.038-1.038-1.557-1.557-2.162-1.928a6 6 0 0 0-1.735-.718C45.425 5 44.691 5 43.224 5Z"
                  />
                </g>
                <path
                  stroke="#D8D8D8"
                  d="M43.224 5H21.8c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C9 11.08 9 13.32 9 17.8v46.4c0 4.48 0 6.72.872 8.432a8 8 0 0 0 3.496 3.496C15.08 77 17.32 77 21.8 77h30.4c4.48 0 6.72 0 8.432-.872a7.999 7.999 0 0 0 3.496-3.496C65 70.92 65 68.68 65 64.2V26.776c0-1.467 0-2.2-.166-2.891a6 6 0 0 0-.718-1.735c-.371-.605-.89-1.124-1.928-2.162L50.012 7.812c-1.038-1.038-1.557-1.557-2.162-1.928a6 6 0 0 0-1.735-.718C45.425 5 44.691 5 43.224 5Z"
                />
                <path
                  stroke="#666"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M28.75 38.75h16.5m-12.5-5v-2m8.5 2v-2m-10.5 17.5h12.5a2 2 0 0 0 2-2v-11.5a2 2 0 0 0-2-2h-12.5a2 2 0 0 0-2 2v11.5a2 2 0 0 0 2 2Z"
                />
                <g filter="url(#d)">
                  <path
                    fill="#FDFDFD"
                    d="M47 5.452V10.2c0 4.48 0 6.72.872 8.432a8 8 0 0 0 3.496 3.496C53.08 23 55.32 23 59.8 23h4.748a5.992 5.992 0 0 0-.432-.85c-.371-.605-.89-1.124-1.928-2.162L50.012 7.812c-1.038-1.038-1.557-1.557-2.162-1.928a5.995 5.995 0 0 0-.85-.432Z"
                  />
                </g>
                <path
                  stroke="#D8D8D8"
                  d="M47 5.452V10.2c0 4.48 0 6.72.872 8.432a8 8 0 0 0 3.496 3.496C53.08 23 55.32 23 59.8 23h4.748a5.992 5.992 0 0 0-.432-.85c-.371-.605-.89-1.124-1.928-2.162L50.012 7.812c-1.038-1.038-1.557-1.557-2.162-1.928a5.995 5.995 0 0 0-.85-.432Z"
                />
              </g>
              <defs>
                <filter
                  id="a"
                  width="73"
                  height="89"
                  x=".5"
                  y=".5"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0.05 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1002_173"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0.08 0" />
                  <feBlend
                    in2="effect1_dropShadow_1002_173"
                    result="effect2_dropShadow_1002_173"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect2_dropShadow_1002_173"
                    result="shape"
                  />
                </filter>
                <filter
                  id="b"
                  width="58"
                  height="75"
                  x="8.5"
                  y="3.5"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx="1" dy="-1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  />
                  <feColorMatrix values="0 0 0 0 0.914339 0 0 0 0 0.914339 0 0 0 0 0.914339 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_1002_173" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx="1" dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  />
                  <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                  <feBlend
                    in2="effect1_innerShadow_1002_173"
                    result="effect2_innerShadow_1002_173"
                  />
                </filter>
                <filter
                  id="d"
                  width="19.794"
                  height="19.794"
                  x="46.5"
                  y="3.706"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx="1" dy="-1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  />
                  <feColorMatrix values="0 0 0 0 0.914339 0 0 0 0 0.914339 0 0 0 0 0.914339 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_1002_173" />
                </filter>
                <linearGradient
                  id="c"
                  x1="65"
                  x2="9"
                  y1="5"
                  y2="77"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F4F4F4" />
                  <stop offset="1" stop-color="#FDFDFD" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="relative z-10 group-hover:-translate-y-4 transition duration-500 group-hover:duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="74"
              height="90"
              fill="none"
            >
              <g filter="url(#a)">
                <g filter="url(#b)">
                  <path
                    fill="url(#c)"
                    d="M43.587 5H22.163c-4.48 0-6.72 0-8.431.872a8 8 0 0 0-3.497 3.496c-.872 1.711-.872 3.952-.872 8.432v46.4c0 4.48 0 6.72.872 8.432a8 8 0 0 0 3.497 3.496c1.71.872 3.951.872 8.431.872h30.4c4.48 0 6.721 0 8.432-.872a8 8 0 0 0 3.497-3.496c.871-1.711.871-3.952.871-8.432V26.776c0-1.467 0-2.2-.165-2.891a6 6 0 0 0-.719-1.735c-.37-.605-.89-1.124-1.927-2.162L50.375 7.812c-1.038-1.038-1.556-1.557-2.162-1.928a6 6 0 0 0-1.734-.718C45.789 5 45.054 5 43.587 5Z"
                  />
                </g>
                <path
                  stroke="#D8D8D8"
                  d="M43.587 5H22.163c-4.48 0-6.72 0-8.431.872a8 8 0 0 0-3.497 3.496c-.872 1.711-.872 3.952-.872 8.432v46.4c0 4.48 0 6.72.872 8.432a8 8 0 0 0 3.497 3.496c1.71.872 3.951.872 8.431.872h30.4c4.48 0 6.721 0 8.432-.872a8 8 0 0 0 3.497-3.496c.871-1.711.871-3.952.871-8.432V26.776c0-1.467 0-2.2-.165-2.891a6 6 0 0 0-.719-1.735c-.37-.605-.89-1.124-1.927-2.162L50.375 7.812c-1.038-1.038-1.556-1.557-2.162-1.928a6 6 0 0 0-1.734-.718C45.789 5 45.054 5 43.587 5Z"
                />
                <g filter="url(#d)">
                  <path
                    fill="#FDFDFD"
                    d="M47.363 5.452V10.2c0 4.48 0 6.72.872 8.432a8 8 0 0 0 3.496 3.496c1.712.872 3.952.872 8.432.872h4.748a5.992 5.992 0 0 0-.432-.85c-.37-.605-.89-1.124-1.927-2.162L50.375 7.812c-1.038-1.038-1.556-1.557-2.162-1.928a5.995 5.995 0 0 0-.85-.432Z"
                  />
                </g>
                <path
                  stroke="#D8D8D8"
                  d="M47.363 5.452V10.2c0 4.48 0 6.72.872 8.432a8 8 0 0 0 3.496 3.496c1.712.872 3.952.872 8.432.872h4.748a5.992 5.992 0 0 0-.432-.85c-.37-.605-.89-1.124-1.927-2.162L50.375 7.812c-1.038-1.038-1.556-1.557-2.162-1.928a5.995 5.995 0 0 0-.85-.432Z"
                />
                <path
                  stroke="#666"
                  stroke-linecap="round"
                  stroke-width="1.5"
                  d="m35.489 35.603.805-.805a5.142 5.142 0 0 1 7.272 7.271l-.807.808M31.97 39.12l-.81.81a5.142 5.142 0 0 0 7.272 7.271l.804-.803m-3.957-3.316 4.167-4.166"
                />
              </g>
              <defs>
                <filter
                  id="a"
                  width="73"
                  height="89"
                  x=".863"
                  y=".5"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0.05 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1002_183"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0.08 0" />
                  <feBlend
                    in2="effect1_dropShadow_1002_183"
                    result="effect2_dropShadow_1002_183"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect2_dropShadow_1002_183"
                    result="shape"
                  />
                </filter>
                <filter
                  id="b"
                  width="58"
                  height="75"
                  x="8.863"
                  y="3.5"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx="1" dy="-1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  />
                  <feColorMatrix values="0 0 0 0 0.914339 0 0 0 0 0.914339 0 0 0 0 0.914339 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_1002_183" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx="1" dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  />
                  <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                  <feBlend
                    in2="effect1_innerShadow_1002_183"
                    result="effect2_innerShadow_1002_183"
                  />
                </filter>
                <filter
                  id="d"
                  width="19.794"
                  height="19.794"
                  x="46.863"
                  y="3.706"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx="1" dy="-1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  />
                  <feColorMatrix values="0 0 0 0 0.914339 0 0 0 0 0.914339 0 0 0 0 0.914339 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_1002_183" />
                </filter>
                <linearGradient
                  id="c"
                  x1="65.363"
                  x2="9.363"
                  y1="5"
                  y2="77"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F4F4F4" />
                  <stop offset="1" stop-color="#FDFDFD" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="relative -ml-6 right-1.5 top-3 rotate-[17deg] group-hover:translate-x-7 group-hover:rotate-[30deg] group-hover:translate-y-0.5 transition duration-500 group-hover:duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="74"
              height="90"
              fill="none"
            >
              <g filter="url(#a)">
                <g filter="url(#b)">
                  <path
                    fill="url(#c)"
                    d="M43.224 5H21.8c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C9 11.08 9 13.32 9 17.8v46.4c0 4.48 0 6.72.872 8.432a8 8 0 0 0 3.496 3.496C15.08 77 17.32 77 21.8 77h30.4c4.48 0 6.72 0 8.432-.872a8 8 0 0 0 3.496-3.496C65 70.92 65 68.68 65 64.2V26.776c0-1.467 0-2.2-.166-2.891a6 6 0 0 0-.718-1.735c-.371-.605-.89-1.124-1.928-2.162L50.012 7.812c-1.038-1.038-1.557-1.557-2.162-1.928a6 6 0 0 0-1.735-.718C45.425 5 44.691 5 43.224 5Z"
                  />
                </g>
                <path
                  stroke="#D8D8D8"
                  d="M43.224 5H21.8c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C9 11.08 9 13.32 9 17.8v46.4c0 4.48 0 6.72.872 8.432a8 8 0 0 0 3.496 3.496C15.08 77 17.32 77 21.8 77h30.4c4.48 0 6.72 0 8.432-.872a8 8 0 0 0 3.496-3.496C65 70.92 65 68.68 65 64.2V26.776c0-1.467 0-2.2-.166-2.891a6 6 0 0 0-.718-1.735c-.371-.605-.89-1.124-1.928-2.162L50.012 7.812c-1.038-1.038-1.557-1.557-2.162-1.928a6 6 0 0 0-1.735-.718C45.425 5 44.691 5 43.224 5Z"
                />
                <g filter="url(#d)">
                  <path
                    fill="#FDFDFD"
                    d="M47 5.452V10.2c0 4.48 0 6.72.872 8.432a8 8 0 0 0 3.496 3.496C53.08 23 55.32 23 59.8 23h4.748a5.992 5.992 0 0 0-.432-.85c-.371-.605-.89-1.124-1.928-2.162L50.012 7.812c-1.038-1.038-1.557-1.557-2.162-1.928a5.995 5.995 0 0 0-.85-.432Z"
                  />
                </g>
                <path
                  stroke="#D8D8D8"
                  d="M47 5.452V10.2c0 4.48 0 6.72.872 8.432a8 8 0 0 0 3.496 3.496C53.08 23 55.32 23 59.8 23h4.748a5.992 5.992 0 0 0-.432-.85c-.371-.605-.89-1.124-1.928-2.162L50.012 7.812c-1.038-1.038-1.557-1.557-2.162-1.928a5.995 5.995 0 0 0-.85-.432Z"
                />
                <path
                  stroke="#666"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m35.542 38.5-1.911 1.91a.833.833 0 0 0 0 1.18l1.91 1.91m2.917-5 1.911 1.91a.833.833 0 0 1 0 1.18l-1.91 1.91m-6.667 4.375h10.416c.92 0 1.667-.746 1.667-1.667V35.792c0-.92-.746-1.667-1.667-1.667H31.792c-.92 0-1.667.746-1.667 1.667v10.416c0 .92.746 1.667 1.667 1.667Z"
                />
              </g>
              <defs>
                <filter
                  id="a"
                  width="73"
                  height="89"
                  x=".5"
                  y=".5"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0.05 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1002_178"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0.08 0" />
                  <feBlend
                    in2="effect1_dropShadow_1002_178"
                    result="effect2_dropShadow_1002_178"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect2_dropShadow_1002_178"
                    result="shape"
                  />
                </filter>
                <filter
                  id="b"
                  width="58"
                  height="75"
                  x="8.5"
                  y="3.5"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx="1" dy="-1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  />
                  <feColorMatrix values="0 0 0 0 0.914339 0 0 0 0 0.914339 0 0 0 0 0.914339 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_1002_178" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx="1" dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  />
                  <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                  <feBlend
                    in2="effect1_innerShadow_1002_178"
                    result="effect2_innerShadow_1002_178"
                  />
                </filter>
                <filter
                  id="d"
                  width="19.794"
                  height="19.794"
                  x="46.5"
                  y="3.706"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx="1" dy="-1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  />
                  <feColorMatrix values="0 0 0 0 0.914339 0 0 0 0 0.914339 0 0 0 0 0.914339 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_1002_178" />
                </filter>
                <linearGradient
                  id="c"
                  x1="65"
                  x2="9"
                  y1="5"
                  y2="77"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F4F4F4" />
                  <stop offset="1" stop-color="#FDFDFD" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        <h2 className="text-[#202020] font-medium mt-10">No files found</h2>
        <p className="font-sm text-[#666666] mt-3">
          Your search had no results. You can clear
          <br /> your search or add new documents.
        </p>
        <div className="space-x-2 mt-6 duration-500 group-hover:duration-200">
          <button className="text-[#202020] rounded-lg py-2 px-3 bg-white ring-1 ring-[#202020]/10 shadow-[0px_1px_2px_0px_rgba(32,32,32,0.10),inset_0px_-2px_2px_0px_rgba(32,32,32,0.05)] hover:bg-[#F5F5F5] transition duration-200 active:shadow-[inset_0px_2px_2px_0px_rgba(32,32,32,0.05)]">
            Clear search
          </button>
          <button className="text-white rounded-lg py-2 px-4 bg-[#202020] ring-1 ring-[#202020] shadow-[0px_2px_2px_0px_rgba(32,32,32,0.10),inset_0px_2px_4px_0px_rgba(255,255,255,0.20),inset_0px_-2px_4px_0px_rgba(255,255,255,0.20)] hover:bg-[#393939] transition active:shadow-none">
            New document
          </button>
        </div>
      </div>
    </div>
  );
}
