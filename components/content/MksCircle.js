import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { COLORS } from "../../constants";
import { mks_1_starship, mks_1_mks } from '../../constants/images';

const MksCircle = ({children, onPressHandler, bottomText, mks}) => {
    return (
		<View>
			<TouchableOpacity style={styles.button} onPress={onPressHandler}>
				{children}
				<Image style={{position: 'absolute', width: 50, height: 28}} source={mks ? mks_1_mks : mks_1_starship}/>
			</TouchableOpacity>
			<Text style={styles.buttonText}>{bottomText}</Text>
		</View>
    )
}

const styles = StyleSheet.create({
    button: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		// text
		textAlign: 'center',
		fontWeight: '400',
		fontSize: 8,
		letterSpacing: 0.5,
		color: COLORS.white,
	},
})

export default MksCircle;