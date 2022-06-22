import React, {useState} from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import Layout from "../components/Layout";
import { COLORS, SIZES } from "../constants";
import { mks_1_background, mks_1_starship } from "../constants/images";
import { Mks_1_BackButton, Mks_1_SoundButton, Mks_1_PageButton_White, Mks_1_PageButton_Blue } from "../assets/svg";
import { MksButton, MksCircle } from "../components/content";
import { MksScreen_Modal_1 } from "../components/modal";

const MksScreen = ({route, navigation}) => {
	const [modalMks, setModalMks] = useState(false);
	return (
		<Layout>
			<ImageBackground style={styles.background} resizeMode={"stretch"} source={mks_1_background}>
				<View style={styles.content}>

					<View style={{alignItems: 'flex-start', marginTop: 20, marginLeft: 20}}>
						<Text style={styles.headerText}><Text style={{color: "#0066FF"}}>«МКС»</Text> — пилотируемая орбитальная станция...</Text>
					</View>

					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginTop: 20}}>
						<TouchableOpacity style={styles.button}>
							<Mks_1_SoundButton/>
						</TouchableOpacity>

						<TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
							<Mks_1_BackButton/>
						</TouchableOpacity>
					</View>

					<View style={{flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 40, marginBottom: 40, alignItems: 'flex-end', flex: 1}}>
						<View style={{flexDirection: 'row'}}>
							<MksCircle bottomText={"МКС"} onPressHandler={() => navigation.navigate('MksScreen')}>
								<Mks_1_PageButton_White/>
							</MksCircle>

							<MksCircle bottomText={"Наука"} onPressHandler={() => navigation.navigate('Science')}>
								<Mks_1_PageButton_Blue/>
							</MksCircle>
						</View>

						<MksButton bottomText={"Управление"} width={84} height={50} onPressHandler={() => setModalMks(true)}>
							<Image style={{position: 'absolute', width: 72, height: 40}} source={mks_1_starship}/>
						</MksButton>
					</View>
					<MksScreen_Modal_1 modalVisible={modalMks} setModalVisible={setModalMks} navigation={navigation}/>

				</View>
			</ImageBackground>
        </Layout>
	);
};

const styles = StyleSheet.create({
	content: {
        paddingLeft: SIZES.width * 0.11,
		width: '100%',
        // height: SIZES.height,
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
		// backgroundColor: 'yellow',
    },
	background: {
		width: SIZES.width,
		height: SIZES.height,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerText: {
		// text
		fontWeight: '600',
		fontSize: 10,
		lineHeight: 16,
		textAlign: 'center',
		letterSpacing: 0.5,
		color: COLORS.white,
	},
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
	backButton: {
		position: 'absolute',
		top: 50,
		right: 50,
	}
});

export default MksScreen;
