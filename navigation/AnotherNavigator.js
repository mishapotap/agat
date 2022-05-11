import { createDrawerNavigator } from "@react-navigation/drawer";
import FriendsNavigator from "./FriendsNavigator";

import Another from "../screens/Another";
import Groups from "../screens/Groups";
import Music from "../screens/Music";

const Drawer = createDrawerNavigator();

const AnotherNavigator = () => {
	return (
		<Drawer.Navigator initialRouteName="Другое">
			<Drawer.Screen name="Другое" component={Another} />
			<Drawer.Screen name="Группы" component={Groups} />
			<Drawer.Screen name="Музыка" component={Music} />
			<Drawer.Screen name="Друзья" component={FriendsNavigator} options={{headerShown: false}}/>
		</Drawer.Navigator>
	);
};

export default AnotherNavigator;
