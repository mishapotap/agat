// React
import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "react-native";

// Navigation
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./components/Navigation";
import { Home, About, Research, ResearchBase, Mks, Science, Experiment } from "./screens";
import { Layout } from "./components";

const Stack = createNativeStackNavigator();

export default function App() {
	const ref = useNavigationContainerRef();
	return (
		<Layout>
			<StatusBar hidden />
			<NavigationContainer ref={ref}>
				<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Home"}>
					<Stack.Screen animation={"slide_from_right"} name="Home" component={Home} />
					<Stack.Screen animation={"slide_from_right"} name="About" component={About} />
					<Stack.Screen animation={"slide_from_right"} name="Research" component={Research} />
					<Stack.Screen animation={"slide_from_right"} name="ResearchBase" component={ResearchBase} />
					<Stack.Screen animation={"slide_from_right"} name="Mks" component={Mks} />
					<Stack.Screen animation={"slide_from_right"} name="Science" component={Science} />
					<Stack.Screen animation={"slide_from_right"} name="Experiment" component={Experiment} />
				</Stack.Navigator>
			</NavigationContainer>
			<Navigation navigate={ref.navigate} />
		</Layout>
	);
}
