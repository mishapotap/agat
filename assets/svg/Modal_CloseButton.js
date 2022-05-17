import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

export default function Modal_CloseButton() {
	return (
		<Svg
			width="83"
			height="90"
			viewBox="0 0 83 90"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Circle cx="41.5" cy="41.5" r="21.5" fill="white" />
			<Path
				d="M46.0005 38L38.0005 46"
				stroke="#0452A0"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M38 38L46 46"
				stroke="#0452A0"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}
