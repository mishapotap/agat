import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {COLORS, SIZES} from '../constants';
import { useNavigation } from '@react-navigation/native';

const ResearchBase_Block_2 = () => {

    const navigation = useNavigation();
    const [items, setItems] = useState([]);
    const baseUrl = 'https://agat.avt.promo';

    useEffect(() => {
        fetch(`${baseUrl}/api/baza-issledovaniy/`)
            .then(res => res.json())
            .then((result) => {
                setItems(result.ITEMS)
            },
            (error) => {
                alert(JSON.stringify(error));
                }
            )
        }, [])
        // При клике в массив зависимостей дописать то что обновляется

    return (
        <View style={styles.content}>
            {items.map(item => (
                <TouchableOpacity key={item.ID} style={styles.item} onPress={() => navigation.navigate('Experiment', {url: item.DETAIL_PAGE_URL})}>
                    <Image style={styles.image} source={{uri:`${baseUrl}${item.PREVIEW_PICTURE}`}}/>
                    <View style={styles.filter}>
                        <View style={styles.box}>
                            {/* Тут должна быть svg */}
                        </View>
                        <Text style={styles.filterName}>
                            {item.PROPERTIES?.spisoknapravisled ? item.PROPERTIES.spisoknapravisled : "Нет информации"}
                        </Text>
                    </View>
                    <Text style={styles.title}>
                        {item.NAME}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingLeft: SIZES.width * 0.11,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        width: 500,
        height: 250,
        borderRadius: 30,
        backgroundColor: 'rgb(30,70,50)',
        marginVertical: 20,
        justifyContent: 'space-between',
    },
    image: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 30,
        zIndex: -1,
    },
    box: {
        width: 53,
        height: 53,
        borderRadius: 13,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 20,
    },
    filter: {
        flexDirection: "row",
        alignItems: 'center',
        margin: 25,
    },
    filterName: {
        width: 250,
        // text
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 15,
        color: COLORS.white
    },
    title: {
        margin: 30,
        width: 290,
        // text
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 22,
        color: COLORS.white
    },
})

export default ResearchBase_Block_2;