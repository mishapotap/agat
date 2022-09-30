import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Image } from "react-native";
import {COLORS, SIZES} from '../constants';
import Layout from "../components/Layout";
import { experiment_background } from "../constants/images";
import { Modal_BackButton, Modal_PlayButton, Modal_PhotoButton} from "../assets/svg";
import { Experiment_Modal } from "../components/modal";


const Experiment = ({route, navigation}) => {
    const baseUrl = 'https://agat.avt.promo';
    const {url} = route.params;
    const [item, setItem] = useState([]);
    const [modalInfo, setModalInfo] = useState(false);
    const [modal, setModal] = useState({});

    useEffect(() => {
        let isMounted = true;
        fetch(`${baseUrl}${url}`)
            .then(res => res.json())
            .then((result) => {
                if (isMounted)
                setItem(result.ITEMS)
            },
            (error) => {
                alert(JSON.stringify(error));
                }
            )
        }, [])

	return (
		<Layout>
			<ScrollView showsVerticalScrollIndicator={false}>
				<ImageBackground style={styles.background} source={experiment_background}>
					<View style={styles.contentOne}>
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
					        <Modal_BackButton />
				        </TouchableOpacity>
                        <View style={styles.container}>
                            <Text style={styles.title}>{item?.NAME}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.statusBlock}>
                                    <Text style={styles.status}>{item?.PROPERTIES?.statusexp}</Text>
                                    <Text style={styles.date}>{item?.PROPERTIES?.srokprovcrstart} - {item?.PROPERTIES?.srokprovcrend}</Text>
                                </View>
                                <View style={styles.filterBlock}>
                                    <Image style={{width: 53, height: 53}} source={{uri:`${baseUrl}${item?.PROPERTIES?.spisoknapravisledicon}`}}/>
                                    <Text style={styles.filter}>{item?.PROPERTIES?.spisoknapravisled}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
				</ImageBackground>

				<View style={{width: SIZES.width, height: SIZES.height, backgroundColor: COLORS.white}}>
                    <View style={styles.contentTwo}>
                        <Experiment_Modal modalVisible={modalInfo} setModalVisible={setModalInfo} data={modal}/>
                        <View style={styles.buttons}>
                            <TouchableOpacity disabled onPress={() => navigation.goBack()}>
                                <Modal_PlayButton disabled/>
                            </TouchableOpacity>
                            <TouchableOpacity disabled onPress={() => navigation.goBack()}>
                                <Modal_PhotoButton disabled/>
                            </TouchableOpacity> 
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Modal_BackButton />
                            </TouchableOpacity>
                        </View>
                        <View style={{marginLeft: 55}}>
                            <View style={{marginBottom: 50, width: '80%'}}>
                                <Text style={styles.membersKey}>Постановщик</Text>
                                <Text style={styles.membersValue}>{item?.PROPERTIES?.organizpost}</Text>
                                <Text style={styles.membersKey}>Организации участники</Text>
                                <Text style={styles.membersValue}>{item?.PROPERTIES?.organizychas}</Text>
                            </View>
                            <View style={styles.modalContainer}>
                                {item?.MODALS?.map((modal) => (
                                    <TouchableOpacity key={modal.name} onPress={() => {
                                        setModal(modal);
                                        setModalInfo(!modalInfo)
                                    }}>
                                        <View style={styles.modalButton}>
                                            <Text style={styles.modalButtonName}>{modal.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </View>
				</View>
			</ScrollView>
		</Layout>
	);
};

const styles = StyleSheet.create({
	background: {
		width: SIZES.width,
		height: SIZES.height,
	},
    backButton: {
        position: "absolute",
		top: 30,
		right: 40,
		zIndex: 10,
    },
    buttons: {
		position: "absolute",
		top: 30,
		right: 40,
		zIndex: 10,
        flexDirection: 'row',
        width: 180,
        justifyContent: 'space-between',
	},
    contentOne: {
        paddingLeft: 70,
        height: SIZES.height,
        flex: 1,
        justifyContent: 'flex-end',
    },
    container: {
        margin: 50,
    },
    title: {
        width: 300,
        marginBottom: 45,
        // text
        fontWeight: '700',
        fontSize: 17,
        lineHeight: 26,
        letterSpacing: 0.7,        
        color: COLORS.white,
    },
    statusBlock: {
        width: 110,
        height: 80,
        borderRadius: 16,
        backgroundColor: "rgb(38, 38, 38)",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    status: {
        marginBottom: 10,
        // text
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 14,
        letterSpacing: 0.6,        
        color: COLORS.white,
        opacity: 0.38,
    },
    date: {
        // text
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 14,
        color: COLORS.white,
    },
    filterBlock: {
        width: 260,
        height: 80,
        borderRadius: 16,
        backgroundColor: "rgb(38, 38, 38)",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    filter: {
        width: 150,
        // text
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 15,
        letterSpacing: 0.7,        
        color: COLORS.white,
    },
    contentTwo: {
        paddingLeft: 70,
        height: SIZES.height,
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    membersKey: {
        // text
        fontWeight: '500',
        fontSize: 11,
        lineHeight: 34,
        letterSpacing: 0.7,
        color: COLORS.black,
        opacity: 0.37,
    },
    membersValue: {
        // text
        fontWeight: '700',
        fontSize: 11,
        lineHeight: 18,
        letterSpacing: 0.3,
        color: COLORS.black
    },
    modalContainer: {
        flexDirection: "row",
        width: 450,
        flexWrap: 'wrap',
    },
    modalButton: {
        minWidth: 80,
        height: 35,
        marginRight: 15,
        marginBottom: 10,
        paddingHorizontal: 15,
        borderRadius: 52,
        borderWidth: 1,
        borderColor: '#0452A0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalButtonName: {
        // text
        fontWeight: '800',
        fontSize: 8,
        lineHeight: 8,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        color: COLORS.black,
    }
});

export default Experiment;
