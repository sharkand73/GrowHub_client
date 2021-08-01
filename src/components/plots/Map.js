import React from 'react';
import '../../css/map.css';

const Map = ({selectFromMap}) => {

   const onClick = (e) => {
      //console.log(e.target.id);
      selectFromMap(e.target.id);
   }

return (
<>
<svg
   width="297mm"
   height="210mm"
   viewBox="0 0 297 210"
   version="1.1"
   id="svg96">
   
<g id="layer0">
   <g className="plot" onClick={onClick}>
         <text id="text1" className="number" transform="translate(2.0634698,3.233271)">
         <tspan x="38.798828" y="47.203703">1</tspan></text>
         <path className="plotpath" id="plot1"
               d="m 37.8539,30.845728 -3.304004,42.244064 10.832346,1.00529 2.736724,-44.613661 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text2" className="number" transform="translate(13.37623,2.5471355)">
         <tspan x="38.798828" y="48.491101">2</tspan></text>
         <path className="plotpath" id="plot2"
               d="m 48.118966,29.48142 3.658955,-0.523695 8.574955,0.04769 L 57.560429,75.215897 45.38224,74.09508 Z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text3" className="number" transform="translate(23.921208,3.5108356)">
         <tspan x="38.798828" y="48.491101">3</tspan></text>
         <path className="plotpath" id="plot3"
               d="M 60.352876,29.005416 70.87091,29.165928 67.334254,76.290722 57.560429,75.215897 Z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text4" className="number">
         <tspan x="72.9729" y="52.669144">4</tspan></text>
         <path className="plotpath" id="plot4"
               d="M 70.87091,29.165928 81.54104,29.540316 78.178043,77.285148 67.334254,76.290722 Z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text5" className="number">
         <tspan x="82.119141" y="52.811414">5</tspan></text>
         <path className="plotpath" id="plot5"
               d="m 81.54104,29.540316 8.355155,0.425082 -2.657483,48.384497 -9.060669,-1.064747 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text6" className="number">
         <tspan x="89.757812" y="53.918836">6</tspan></text>
         <path className="plotpath" id="plot6"
               d="m 89.896195,29.965398 7.555047,0.41864 -2.000901,48.762673 -8.211629,-0.796816 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text7" className="number" transform="translate(0,2.1166667)">
         <tspan x="99.306641" y="52.430266">7</tspan></text>
         <path className="plotpath" id="plot7"
               d="m 97.45124,30.384038 10.06664,0.402428 -0.7378,49.164446 -11.329741,-0.804201 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text8" className="number" transform="translate(0,2.1166667)">
         <tspan x="108.85547" y="53.434172">8</tspan></text>
         <path id="plot8" className="plotpath"
               d="m 107.51788,30.786466 7.07498,-0.05173 -1.19229,49.546512 -6.62049,-0.330333 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text9" className="number" transform="translate(0,1.5875)">
         <tspan x="115.58984" y="53.938078">9</tspan></text>
         <path id="plot9" className="plotpath"
               d="m 114.59286,30.734735 7.0213,0.264954 -0.80604,50.414481 -7.40755,-1.132922 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text  id="text10" className="number" transform="translate(0,1.5875)">
         <tspan x="122.72656" y="54.13925"><tspan>10</tspan></tspan></text>
         <path id="plot10" className="plotpath"
               d="m 121.61416,30.999689 7.86485,0.0807 0.95005,50.217226 -9.62094,0.116551 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text11" className="number" transform="translate(0.52916667,1.5875)">
         <tspan x="130.96875" y="54.842375">11</tspan></text>
         <path id="plot11" className="plotpath"
               d="m 129.47901,31.080389 6.92184,3e-6 3.14213,50.315584 -9.11392,-0.09836 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text12" className="number" transform="translate(1.0583333)">
         <tspan x="139.41211" y="55.846281">12</tspan></text>
         <path id="plot12" className="plotpath"
               d="m 136.40085,31.080392 10.71892,0.198131 0.692,49.962593 -8.26879,0.154858 z"
               />
   </g>

   <g className="plot"> onClick={onClick}
         <text id="text13" className="number" transform="translate(1.0583333)">
         <tspan x="149.0625" y="56.149016">13</tspan></text>
         <path id="plot13" className="plotpath"
               d="m 147.11977,31.278523 9.82644,0.138398 0.96881,49.547393 -10.10325,0.276802 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text14" className="number">
         <tspan x="159.61523" y="56.449797">14</tspan></text>
         <path id="plot14" className="plotpath"
               d="m 157.00168,31.186582 9.32268,-0.01773 0.55086,49.948395 -8.81381,0.09181 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text15" className="number">
         <tspan x="168.16016" y="56.95175"><tspan>15</tspan></tspan></text>
         <path id="plot15" className="plotpath"
               d="m 166.32436,31.168853 9.3127,0.282099 0.71805,49.357132 -9.47989,0.309163 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text16" className="number">
         <tspan x="177.60742" y="56.650969">16</tspan></text>
         <path id="plot16" className="plotpath"
               d="m 175.63706,31.450952 9.78028,0.236815 2.31472,48.130287 -11.37695,0.990029 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text17" className="number">
         <tspan x="188.66406" y="57.053313"><tspan>17</tspan></tspan></text>
         <path id="plot17" className="plotpath"
               d="m 185.41734,31.687767 8.79716,0.06793 3.8906,47.212946 -10.37304,0.849405 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text18" className="number" transform="translate(0.52916667)">
         <tspan x="198.21289" y="57.152922">18</tspan></text>
         <path id="plot18" className="plotpath"
               d="m 194.2145,31.755696 10.93574,0.105156 2.73394,46.582038 -9.77908,0.525751 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text19" className="number">
         <tspan x="208.26367" y="57.254484">19</tspan></text>
         <path id="plot19" className="plotpath"
               d="m 205.15024,31.860852 10.17588,0.164878 1.2493,45.925242 -8.69124,0.491916 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text20" className="number">
         <tspan x="216.80859" y="58.059172">20</tspan></text>
         <path id="plot20" className="plotpath"
               d="m 215.32612,32.02573 7.61165,-0.319974 2.13747,45.670538 -8.49982,0.574678 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text21" className="number">
         <tspan x="226.15625" y="58.258391">21</tspan></text>
         <path id="plot21" className="plotpath"
               d="m 222.93777,31.705756 9.9036,-0.641242 2.56496,45.528042 -10.33109,0.783738 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text22" className="number">
         <tspan x="235.30273" y="58.258391">22</tspan></text>
         <path id="plot22" className="plotpath"
               d="m 232.84137,31.064514 10.11734,-0.427492 2.42246,45.171796 -9.97484,0.783738 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text23" className="number">
         <tspan x="245.55469" y="58.660734">23</tspan></text>
         <path id="plot23" className="plotpath"
               d="m 242.95871,30.637022 8.83487,0.142499 2.70745,44.8868 -3.06686,0.01947 -6.053,0.123023 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text24" className="number" transform="translate(1.0583333)">
         <tspan x="256.10938" y="58.762297">24</tspan></text>
         <path id="plot24" className="plotpath"
               d="m 251.79358,30.779521 h 11.75606 l 3.56245,47.808004 -1.51789,-1.013727 -7.316,-1.652003 -3.77717,-0.255474 z"
               />
   </g>

   <g className="willow" onClick={onClick}>
         <text id="text25" className="number" transform="translate(1.5875,0.23082442)">
         <tspan x="266.96484" y="58.158781">(25)</tspan></text>
         <path id="plot25" className="plotpath"
               d="m 263.54964,30.779521 9.65651,-0.0078 5.60404,48.926059 -10.14799,0.236001 -1.55011,-1.346277 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text46-48" className="number" transform="translate(-223.23274,41.864373)">
         <tspan x="266.96484" y="58.158781">46-48</tspan></text>
         <path id="orchard" className="plotpath"
               d="M 33.369893,78.517799 46.585912,79.2258 66.597407,81.642319 62.961323,121.6927 40.082377,120.25587 29.983782,118.47376 Z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text45" className="number" transform="translate(-198.57343,42.922706)">
         <tspan x="266.96484" y="58.158781">45</tspan></text>
         <path id="plot45" className="plotpath"
               d="m 66.597407,81.642317 11.029956,1.225417 -2.235891,38.289646 -12.430149,0.53532 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text44" className="number" transform="translate(-188.49372,43.102702)">
         <tspan x="266.96484" y="58.158781">44</tspan></text>
         <path id="plot44" className="plotpath"
               d="m 77.627363,82.867732 8.984715,0.857276 -1.353315,37.622122 -9.867291,-0.18975 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text43" className="number" transform="translate(-178.594,43.282695)">
         <tspan x="266.96484" y="58.158781">43</tspan></text>
         <path id="plot43" className="plotpath"
               d="m 86.612078,83.725008 7.758999,0.541325 -0.360884,36.810137 -8.751432,0.27066 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text42" className="number" transform="translate(-170.49423,44.013493)">
         <tspan x="266.96484" y="58.158781">42</tspan></text>
         <path id="plot42" className="plotpath"
               d="m 94.371077,84.266333 8.480763,0.360883 0.99243,35.998144 -5.741743,0.57927 -4.092334,-0.12816 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text41" className="number" transform="translate(-161.31448,44.002677)">
         <tspan x="266.96484" y="58.158781">41</tspan></text>
         <path id="plot41" className="plotpath"
               d="m 102.85184,84.627216 8.75143,0.270664 0.4511,35.18616 -8.2101,0.54132 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text40" className="number" transform="translate(-152.68554,44.553479)">
         <tspan x="266.96484" y="58.158781">40</tspan></text>
         <path id="plot40" className="plotpath"
               d="m 111.60327,84.89788 8.66121,0.270663 1.08265,33.832847 -9.29276,1.08265 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text39" className="number" transform="translate(-143.70743,44.18267)">
         <tspan x="266.96484" y="58.158781">39</tspan></text>
         <path id="plot39" className="plotpath"
               d="m 120.26448,85.168543 9.20253,-0.180443 1.17287,32.75019 -9.29275,1.2631 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text38" className="number" transform="translate(-133.95526,43.124337)">
         <tspan x="266.96484" y="58.158781">38</tspan></text>
         <path id="plot38" className="plotpath"
         d="m 129.46701,84.9881 10.82651,-0.09022 1.36878,31.91258 -11.02242,0.92783 z"
               />
   </g>

   <g className="willow" onClick={onClick}>
         <text id="text36-37" className="number" transform="translate(-120.99563,42.224362)">
         <tspan x="266.96484" y="58.158781">(36-37)</tspan></text>
         <path id="plot36-37" className="plotpath"
               d="m 140.29352,84.89788 15.24734,-0.180441 5.50347,-0.270663 2.07508,27.517374 -9.38297,1.89464 -12.07414,2.95167 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text35" className="number" transform="translate(-102.63614,40.402777)">
         <tspan x="266.96484" y="58.158781">35</tspan></text>
         <path id="plot35" className="plotpath"
               d="m 161.04433,84.446776 8.93191,-0.432607 1.94791,26.677881 -8.80474,1.2721 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text34" className="number" transform="translate(-94.17638,39.927699)">
         <tspan x="266.96484" y="58.158781">34</tspan></text>
         <path id="plot34" className="plotpath"
               d="m 169.97624,84.014169 8.72325,-0.423461 2.45606,25.830972 -9.2314,1.27037 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text33" className="number" transform="translate(-84.096665,38.59201)">
         <tspan x="266.96484" y="58.158781">33</tspan></text>
         <path id="plot33" className="plotpath"
               d="m 178.69949,83.590706 10.75585,-0.508146 2.54075,24.64528 -10.84054,1.69384 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text32" className="number" transform="translate(-74.499638,37.823544)">
         <tspan x="266.96484" y="58.158781">32</tspan></text>
         <path id="plot32" className="plotpath"
               d="m 189.45534,83.08256 9.65485,-0.592844 2.37137,23.798364 -9.48547,1.43976 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text31" className="number" transform="translate(-64.786047,36.574852)">
         <tspan x="266.96484" y="58.158781">31</tspan></text>
         <path id="plot31" className="plotpath"
               d="m 199.11019,82.489714 10.2477,-0.677529 1.22949,23.170295 -9.10582,1.3056 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text30" className="number" transform="translate(-53.993169,35.495563)">
         <tspan x="266.96484" y="58.158781">30</tspan></text>
         <path id="plot30" className="plotpath"
               d="m 209.35789,81.812185 9.68607,-0.77506 1.52325,23.001135 -9.97983,0.94422 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text29" className="number" transform="translate(-42.349621,34.685512)">
         <tspan x="266.96484" y="58.158781">29</tspan></text>
         <path id="plot29" className="plotpath"
               d="m 219.04396,81.037125 14.47092,-0.913953 0.99011,22.391838 -13.93778,1.52325 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text26-28" className="number" transform="translate(-24.812139,33.763503)">
         <tspan x="266.96484" y="58.158781">26-28</tspan></text>
         <path id="plot26-28" className="plotpath"
               d="m 233.51488,80.123172 26.47919,-1.68729 3.08898,1.188069 1.95547,3.23928 -0.50639,9.666261 -2.41015,3.458811 -12.34532,4.664407 -15.27167,1.8623 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text49" className="number" transform="translate(-235.17219,89.184485)">
         <tspan x="266.96484" y="58.158781">49</tspan></text>
         <path id="plot49" className="plotpath"
               d="m 29.389747,130.8297 8.460803,-1.30984 2.165229,36.97355 -5.748772,-3.52344 -4.450662,-5.19244 -2.413786,-5.4057 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text50" className="number" transform="translate(-226.29147,89.660315)">
         <tspan x="266.96484" y="58.158781">50</tspan></text>
         <path id="plot50" className="plotpath"
               d="m 37.85055,129.51986 5.127858,-1.0277 3.004098,-0.15513 2.192821,40.01083 -8.159548,-1.85445 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text51" className="number" transform="translate(-218.0957,89.660315)">
         <tspan x="266.96484" y="58.158781">51</tspan></text>
         <path id="plot51" className="plotpath"
               d="m 45.982506,128.33703 6.653416,-0.29571 2.215398,40.49198 -6.675993,-0.18544 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text52" className="number" transform="translate(-211.14284,89.475739)">
         <tspan x="266.96484" y="58.158781">52</tspan></text>
         <path id="plot52" className="plotpath"
               d="m 52.635922,128.04132 7.244834,-0.44356 3.104928,39.9205 -8.134364,1.01504 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text53" className="number" transform="translate(-202.31546,88.761996)">
         <tspan x="266.96484" y="58.158781">53</tspan></text>
         <path id="plot53" className="plotpath"
               d="m 59.880756,127.59776 9.610492,-0.59142 3.844195,38.88553 -10.349759,1.62639 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text  id="text54" className="number" transform="translate(-193.16803,87.757)">
         <tspan x="266.96484" y="58.158781">54</tspan></text>
         <path id="plot54" className="plotpath"
               d="m 69.491248,127.00634 7.836246,-0.73927 5.340467,38.74279 -9.332518,0.88201 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text55" className="number" transform="translate(-184.54977,86.805344)">
         <tspan x="266.96484" y="58.158781">55</tspan></text>
         <path id="plot55" className="plotpath"
               d="m 77.327492,126.26707 8.871225,-0.73926 5.470588,37.40699 -9.001344,2.07506 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text56" className="number" transform="translate(-178.12609,78.716256)">
         <tspan x="266.96484" y="58.158781">56</tspan></text>
         <path id="plot56" className="plotpath"
               d="m 86.198717,125.52781 7.392686,-0.73927 2.513512,16.85532 -7.244831,1.33069 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text57" className="number" transform="translate(-158.77289,72.792958)">
         <tspan x="266.96484" y="58.158781">57</tspan></text>
         <path id="plot57" className="plotpath"
               d="m 98.766282,124.19712 1.626388,12.56757 21.88235,-2.80922 -1.18282,-11.68045 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text58" className="number" transform="translate(-137.20482,69.67551)">
         <tspan x="266.96484" y="58.158781">58</tspan></text>
         <path id="plot58" className="plotpath"
               d="m 122.42925,121.91806 1.46967,11.7573 19.2973,-3.00322 -1.91695,-11.37391 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text59" className="number" transform="translate(-109.36884,65.630965)">
         <tspan x="266.96484" y="58.158781">59</tspan></text>
         <path id="plot59" className="plotpath"
               d="m 149.13877,117.95637 19.4251,-3.38662 1.72525,11.8212 -19.489,3.19492 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text63" className="number" transform="translate(-86.237813,68.563839)">
         <tspan x="266.96484" y="58.158781">63</tspan></text>
         <path id="plot63" className="plotpath"
               d="m 175.78438,113.35568 9.96814,-1.53355 3.9617,28.81816 -9.77645,2.17254 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text64" className="number" transform="translate(-77.910812,67.11179)">
         <tspan x="266.96484" y="58.158781">64</tspan></text>
         <path id="plot64" className="plotpath"
               d="m 185.75252,111.82213 7.7956,-1.02238 4.34509,27.60409 -8.17899,2.23645 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text65" className="number" transform="translate(-68.447576,65.208475)">
         <tspan x="266.96484" y="58.158781">65</tspan></text>
         <path id="plot65" className="plotpath"
               d="m 193.54812,110.79975 8.69018,-1.40576 4.98407,26.64561 -9.32916,2.36424 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text66" className="number" transform="translate(-59.751423,63.834327)">
         <tspan x="266.96484" y="58.158781">66</tspan></text>
         <path id="plot66" className="plotpath"
               d="m 202.2383,109.39399 8.75408,-1.15017 5.04797,25.30375 -8.81798,2.49203 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text67" className="number" transform="translate(-51.211067,61.057256)">
         <tspan x="266.96484" y="58.158781">67</tspan></text>
         <path id="plot67" className="plotpath"
               d="m 210.99238,108.24382 9.96814,-1.27797 1.78915,24.60087 -6.70932,1.98085 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text68" className="number" transform="translate(-42.937404,60.581426)">
         <tspan x="266.96484" y="58.158781">68</tspan></text>
         <path id="plot68" className="plotpath"
               d="m 220.96052,106.96585 8.62628,-1.21407 1.21406,23.3229 -8.05119,2.49204 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text69" className="number" transform="translate(-34.187913,58.862688)">
         <tspan x="266.96484" y="58.158781">69</tspan></text>
         <path id="plot69" className="plotpath"
               d="m 229.5868,105.75178 9.45695,-1.27797 2.30035,21.53375 -10.54324,3.06712 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text70" className="number" transform="translate(-23.904257,57.197289)">
         <tspan x="266.96484" y="58.158781">70</tspan></text>
         <path id="plot70" className="plotpath"
               d="m 239.04375,104.47381 9.35049,-1.36031 3.03513,20.02902 -10.08527,2.86504 z"
               />
   </g>

   <g className="plot" onClick={onClick}>
         <text id="text71" className="number" transform="translate(-12.537707,54.580229)">
         <tspan x="266.96484" y="58.158781">71</tspan></text>
         <path id="plot71" className="plotpath"
               d="m 248.39425,103.1135 13.47787,-3.26072 3.06734,-0.02895 0.55798,1.04996 0.8823,3.93646 0.20363,2.57905 -0.20363,2.44332 -0.47508,2.9184 -1.76461,4.07219 -3.18988,2.78267 -2.16061,1.22897 -7.36019,2.30767 z"
               />
   </g>


   <path
   //  style="display:inline;fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
      d="m 268.6622,79.933802 10.14799,-0.236001 1.64666,17.870831 -6.06415,1.064147 z"
      id="Compost"
      className="area" />
   <path
   //  style="display:inline;fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
      d="m 88.860084,142.97455 7.244829,-1.33069 -2.51351,-16.85532 5.174877,-0.59142 1.62639,12.56757 21.88235,-2.80922 -1.18282,-11.68045 1.33705,-0.35696 1.46967,11.7573 19.2973,-3.00322 -1.91695,-11.37391 7.8595,-1.34186 1.66135,11.6295 19.489,-3.19492 -1.72525,-11.8212 7.22051,-1.21407 4.15339,29.45715 -88.268467,20.12197 z"
      id="plot60-62"
      className="willow" />
   <path
      d="m 37.853901,30.845727 -3.304005,42.244065 21.240033,2.596004 14.868022,1.652003 9.204015,0.944002 13.452003,1.180002 7.787971,0.708001 5.66401,0.236 15.81202,1.179999 6.60801,0.236001 8.96802,0.472001 9.20401,-0.236001 9.67602,-0.236 12.74402,-0.472001 9.67601,-0.707998 17.46403,-0.944002 45.07607,-3.068005 9.44001,-0.944002 6.84402,0.236001 7.316,1.652002 3.068,2.360004 10.14801,-0.236 -5.60404,-48.926061 -29.56,-0.162015 -28.32004,1.416002 -53.10008,-0.708001 -51.92009,-0.472001 -21.711972,-0.944002 -15.812024,-0.708001 -21.004032,-0.236 z"
      id="top-area" />
   <path
      d="m 33.369894,78.517801 13.216019,0.708001 5.90001,0.708001 11.328016,1.18 15.576026,1.652002 h 11.564009 l 12.979976,0.708002 h 10.14801 l 8.02401,0.236 7.78801,0.236 22.89204,0.708002 22.18403,-1.180002 12.74403,-0.472001 13.21601,-1.180002 18.17203,-1.179999 20.29603,-1.180002 7.31602,-0.472001 9.71567,-0.553919 h 3.56423 l 3.08898,1.188069 1.95548,3.239281 1.21114,5.940333 0.55039,3.185942 -2.41014,3.458809 v 0 l -5.34631,1.749341 -9.26695,3.455052 -11.28666,1.6633 -8.07888,0.95046 -9.14814,0.83165 -9.14813,0.83165 -9.62337,1.66329 -10.93024,1.78211 -10.45502,1.54449 -18.89031,2.49495 -9.26695,1.66329 -11.28666,2.73256 -6.29677,0.83165 -14.61326,1.54449 -8.67291,1.06927 -7.72246,0.47523 -9.38572,0.71284 -8.197654,0.23761 -11.049051,0.11881 -11.643085,-0.11881 -17.227014,-0.95045 -6.771998,-0.47523 -4.277052,-0.71284 -5.821543,-1.06927 z"
      id="middle_area" />
   <path
      d="m 29.389748,130.82969 5.821543,-0.95046 6.771997,-1.18807 5.702736,-0.71284 9.623367,-0.59404 14.61326,-0.71284 12.237119,-1.30687 13.187538,-1.18807 7.484822,-0.59404 7.84126,-0.83165 19.00912,-2.25733 7.96007,-1.06926 12.47473,-2.25734 10.57382,-1.7821 13.30639,-2.13853 11.8807,-2.01971 6.17796,-0.71285 13.90042,-2.01972 12.83115,-1.7821 21.26646,-2.73256 6.34003,-0.86581 8.95882,-2.17184 6.78699,-1.628864 0.88231,0.407217 0.47509,1.153777 0.47509,1.96823 0.40722,1.96823 0.20361,2.57905 -0.20361,2.44332 -0.47509,2.9184 -1.76462,4.07219 -3.18988,2.78267 -3.59711,2.03609 -4.47941,1.56101 -4.07219,1.15379 -5.76894,1.62888 -10.11261,2.71479 -12.55593,3.86858 -7.66929,2.10397 -12.01297,3.52923 -16.96747,4.00432 -16.2209,3.73285 -12.8274,3.15764 -13.70972,3.08639 -12.08083,2.85053 -13.3025,2.98628 -16.628114,3.46136 -16.276823,3.52827 -27.816641,3.52344 -6.675994,-0.18544 -8.159548,-1.85445 -5.748772,-3.52344 -4.450662,-5.19244 -2.039887,-5.74877 0.556332,-7.41777 z"
      id="bottom_area" />

   <path
      d="m 275.53725,102.33393 0.64736,4.09991 9.17086,-1.29471 -0.64736,-3.99202 z"
      id="fence-1" />
   <path
      d="m 276.18461,106.43384 0.64736,4.09991 9.17086,-1.29471 -0.64736,-3.99202 z"
      id="fence-2" />
   <path
      d="m 278.8102,79.697803 2.22957,21.772987 z"
      id="fence-3" />
   <path
      d="m 288.38305,114.7516 -2.64538,-13.80502 -1.02958,0.20053 v 0 0 0 0 0"
      id="fence-4" />

   <path
      d="m 231.2235,185.40971 c -0.30615,-0.19475 -0.70037,-0.92676 -0.87605,-1.6267 -0.29272,-1.16629 -0.16552,-1.31406 1.52228,-1.76854 2.81569,-0.75818 3.37404,-1.4149 3.72843,-4.38523 l 0.31989,-2.6812 -1.59348,-0.50054 c -1.40693,-0.44195 -6.415,-1.65234 -9.26135,-2.23836 -0.55619,-0.11452 -3.14439,-0.005 -5.75155,0.24345 -8.39579,0.79996 -9.6961,-0.14792 -10.57543,-7.70913 -0.91523,-7.86992 -1.34425,-9.34931 -3.00399,-10.35866 -2.07299,-1.26066 -6.76758,-1.63722 -11.39999,-0.9144 -4.9716,0.77574 -6.21317,1.40294 -7.20502,3.63979 -1.29315,2.91634 -1.51864,3.22337 -2.47304,3.36747 -1.48837,0.22473 -2.60064,-2.25927 -2.66747,-5.95712 -0.033,-1.82776 0.20616,-3.70611 0.55457,-4.35505 l 0.61265,-1.14109 -3.26432,0.33367 c -3.42295,0.34989 -8.5499,1.57707 -28.93984,6.92701 -15.84936,4.15858 -28.019,6.91918 -44.93218,10.19258 -21.922525,4.24292 -29.03826,5.40378 -41.603807,6.78726 -10.716101,1.17984 -13.580462,1.31027 -29.083156,1.32429 -9.457986,0.009 -17.297728,-0.0914 -17.42165,-0.22219 -0.123923,-0.13076 -0.567198,-3.44718 -0.985057,-7.36983 -0.634799,-5.95917 -0.685544,-9.16515 -0.308558,-19.49438 0.462556,-12.67378 0.788917,-14.79167 2.601048,-16.87928 0.567505,-0.65378 2.242804,-2.83045 3.722886,-4.83705 2.449806,-3.32128 5.313053,-6.09883 6.287002,-6.09883 0.424852,0 0.176342,5.27694 -1.021519,21.69116 l -0.80224,10.99302 1.074975,2.87445 c 3.179734,8.50253 11.959172,13.41507 23.974753,13.41507 7.590427,0 28.891071,-3.2675 42.98335,-6.27852 25.213713,-5.38728 32.563563,-6.71642 45.766953,-9.89435 7.45304,-1.79387 23.39326,-5.51719 35.42272,-8.27404 12.02946,-2.75685 28.09609,-7.12856 35.28762,-9.19491 7.19152,-2.06635 17.9991,-5.28693 24.53686,-7.15684 17.17702,-4.91294 21.19832,-6.29797 24.11279,-7.75541 2.05467,-1.02748 3.97492,-0.7774 14.18032,-2.55759 9.47481,-1.65275 13.3552,-2.71589 13.60184,-2.31682 0.54436,0.88078 1.3463,7.32515 1.02012,7.65133 -0.16367,0.16368 -8.53012,0.96765 -20.36011,3.03462 -11.83003,2.06697 -23.02339,4.84692 -23.10611,4.92965 -0.0827,0.0827 -0.27084,1.31715 -0.41802,2.74317 l -0.26759,2.59275 2.74779,0.32295 c 2.54618,0.29925 2.93336,0.51608 5.27692,2.95516 l 2.52911,2.6322 0.77753,5.55689 c 0.68784,4.91582 0.71157,7.00805 0.20582,18.13565 -0.31443,6.91831 -0.81925,13.33143 -1.12181,14.25136 -0.44463,1.35196 -0.96025,1.82961 -2.68971,2.49164 -2.60497,0.99718 -5.63527,1.07395 -6.82468,0.1729 -0.60245,-0.45638 -1.22269,-0.53781 -1.96033,-0.25735 -0.59347,0.22563 -2.65747,0.56403 -4.58665,0.75199 -2.48519,0.24213 -3.99022,0.66804 -5.16328,1.46116 -1.76063,1.19039 -2.29194,1.31583 -3.18024,0.75077 z"
      id="bottom-path" />

   <path d="m 158.15726,104.8367 2.92848,-0.14644 0.4097,4.02594 -2.97729,0.18044 z"
                  id="toilet"
                  className="building" />

   <path d="m 276.07871,102.81005 8.29197,-1.1894 0.48862,3.21783 -8.33364,1.20416 z"
                  id="container-1"
                  className="building" />

   <path d="m 276.76342,106.80556 8.30088,-1.12554 0.46384,3.22149 -8.34266,1.13999 z"
                  id="container-2"
                  className="building" />

   <path
   //  style="display:inline;opacity:1;fill:#803300;stroke:#000000;stroke-width:0.26458300000000001px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
      d="m 209.04619,144.3093 9.89036,-0.44956 0.22478,4.15845 -9.89036,0.56195 z"
      id="container-3"
      className="building" />

   <path
      d="m 34.549895,73.089796 51.722859,5.43157 34.535366,2.892804 17.34588,0.350472 29.4016,-0.350472 65.28597,-4.394705 18.59261,-1.33367 6.84402,0.236 7.31601,1.652003 3.06799,2.360005 5.73051,18.698977 6.06413,-1.064146 0.58295,3.902156 -5.50254,0.86314 1.29474,8.19982 10.59537,-1.43485 0.9557,5.6527 -27.43288,4.85428 3.18988,-2.78267 1.76461,-4.07219 0.47508,-2.9184 0.20363,-2.44332 -0.20363,-2.57905 -0.8823,-3.93646 -0.55798,-1.049958 -3.06735,0.02895 -13.47787,3.260718 -43.79274,5.85404 -10.31219,1.51071 -6.76531,0.72251 -47.48857,8.07897 -29.34019,3.67397 -39.21226,3.69231 -23.926125,1.47692 -4.578456,0.36923 -13.588661,2.33754 0.594035,-12.35593 10.098595,1.78211 22.878946,1.43682 19.522893,-0.36648 15.618311,-0.12159 13.666022,-0.97615 29.89375,-3.41801 12.24316,-2.92693 9.27337,-1.62691 26.76157,-3.86388 22.17446,-3.46298 22.54623,-2.21661 15.11558,-2.06045 12.34531,-4.664406 2.41015,-3.45881 0.5064,-9.666262 -1.95547,-3.23928 -3.08898,-1.188069 -57.72256,3.458289 -13.55077,1.089128 -35.93474,1.670516 -35.7165,0.251896 L 104.67085,84.54628 91.423702,83.961655 79.389965,82.765805 46.585913,79.225802 33.369894,78.517801 Z"
      id="internal-path" />

   <path
      d="m 265.36647,99.881753 9.36688,-1.278584 0.15276,0.43816 -9.36817,1.305331 z"
      id="gate" />
  </g>
</svg>
</>
)
}

export default Map;