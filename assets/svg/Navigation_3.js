import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../constants";

export default function Navigation_3({activeNav}) {
	return (
		<Svg
			width="60"
			height="35"
			viewBox="0 0 60 35"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				d="M22.4365 4.62315H22.4557L23.1376 4.87508L29.3428 7.16481C29.7967 7.32717 30.291 7.32717 30.7449 7.16481L37.632 4.62315H37.6512C38.585 4.27885 38.585 3.4167 37.6512 3.0724L30.7422 0.519548C30.2878 0.36002 29.7944 0.36002 29.3401 0.519548L22.4502 3.0668C22.2505 3.13411 22.07 3.2504 21.9244 3.40551C21.5602 3.81419 21.7355 4.36283 22.4365 4.62315ZM30.7394 2.59094L34.1433 3.84498L30.7449 5.10181C30.2906 5.26134 29.7972 5.26134 29.3428 5.10181L25.9444 3.84498L29.3401 2.59094C29.7935 2.43142 30.286 2.43142 30.7394 2.59094Z"
				fill={activeNav === 'four' ? COLORS.activeNav : "white"}
				fillOpacity="0.5"
			/>
			<Path
				d="M37.6484 10.2383C37.1941 10.0788 36.7007 10.0788 36.2463 10.2383L30.7448 12.2705C30.2905 12.43 29.7971 12.43 29.3428 12.2705L25.9389 11.0137L23.8358 10.2383C23.3815 10.0788 22.8881 10.0788 22.4337 10.2383C21.4999 10.5854 21.4999 11.4475 22.4337 11.7918L23.1622 12.0718L29.3428 14.3531C29.7962 14.5126 30.2887 14.5126 30.7421 14.3531L37.6484 11.803C38.5712 11.4475 38.5712 10.5826 37.6484 10.2383Z"
				fill={activeNav === 'four' ? COLORS.activeNav : "white"}
				fillOpacity="0.5"
			/>
			<Path
				d="M37.6212 6.72804C37.1701 6.57128 36.6811 6.57128 36.23 6.72804L30.7532 8.75465C30.2989 8.91418 29.8055 8.91418 29.3511 8.75465L25.9528 7.49782L23.8414 6.72804C23.3871 6.56852 22.8937 6.56852 22.4394 6.72804C21.5056 7.07234 21.5056 7.93449 22.4394 8.27879L23.1377 8.53912L29.3429 10.8289C29.7972 10.9884 30.2907 10.9884 30.745 10.8289L37.6321 8.28719C38.5714 7.93169 38.5714 7.06395 37.6212 6.72804Z"
				fill={activeNav === 'four' ? COLORS.activeNav : "white"}
				fillOpacity="0.5"
			/>
			<Path
				d="M24.8711 23.1003C24.8711 23.5151 24.7304 23.8525 24.449 24.1128C24.1697 24.3709 23.8079 24.5 23.3635 24.5H21.6211V19.9202H24.4268V20.5327H22.332V21.707H23.3477C23.7962 21.707 24.1623 21.8361 24.4458 22.0942C24.7293 22.3524 24.8711 22.6877 24.8711 23.1003ZM22.332 23.897H23.1826C23.4894 23.897 23.7264 23.8282 23.8936 23.6907C24.0607 23.5531 24.1443 23.3564 24.1443 23.1003C24.1443 22.8443 24.0597 22.6475 23.8904 22.51C23.7232 22.3704 23.4862 22.3005 23.1794 22.3005H22.332V23.897ZM28.5273 24.5L28.1084 23.2622H26.3628L25.9438 24.5H25.2043L26.8579 19.9202H27.626L29.2795 24.5H28.5273ZM27.2261 20.6819L26.5437 22.6909H27.9275L27.2451 20.6819H27.2261ZM30.6633 22.4561V21.8625H31.2791C31.5414 21.8625 31.7541 21.7927 31.917 21.6531C32.082 21.5134 32.1646 21.3336 32.1646 21.1135C32.1646 20.8935 32.0873 20.72 31.9329 20.593C31.7805 20.4661 31.5732 20.4026 31.3108 20.4026C31.0442 20.4026 30.8284 20.4682 30.6633 20.5994C30.5004 20.7284 30.4084 20.9072 30.3872 21.1357H29.7144C29.7376 20.7253 29.8942 20.4015 30.1841 20.1646C30.474 19.9276 30.8569 19.8091 31.333 19.8091C31.7837 19.8091 32.1519 19.9244 32.4375 20.155C32.7231 20.3835 32.866 20.6787 32.866 21.0405C32.866 21.2965 32.7866 21.5219 32.6279 21.7166C32.4714 21.9091 32.2661 22.0361 32.0122 22.0974V22.1228C32.319 22.1609 32.5613 22.2815 32.739 22.4846C32.9167 22.6877 33.0056 22.9448 33.0056 23.2559C33.0056 23.641 32.8448 23.9636 32.5232 24.2239C32.2016 24.482 31.8006 24.6111 31.3203 24.6111C30.8231 24.6111 30.4168 24.4884 30.1016 24.2429C29.7863 23.9975 29.6181 23.6727 29.5969 23.2686H30.2825C30.3036 23.4928 30.4073 23.6727 30.5935 23.8081C30.7818 23.9414 31.023 24.0081 31.3171 24.0081C31.6028 24.0081 31.8334 23.9351 32.009 23.7891C32.1868 23.6431 32.2756 23.4537 32.2756 23.2209C32.2756 22.9819 32.1889 22.7946 32.0154 22.6592C31.844 22.5238 31.6049 22.4561 31.2981 22.4561H30.6633ZM36.646 24.5L36.2271 23.2622H34.4814L34.0625 24.5H33.323L34.9766 19.9202H35.7446L37.3982 24.5H36.646ZM35.3447 20.6819L34.6624 22.6909H36.0461L35.3638 20.6819H35.3447ZM6.52954 32.5V29.0532H6.48193L4.14917 32.5H3.45728V27.9202H4.16187V31.3765H4.20947L6.54224 27.9202H7.23413V32.5H6.52954ZM10.0747 32.5857C9.43148 32.5857 8.92049 32.372 8.54175 31.9446C8.16512 31.5172 7.97681 30.9385 7.97681 30.2085C7.97681 29.4827 8.16618 28.9062 8.54492 28.4788C8.92578 28.0492 9.43571 27.8345 10.0747 27.8345C10.5783 27.8345 11.0068 27.9752 11.3601 28.2566C11.7156 28.5359 11.9314 28.9041 12.0076 29.3611H11.2935C11.2194 29.0903 11.0713 28.8734 10.8491 28.7104C10.6291 28.5475 10.3709 28.4661 10.0747 28.4661C9.65788 28.4661 9.32463 28.6248 9.07495 28.9421C8.82739 29.2574 8.70361 29.6795 8.70361 30.2085C8.70361 30.7438 8.82739 31.1691 9.07495 31.4844C9.32251 31.7975 9.65682 31.9541 10.0779 31.9541C10.3826 31.9541 10.6407 31.8832 10.8523 31.7415C11.066 31.5997 11.2131 31.4008 11.2935 31.1448H12.0076C11.9081 31.5997 11.6891 31.9541 11.3506 32.208C11.0142 32.4598 10.5889 32.5857 10.0747 32.5857ZM14.6514 32.5857C14.0081 32.5857 13.4972 32.372 13.1184 31.9446C12.7418 31.5172 12.5535 30.9385 12.5535 30.2085C12.5535 29.4827 12.7428 28.9062 13.1216 28.4788C13.5024 28.0492 14.0124 27.8345 14.6514 27.8345C15.1549 27.8345 15.5834 27.9752 15.9368 28.2566C16.2922 28.5359 16.5081 28.9041 16.5842 29.3611H15.8701C15.7961 29.0903 15.6479 28.8734 15.4258 28.7104C15.2057 28.5475 14.9476 28.4661 14.6514 28.4661C14.2345 28.4661 13.9013 28.6248 13.6516 28.9421C13.4041 29.2574 13.2803 29.6795 13.2803 30.2085C13.2803 30.7438 13.4041 31.1691 13.6516 31.4844C13.8992 31.7975 14.2335 31.9541 14.6545 31.9541C14.9592 31.9541 15.2174 31.8832 15.429 31.7415C15.6427 31.5997 15.7897 31.4008 15.8701 31.1448H16.5842C16.4848 31.5997 16.2658 31.9541 15.9272 32.208C15.5908 32.4598 15.1655 32.5857 14.6514 32.5857ZM20.7769 32.5H20.0659V28.5327H18.5171L18.3806 30.7512C18.3446 31.3627 18.2293 31.8123 18.0347 32.1001C17.84 32.3879 17.5438 32.5317 17.146 32.5317C17.0423 32.5317 16.9535 32.5201 16.8794 32.4968V31.8684C16.9386 31.8832 17.0011 31.8906 17.0667 31.8906C17.2782 31.8906 17.4338 31.7986 17.5332 31.6145C17.6348 31.4283 17.6972 31.1289 17.7205 30.7163L17.8728 27.9202H20.7769V32.5ZM24.595 31.8843V32.5H21.6877V27.9202H24.595V28.5327H22.3987V29.8721H24.4775V30.4624H22.3987V31.8843H24.595ZM26.4993 30.729C26.4823 31.0125 26.4517 31.2421 26.4072 31.4177C26.3628 31.5912 26.2887 31.7383 26.1851 31.8589V31.8843H28.2798V28.5327H26.6389L26.4993 30.729ZM25.6836 32.5V33.4045H25.0298V31.8843H25.363C25.5196 31.7933 25.6328 31.6526 25.7026 31.4622C25.7746 31.2717 25.8201 31.0168 25.8391 30.6973L26.0073 27.9202H28.9907V31.8843H29.562V33.4045H28.9114V32.5H25.6836ZM32.1677 27.844C32.8258 27.844 33.3473 28.0566 33.7324 28.4819C34.1196 28.9072 34.3132 29.4838 34.3132 30.2117C34.3132 30.9395 34.1207 31.5161 33.7356 31.9414C33.3505 32.3646 32.8279 32.5762 32.1677 32.5762C31.5076 32.5762 30.9849 32.3646 30.5999 31.9414C30.2148 31.5161 30.0222 30.9395 30.0222 30.2117C30.0222 29.4838 30.2148 28.9072 30.5999 28.4819C30.9849 28.0566 31.5076 27.844 32.1677 27.844ZM32.1677 28.4692C31.7319 28.4692 31.3859 28.6258 31.1299 28.939C30.876 29.2521 30.749 29.6764 30.749 30.2117C30.749 30.7449 30.876 31.1681 31.1299 31.4812C31.3859 31.7944 31.7319 31.9509 32.1677 31.9509C32.6015 31.9509 32.9453 31.7944 33.1992 31.4812C33.4552 31.1681 33.5833 30.7449 33.5833 30.2117C33.5833 29.6764 33.4552 29.2521 33.1992 28.939C32.9453 28.6258 32.6015 28.4692 32.1677 28.4692ZM36.8936 32.5H35.0559V27.9202H36.884C37.2903 27.9202 37.6161 28.0249 37.8616 28.2344C38.107 28.4417 38.2297 28.7179 38.2297 29.0627C38.2297 29.3061 38.1504 29.524 37.9917 29.7166C37.8351 29.907 37.6426 30.0212 37.4141 30.0593V30.0847C37.7272 30.1207 37.979 30.2413 38.1694 30.4465C38.3599 30.6497 38.4551 30.9025 38.4551 31.2051C38.4551 31.6092 38.3165 31.9266 38.0393 32.1572C37.7621 32.3857 37.3802 32.5 36.8936 32.5ZM35.7668 28.501V29.8689H36.5635C36.8703 29.8689 37.1062 29.8075 37.2712 29.6848C37.4363 29.5621 37.5188 29.3875 37.5188 29.1611C37.5188 28.9495 37.449 28.7866 37.3093 28.6724C37.1697 28.5581 36.9708 28.501 36.7126 28.501H35.7668ZM35.7668 31.9192H36.7476C37.0671 31.9192 37.3104 31.8547 37.4775 31.7256C37.6447 31.5965 37.7283 31.4082 37.7283 31.1606C37.7283 30.6613 37.3876 30.4116 36.7063 30.4116H35.7668V31.9192ZM42.0828 32.5L41.6638 31.2622H39.9182L39.4993 32.5H38.7598L40.4133 27.9202H41.1814L42.835 32.5H42.0828ZM40.7815 28.6819L40.0991 30.6909H41.4829L40.8005 28.6819H40.7815ZM47.1768 32.5H46.4658V30.4719H44.114V32.5H43.4031V27.9202H44.114V29.8562H46.4658V27.9202H47.1768V32.5ZM51.1536 32.5V29.0532H51.106L48.7732 32.5H48.0813V27.9202H48.7859V31.3765H48.8335L51.1663 27.9202H51.8582V32.5H51.1536ZM55.8381 32.5V29.0532H55.7905L53.4578 32.5H52.7659V27.9202H53.4705V31.3765H53.5181L55.8508 27.9202H56.5427V32.5H55.8381ZM53.626 26.6443H54.0767C54.0788 26.8178 54.1327 26.9606 54.2385 27.0728C54.3464 27.1849 54.484 27.241 54.6511 27.241C54.8183 27.241 54.9548 27.1849 55.0605 27.0728C55.1685 26.9606 55.2235 26.8178 55.2256 26.6443H55.6763C55.6763 26.9299 55.5811 27.1616 55.3906 27.3394C55.2002 27.5171 54.9537 27.606 54.6511 27.606C54.3486 27.606 54.1021 27.5171 53.9116 27.3394C53.7212 27.1616 53.626 26.9299 53.626 26.6443Z"
				fill={activeNav === 'four' ? COLORS.activeNav : "white"}
				fillOpacity="0.5"
			/>
		</Svg>
	);
}
