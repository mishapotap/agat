// React
import React from "react";
import "react-native-gesture-handler";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, About, Research, ResearchBase, Mks, Science, Experiment } from "./screens";
import { Layout } from "./components";
import { SIZES } from "./constants";
import { Navigation_1, Navigation_2, Navigation_3, Navigation_4, Navigation_5 } from "./assets/svg";
import { StyleSheet, StatusBar, View, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
	function MyTabBar({ state, descriptors, navigation }) {
		
		return (
		  <View style={styles.tabbarContainer}>
			{state.routes.map((route, index) => {
			
			const { options } = descriptors[route.key];
	
			const isFocused = state.index === index;
			const navigationArray = [
				{
					id: 1,
					icon: <Navigation_1 color={isFocused ? '#87CDF8' : 'white'} />,
				},
				{
					id: 2,
					icon: <Navigation_2 color={isFocused ? '#87CDF8' : 'white'} />,
				},
				{
					id: 3,
					icon: <Navigation_3 color={isFocused ? '#87CDF8' : 'white'} />,
				},
				{
					id: 4,
					icon: <Navigation_4 color={isFocused ? '#87CDF8' : 'white'} />,
				},
				{
					id: 5,
					icon: <Navigation_5 color={isFocused ? '#87CDF8' : 'white'} />,
				},
			];
			const label = navigationArray[index].icon;

			const onPress = () => {
				const event = navigation.emit({
					type: 'tabPress',
					target: route.key,
					canPreventDefault: true,
				});
		
				if (!isFocused && !event.defaultPrevented) {
					navigation.navigate({ name: route.name, merge: true });
				}
			};
	
			const onLongPress = () => {
				navigation.emit({
					type: 'tabLongPress',
					target: route.key,
				});
			};
	  
			  return (
				<TouchableOpacity
					key={index}
					accessibilityRole="button"
					accessibilityState={isFocused ? { selected: true } : {}}
					accessibilityLabel={options.tabBarAccessibilityLabel}
					testID={options.tabBarTestID}
					onPress={onPress}
					onLongPress={onLongPress}
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
				>
					{label}
				</TouchableOpacity>
			  );
			})}
		  </View>
		);
	  }


	function ResearchBaseScreens() {
		return (
		  <Stack.Navigator backBehavior={"history"} screenOptions={{headerShown: false}}>
			<Stack.Screen name="ResearchBase" component={ResearchBase} />
			<Stack.Screen name="Experiment" component={Experiment} />
		  </Stack.Navigator>
		);
	  }
	function MksScreens() {
		return (
		  <Stack.Navigator backBehavior={"history"} screenOptions={{headerShown: false}}>
			<Stack.Screen name="Mks" component={Mks} />
			<Stack.Screen name="Science" component={Science} />
		  </Stack.Navigator>
		);
	  }
	return (
		<Layout>
			<StatusBar hidden />
			<NavigationContainer>
				<Tab.Navigator 
				tabBar={props => <MyTabBar {...props} />}
				backBehavior={"history"}
				screenOptions={{ headerShown: false, tabBarShowLabel: false}}
				initialRouteName={"Home"}>
					<Tab.Screen name="Home" component={Home} />
					<Tab.Screen name="About" component={About} />
					<Tab.Screen name="Research" component={Research} />
					<Tab.Screen name="ResearchBaseScreens" component={ResearchBaseScreens} />
					<Tab.Screen name="MksScreens" component={MksScreens} />
				</Tab.Navigator>
			</NavigationContainer>
		</Layout>
	);
}

const styles = StyleSheet.create({
	tabbarContainer: {
		flexDirection: 'column',
		width: 70,
		height: SIZES.height,
		position: 'absolute',
		left: 0,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		paddingVertical: 15
	},
});

