import React, { memo } from 'react'

export default memo(function PageLoading() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" style={{margin:'auto',display:'block'}} width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="67.8023" cy="59.9068" r="6" fill="#51CACC">
          <animate attributeName="cx" values="75;57.72542485937369" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="cy" values="50;73.77641290737884" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="#51CACC;#9DF871" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
        </circle><circle cx="46.0792" cy="69.9923" r="6" fill="#9DF871">
          <animate attributeName="cx" values="57.72542485937369;29.774575140626318" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="cy" values="73.77641290737884;64.69463130731182" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="#9DF871;#E0FF77" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
        </circle><circle cx="29.7746" cy="52.4491" r="6" fill="#E0FF77">
          <animate attributeName="cx" values="29.774575140626318;29.774575140626315" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="cy" values="64.69463130731182;35.30536869268818" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="#E0FF77;#DE9DD6" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
        </circle><circle cx="41.4208" cy="31.5213" r="6" fill="#DE9DD6">
          <animate attributeName="cx" values="29.774575140626315;57.72542485937368" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="cy" values="35.30536869268818;26.22358709262116" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="#DE9DD6;#FF708E" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
        </circle><circle cx="64.9232" cy="36.1304" r="6" fill="#FF708E">
          <animate attributeName="cx" values="57.72542485937368;75" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="cy" values="26.22358709262116;49.99999999999999" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="#FF708E;#51CACC" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
        </circle>
      </svg>
      {/* 更多动画效果 参考 https://loading.io */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" style={{margin:'auto',display:'block'}} width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g>
          <circle cx="60" cy="50" r="4" fill="#e15b64">
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="-0.67s"></animate>
            <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.67s"></animate>
          </circle>
          <circle cx="60" cy="50" r="4" fill="#e15b64">
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="-0.33s"></animate>
            <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.33s"></animate>
          </circle>
          <circle cx="60" cy="50" r="4" fill="#e15b64">
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="0s"></animate>
            <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="0s"></animate>
          </circle>
        </g><g transform="translate(-15 0)">
          <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#f8b26a" transform="rotate(90 50 50)"></path>
          <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#f8b26a">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform>
          </path>
          <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#f8b26a">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;-45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform>
          </path>
        </g>
      </svg> */}
    </div>
  )
})
