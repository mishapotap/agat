import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

export default function Modal_CloseButton() {
	return (
		<Svg
			width="43"
			height="43"
			viewBox="0 0 43 43"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Circle cx="21.5" cy="21.5" r="21.5" fill="#0452A0" />
			<Path
				d="M26.0005 18L18.0005 26"
				stroke="white"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M18 18L26 26"
				stroke="white"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}
