import React, {useState} from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import Layout from "../components/Layout";
import { COLORS, SIZES } from "../constants";
import { mks_1_background, mks_1_starship } from "../constants/images";
import { Mks_1_BackButton, Mks_1_SoundButton, Mks_1_PageButton_White, Mks_1_PageButton_Blue } from "../assets/svg";
import { MksButton, MksCircle } from "../components/content";
import { ScienceScreen_Modal_1 } from "../components/modal";
import { WebView } from 'react-native-webview';

const Science = ({route, navigation}) => {
	const [modalScreen, setModalScreen] = useState(false);
	return (
		<Layout>
			<ImageBackground style={styles.background} resizeMode={"stretch"} source={mks_1_background}>
				<View style={styles.content}>

					<View style={{alignItems: 'flex-start', marginTop: 20, marginLeft: 20, zIndex: 1}}>
						<Text style={styles.headerText}><Text style={{color: "#0066FF"}}>«Наука»</Text> — многоцелевой лабораторный модуль российского сегмента МКС. </Text>
					</View>

					<TouchableOpacity style={styles.soundButton}>
						<Mks_1_SoundButton/>
					</TouchableOpacity>

					<TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
						<Mks_1_BackButton/>
					</TouchableOpacity>

					<View style={{position: 'absolute', height: SIZES.height, width: SIZES.width}}>
						<WebView source={{ uri: 'http://mks.avt.promo/NAUKA/NAUKA.html'}} />
					</View>

					<View style={{position: 'absolute', bottom: 25, left: 90}}>
						<MksCircle bottomText={"МКС"} mks={true} onPressHandler={() => navigation.navigate('Mks')}>
							<Mks_1_PageButton_Blue/>
						</MksCircle>
					</View>

					<View style={{position: 'absolute', bottom: 25, left: 160}}>
						<MksCircle bottomText={"Наука"}>
							<Mks_1_PageButton_White/>
						</MksCircle>
					</View>

					<View style={{position: 'absolute', bottom: 25, right: SIZES.width * 0.05}}>
						<MksButton bottomText={"Управление"} width={84} height={50} onPressHandler={() => setModalScreen(true)}>
							<Image style={{position: 'absolute', width: 72, height: 40}} source={mks_1_starship}/>
						</MksButton>
					</View>

					<ScienceScreen_Modal_1 modalVisible={modalScreen} setModalVisible={setModalScreen} navigation={navigation}/>
				</View>
			</ImageBackground>
        </Layout>
	);
};

const styles = StyleSheet.create({
	content: {
        paddingLeft: 70,
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
	soundButton: {
		position: 'absolute',
		left: 90,
		top: 50,
		zIndex: 1,
	},
	backButton: {
		position: 'absolute',
		top: 50,
		right: SIZES.width * 0.05,
		zIndex: 1,
	},
	buttonText: {
		// text
		textAlign: 'center',
		fontWeight: '400',
		fontSize: 8,
		letterSpacing: 0.5,
		color: COLORS.white,
	},
});

export default Science;
