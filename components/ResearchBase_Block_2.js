import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {COLORS, SIZES} from '../constants';
import { preview_base } from "../constants/images";

const ResearchBase_Block_2 = ({navigation, baseUrl, filteredItems}) => {
    
    return (
        <View style={styles.content}>
            {filteredItems.map(item => (
                <TouchableOpacity key={item.ID} style={styles.item} onPress={() => navigation.navigate('Experiment', {url: item.DETAIL_PAGE_URL})}>
                    <Image style={styles.image} source={item.PREVIEW_PICTURE ? {uri:`${baseUrl}${item.PREVIEW_PICTURE}`} : preview_base}/>
                    <View style={styles.imageLayer}></View>
                    <View style={styles.filter}>
                        <Image style={{width: 53, height: 53, marginRight: 20}} source={{uri:`${baseUrl}${item?.PROPERTIES?.spisoknapravisledicon}`}}/>
                        <Text style={styles.filterName}>
                            {item.PROPERTIES?.spisoknapravisled ? item.PROPERTIES.spisoknapravisled : "Нет информации"}
                        </Text>
                    </View>
                    <Text style={styles.title}>
                        {item.NAME}
                    </Text>
                </TouchableOpacity>
            ))}
            {/* <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}>Загрузить ещё</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingLeft: 70,
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
        zIndex: -2,
    },
    imageLayer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 30,
        zIndex: -1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
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
    button: {
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: 370,
        height: 33,
        borderWidth: 1,
        borderColor: 'rgba(0, 170, 255, 0.47)',
        borderRadius: 13,
    },
    buttonText: {
        textTransform: 'uppercase',
        // text
        fontWeight: '400',
        fontSize: 11,
        lineHeight: 14,
        letterSpacing: 0.4,
        color: COLORS.white,
    },
})

export default ResearchBase_Block_2;