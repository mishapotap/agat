import { createStackNavigator } from "@react-navigation/stack";

import Friends from "../screens/Friends";
import Friend from "../screens/Friend";

const Stack = createStackNavigator();

const FriendsNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Друзья">
			<Stack.Screen
				name="Друзья"
				component={Friends}
			/>
			<Stack.Screen name="Друг" component={Friend} options={({ route }) => ({ title: route.params.name })}/>
		</Stack.Navigator>
	);
};

export default FriendsNavigator;
