import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";

// Svg
import Agat from "../assets/svg/About/Agat";
import Roscosmos from "../assets/svg/About/Roscosmos";
import Tsniimash from "../assets/svg/About/Tsniimash";
import Energy from "../assets/svg/About/Energy";
import Arrow from "../assets/svg/About/Arrow";

// Layout
import Layout from "../layout/Layout";

const About = () => {

	return (
		<Layout>
			<Image style={styles.about__bg} source={require('../assets/about_bg.jpg')}></Image>
			{/* <View style={styles.about__bg__layer}></View> */}
			<ScrollView style={styles.content}>
				<View style={styles.about}>
					<View style={styles.about__top}>
						<Text style={styles.about__title}>О проекте</Text>
						<View>
							<View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 18}}>
								<Arrow/>
								<Pressable>
									<Text style={[styles.about__tabs, {color: "#0066FF"}]}>Задачи проекта</Text>
								</Pressable>
							</View>
							<View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 18}}>
								{/* <Arrow/> */}
								<Pressable>
									<Text style={[styles.about__tabs]}>Цель проекта</Text>
								</Pressable>
							</View>
							<View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 18}}>
								{/* <Arrow/> */}
								<Pressable>
									<Text style={[styles.about__tabs]}>Участники</Text>
								</Pressable>
							</View>
						</View>
					</View>
					<View style={styles.about__bottom}>
						<View style={styles.about__first}>
							<Text style={styles.about__text}>Популяризация комплексной программы фундаментальных, научно-прикладных и научно-образовательных исследований, экспериментов, реализуемых на РС МКС.</Text>
						</View>
						{/* <View style={styles.about__second}>
							<Text style={styles.about__text}>Эти эксперименты, как правило, носят комплексный характер, в них участвуют ученые из разных областей науки: медицины, физики космических лучей, геофизики, материаловедения, а также разработчики космической техники.</Text>
						</View> */}
						{/* <View style={styles.about__third}>
							<Roscosmos/>
							<Agat/>
							<Tsniimash/>
							<Energy/>
						</View> */}
					</View>
				</View>
			</ScrollView>
		</Layout>
	);
};

const styles = StyleSheet.create({
	about__bg: {
		...StyleSheet.absoluteFillObject,
		width: "100%",
		height: "100%",
		zIndex: -2,
	},
	// about__bg__layer: {
	// 	...StyleSheet.absoluteFillObject,
	// 	backgroundColor: "rgba(0, 0, 0, 0.6)",
	// 	zIndex: -1,
	// },
	content: {
		position: "absolute",
		right: 0,
		width: "89%",
		// marginTop: 0,
		// marginRight: 'auto',
		// marginBottom: 0,
		// marginLeft: 'auto',
	},
	about: {
		width: "78%",
		height: '100%',
		marginTop: 90,
		marginRight: 'auto',
		marginBottom: 0,
		marginLeft: 'auto',
	},
	about__top: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: "space-between",
		paddingHorizontal: 20,
		// paddingTop: 40,
		paddingBottom: 20,
		marginBottom: 35,
		borderBottomColor: '#fff',
		borderBottomWidth: 1,
	},
	about__title: {
		// text
		fontWeight: '800',
		fontSize: 26,
		lineHeight: 33,
		letterSpacing: 1,
		color: '#FFFFFF',
	},
	about__tabs: {
		paddingLeft: 18,
		// text
		fontWeight: '600',
		fontSize: 9,
		lineHeight: 14,
		letterSpacing: 0.5,
		textTransform: 'uppercase',
		color: '#FFFFFF',
	},
	// about__tabs__active: {
		// color: '#0066FF',
		// paddingRight: 20,
	// },
	about__bottom: {

	},
	about__text: {
		// text
		textAlign: 'justify',
		fontWeight: '500',
		fontSize: 14,
		lineHeight: 21,
		letterSpacing: 0.05,
		color: '#FFFFFF',
	},
	about__first: {
		width: '55%',
	},
	about__second: {
		width: '70%',
	},
	about__third: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
});



export default About;
