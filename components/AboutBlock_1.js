import React, {useState} from "react";
import {View, Text, StyleSheet, Pressable} from 'react-native'
import { COLORS, SIZES } from '../constants';
import { About_1_arrow, About_1_1, About_1_2, About_1_3, About_1_4} from "../constants/svg";

const AboutBlock_1 = () => {
    const [activeTab, setActiveTab] = useState('first');
    return (
        <View style={styles.content}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.title}>О проекте</Text>
                    <View>
                        <View style={styles.item}>
                            <View style={{ display:(activeTab === 'first') ?  'flex' : 'none'}}>
                                <About_1_arrow/>
                            </View>
                            <Pressable onPress={() => setActiveTab('first')}>
                                <Text style={[styles.button, {color: (activeTab === 'first') ?  '#0066FF' : COLORS.white}]}>Задачи проекта</Text>
                            </Pressable>
                        </View>
                        <View style={styles.item}>
                            <View style={{ display:(activeTab === 'second') ?  'flex' : 'none'}}>
                                <About_1_arrow/>
                            </View>
                            <Pressable onPress={() => setActiveTab('second')}>
                                <Text style={[styles.button, {color: (activeTab === 'second') ?  '#0066FF' : COLORS.white}]}>Цель проекта</Text>
                            </Pressable>
                        </View>
                        <View style={styles.item}>
                            <View style={{ display:(activeTab === 'third') ?  'flex' : 'none'}}>
                                <About_1_arrow/>
                            </View>
                            <Pressable onPress={() => setActiveTab('third')}>
                                <Text style={[styles.button, {color: (activeTab === 'third') ?  '#0066FF' : COLORS.white}]}>Участники</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View style={styles.bottom}>
                    {(activeTab === 'first') ? 
                    <View style={{flex: 1, width: 320, justifyContent: 'center'}}>
                        <Text style={styles.text}>Популяризация комплексной программы фундаментальных, научно-прикладных и научно-образовательных исследований, экспериментов, реализуемых на РС МКС.</Text>
                    </View> : null}
                    {(activeTab === 'second') ? 
                    <View style={{flex: 1, width: 380, justifyContent: 'center'}}>
                        <Text style={styles.text}>Эти эксперименты, как правило, носят комплексный характер, в них участвуют ученые из разных областей науки: медицины, физики космических лучей, геофизики, материаловедения, а также разработчики космической техники.</Text>
                    </View> : null}
                    {(activeTab === 'third') ? 
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <About_1_1/>
                        <About_1_2/>
                        <About_1_3/>
                        <About_1_4/>
                    </View> : null}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingLeft: SIZES.width * 0.11,
        height: SIZES.height,
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
		width: "80%",
		paddingTop: 60,
	},
	top: {
		flexDirection: 'row',
		justifyContent: "space-between",
		padding: 20,
		borderBottomColor: COLORS.white,
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	title: {
		// text
		fontWeight: '800',
		fontSize: 26,
		lineHeight: 33,
		letterSpacing: 1,
		color: COLORS.white,
	},
    item: {
        flexDirection: 'row',
        alignItems: 'center',
    },
	button: {
		padding: 10,
		// text
		fontWeight: '600',
		fontSize: 9,
		lineHeight: 14,
		letterSpacing: 0.5,
		textTransform: 'uppercase',
	},
	bottom: {
        flex: 1,
	},
	text: {
		textAlign: 'justify',
        // text
		fontWeight: '500',
		fontSize: 14,
		lineHeight: 21,
		letterSpacing: 0.05,
		color: COLORS.white,
	},
})

export default AboutBlock_1;