import * as React from "react";
import Svg, { Path, Defs, Stop, LinearGradient } from "react-native-svg";

export default function Next_arrow() {
	return (
		<Svg
			width="31"
			height="61"
			viewBox="0 0 31 61"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				d="M31 60C14.4315 60 1 46.7924 1 30.5C1 14.2076 14.4315 1 31 1"
				stroke="url(#paint0_linear_3_1028)"
			/>
			<Path d="M19.5 24.5L25 30L19.5 35.5" stroke="white" strokeWidth="0.6" />
			<Defs>
				<LinearGradient
					id="paint0_linear_3_1028"
					x1="1"
					y1="30"
					x2="31"
					y2="30"
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="white" stopOpacity="0.33" />
					<Stop offset="1" stopColor="white" stopOpacity="0.26" />
				</LinearGradient>
			</Defs>
		</Svg>
	);
}
