import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotificationNavigator from "./NotificationNavigator";
import AnotherNavigator from "./AnotherNavigator";

import Feeds from "../screens/Feeds";
import Search from "../screens/Search";
import Messages from "../screens/Messages";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName="Новости">
				<Tab.Screen name="Новости" component={Feeds} />
				<Tab.Screen name="Сообщения" component={Messages} />
				<Tab.Screen name="Поиск" component={Search} />
				<Tab.Screen name="Уведомления" component={NotificationNavigator} options={{headerShown: false}}/>
				<Tab.Screen name="Другое" component={AnotherNavigator} options={{headerShown: false}}/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
