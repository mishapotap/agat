import React from "react";
import { View, Image, Text, StyleSheet, ScrollView, ImageBackground, Pressable } from "react-native";

// Components
import { Content, Layout } from "../components";
import { LinearGradient } from 'expo-linear-gradient';
// import { BlurView } from 'expo-blur';

// Constants
import {COLORS, SIZES} from '../constants';
// Svg
import { Research_1_circles, Research_1_spaceship } from "../constants/svg";
import {research_1_background, research_4_background} from '../constants/images';
import { research_2_icon_1, research_2_icon_2, research_2_icon_3, research_2_icon_4, research_3_icon_1, research_3_icon_2, research_3_icon_3, research_3_icon_4, research_4_starship, research_4_pointer } from "../constants/icons";

const Research = () => {
	return (
		<Layout>
			<ScrollView>

				<ImageBackground style={styles.background} source={research_1_background}>
					<Content>
						<View style={{height: SIZES.height, justifyContent: 'flex-end'}}>
							<Text style={styles.research__title}>Исследования {'\n'}в космосе</Text>
						</View>
					</Content>
				</ImageBackground>

				<View style={{width: SIZES.width, height: SIZES.height, backgroundColor: '#060F20'}}>
					<Content centered={true}>
						<View style={{width:300, alignSelf: 'center', marginBottom: 30}}>
							<Text style={{fontWeight: '600', fontSize: 17, lineHeight: 24, letterSpacing: 0.9, color: COLORS.white}}>Цель развития космических исследований - выход российской науки на ведущие позиции в ключевых <Text style={{color: COLORS.blueText}}>направлениях наук о космосе</Text></Text>
						</View>
						<View style={{flexDirection: "row", width: 480, justifyContent: 'space-between', alignSelf: 'center'}}>
							<Pressable>
								<View style={{width: 113, height: 103, backgroundColor: 'rgba(68, 68, 68, 0.23)', borderRadius: 16}}>
									<Image style={{margin: 13}} source={research_2_icon_1}/>
									<Text style={{marginTop: 10, alignSelf: 'center', fontWeight: '700', fontSize: 10, lineHeight: 13, color: COLORS.white}}>Научно-фундаментальные</Text>
								</View>
							</Pressable>
							<Pressable>
								<View style={{width: 113, height: 103, backgroundColor: 'rgba(68, 68, 68, 0.23)', borderRadius: 16}}>
									<Image style={{margin: 13}} source={research_2_icon_2}/>
									<Text style={{marginTop: 10, alignSelf: 'center', fontWeight: '700', fontSize: 10, lineHeight: 13, color: COLORS.white}}>Технологические</Text>
								</View>
							</Pressable>
							<Pressable>
								<View style={{width: 113, height: 103, backgroundColor: 'rgba(68, 68, 68, 0.23)', borderRadius: 16}}>
									<Image style={{margin: 13}} source={research_2_icon_3}/>
									<Text style={{marginTop: 10, alignSelf: 'center', fontWeight: '700', fontSize: 10, lineHeight: 13, color: COLORS.white}}>Прикладные</Text>
								</View>
							</Pressable>
							<Pressable>
								<View style={{width: 113, height: 103, backgroundColor: 'rgba(68, 68, 68, 0.23)', borderRadius: 16}}>
									<Image style={{margin: 13}} source={research_2_icon_4}/>
									<Text style={{marginTop: 10, alignSelf: 'center', fontWeight: '700', fontSize: 10, lineHeight: 13, color: COLORS.white}}>Образовательные</Text>
								</View>
							</Pressable>
						</View>
					</Content>
				</View>


				<View style={{width: SIZES.width, backgroundColor: '#060F20'}}>
					<Content centered={true} autoHeight={true}>
						<View style={{justifyContent: 'space-between', alignSelf: 'center', marginVertical: 30}}>
							<Pressable>
								<LinearGradient style={{width: 474, height: 92, marginBottom: 18, borderRadius: 30, flexDirection: 'row'}} colors={['90deg, rgba(100, 162, 255, 0.23) 0%', 'rgba(26, 67, 129, 0.23) 91.45%']}>
									<View style={{width: 90, alignItems: 'center', justifyContent: 'center'}}>
										<Image source={research_3_icon_1}/>
									</View>
									<View style={{height: '100%', width: 1, backgroundColor: 'rgba(76, 160, 212, 0.21)'}}></View>
									<View style={{width: 260, marginLeft: 25, justifyContent: 'center', alignItems: 'center'}}>
										<Text style={{fontWeight: '600', fontSize: 13, lineHeight: 18, color: COLORS.white}}>Порядок проведения космических экспериментов на РС МКС</Text>
									</View>
									<View style={{width: 90, justifyContent: 'flex-end', margin: 10}}>
										<Text style={{fontWeight: '400', fontSize: 10, lineHeight: 18, color: 'rgba(255, 255, 255, 0.13)'}}>Подробнее</Text>
									</View>
								</LinearGradient>
							</Pressable>
							<Pressable>
								<LinearGradient style={{width: 474, height: 92, marginBottom: 18, borderRadius: 30, flexDirection: 'row'}} colors={['90deg, rgba(190, 91, 237, 0.26) 0%', 'rgba(99, 44, 132, 0.26) 91.45%']}>
									<View style={{width: 90, alignItems: 'center', justifyContent: 'center'}}>
										<Image source={research_3_icon_2}/>
									</View>
									<View style={{height: '100%', width: 1, backgroundColor: 'rgba(76, 160, 212, 0.21)'}}></View>
									<View style={{width: 260, marginLeft: 25, justifyContent: 'center', alignItems: 'center'}}>
										<Text style={{fontWeight: '600', fontSize: 13, lineHeight: 18, color: COLORS.white}}>Этапы жизненного цикла космических исследований</Text>
									</View>
									<View style={{width: 90, justifyContent: 'flex-end', margin: 10}}>
										<Text style={{fontWeight: '400', fontSize: 10, lineHeight: 18, color: 'rgba(255, 255, 255, 0.13)'}}>Подробнее</Text>
									</View>
								</LinearGradient>
							</Pressable>
							<Pressable>
								<LinearGradient style={{width: 474, height: 92, marginBottom: 18, borderRadius: 30, flexDirection: 'row'}} colors={['90deg, rgba(106, 235, 204, 0.26) 0%', 'rgba(51, 129, 110, 0.26) 91.45%']}>
									<View style={{width: 90, alignItems: 'center', justifyContent: 'center'}}>
										<Image source={research_3_icon_3}/>
									</View>
									<View style={{height: '100%', width: 1, backgroundColor: 'rgba(76, 160, 212, 0.21)'}}></View>
									<View style={{width: 260, marginLeft: 25, justifyContent: 'center', alignItems: 'center'}}>
										<Text style={{fontWeight: '600', fontSize: 13, lineHeight: 18, color: COLORS.white}}>Участники реализации космических исследований</Text>
									</View>
									<View style={{width: 90, justifyContent: 'flex-end', margin: 10}}>
										<Text style={{fontWeight: '400', fontSize: 10, lineHeight: 18, color: 'rgba(255, 255, 255, 0.13)'}}>Подробнее</Text>
									</View>
								</LinearGradient>
							</Pressable>
							<Pressable>
								<LinearGradient style={{width: 474, height: 92, marginBottom: 18, borderRadius: 30, flexDirection: 'row'}} colors={['90deg, rgba(59, 129, 233, 0.26) 0%', 'rgba(3, 44, 92, 0.26) 91.45%']}>
									<View style={{width: 90, alignItems: 'center', justifyContent: 'center'}}>
										<Image source={research_3_icon_4}/>
									</View>
									<View style={{height: '100%', width: 1, backgroundColor: 'rgba(76, 160, 212, 0.21)'}}></View>
									<View style={{width: 260, marginLeft: 25, justifyContent: 'center', alignItems: 'center'}}>
										<Text style={{fontWeight: '600', fontSize: 13, lineHeight: 18, color: COLORS.white}}>Основные роли и функции участников исследований</Text>
									</View>
									<View style={{width: 90, justifyContent: 'flex-end', margin: 10}}>
										<Text style={{fontWeight: '400', fontSize: 10, lineHeight: 18, color: 'rgba(255, 255, 255, 0.13)'}}>Подробнее</Text>
									</View>
								</LinearGradient>
							</Pressable>
						</View>
					</Content>
				</View>
				
				<ImageBackground style={styles.background} source={research_4_background}>
					<Content>
						<View style={{height: SIZES.height, alignSelf: 'center', justifyContent: 'flex-end'}}>
							<View style={{width: 470, height: 90, backgroundColor: 'rgba(185, 185, 185, 0.2)', flexDirection: 'row', justifyContent: 'space-evenly', borderRadius: 30, marginBottom: 40, alignItems: 'center'}}>
								<View style={{ width: 300}}>
									<Text style={{fontWeight: '600', fontSize: 13, lineHeight: 18, color: COLORS.white}}>Космические исследования и эксперименты проводятся на Российском сегменте Международной космической станции</Text>
								</View>
								<Pressable>
									<Image style={{width: 72, height: 72}} source={research_4_pointer}/>
								</Pressable>
							</View>
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
	research__title: {
		padding: 40,
		fontWeight: "800",
		fontSize: 26,
		lineHeight: 33,
		letterSpacing: 1,
		color: COLORS.white,
	},
});

export default Research;
