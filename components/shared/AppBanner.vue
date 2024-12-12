<template>
  <ReusablePatter>
    <div class="grid w-full h-full grid-cols-2 p-6 md:gap-3 md:grid-flow-row md:h-full md:grid-cols-6 md:grid-rows-3">
      <!--Years-->
      <ReusableCard
        class="flex items-center justify-center w-full col-span-1 text-gray-600 bg-gray-200 shadow-xl md:relative md:col-span-1 md:col-start-2 rounded-3xl md:order-1 "
        title="Years" subtitle="experience" content="2" />
      <ReusableCard
        class="flex items-center justify-center w-full col-span-1 text-gray-600 bg-white shadow-xl md:col-end-6 md:relative rounded-3xl md:order-5"
        title="Age" subtitle="years old" content="23" />
      <!--WEATHER-->
      <WeatherWidget
        class="flex items-center justify-center h-full col-span-2 text-white shadow-xl md:row-span-1 md:row-start-2 md:col-span-1 rounded-3xl md:order-3" />
      <!--EMPTY 2-->
      <div class="flex w-full col-span-2 row-span-2 gap-3 md:p-2 md:grid md:grid-rows-2 md:row-start-3 md:row-span-1 md:grid-cols-2 md:col-span-1 rounded-3xl md:order-4">
        <div class="flex items-center justify-center text-white bg-white border border-gray-100 shadow-xl rounded-3xl ">
          <ReusableIcons :width="'80px'" :height="'80px'" :icon="'twitter'" :color="'gray'" @click="goTo('https://twitter.com/jordiop26')" />
        </div>
        <div class="flex items-center justify-center text-white bg-white border border-gray-100 shadow-xl rounded-3xl ">
          <ReusableIcons :width="'80px'" :height="'80px'" :icon="'linkedin'" :color="'gray'" @click="goTo('https://linkedin.com/in/jordiop')" />
        </div>
        <div class="flex items-center justify-center text-white bg-white border border-gray-100 shadow-xl rounded-3xl ">
          <ReusableIcons :width="'80px'" :height="'80px'" :icon="'instagram'" :color="'gray'" @click="goTo('https://instagram.com/jordiioop')" />
        </div>
        <div class="flex items-center justify-center text-white bg-white border border-gray-100 shadow-xl rounded-3xl ">
          <ReusableIcons :width="'80px'" :height="'80px'" :icon="'discord'" :color="'gray'" />
        </div>
      </div>
      <!--EDAD-->
      
      <div class="flex flex-col order-1 col-span-2 gap-3 md:grid-rows-1 md:row-start-2 md:grid md:col-span-4 md:col-start-2 md:grid-cols-4">
        <div
          class="flex items-center justify-center text-gray-600 duration-300 transform bg-white shadow-xl md:row-span-1 md:col-span-1 md:order-7 rounded-3xl">
          <div class="w-full h-full bg-white shadow-md rounded-3xl md:card-hover shadow-indigo-900/5"
            style="--x-rotation: 0.8476068806854309deg; --y-rotation: -6.7344108200621555deg;">
            <div class="w-full h-full p-6 bg-white rounded-3xl">
              <div class="flex items-center gap-1 leading-tight md:card-header"><svg class="w-5 text-gray-600"
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
                    <!-- mac mini -->
                    <p class="flex items-center gap-2 leading-tight"><svg class="w-4 text-gray-600"
                        xmlns="http://www.www3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5.125 13C5.125 13.4832 5.51675 13.875 6 13.875C6.48325 13.875 6.875 13.4832 6.875 13C6.875 12.5168 6.48325 12.125 6 12.125C5.51675 12.125 5.125 12.5168 5.125 13ZM17.125 13C17.125 13.4832 17.5168 13.875 18 13.875C18.4832 13.875 18.875 13.4832 18.875 13C18.875 12.5168 18.4832 12.125 18 12.125C17.5168 12.125 17.125 12.5168 17.125 13ZM13.125 13C13.125 13.4832 13.5168 13.875 14 13.875C14.4832 13.875 14.875 13.4832 14.875 13C14.875 12.5168 14.4832 12.125 14 12.125C13.5168 12.125 13.125 12.5168 13.125 13ZM9.125 13C9.125 13.4832 9.51675 13.875 10 13.875C10.4832 13.875 10.875 13.4832 10.875 13C10.875 12.5168 10.4832 12.125 10 12.125C9.51675 12.125 9.125 12.5168 9.125 13ZM5.125 17C5.125 17.4832 5.51675 17.875 6 17.875C6.48325 17.875 6.875 17.4832 6.875 17C6.875 16.5168 6.48325 16.125 6 16.125C5.51675
                          16.125 5.125 16.5168 5.125 17ZM17.125 17C17.125 17.4832 17.5168 17.875 18 17.875C18.4832 17.875 18.875 17.4832 18.875 17C18.875 16.5168 18.4832 16.125 18 16.125C17.5168 16.125 17.125 16.5168 17.125 17Z"
                          fill="currentColor" stroke="currentColor" stroke-width="0.75" stroke-linecap="square"></path>
                        <path
                          d="M10 17H14M6 9V6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 4.55228 18 4V3M3 9H21M3 15H21M3 9H21M3 15H21M3 9H21M3 15H21"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>Mac Mini M1</p>
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
                    <p class="flex items-center gap-2 leading-tight"><svg class="w-4 text-gray-600"
                        xmlns="http://www.ww3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5Z"
                          stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
                        <path
                          d="M15 4.99988V19.0001M9 4.99988V19.0001M3 9H21M3 15H21M3 9H21M3 15H21M3 9H21M3 15H21"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>Logitech MX Master 3</p>
                    
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
                      <p class="flex items-center gap-2 leading-tight"><svg fill="#787878" width="1.3em" height="1.3em" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.807 9.776c0.011 0 0.005 0 0 0zM8.109 7.927c0.011 0 0.005 0 0 0zM30.229 10.781c-0.667-1.604-2.021-3.333-3.079-3.885 0.865 1.692 1.365 3.396 1.552 4.661l0.005 0.027c-1.739-4.329-4.681-6.073-7.088-9.871-0.12-0.192-0.24-0.385-0.36-0.588-0.063-0.104-0.115-0.208-0.172-0.319-0.099-0.192-0.171-0.395-0.224-0.609 0-0.020-0.015-0.036-0.036-0.041-0.011 0-0.021 0-0.031 0l-0.005 0.005c-0.005 0-0.011 0.005-0.011 0.005s0-0.005 0.005-0.011c-3.417 2-4.828 5.505-5.193 7.729-1.057 0.063-2.088 0.328-3.041 0.776-0.183 0.093-0.265 0.303-0.197 0.489 0.077 0.213 0.317 0.319 0.525 0.224 0.833-0.391 1.729-0.625 2.651-0.687l0.089-0.011c0.125-0.005 0.255-0.011 0.38-0.011 0.745-0.005 1.489 0.099 2.203 0.307l0.125 0.037c0.12 0.036 0.235 0.077 0.355 0.12 0.083 0.031 0.172 0.063 0.255 0.099 0.068 0.025 0.136 0.057 0.203 0.083 0.105 0.048 0.209 0.1 0.313 0.152l0.14 0.067c0.104 0.053 0.204 0.109 0.303 0.167 0.063 0.037 0.125 0.073 0.187 0.115 1.111 0.688 2.037 1.641 2.683 2.776-0.817-0.572-2.287-1.145-3.697-0.895 5.52 2.76 4.036 12.265-3.615 11.905-0.683-0.025-1.355-0.156-1.995-0.385-0.156-0.057-0.308-0.12-0.453-0.183-0.088-0.041-0.177-0.083-0.26-0.124-1.876-0.969-3.423-2.803-3.615-5.027 0 0 0.708-2.64 5.072-2.64 0.475 0 1.824-1.319 1.849-1.699-0.011-0.125-2.683-1.187-3.724-2.213-0.557-0.547-0.817-0.812-1.052-1.011-0.125-0.109-0.26-0.208-0.401-0.301-0.348-1.224-0.364-2.521-0.041-3.751-1.579 0.719-2.803 1.855-3.693 2.855h-0.009c-0.609-0.771-0.563-3.313-0.532-3.844-0.005-0.036-0.453 0.229-0.511 0.271-0.536 0.385-1.041 0.813-1.5 1.287-0.525 0.531-1.004 1.104-1.437 1.719-0.984 1.396-1.687 2.979-2.057 4.645-0.005 0.021-0.145 0.647-0.249 1.417-0.021 0.12-0.037 0.24-0.052 0.359-0.043 0.292-0.073 0.589-0.089 0.881l-0.005 0.047c-0.009 0.172-0.020 0.339-0.031 0.511v0.077c0 8.48 6.875 15.355 15.355 15.355 7.593 0 13.9-5.516 15.135-12.756 0.027-0.197 0.047-0.395 0.068-0.593 0.307-2.631-0.031-5.401-0.995-7.713z"></path> </g></svg>Firefox</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="order-1 col-span-2 overflow-hidden bg-gray-200 shadow-md md:col-start-2 md:col-span-2 md:aspect-auto md:row-span-1 rounded-3xl md:order-7">
          <Me />
        </div>
        <div class="col-span-1 row-span-2 overflow-hidden bg-white shadow-xl md:col-span-1 md:row-span-1 rounded-3xl">
        </div>
      </div>
      <!--SKILLS-->
      <div
        class="flex flex-col items-center justify-between h-full col-span-2 gap-2 text-white border shadow-md md:row-span-1 md:col-start-2 md:relative md:order-7 rounded-3xl">
        <div class="w-full row-span-1 gap-3 md:flex md:flex-row md:h-1/2">
          <div class="w-full h-full bg-white border border-gray-100 md:w-2/3 rounded-3xl">
            <SpotifyCard />
          </div>
          <div class="w-full h-full bg-white border border-gray-100 md:w-1/3 rounded-3xl">
            <div
              class="flex items-center justify-between w-full h-full col-span-1 row-span-1 text-white bg-gray-200 shadow-xl md:order-9 rounded-3xl ">
              <div class="flex flex-col justify-center w-full h-full p-1 bg-white rounded-3xl">
                <div>
                  <p class="flex flex-row items-center justify-start gap-2 p-1 mt-2 ml-3 leading-tight text-gray-500">
                    <img src="https://img.icons8.com/ios/100/language.png" class="w-4 h-4" />
                    <span>Languages</span>
                  </p>
                </div>
                <div class="flex flex-row items-center justify-center w-full h-full">
                  <span class="flex flex-row items-center justify-center w-full h-full mx-1">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/800px-Flag_of_Catalonia.svg.png"
                      class="w-4 h-4 md:w-10 md:h-10">
                  </span>
                  <span class="flex flex-row items-center justify-center w-full h-full mx-1">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg/800px-Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg.png"
                      class="w-4 h-4 md:w-10 md:h-10">
                  </span>
                  <span class="flex flex-row items-center justify-center w-full h-full mx-1">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                      class="w-4 h-4 md:w-10 md:h-10">
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col justify-between w-full row-span-1 border-gray-100 md:relative h-1/2 bg-gray-50 rounded-3xl">
          <p class="flex flex-row items-center justify-start gap-2 p-1 mt-2 leading-tight text-gray-500">
            <img src="https://img.icons8.com/?size=100&id=58861&format=png&color=000000" class="w-4 h-4" />
            <span>Skills</span>
          </p>
          <AppScroll />
        </div>

      </div>
      <!--IMATGE-->
      <!--GITHUB-->
      <div
        class="flex items-center justify-center col-span-2 row-span-1 text-white bg-gray-200 shadow-xl md:col-span-1 md:order-8 rounded-3xl ">
        <Github />
      </div>
      <div class="col-span-2 row-span-2 overflow-hidden bg-white shadow-xl md:col-span-1 md:row-span-1 rounded-3xl">
      </div>
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
  methods: {
    goTo(url) {
      window.open(url, "_blank");
    },
  },
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
