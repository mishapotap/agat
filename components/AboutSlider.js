import React, {useState} from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'
import { COLORS } from '../constants';


const AboutSlider = () => {

    const [activeSlide, setActiveSlide] = useState('one');

    return (
        <View style={styles.wrapper}>
            <Pressable onPress={() => setActiveSlide('one')}>
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
            <Pressable onPress={() => setActiveSlide('two')}>
                { activeSlide === 'two' ? 
                <View style={styles.active__container}>
                    <View style={styles.active__circle_big}>
                        <View style={styles.active__circle_small}>
                            <Text style={styles.active__circle_number}>2</Text>
                        </View>
                    </View>
                    <Text style={styles.active__circle_text}>Проведение работ <Text style={{color: "#3C70BE"}}>по анализу российского рынка</Text> коммерческих космических экспериментов</Text>
                </View> 
                : (activeSlide === 'one' || activeSlide === 'three') ?
                 <View style={styles.semiactive__circle}>
                    <Text style={styles.semiactive__circle_number}>2</Text>
                </View> 
                : <View style={styles.notactive__circle}></View>
                }
            </Pressable>
            <Pressable onPress={() => setActiveSlide('three')}>
                { activeSlide === 'three' ? 
                <View style={styles.active__container}>
                    <View style={styles.active__circle_big}>
                        <View style={styles.active__circle_small}>
                            <Text style={styles.active__circle_number}>3</Text>
                        </View>
                    </View>
                    <Text style={styles.active__circle_text}>Проведение работ <Text style={{color: "#3C70BE"}}>по анализу российского рынка</Text> коммерческих космических экспериментов</Text>
                </View> 
                : (activeSlide === 'two' || activeSlide === 'four') ?
                 <View style={styles.semiactive__circle}>
                    <Text style={styles.semiactive__circle_number}>3</Text>
                </View> 
                : <View style={styles.notactive__circle}></View>
                }
            </Pressable>
            <Pressable onPress={() => setActiveSlide('four')}>
                { activeSlide === 'four' ? 
                <View style={styles.active__container}>
                    <View style={styles.active__circle_big}>
                        <View style={styles.active__circle_small}>
                            <Text style={styles.active__circle_number}>4</Text>
                        </View>
                    </View>
                    <Text style={styles.active__circle_text}>Проведение работ <Text style={{color: "#3C70BE"}}>по анализу российского рынка</Text> коммерческих космических экспериментов</Text>
                </View> 
                : (activeSlide === 'three' || activeSlide === 'five') ?
                 <View style={styles.semiactive__circle}>
                    <Text style={styles.semiactive__circle_number}>4</Text>
                </View> 
                : <View style={styles.notactive__circle}></View>
                }
            </Pressable>
            <Pressable onPress={() => setActiveSlide('five')}>
                { activeSlide === 'five' ? 
                <View style={styles.active__container}>
                    <View style={styles.active__circle_big}>
                        <View style={styles.active__circle_small}>
                            <Text style={styles.active__circle_number}>5</Text>
                        </View>
                    </View>
                    <Text style={styles.active__circle_text}>Проведение работ <Text style={{color: "#3C70BE"}}>по анализу российского рынка</Text> коммерческих космических экспериментов</Text>
                </View> 
                : (activeSlide === 'four' || activeSlide === 'six') ?
                 <View style={styles.semiactive__circle}>
                    <Text style={styles.semiactive__circle_number}>5</Text>
                </View> 
                : <View style={styles.notactive__circle}></View>
                }
            </Pressable>
            <Pressable onPress={() => setActiveSlide('six')}>
                { activeSlide === 'six' ? 
                <View style={styles.active__container}>
                    <View style={styles.active__circle_big}>
                        <View style={styles.active__circle_small}>
                            <Text style={styles.active__circle_number}>6</Text>
                        </View>
                    </View>
                    <Text style={styles.active__circle_text}>Проведение работ <Text style={{color: "#3C70BE"}}>по анализу российского рынка</Text> коммерческих космических экспериментов</Text>
                </View> 
                : activeSlide === 'five' ?
                 <View style={styles.semiactive__circle}>
                    <Text style={styles.semiactive__circle_number}>6</Text>
                </View> 
                : <View style={styles.notactive__circle}></View>
                }
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: 410,
        alignItems: 'center',
        alignSelf: 'center',
    },
    pressable: {
        marginHorizontal: 10,
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
        marginVertical: 10,
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
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
        color: COLORS.black,
    },
    semiactive__circle: {
        width: 25,
        height: 25,
        borderRadius: 50,
        backgroundColor: COLORS.gray,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    semiactive__circle_number: {
        fontWeight: '700',
        fontSize: 12,
        color: COLORS.white
    },
    notactive__circle: {
        width: 5,
        height: 5,
        borderRadius: 10,
        backgroundColor: COLORS.gray,
        marginVertical: 10,
    },
});

export default AboutSlider;