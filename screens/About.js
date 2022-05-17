import React, {useState} from "react";
import { View, Text, StyleSheet, Image, ScrollView, Pressable, ImageBackground } from "react-native";
import { useLinkTo } from "@react-navigation/native";

// Components
import { AboutSlider, Content, Layout, ModalWhite } from "../components";

// Constants
// import { COLORS, FONTS, SIZES, images, svg, icons } from '../constants';
import {SIZES, COLORS} from '../constants';
import { About_1_arrow, About_1_1, About_1_2, About_1_3, About_1_4, About_2, Home_2 } from "../constants/svg";
import {about_1_background, about_2_background, about_4_background} from '../constants/images';


const About = () => {

	const [activeTab, setActiveTab] = useState('first');

	const linkTo = useLinkTo();
	return (
		<Layout>
			<ScrollView>
				<ImageBackground style={styles.background} source={about_1_background}>
					<Content>
						<View style={styles.about}>
							<View style={styles.about__top}>
								<Text style={styles.about__title}>О проекте</Text>
								<View>
									<View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 18}}>
										<View style={{ display:(activeTab === 'first') ?  'flex' : 'none'}}>
											<About_1_arrow/>
										</View>
										<Pressable onPress={() => setActiveTab('first')}>
											<Text style={[styles.about__tabs, {color: (activeTab === 'first') ?  '#0066FF' : '#FFFFFF'}]}>Задачи проекта</Text>
										</Pressable>
									</View>
									<View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 18}}>
										<View style={{ display:(activeTab === 'second') ?  'flex' : 'none'}}>
											<About_1_arrow/>
										</View>
										<Pressable onPress={() => setActiveTab('second')}>
											<Text style={[styles.about__tabs, {color: (activeTab === 'second') ?  '#0066FF' : '#FFFFFF'}]}>Цель проекта</Text>
										</Pressable>
									</View>
									<View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 18}}>
										<View style={{ display:(activeTab === 'third') ?  'flex' : 'none'}}>
											<About_1_arrow/>
										</View>
										<Pressable onPress={() => setActiveTab('third')}>
											<Text style={[styles.about__tabs, {color: (activeTab === 'third') ?  '#0066FF' : '#FFFFFF'}]}>Участники</Text>
										</Pressable>
									</View>
								</View>
							</View>
							<View style={styles.about__bottom}>
								{(activeTab === 'first') ? 
								<View style={{width: 320}}>
									<Text style={styles.about__text}>Популяризация комплексной программы фундаментальных, научно-прикладных и научно-образовательных исследований, экспериментов, реализуемых на РС МКС.</Text>
								</View> : null}
								{(activeTab === 'second') ? 
								<View style={{width: 380}}>
									<Text style={styles.about__text}>Эти эксперименты, как правило, носят комплексный характер, в них участвуют ученые из разных областей науки: медицины, физики космических лучей, геофизики, материаловедения, а также разработчики космической техники.</Text>
								</View> : null}
								{(activeTab === 'third') ? 
								<View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
									<About_1_1/>
									<About_1_2/>
									<About_1_3/>
									<About_1_4/>
								</View> : null}
							</View>
						</View>
					</Content>
				</ImageBackground>
				<ImageBackground style={styles.background} source={about_2_background}>
					<Content centered={true}>
						<View style={{width: 290, marginRight: 100, alignSelf: 'flex-end'}}>
							<Text style={{fontWeight: '600', fontSize: 15, lineHeight: 23, letterSpacing: 0.05, color: '#FFFFFF', marginBottom: 35}}>
							Оператором <Text style={{color: '#3C70BE'}}>по подготовке и проведению</Text> космических исследований и экспериментов является АО «Организация «Агат».
							</Text>
							<Text style={{fontWeight: '400', fontSize: 12, lineHeight: 21, letterSpacing: 0.05, color: "#FFFFFF"}}>По заказу Госкорпорации «Роскосмос», «Организация «Агат» проводит работы по предварительному отбору и подготовке коммерческих целевых работ для проведения космических экспериментов на российском сегменте Международной космической станции.</Text>
						</View>
					</Content>
				</ImageBackground>
				<Content centered={true}>
					<Text style={{fontWeight: '700', fontSize: 20, lineHeight: 23, textAlign: 'center',letterSpacing: 0.5, color: '#000000'}}>Реализация космических исследований включает</Text>
					<AboutSlider/>
				</Content>
				<ImageBackground style={styles.background} source={about_4_background}>
					<Content centered={true}>
						<View style={{width: 460, alignItems: 'center', alignSelf: 'center'}}>
							<Home_2/>
							<Text style={{marginVertical: 25, fontWeight: "800", fontSize: 17, lineHeight: 22, textAlign: 'center',letterSpacing: 0.5, color: '#ffffff'}}>Цель развития отечественных <Text style={{color: '#3C70BE'}}>фундаментальных космических исследований</Text></Text>
							<Text style={{fontWeight: "400", fontSize: 13, lineHeight: 21, textAlign: 'center',letterSpacing: 0.5, color: "#FFFFFF"}}>выход российской науки на ведущие позиции в ключевых направлениях наук о космосе, а в долгосрочной перспективе - завоевание и удержание позиций одного из мировых лидеров в основных научных дисциплинах о космосе.</Text>
							{/* <Pressable onPress={() => linkTo("/Research")}>
								<View style={{marginTop: 20, justifyContent: 'center', width: 370, height: 33, borderColor: 'rgba(0, 170, 255, 0.47)', borderWidth: 1, borderRadius: 13}}>
									<Text style={{textAlign: 'center', fontWeight: '400', fontSize: 11,lineHeight: 14, letterSpacing: 0.4, color: "rgba(255, 255, 255, 0.65)"}}>Ценности исследований и экспериментов в космосе</Text>
								</View>
							</Pressable> */}
							<ModalWhite/>
						</View>
					</Content>
				</ImageBackground>
			</ScrollView>
		</Layout>
	);
};

const styles = StyleSheet.create({
	background: {
		width: SIZES.width,
		height: SIZES.height,
	},
	about: {
		width: "78%",
		height: '100%',
		marginTop: 80,
		marginRight: 'auto',
		marginBottom: 0,
		marginLeft: 'auto',
	},
	about__top: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: "space-between",
		paddingHorizontal: 20,
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
	about__bottom: {

	},
	about__text: {
		textAlign: 'justify',
		fontWeight: '500',
		fontSize: 14,
		lineHeight: 21,
		letterSpacing: 0.05,
		color: '#FFFFFF',
	},
});



export default About;
