import React, {useState} from "react";
import {View, Text, StyleSheet, Pressable} from 'react-native'
import { COLORS, SIZES } from '../constants';

const AboutBlock_3 = () => {
    const [activeSlide, setActiveSlide] = useState('one');
	return (
		<View style={styles.content}>
			<View style={styles.container}>
			    <Text style={styles.title}>Реализация космических исследований включает</Text>
                <Pressable style={styles.pressable} onPress={() => setActiveSlide('one')}>
                    { activeSlide === 'one' ? 
                    <View style={styles.active__container}>
                        <View style={styles.active__circle_big}>
                            <View style={styles.active__circle_small}>
                                <Text style={styles.active__circle_number}>1</Text>
                            </View>
                        </View>
                        <Text style={styles.active__circle_text}>Проведение работ <Text style={{color: "#3C70BE"}}>по анализу российского рынка</Text> коммерческих космических экспериментов</Text>
                    </View>
                    : activeSlide === 'two' ?
                    <View style={styles.semiactive__circle}>
                        <Text style={styles.semiactive__circle_number}>1</Text>
                    </View> 
                    : <View style={styles.notactive__circle}></View>
                    }
                </Pressable>
                <Pressable style={styles.pressable} onPress={() => setActiveSlide('two')}>
                    { activeSlide === 'two' ? 
                    <View style={styles.active__container}>
                        <View style={styles.active__circle_big}>
                            <View style={styles.active__circle_small}>
                                <Text style={styles.active__circle_number}>2</Text>
                            </View>
                        </View>
                        <Text style={styles.active__circle_text}>Осуществление <Text style={{color: "#3C70BE"}}>поиска и привлечения потенциальных постановщиков</Text> коммерческих космических экспериментов</Text>
                    </View> 
                    : (activeSlide === 'one' || activeSlide === 'three') ?
                    <View style={styles.semiactive__circle}>
                        <Text style={styles.semiactive__circle_number}>2</Text>
                    </View> 
                    : <View style={styles.notactive__circle}></View>
                    }
                </Pressable>
                <Pressable style={styles.pressable} onPress={() => setActiveSlide('three')}>
                    { activeSlide === 'three' ? 
                    <View style={styles.active__container}>
                        <View style={styles.active__circle_big}>
                            <View style={styles.active__circle_small}>
                                <Text style={styles.active__circle_number}>3</Text>
                            </View>
                        </View>
                        <Text style={styles.active__circle_text}>Организация <Text style={{color: "#3C70BE"}}>проведения экспертизы реализуемости и интеграции</Text> коммерческих космических экспериментов в Долгосрочную Программу Целевых Работ (ДПЦР)</Text>
                    </View> 
                    : (activeSlide === 'two' || activeSlide === 'four') ?
                    <View style={styles.semiactive__circle}>
                        <Text style={styles.semiactive__circle_number}>3</Text>
                    </View> 
                    : <View style={styles.notactive__circle}></View>
                    }
                </Pressable>
                <Pressable style={styles.pressable} onPress={() => setActiveSlide('four')}>
                    { activeSlide === 'four' ? 
                    <View style={styles.active__container}>
                        <View style={styles.active__circle_big}>
                            <View style={styles.active__circle_small}>
                                <Text style={styles.active__circle_number}>4</Text>
                            </View>
                        </View>
                        <Text style={styles.active__circle_text}><Text style={{color: "#3C70BE"}}>Согласование Технического Задания (ТЗ)</Text> на коммерческие космические эксперименты</Text>
                    </View> 
                    : (activeSlide === 'three' || activeSlide === 'five') ?
                    <View style={styles.semiactive__circle}>
                        <Text style={styles.semiactive__circle_number}>4</Text>
                    </View> 
                    : <View style={styles.notactive__circle}></View>
                    }
                </Pressable>
                <Pressable style={styles.pressable} onPress={() => setActiveSlide('five')}>
                    { activeSlide === 'five' ? 
                    <View style={styles.active__container}>
                        <View style={styles.active__circle_big}>
                            <View style={styles.active__circle_small}>
                                <Text style={styles.active__circle_number}>5</Text>
                            </View>
                        </View>
                        <Text style={styles.active__circle_text}>Осуществление <Text style={{color: "#3C70BE"}}>общего управления проектом реализации</Text> коммерческих космических экспериментов на всех этапах ЖЦ</Text>
                    </View> 
                    : (activeSlide === 'four' || activeSlide === 'six') ?
                    <View style={styles.semiactive__circle}>
                        <Text style={styles.semiactive__circle_number}>5</Text>
                    </View> 
                    : <View style={styles.notactive__circle}></View>
                    }
                </Pressable>
                <Pressable style={styles.pressable} onPress={() => setActiveSlide('six')}>
                    { activeSlide === 'six' ? 
                    <View style={styles.active__container}>
                        <View style={styles.active__circle_big}>
                            <View style={styles.active__circle_small}>
                                <Text style={styles.active__circle_number}>6</Text>
                            </View>
                        </View>
                        <Text style={styles.active__circle_text}><Text style={{color: "#3C70BE"}}>Участие в коммерциализации</Text> результатов космических экспериментов</Text>
                    </View> 
                    : activeSlide === 'five' ?
                    <View style={styles.semiactive__circle}>
                        <Text style={styles.semiactive__circle_number}>6</Text>
                    </View> 
                    : <View style={styles.notactive__circle}></View>
                    }
                </Pressable>
            </View>
		</View>
	);
};

const styles = StyleSheet.create({
    content: {
        paddingLeft: SIZES.width * 0.11,
        height: SIZES.height,
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        paddingTop: 20,
        textAlign: 'center',
        // text
        fontWeight: "700",
        fontSize: 17,
        lineHeight: 23,
        letterSpacing: 0.5,
        color: COLORS.black,
    },
    container: {
        width: 450,
        alignItems: 'center',
    },
    pressable: {
        padding: 10,
        // marginVertical: 10,
    },
    active__container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    active__circle_big: {
        width: 74,
        height: 74,
        borderRadius: 50,
        backgroundColor: COLORS.blueText,
        justifyContent: 'center',
        alignItems: 'center',
    },
    active__circle_small: {
        width: 44,
        height: 44,
        borderRadius: 50,
        backgroundColor: COLORS.lightBlue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    active__circle_number: {
        fontWeight: '700',
        fontSize: 16,
        color: COLORS.white,
    },
    active__circle_text: {
        textAlign: 'center',
        // text
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
        color: COLORS.black,
    },
    semiactive__circle: {
        width: 25,
        height: 25,
        borderRadius: 50,
        backgroundColor: COLORS.gray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    semiactive__circle_number: {
        fontWeight: '700',
        fontSize: 12,
        color: COLORS.white
    },
    notactive__circle: {
        width: 5,
        height: 5,
        borderRadius: 50,
        backgroundColor: COLORS.gray,
    },
});

export default AboutBlock_3;
