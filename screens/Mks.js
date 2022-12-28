import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import Layout from "../components/Layout";
import { COLORS, SIZES } from "../constants";
import { mks_1_background, mks_1_starship } from "../constants/images";
import { Mks_1_BackButton, Mks_1_SoundButton, Mks_1_PageButton_White, Mks_1_PageButton_Blue } from "../assets/svg";
import { MksButton, MksCircle } from "../components/content";
import { Mks_Modal_1 } from "../components/modal";
import { WebView } from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';


const Mks = ({route, navigation}) => {

	// const [modalMks, setModalMks] = useState(false);
	const [connected, setConnected] = useState(true)

	useEffect(() => {
		NetInfo.addEventListener(state => {
			// console.log("Connection type", state.type);
			// console.log("Is connected?", state.isConnected);
			state.isConnected ? setConnected(true) : setConnected(false)
		});
	}, [connected])

	// function timeout(ms) {
	// 	return new Promise(resolve => setTimeout(resolve, ms));
	// }

	const Error = () => {
		// if (!connected) {
			return (
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.black}}>
					<Text style={{fontSize: 15, color: COLORS.white, marginBottom: 10}}>Нет доступа к данному разделу</Text>
					<Text style={{fontSize: 15, color: COLORS.white}}>Пожалуйста, проверьте подключение к сети</Text>
				</View>
			)
		// }
		// return null
	}

	return (
		<Layout>
			{/* <ImageBackground style={styles.background} resizeMode={"stretch"} source={mks_1_background}> */}
				<View style={styles.content}>

					{/* <View style={{alignItems: 'flex-start', marginTop: 20, marginLeft: 20, zIndex: 1}}>
						<Text style={styles.headerText}><Text style={{color: "#0066FF"}}>«МКС»</Text> — пилотируемая орбитальная станция.</Text>
					</View>

					<TouchableOpacity style={styles.soundButton}>
						<Mks_1_SoundButton/>
					</TouchableOpacity>

					<TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
						<Mks_1_BackButton/>
					</TouchableOpacity> */}

					<View style={{position: 'absolute', height: SIZES.height, width: SIZES.width}}>
						{/*{connected ? <WebView source={{ uri: 'https://orbital-science.space/mobile/#mks'}} /> : <Error/>}*/}
						{connected ? <WebView source={{ uri: 'https://orbital-science.space/mobile/#mks'}} /> : <Error/>}
						{/*{!connected ? <Error/> : null}*/}
						{/*<WebView source={{ uri: 'https://orbital-science.space/mobile/#mks'}} renderError={() => <Error />}/>*/}
						{/* <Error /> */}
						{/* <WebView source={{ uri: 'http://localhost:3000/mks/#mks'}} /> */}
					</View>

					{/* <View style={{position: 'absolute', bottom: 25, left: 90}}>
						<MksCircle bottomText={"МКС"} mks={true}>
							<Mks_1_PageButton_White/>
						</MksCircle>
					</View>

					<View style={{position: 'absolute', bottom: 25, left: 160}}>
						<MksCircle bottomText={"Наука"} onPressHandler={() => navigation.navigate('Science')}>
							<Mks_1_PageButton_Blue/>
						</MksCircle>
					</View>

					<View style={{position: 'absolute', bottom: 25, right: SIZES.width * 0.05}}>
						<MksButton bottomText={"Управление"} width={84} height={50} onPressHandler={() => setModalMks(true)}>
							<Image style={{position: 'absolute', width: 72, height: 40}} source={mks_1_starship}/>
						</MksButton>
					</View>
						
					<Mks_Modal_1 modalVisible={modalMks} setModalVisible={setModalMks} navigation={navigation}/> */}

				</View>
			{/* </ImageBackground> */}
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
		// backgroundColor: 'yellow',
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

export default Mks;
