import React from "react";
import "react-native-gesture-handler";

// Navigation
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import AppNavigation from "./navigation/AppNavigation";
import Navigation from "./components/Navigation";


export default function App() {
	const ref = useNavigationContainerRef();
	return (
		<>
			<NavigationContainer ref={ref}>
				<AppNavigation/>
			</NavigationContainer>
			<Navigation navigate={ref.navigate} />
		</>
	);
}


// SafeAreaView?