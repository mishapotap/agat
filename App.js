// React
import React from "react";
import "react-native-gesture-handler";

// Navigation
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./components/Navigation";

// Pages
import { Home, About, Research, ResearchBase, Mks } from "./screens";
import { Layout } from "./components";

const Stack = createNativeStackNavigator();

export default function App() {
	const ref = useNavigationContainerRef();
	return (
		<Layout>
			<NavigationContainer ref={ref}>
				<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Home"}>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="About" component={About} />
					<Stack.Screen name="Research" component={Research} />
					<Stack.Screen name="ResearchBase" component={ResearchBase} />
					<Stack.Screen name="Mks" component={Mks} />
				</Stack.Navigator>
			</NavigationContainer>
			<Navigation navigate={ref.navigate} />
		</Layout>
	);
}
