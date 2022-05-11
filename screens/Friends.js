import React, { useState } from "react";
import { Button } from "react-native";
import FriendList from "../components/FriendList";

const Friends = ({ navigation }) => {

    const [friends, setFriends] = useState([
        {id: '1', name: 'Игорь Хуигорь'},
        {id: '2', name: 'Иван Хуйлан'},
        {id: '3', name: 'Александр Хуйлов'},
        {id: '4', name: 'Василий Залупа'}
    ])

    const goToFriend = (name) => {
        navigation.navigate('Друг', {name})
    }

	return (
		<>
            <FriendList
                friends={friends}
                goToFriend={goToFriend}
            />
			<Button title="Боковое меню>" onPress={() => navigation.toggleDrawer()} />
		</>
	);
};


export default Friends;
