import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

export default function Mks_1_BackButton() {
	return (
		<Svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Circle cx="18.5" cy="18.5" r="18.25" stroke="#0066FF" strokeWidth="0.5" />
			<Circle cx="18.5" cy="18.5" r="18.25" stroke="white" strokeOpacity="0.39" strokeWidth="0.5" />
			<Circle cx="18.5" cy="18.5003" r="16.5862" fill="#3C70BE" fillOpacity="0.18" />
			<Circle cx="18.5" cy="18.5003" r="16.5862" stroke="#0066FF" strokeWidth="0.2" />
			<Circle
				cx="18.5"
				cy="18.5003"
				r="16.5862"
				stroke="white"
				strokeOpacity="0.39"
				strokeWidth="0.2"
			/>
			<Path
				d="M24.3869 11.25L17.1576 18.3213L16.9749 18.5L17.1576 18.6787L24.3869 25.75H17.7567L10.3572 18.5L17.7567 11.25H24.3869Z"
				stroke="white"
				strokeWidth="0.5"
			/>
		</Svg>
	);
}
