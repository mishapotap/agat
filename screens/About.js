import React, {useState} from "react";
import { View, Text, StyleSheet, Image, ScrollView, Pressable, Dimensions } from "react-native";
import { useLinkTo } from "@react-navigation/native";

// Layout
import Layout from "../layout/Layout";

// Constants
// import { COLORS, FONTS, SIZES, images, svg, icons } from '../constants';
import {SIZES} from '../constants';
import { About_1_arrow, About_1_1, About_1_2, About_1_3, About_1_4, About_2, About_3_active, About_3_inactive, Home_2 } from "../constants/svg";
import {about_1_background, about_4_background} from '../constants/images';

const About = () => {

	const [activeTab, setActiveTab] = useState('first');
	const [activeSlide, setActiveSlide] = useState('one');

	const linkTo = useLinkTo();
	return (
		<Layout>
			<ScrollView>
				<View style={{width: '100%', height: SIZES.height}}>
					<Image style={styles.about__bg} source={about_1_background}/>
					{/* <View style={styles.about__bg__layer}></View> */}
					<View style={styles.content}>
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
								<View style={styles.about__first}>
									<Text style={styles.about__text}>Популяризация комплексной программы фундаментальных, научно-прикладных и научно-образовательных исследований, экспериментов, реализуемых на РС МКС.</Text>
								</View> : null}
								{(activeTab === 'second') ? 
								<View style={styles.about__second}>
									<Text style={styles.about__text}>Эти эксперименты, как правило, носят комплексный характер, в них участвуют ученые из разных областей науки: медицины, физики космических лучей, геофизики, материаловедения, а также разработчики космической техники.</Text>
								</View> : null}
								{(activeTab === 'third') ? 
								<View style={styles.about__third}>
									<About_1_1/>
									<About_1_2/>
									<About_1_3/>
									<About_1_4/>
								</View> : null}
							</View>
						</View>
					</View>
				</View>
				<View style={{width: '100%', height: SIZES.height, backgroundColor: '#193359', overflow: "hidden"}}>
					<View style={{flexDirection: 'row'}}>
						<View style={{position: 'absolute', top: '-50%', left: -260, transform: [{ translateY: -50 }] }}>
							<About_2/>
						</View>
						
						<View style={{width: 290, right: 0, position: 'absolute', marginRight: 90}}>
							<Text style={{fontWeight: '600', fontSize: 15, lineHeight: 23, letterSpacing: 0.05, color: '#FFFFFF', marginBottom: 35, marginTop: 55}}>
							Оператором <Text style={{color: '#3C70BE'}}>по подготовке и проведению</Text> космических исследований и экспериментов является АО «Организация «Агат».
							</Text>
							<Text style={{fontWeight: '400', fontSize: 12, lineHeight: 21, letterSpacing: 0.05, color: "#FFFFFF"}}>По заказу Госкорпорации «Роскосмос», «Организация «Агат» проводит работы по предварительному отбору и подготовке коммерческих целевых работ для проведения космических экспериментов на российском сегменте Международной космической станции.</Text>
						</View>
					</View>
				</View>
				<View style={{width: '100%', height: SIZES.height, backgroundColor: '#FFFFFF'}}>
					<View style={[styles.content, {alignItems: 'center'}]}>
						<Text style={{marginTop: 45, fontWeight: '700', fontSize: 20, lineHeight: 23, textAlign: 'center',letterSpacing: 0.5, color: '#000000'}}>Реализация космических исследований включает</Text>
						<View style={{width: 410, alignItems: 'center'}}>
							<View style={{alignItems: 'center'}}>
								<Pressable onPress={() => setActiveSlide('one')} style={{marginVertical: 10}}>
									{activeSlide === 'one' ? 
									<>
										<View>
										<About_3_active/>
										</View>
										<View style={{position: 'absolute'}}>
											<Text style={{fontWeight: '700', fontSize: 16, color: '#ffffff' ,top: 29, left: 32}}>1</Text>
										</View>
									</> : <About_3_inactive/>}
								</Pressable>
								{activeSlide === 'one' ? 
								<Text style={{fontWeight: '600', fontSize: 14, lineHeight: 20, textAlign: 'center', color: '#000000'}}>Проведение работ <Text style={{color: "#3C70BE"}}>по анализу российского рынка</Text> коммерческих космических экспериментов</Text> : null}
							</View>
							<View style={{alignItems: 'center'}}>
								<Pressable onPress={() => setActiveSlide('two')} style={{marginVertical: 10}}>
									{activeSlide === 'two' ? 
									<>
										<View>
										<About_3_active/>
										</View>
										<View style={{position: 'absolute'}}>
											<Text style={{fontWeight: '700', fontSize: 16, color: '#ffffff' ,top: 29, left: 32}}>2</Text>
										</View>
									</> : <About_3_inactive/>}
								</Pressable>
								{activeSlide === 'two' ? 
								<Text style={{fontWeight: '600', fontSize: 14, lineHeight: 20, textAlign: 'center', color: '#000000'}}>Проведение работ <Text style={{color: "#3C70BE"}}>по анализу российского рынка</Text> коммерческих космических экспериментов</Text> : null}
							</View>
							<View style={{alignItems: 'center'}}>
								<Pressable onPress={() => setActiveSlide('three')} style={{marginVertical: 10}}>
									{activeSlide === 'three' ? 
									<>
										<View>
										<About_3_active/>
										</View>
										<View style={{position: 'absolute'}}>
											<Text style={{fontWeight: '700', fontSize: 16, color: '#ffffff' ,top: 29, left: 32}}>3</Text>
										</View>
									</> : <About_3_inactive/>}
								</Pressable>
								{activeSlide === 'three' ? 
								<Text style={{fontWeight: '600', fontSize: 14, lineHeight: 20, textAlign: 'center', color: '#000000'}}>Проведение работ <Text style={{color: "#3C70BE"}}>по анализу российского рынка</Text> коммерческих космических экспериментов</Text> : null}
							</View>
							<View style={{alignItems: 'center'}}>
								<Pressable onPress={() => setActiveSlide('four')} style={{marginVertical: 10}}>
									{activeSlide === 'four' ? 
									<>
										<View>
										<About_3_active/>
										</View>
										<View style={{position: 'absolute'}}>
											<Text style={{fontWeight: '700', fontSize: 16, color: '#ffffff' ,top: 29, left: 32}}>4</Text>
										</View>
									</> : <About_3_inactive/>}
								</Pressable>
								{activeSlide === 'four' ? 
								<Text style={{fontWeight: '600', fontSize: 14, lineHeight: 20, textAlign: 'center', color: '#000000'}}>Проведение работ <Text style={{color: "#3C70BE"}}>по анализу российского рынка</Text> коммерческих космических экспериментов</Text> : null}
							</View>
							<View style={{alignItems: 'center'}}>
								<Pressable onPress={() => setActiveSlide('five')} style={{marginVertical: 10}}>
									{activeSlide === 'five' ? 
									<>
										<View>
										<About_3_active/>
										</View>
										<View style={{position: 'absolute'}}>
											<Text style={{fontWeight: '700', fontSize: 16, color: '#ffffff' ,top: 29, left: 32}}>5</Text>
										</View>
									</> : <About_3_inactive/>}
								</Pressable>
								{activeSlide === 'five' ? 
								<Text style={{fontWeight: '600', fontSize: 14, lineHeight: 20, textAlign: 'center', color: '#000000'}}>Проведение работ <Text style={{color: "#3C70BE"}}>по анализу российского рынка</Text> коммерческих космических экспериментов</Text> : null}
							</View>
							<View style={{alignItems: 'center'}}>
								<Pressable onPress={() => setActiveSlide('six')} style={{marginVertical: 10}}>
									{activeSlide === 'six' ? 
									<>
										<View>
										<About_3_active/>
										</View>
										<View style={{position: 'absolute'}}>
											<Text style={{fontWeight: '700', fontSize: 16, color: '#ffffff' ,top: 29, left: 32}}>6</Text>
										</View>
									</> : <About_3_inactive/>}
								</Pressable>
								{activeSlide === 'six' ? 
								<Text style={{fontWeight: '600', fontSize: 14, lineHeight: 20, textAlign: 'center', color: '#000000'}}>Проведение работ <Text style={{color: "#3C70BE"}}>по анализу российского рынка</Text> коммерческих космических экспериментов</Text> : null}
							</View>
						</View>
					</View>
				</View>
				<View style={{width: '100%', height: SIZES.height, justifyContent: 'center'}}>
					<Image style={styles.about__bg} source={about_4_background}/>
					<View style={styles.about__bg__layer}></View>
					<View style={[styles.content, {alignItems: 'center'}]}>
						<View style={{width: 460, alignItems: 'center'}}>
							<Home_2/>
							<Text style={{marginVertical: 25, fontWeight: "800", fontSize: 17, lineHeight: 22, textAlign: 'center',letterSpacing: 0.5, color: '#ffffff'}}>Цель развития отечественных <Text style={{color: '#3C70BE'}}>фундаментальных космических исследований</Text></Text>
							<Text style={{fontWeight: "400", fontSize: 13, lineHeight: 21, textAlign: 'center',letterSpacing: 0.5, color: "#FFFFFF"}}>выход российской науки на ведущие позиции в ключевых направлениях наук о космосе, а в долгосрочной перспективе - завоевание и удержание позиций одного из мировых лидеров в основных научных дисциплинах о космосе.</Text>
							<Pressable onPress={() => linkTo("/Research")}>
								<View style={{marginTop: 20, justifyContent: 'center', width: 370, height: 33, borderColor: 'rgba(0, 170, 255, 0.47)', borderWidth: 1, borderRadius: 13}}>
									<Text style={{textAlign: 'center', fontWeight: '400', fontSize: 11,lineHeight: 14, letterSpacing: 0.4, color: "rgba(255, 255, 255, 0.65)"}}>Ценности исследований и экспериментов в космосе</Text>
								</View>
							</Pressable>
						</View>
					</View>
				</View>
			</ScrollView>
		</Layout>
	);
};

const styles = StyleSheet.create({
	about__bg: {
		width: "100%",
		height: "100%",
		zIndex: -2,
	},
	about__bg__layer: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, 0.6)",
		zIndex: -1,
	},
	content: {
		position: "absolute",
		right: 0,
		width: "89%",
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
