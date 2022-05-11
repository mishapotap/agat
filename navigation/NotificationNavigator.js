import { createStackNavigator } from "@react-navigation/stack";

import Notifications from "../screens/Notifications";
import Comments from "../screens/Comments";

const Stack = createStackNavigator();

const NotificationNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Уведомления">
			<Stack.Screen name="Уведомления" component={Notifications} />
			<Stack.Screen name="Комментарии" component={Comments} />
		</Stack.Navigator>
	);
};

export default NotificationNavigator;
