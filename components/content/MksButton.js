import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Mks_1_Button } from '../../assets/svg'
import { COLORS } from "../../constants";

const MksButton = ({children, width, height, onPressHandler, bottomText}) => {
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={onPressHandler}>
                <Mks_1_Button width={width} height={height}/>
                {children}
            </TouchableOpacity>
            {bottomText && <Text style={styles.buttonText}>{bottomText}</Text>}
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

export default MksButton;