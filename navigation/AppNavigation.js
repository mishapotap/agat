import React from "react";
// Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages
import Home from "../screens/Home";
import About from "../screens/About";
import Research from "../screens/Research";
import ResearchBase from "../screens/ResearchBase";
import Mks from "../screens/Mks";
// import Go from "../screens/Go";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="About" component={About} />
			<Stack.Screen name="Research" component={Research} />
			<Stack.Screen name="ResearchBase" component={ResearchBase} />
			<Stack.Screen name="Mks" component={Mks} />
		</Stack.Navigator>
	);
};

export default AppNavigation;
