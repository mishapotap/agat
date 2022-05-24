import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

export default function Modal_BackButton() {
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
				d="M18.4998 22.8334L15.1665 19.5M15.1665 19.5L18.4998 16.1667M15.1665 19.5H24.3332C25.2172 19.5 26.0651 19.8512 26.6902 20.4763C27.3153 21.1015 27.6665 21.9493 27.6665 22.8334C27.6665 23.7174 27.3153 24.5653 26.6902 25.1904C26.0651 25.8155 25.2172 26.1667 24.3332 26.1667H23.4998"
				stroke="white"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}
