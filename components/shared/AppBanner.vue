<template>
  <ReusablePatter>
    <div class="grid w-full grid-cols-2 gap-3 p-10 md:h-full md:grid-cols-6 md:grid-rows-3">
      <!--Years-->
      <ReusableCard class="relative flex items-center justify-center order-2 col-span-1 row-span-1 text-gray-600 bg-gray-200 shadow-xl rounded-3xl md:order-1 peer" title="Years" subtitle="experience" content="2" />
      <!--WEATHER-->
      <WeatherWidget class="flex items-center justify-center order-9 col-span-2 row-span-1 text-white shadow-xl md:col-span-1 rounded-3xl peer md:order-3"/>
      <!--EMPTY 2-->
      <div class="grid order-10 w-full grid-cols-2 col-span-1 grid-rows-2 row-span-1 gap-3 p-2rounded-3xl md:order-4">
        <div class="flex items-center justify-center text-white bg-white border border-gray-100 shadow-xl rounded-3xl ">
          <ReusableIcons :width="'80px'" :height="'80px'" :icon="'twitter'" :color="'gray'" />
        </div>
        <div class="flex items-center justify-center text-white bg-white border border-gray-100 shadow-xl rounded-3xl ">
          <ReusableIcons :width="'80px'" :height="'80px'" :icon="'linkedin'" :color="'gray'" />
        </div>
        <div class="flex items-center justify-center text-white bg-white border border-gray-100 shadow-xl rounded-3xl ">
          <ReusableIcons :width="'80px'" :height="'80px'" :icon="'instagram'" :color="'gray'" />
        </div>
        <div class="flex items-center justify-center text-white bg-white border border-gray-100 shadow-xl rounded-3xl ">
          <ReusableIcons :width="'80px'" :height="'80px'" :icon="'discord'" :color="'gray'" />
        </div>
      </div>
      <!--EDAD-->
      <ReusableCard class="relative flex items-center justify-center order-2 col-span-1 row-span-1 text-gray-600 bg-gray-200 shadow-xl rounded-3xl md:order-5" title="Age" subtitle="years old" content="23" />
      <!--TECH STACK-->
      <div
        class="flex items-center justify-center order-7 col-span-2 row-span-1 text-gray-600 duration-300 transform bg-gray-200 shadow-xl md:relative md:col-span-2 rounded-3xl">
        <div class="w-full h-full shadow-md rounded-3xl card-hover bg-gray-50 shadow-indigo-900/5"
          style="--x-rotation: 0.8476068806854309deg; --y-rotation: -6.7344108200621555deg;">
          <div class="w-full h-full p-6 rounded-md">
            <div class="flex items-center gap-2 leading-tight card-header"><svg class="w-5 text-gray-600"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path
                  d="M12.0002 4.99693V2.99609M16 5V3M8.00018 5V2.99609M12 21V19M16 21V19M8 21V19M19 16H21M19 8H21M19 12H21M3 12H5M3 16H5M3 8H5M15.0013 12.0003C15.0013 13.6578 13.6576 15.0015 12 15.0015C10.3425 15.0015 8.99878 13.6578 8.99878 12.0003C8.99878 10.3427 10.3425 8.99902 12 8.99902C13.6576 8.99902 15.0013 10.3427 15.0013 12.0003ZM6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19Z"
                  stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>Tech Stack</div>
            <div class="flex flex-row items-start w-full h-full gap-10 py-6 font-medium text-gray-500">
              <div class="flex flex-col gap-3 text-sm">Hardware<div
                  class="flex flex-col gap-2 px-1 text-xs font-normal text-gray-500">
                  <p class="flex items-center gap-2 leading-tight"><svg class="w-4 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V15C20 15.5523 19.5523 16 19 16H5C4.44772 16 4 15.5523 4 15V5Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
                      <path d="M2 16H22V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V16Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
                    </svg>MacBook Air M2</p>
                  <p class="flex items-center gap-2 leading-tight"><svg class="w-4 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M11 5H13M7 22H17C17.5523 22 18 21.5523 18 21V3C18 2.44772 17.5523 2 17 2H7C6.44772 2 6 2.44772 6 3V21C6 21.5523 6.44772 22 7 22Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>S23 Ultra</p>
                  <p class="flex items-center gap-2 leading-tight"><svg class="w-4 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5.125 13C5.125 13.4832 5.51675 13.875 6 13.875C6.48325 13.875 6.875 13.4832 6.875 13C6.875 12.5168 6.48325 12.125 6 12.125C5.51675 12.125 5.125 12.5168 5.125 13ZM17.125 13C17.125 13.4832 17.5168 13.875 18 13.875C18.4832 13.875 18.875 13.4832 18.875 13C18.875 12.5168 18.4832 12.125 18 12.125C17.5168 12.125 17.125 12.5168 17.125 13ZM13.125 13C13.125 13.4832 13.5168 13.875 14 13.875C14.4832 13.875 14.875 13.4832 14.875 13C14.875 12.5168 14.4832 12.125 14 12.125C13.5168 12.125 13.125 12.5168 13.125 13ZM9.125 13C9.125 13.4832 9.51675 13.875 10 13.875C10.4832 13.875 10.875 13.4832 10.875 13C10.875 12.5168 10.4832 12.125 10 12.125C9.51675 12.125 9.125 12.5168 9.125 13ZM5.125 17C5.125 17.4832 5.51675 17.875 6 17.875C6.48325 17.875 6.875 17.4832 6.875 17C6.875 16.5168 6.48325 16.125 6 16.125C5.51675 16.125 5.125 16.5168 5.125 17ZM17.125 17C17.125 17.4832 17.5168 17.875 18 17.875C18.4832 17.875 18.875 17.4832 18.875 17C18.875 16.5168 18.4832 16.125 18 16.125C17.5168 16.125 17.125 16.5168 17.125 17Z"
                        fill="currentColor" stroke="currentColor" stroke-width="0.75" stroke-linecap="square"></path>
                      <path
                        d="M10 17H14M6 9V6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 4.55228 18 4V3M3 9H21C21.5523 9 22 9.44772 22 10V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V10C2 9.44772 2.44772 9 3 9Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>Keychron K3 V2</p>
                </div>
                <div class="flex flex-col items-start h-full gap-2 pl-1 text-xs font-normal text-gray-500 md:pl-3">
  
                </div>
              </div>
              <div class="flex flex-col gap-3 text-sm">Software<div
                  class="flex flex-col items-start gap-3 sm:flex-row md:gap-2">
                  <div class="flex flex-col gap-3 px-1 text-xs font-normal text-gray-500">
                    <p class="flex items-center gap-2 leading-tight"><svg class="w-4 h-4 text-gray-600"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M8.66146 2C6.82146 2 5.32812 3.49333 5.32812 5.33333C5.32812 7.16852 6.81365 8.65884 8.64701 8.66664C6.81366 8.67445 5.32815 10.1648 5.32815 11.9999C5.32815 13.8399 6.82148 15.3333 8.66148 15.3333H11.9948V12.0205C12.0059 13.851 13.4949 15.3333 15.3281 15.3333C17.1681 15.3333 18.6614 13.8399 18.6614 11.9999C18.6614 10.1646 17.1757 8.67424 15.3422 8.66664C17.1757 8.65904 18.6614 7.16864 18.6614 5.33333C18.6614 3.49333 17.1681 2 15.3281 2H8.66146ZM15.3076 8.66667H11.9948V11.9794C12.0058 10.1557 13.4838 8.67769 15.3076 8.66667Z"
                          fill="currentColor"></path>
                        <path
                          d="M8.66148 22C10.5015 22 11.9948 20.5067 11.9948 18.6667V15.3333H8.66148C6.82148 15.3333 5.32815 16.8267 5.32815 18.6667C5.32815 20.5067 6.82148 22 8.66148 22Z"
                          fill="currentColor"></path>
                      </svg>Figma</p>
                    <p class="flex items-center gap-2 leading-tight"><svg stroke="currentColor" fill="currentColor"
                        stroke-width="0" viewBox="0 0 16 16" class="w-4 h-4 text-gray-600" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.8634 13.9195C10.6568 14.0195 10.4233 14.0246 10.2185 13.9444C10.1162 13.9044 10.021 13.843 9.93997 13.7614L4.81616 9.06268L2.58433 10.7656C2.37657 10.9241 2.08597 10.9111 1.89301 10.7347L1.17719 10.0802C0.941168 9.86437 0.940898 9.49112 1.17661 9.27496L3.11213 7.5L1.17661 5.72504C0.940898 5.50888 0.941168 5.13563 1.17719 4.91982L1.89301 4.2653C2.08597 4.08887 2.37657 4.07588 2.58433 4.2344L4.81616 5.93732L9.93997 1.23855C9.97037 1.20797 10.0028 1.18023 10.0368 1.15538C10.2748 0.981429 10.5922 0.949298 10.8634 1.08048L13.5399 2.37507C13.8212 2.5111 14 2.79721 14 3.11109V8H10.752V4.53356L6.86419 7.5L10.752 10.4664V8H14V11.8889C14 12.2028 13.8211 12.4889 13.5399 12.625L10.8634 13.9195Z">
                        </path>
                      </svg>VSCode</p>
                    <!--brave browser-->
                    <p class="flex items-center gap-2 leading-tight"><svg xmlns="http://www.w3.org/2000/svg" x="0px"
                        y="0px" width="1.3em" height="1.3em" viewBox="0,0,256,256">
                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                          stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                          font-family="none" font-weight="none" font-size="none" text-anchor="none"
                          style="mix-blend-mode: normal">
                          <g transform="scale(5.33333,5.33333)">
                            <path
                              d="M37,18h-26c-2.757,0 -5,2.243 -5,5v16c0,2.757 2.243,5 5,5h26c2.757,0 5,-2.243 5,-5v-16c0,-2.757 -2.243,-5 -5,-5z"
                              fill="#656565"></path>
                            <path
                              d="M37,41h-26c-2.209,0 -4,-1.791 -4,-4v-26c0,-2.209 1.791,-4 4,-4h26c2.209,0 4,1.791 4,4v26c0,2.209 -1.791,4 -4,4z"
                              fill="#ffffff"></path>
                            <path
                              d="M37,42h-26c-2.757,0 -5,-2.243 -5,-5v-26c0,-2.757 2.243,-5 5,-5h26c2.757,0 5,2.243 5,5v26c0,2.757 -2.243,5 -5,5zM11,8c-1.654,0 -3,1.346 -3,3v26c0,1.654 1.346,3 3,3h26c1.654,0 3,-1.346 3,-3v-26c0,-1.654 -1.346,-3 -3,-3z"
                              fill="#656565"></path>
                            <path
                              d="M15.006,37.991c-0.867,0 -1.647,-0.545 -1.914,-1.391c-0.062,-0.196 -0.092,-0.397 -0.092,-0.6v-4.9c0.002,-0.878 0.564,-1.643 1.4,-1.906l17.949,-6.714c1.1,-0.35 2.227,0.238 2.559,1.29c0.061,0.196 0.092,0.397 0.092,0.6v4.9c0,0.867 -0.55,1.625 -1.371,1.897l-17.979,6.724c-0.215,0.068 -0.432,0.1 -0.644,0.1zM33,24.369l-17.949,6.715l-0.051,4.916l17.949,-6.714l0.351,0.937l-0.3,-0.955v0.001z"
                              fill="#656565"></path>
                            <path
                              d="M32.7,11.051l-18,6.727c-0.416,0.131 -0.7,0.517 -0.7,0.953v4.538c0,0.436 0.284,0.822 0.7,0.953l19.061,5.7c0.1,-0.125 0.174,-0.269 0.216,-0.423c0.024,-0.178 0.032,-0.358 0.023,-0.537v-5.231c0,-0.436 -0.284,-0.822 -0.7,-0.953l-7.729,-1.778l7.729,-2.778c0.416,-0.131 0.7,-0.517 0.7,-0.953v-5.269c-0.003,-0.552 -0.453,-0.998 -1.005,-0.995c-0.1,0 -0.199,0.016 -0.295,0.046z"
                              fill="#ffffff"></path>
                            <path
                              d="M33.761,30.922c-0.096,0 -0.192,-0.014 -0.286,-0.042l-19.061,-5.7c-0.851,-0.267 -1.414,-1.034 -1.414,-1.911v-4.538c0,-0.877 0.563,-1.644 1.4,-1.907l17.95,-6.709c0.017,-0.007 0.034,-0.013 0.053,-0.018c0.193,-0.06 0.42,-0.063 0.596,-0.091c1.099,0 1.995,0.891 2.001,1.99v5.274c0,0.877 -0.563,1.644 -1.4,1.907l-4.485,1.613l4.41,1.014c0.913,0.283 1.475,1.05 1.475,1.927v5.231c0.011,0.199 0,0.443 -0.033,0.679c-0.006,0.041 -0.015,0.081 -0.025,0.121c-0.079,0.29 -0.215,0.556 -0.402,0.789c-0.194,0.238 -0.482,0.371 -0.779,0.371zM33,12.006l-17.95,6.708l-0.05,4.555l18.001,5.382l-0.001,-4.92l-7.653,-1.756c-0.432,-0.1 -0.747,-0.472 -0.773,-0.915c-0.026,-0.443 0.242,-0.851 0.66,-1l7.729,-2.778z"
                              fill="#656565"></path>
                          </g>
                        </g>
                      </svg>Sublime</p>
                  </div>
                  <div class="flex flex-col gap-3 px-1 text-xs font-normal text-gray-500">
                    <p class="flex items-center gap-2 leading-tight"><svg xmlns="http://www.w3.org/2000/svg" x="0px"
                        y="0px" width="1.3em" height="1.3em" viewBox="0,0,256,256">
                        <g fill="#787878" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                          stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                          font-family="none" font-weight="none" font-size="none" text-anchor="none"
                          style="mix-blend-mode: normal">
                          <g transform="scale(10.66667,10.66667)">
                            <path
                              d="M15.46875,1.5l-12.48828,0.5c-0.00978,0.00036 -0.01955,0.00102 -0.0293,0.00195c-0.00717,0.00057 -0.01433,0.00122 -0.02148,0.00195c-0.52313,0.03692 -0.92889,0.47166 -0.92969,0.99609v13.89453c0,0.59247 0.17602,1.17149 0.50391,1.66406l2.66406,3.99609c0.19781,0.29669 0.53864,0.46562 0.89453,0.44336l16,-1c0.52696,-0.03305 0.93745,-0.47005 0.9375,-0.99805v-15.5c-0.00022,-0.25032 -0.09431,-0.49146 -0.26367,-0.67578c-0.04027,-0.05307 -0.09074,-0.09756 -0.14844,-0.13086c-0.00065,-0.00065 -0.0013,-0.0013 -0.00195,-0.00195c-0.05844,-0.04247 -0.1213,-0.07849 -0.1875,-0.10742l-4.10156,-2.33984l0.0332,0.02148c-0.8378,-0.5694 -1.84477,-0.83953 -2.85547,-0.76562zM15.52539,2.49805c0.00586,0.0001 0.01172,0.0001 0.01758,0c0.78732,-0.05861 1.57205,0.15025 2.22461,0.59375c0.01078,0.0076 0.02186,0.01476 0.0332,0.02148l2.52344,1.43945l-13.46875,0.43555l-2.38672,-2.04688zM21,6.5332v13.52734l-14,0.875v-13.95117zM19.44141,8.50195c-1.014,0.06 -2.03378,0.10955 -3.05078,0.18555c-0.334,0.025 -0.58205,0.31386 -0.62305,0.63086c-0.019,0.148 0.02145,0.22433 0.18945,0.23633c0.308,0.023 0.61359,0.06652 0.93359,0.10352v5.86914c-0.094,-0.135 -0.14536,-0.2063 -0.19336,-0.2793c-1.31,-1.979 -2.62583,-3.95441 -3.92383,-5.94141c-0.196,-0.3 -0.37949,-0.44439 -0.77149,-0.40039c-0.917,0.101 -1.84172,0.13108 -2.76172,0.20508c-0.51,0.041 -0.81278,0.48766 -0.67578,0.97266c0.345,0.03 0.69283,0.0608 1.04883,0.0918v8.43164c-0.234,0.066 -0.46712,0.14027 -0.70312,0.19727c-0.24,0.058 -0.35244,0.21941 -0.39844,0.44141c-0.037,0.178 0.00661,0.26795 0.22461,0.25195c0.749,-0.053 1.50195,-0.08586 2.25195,-0.13086c0.31,-0.018 0.62078,-0.02422 0.92578,-0.07422c0.416,-0.069 0.6425,-0.32252 0.6875,-0.72852c-0.37,-0.082 -0.74219,-0.17214 -1.11719,-0.24414c-0.167,-0.032 -0.22366,-0.10044 -0.22266,-0.27344c0.006,-1.956 0.00486,-3.91314 0.00586,-5.86914c0,-0.064 0.01339,-0.12933 0.02539,-0.23633c0.058,0.077 0.08152,0.10858 0.10351,0.14258c1.012,1.571 2.02106,3.14589 3.03906,4.71289c0.438,0.674 0.88666,1.341 1.34766,2c0.334,0.478 0.82386,0.62967 1.38086,0.51367c0.348,-0.073 0.68244,-0.21231 1.02344,-0.32031c0.19,-0.06 0.24514,-0.18281 0.24414,-0.38281c-0.007,-2.874 -0.00391,-5.74709 -0.00391,-8.62109c0,-0.535 -0.0017,-0.53453 0.5293,-0.64453c0.488,-0.101 0.63137,-0.33984 0.48438,-0.83984z">
                            </path>
                          </g>
                        </g>
                      </svg>Notion</p>
                    <p class="flex items-center gap-2 leading-tight"><svg xmlns="http://www.w3.org/2000/svg" x="0px"
                        y="0px" width="1.3em" height="1.3em" viewBox="0,0,256,256">
                        <g fill="#787878" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                          stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                          font-family="none" font-weight="none" font-size="none" text-anchor="none"
                          style="mix-blend-mode: normal">
                          <g transform="scale(5.12,5.12)">
                            <path
                              d="M36.22,10.87l-6.4,-3.94l0.85,-2.67zM16.88,16.68l1.05,25.69l-0.02,-0.04l-8.29,-19.45l5.38,-11.88l1.22,3.66zM27.76,6.8l-9.39,7.97l-1.62,-5.02l12.22,-6.73zM19.09,21.86l10.34,24l-9.48,-2.91zM38.08,14.37l-4.83,28.38l-1.81,2.72l-12.35,-28.69l9.63,-8.17z">
                            </path>
                          </g>
                        </g>
                      </svg>Obsidian</p>
                    <!--brave browser-->
                    <p class="flex items-center gap-2 leading-tight"><svg xmlns="http://www.w3.org/2000/svg" x="0px"
                        y="0px" width="1.5em" height="1.5em" viewBox="0,0,256,256">
                        <g fill="#787878" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                          stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                          font-family="none" font-weight="none" font-size="none" text-anchor="none"
                          style="mix-blend-mode: normal">
                          <g transform="scale(5.12,5.12)">
                            <path
                              d="M18,1c-0.2652,0.00005 -0.51952,0.10543 -0.70703,0.29297l-4.49023,4.49023l-0.77539,-0.38867c-0.00065,0 -0.0013,0 -0.00195,0c-1.92158,-0.96081 -4.25079,-0.5832 -5.76953,0.93555c-0.03451,0.03409 -0.0665,0.07064 -0.0957,0.10938l-2.96094,3.96094c-0.25393,0.33928 -0.26645,0.80177 -0.03125,1.1543l1.67773,2.51758l-1.74023,3.48047c-0.11774,0.23613 -0.13739,0.50921 -0.05469,0.75977l5.76563,17.47461c0.0019,0.00588 0.00385,0.01174 0.00586,0.01758c0.87551,2.50113 2.62389,4.60161 4.92383,5.91602l10.75781,6.14844c0.30742,0.17562 0.68477,0.17562 0.99219,0l10.75781,-6.14844c2.30112,-1.31445 4.04841,-3.41513 4.92383,-5.91602c0.00201,-0.00584 0.00396,-0.0117 0.00586,-0.01758l5.76563,-17.47461c0.08271,-0.25055 0.06305,-0.52364 -0.05469,-0.75977l-1.74023,-3.48047l1.67773,-2.51758c0.2352,-0.35253 0.22268,-0.81501 -0.03125,-1.1543l-2.96094,-3.96094c-0.02865,-0.03799 -0.05998,-0.07389 -0.09375,-0.10742c-1.51875,-1.51875 -3.84986,-1.89636 -5.77148,-0.93555v-0.00195l-0.77734,0.38867l-4.49023,-4.49023c-0.18751,-0.18754 -0.44183,-0.29292 -0.70703,-0.29297zM18.41406,3h13.17188l4.70703,4.70703c0.30433,0.30438 0.76927,0.37991 1.1543,0.1875l1.42188,-0.70898c0,-0.00065 0,-0.0013 0,-0.00195c1.15069,-0.57535 2.52601,-0.34931 3.44141,0.55078l2.46484,3.29883l-1.60742,2.41211c-0.19909,0.29858 -0.22294,0.68095 -0.0625,1.00195l1.81641,3.63086l-5.63281,17.07031c-0.71706,2.04527 -2.14575,3.76112 -4.02734,4.83594l-10.26172,5.86328l-10.26172,-5.86328c-1.88078,-1.07486 -3.31037,-2.79091 -4.02734,-4.83594c-0.00049,-0.0014 -0.00145,-0.00251 -0.00195,-0.00391l-5.63086,-17.06641l1.81641,-3.63086c0.16044,-0.32101 0.13659,-0.70337 -0.0625,-1.00195l-1.60742,-2.41211l2.4668,-3.30078c0.9154,-0.90007 2.28877,-1.12417 3.43945,-0.54883l1.42188,0.71094c0.38503,0.19241 0.84997,0.11688 1.1543,-0.1875zM25,7.97266c-1.22029,0 -2.44141,0.32606 -3.52539,0.97656c-1.06687,0.64012 -2.33385,0.85873 -3.55469,0.61523l0.00195,0.00195l-2.72461,-0.54687c-0.41492,-0.08321 -0.83729,0.10373 -1.05469,0.4668l-3.72461,6.21289l0.04492,-0.06836c-1.01111,1.41555 -0.98822,3.33514 0.05469,4.72656l4.25781,5.67773l-0.17578,0.26367c-1.08996,1.63558 -1.03195,3.7918 0.14844,5.36523c0.08409,0.1113 0.19054,0.20377 0.3125,0.27148c0.57699,0.66887 1.26075,1.20258 1.98242,1.5625l7.30664,6.26172c0.37437,0.32049 0.92641,0.32049 1.30078,0l7.30469,-6.26172c0.71881,-0.359 1.40075,-0.89106 1.97656,-1.55664c0.12555,-0.06908 0.23478,-0.16433 0.32031,-0.2793c1.17892,-1.57317 1.2386,-3.72741 0.14844,-5.36328l-0.17578,-0.26562l4.25781,-5.67578c1.04446,-1.39172 1.06555,-3.31135 0.05469,-4.72656l0.04297,0.06836l-3.72266,-6.21289c-0.21713,-0.36229 -0.63846,-0.54911 -1.05273,-0.4668l-2.72656,0.54492c-1.22006,0.24418 -2.48553,0.02509 -3.55273,-0.61523c-0.07916,-0.04804 -0.16462,-0.08485 -0.25391,-0.10937c-1.02158,-0.55755 -2.14174,-0.86719 -3.27148,-0.86719zM25,9.9707c0.86321,0 1.72707,0.23186 2.49609,0.69336c0.10459,0.06268 0.21977,0.10571 0.33984,0.12695c1.42264,0.75495 3.0475,1.05204 4.63477,0.73438l2.0332,-0.40625l3.36133,5.60742c0.01404,0.02339 0.02902,0.0462 0.04492,0.06836c0.50914,0.71279 0.49819,1.66105 -0.02734,2.36133l-4.68359,6.24414c-0.25393,0.33928 -0.26645,0.80177 -0.03125,1.1543l0.56836,0.85352c0.62384,0.93612 0.59109,2.15386 -0.08398,3.05469c-0.66192,0.88306 -2.16101,1.53711 -2.65234,1.53711c0.1005,0 -0.13426,-0.03265 -0.46094,-0.22266c-0.32668,-0.19001 -0.76326,-0.49434 -1.26367,-0.86719c-0.88821,-0.66179 -2.02493,-1.54568 -3.27539,-2.41797v-0.92578l4.51563,-2.70898c0.377,-0.227 0.56308,-0.67261 0.45508,-1.09961l-1.44336,-5.77148c0.175,-0.276 0.44098,-0.51642 0.83398,-0.73242l4.63867,-2.25391l-2,-1h-2l-0.01367,0.01367c-0.1,0.002 -0.20273,0.00411 -0.30273,0.03711l-3,1c-0.495,0.166 -0.77934,0.68541 -0.65234,1.19141l1.82031,7.28125l-3.85156,2.31055l-3.84961,-2.31055l1.82031,-7.28125c0.126,-0.507 -0.1583,-1.02445 -0.6543,-1.18945l-3,-1c-0.101,-0.034 -0.20173,-0.03611 -0.30273,-0.03711l-0.01367,-0.01562h-2l-2,1l4.63867,2.25391c0.393,0.215 0.65898,0.45547 0.83398,0.73047l-1.44336,5.77344c-0.106,0.427 0.07903,0.87361 0.45703,1.09961l4.51367,2.70898v0.92188c-1.32366,0.91182 -2.47891,1.80791 -3.34961,2.46094c-0.48933,0.367 -0.90744,0.66329 -1.2168,0.84375c-0.30936,0.18041 -0.51693,0.20703 -0.43359,0.20703c-0.49133,0 -1.99049,-0.65294 -2.65234,-1.53516c-0.67561,-0.90057 -0.70803,-2.12022 -0.08398,-3.05664l0.56836,-0.85352c0.2352,-0.35253 0.22268,-0.81501 -0.03125,-1.1543l-4.68359,-6.24219v-0.00195c-0.52394,-0.70042 -0.53587,-1.6494 -0.02734,-2.36133c0.01524,-0.0222 0.02957,-0.045 0.04297,-0.06836l3.36133,-5.60742l2.03516,0.4082c1.70716,0.3405 3.48148,0.03259 4.97461,-0.86328c0.76901,-0.46145 1.63289,-0.69336 2.49609,-0.69336zM24.99805,30.24023c1.11822,0.79026 2.19575,1.61308 3.08203,2.27344c0.52346,0.39002 0.99996,0.7286 1.45313,0.99219c0.07128,0.04146 0.14271,0.07032 0.21289,0.10938l-4.74609,4.06836l-4.74609,-4.06836c0.06164,-0.03432 0.12547,-0.05952 0.1875,-0.0957c0.44064,-0.25704 0.89754,-0.58575 1.4082,-0.96875c0.86792,-0.65094 1.96854,-1.48695 3.14844,-2.31055z">
                            </path>
                          </g>
                        </g>
                      </svg>Brave Browser</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--SKILLS-->
      <div class="relative flex flex-col items-center justify-between order-5 h-full col-span-2 row-span-1 gap-2 text-white border shadow-md md:order-7 rounded-3xl">
        <div class="flex flex-row w-full row-span-1 gap-3 h-1/2">
          <div class="w-2/3 h-full bg-white border border-gray-100 rounded-3xl">
            <SpotifyCard />
          </div>
          <div class="w-1/3 h-full bg-white border border-gray-100 rounded-3xl">
            empty 2
          </div>
        </div>
        <div class="relative flex flex-col justify-between w-full row-span-1 p-2 border-gray-100 h-1/2 bg-gray-50 rounded-3xl">
          <p class="flex flex-row items-center justify-start gap-2 p-1 mt-3 ml-4 leading-tight text-gray-500">
            <img src="https://img.icons8.com/?size=100&id=58861&format=png&color=000000" class="w-5 h-5" />
            <span>Skills</span>
          </p>
          <AppScroll />
        </div>
  
      </div>
      <!--IMATGE-->
      <div
        class="order-6 col-span-2 row-span-1 overflow-hidden bg-gray-200 shadow-md md:col-span-2 aspect-square md:aspect-auto md:row-span-1 rounded-3xl md:order-7">
        <Me />
      </div>
      <!--GITHUB-->
      <div
        class="flex items-center justify-center order-8 col-span-1 row-span-1 text-white bg-gray-200 shadow-xl md:order-8 rounded-3xl hover:transition-transform hover:scale-105 peer">
        <Github />
      </div>
      <!--IDIOMES-->
      <div
        class="flex items-center justify-between order-3 col-span-1 row-span-1 text-white bg-gray-200 shadow-xl md:order-9 rounded-3xl hover:transition-transform hover:scale-105 peer">
        <div class="flex flex-col w-full h-full p-1 bg-white rounded-3xl">
          <div>
            <p class="flex flex-row items-center justify-start gap-2 p-1 mt-3 ml-4 leading-tight text-gray-500">
              <img src="https://img.icons8.com/ios/100/language.png" class="w-5 h-5" />
              <span>Languages</span>
            </p>
          </div>
          <div class="flex flex-col items-center justify-start w-full h-full md:justify-center">
            <span class="flex flex-row items-center justify-start w-full h-full mx-1 ml-20 md:ml-36">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/800px-Flag_of_Catalonia.svg.png"
                class="w-4 h-4 mr-2 md:w-8 md:h-8">
              <span class="text-xl font-bold text-gray-600">CAT</span>
            </span>
            <span class="flex flex-row items-center justify-start w-full h-full mx-1 ml-20 md:ml-36">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg/800px-Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg.png"
                class="w-4 h-4 mr-2 md:w-8 md:h-8">
              <span class="text-xl font-bold text-gray-600">ESP</span>
            </span>
            <span class="flex flex-row items-center justify-start w-full h-full mx-1 ml-20 md:ml-36">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                class="w-4 h-4 mr-2 md:w-8 md:h-8">
              <span class="text-xl font-bold text-gray-600">ENG</span>
            </span>
          </div>
        </div>
      </div>
      <!---->
    </div>
  </ReusablePatter>
  
</template>

<script>
import feather from "feather-icons";
import AppScroll from "@/components/home/AppScroll.vue";
import SpotifyCard from "@/components/home/SpotifyCard.vue";
import Github from "@/components/home/Github.vue";
import WeatherWidget from "@/components/weather/WeatherWidget.vue";
import Me from "@/components/home/Me.vue";

export default {
  name: "AppBanner",
  data() {
    return {
      theme: "",
    };
  },
  components: {
    AppScroll,
    SpotifyCard,
    Github,
    WeatherWidget,
    Me,
  },
  created() {
    this.theme = 'light'
  },
  mounted() {
    feather.replace();
    this.theme = 'light'
    console.log(process.env.SPOTIFY_CLIENT_ID)
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>



<style scoped>
.card {
  height: 100%;
  width: 320px;
  border-radius: 12px;
  padding: 24px;
  background: rgb(15 23 42);
  position: relative;
  overflow: hidden;
  display: flex;
}

.card-content {
  position: relative;
  z-index: 1;
}

.card:before {
  content: "";
  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 182px;
  opacity: 0.12;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
