import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Image, StatusBar } from "react-native";
import {COLORS, SIZES} from '../constants';
import Layout from "../components/Layout";
import { experiment_background } from "../constants/images";
import { Modal_BackButton, Modal_PlayButton, Modal_PhotoButton, Mks_1_BackButton} from "../assets/svg";
import { Experiment_Modal, Photo_Modal, Vimeo_Modal } from "../components/modal";


const Experiment = ({route, navigation}) => {
    const baseUrl = 'https://orbital-science.space';
    const {url} = route.params;
    const [item, setItem] = useState([]);
    const [modalInfo, setModalInfo] = useState(false);
    const [modalVideo, setModalVideo] = useState(false);
    const [modalPhoto, setModalPhoto] = useState(false);
    // video
    const [videoLink, setVideoLink] = useState();
    const [showVideoButton, setShowVideoButton] = useState(false);
    // photo
    const [photoData, setPhotoData] = useState();
    const [showPhotoButton, setShowPhotoButton] = useState(false);

    const [modal, setModal] = useState({});


    useEffect(() => {
        // let isMounted = true;
        fetch(`${baseUrl}${url}`)
            .then(res => res.json())
            .then((result) => {
                // if (isMounted)
                setItem(result.ITEMS)
                if (result.ITEMS.PROPERTIES.IFRAME_VIDEO_LINK !== undefined) {
                    setShowVideoButton(true);
                    // Получил подстроку с ссылкой на vimeo
                    setVideoLink(result.ITEMS.PROPERTIES.IFRAME_VIDEO_LINK.slice(13, 53))
                }
                if (result.ITEMS.PROPERTIES.PICTURES !== undefined) {
                    setShowPhotoButton(true);
                    // Получил подстроку с ссылкой на vimeo
                    setPhotoData(result.ITEMS.PROPERTIES.PICTURES)
                }
            },
            (error) => {
                alert("Нет доступа к базе данных экспериментов. Пожалуйста, проверьте подключение к сети");
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

				<View style={{width: SIZES.width, minHeight: SIZES.height, backgroundColor: COLORS.white}}>
                    <View style={styles.contentTwo}>
                        <Photo_Modal modalVisible={modalPhoto} setModalVisible={setModalPhoto} data={photoData}/>
                        <Vimeo_Modal modalVisible={modalVideo} setModalVisible={setModalVideo} data={videoLink}/>
                        <Experiment_Modal modalVisible={modalInfo} setModalVisible={setModalInfo} data={modal}/>
                        <View style={styles.buttons}>
                            <TouchableOpacity disabled={!showVideoButton} onPress={() => {
                                    setModalVideo(!modalVideo)}}>
                                <Modal_PlayButton disabled={!showVideoButton}/>
                            </TouchableOpacity>
                            <TouchableOpacity disabled={!showPhotoButton} onPress={() => {
                                    setModalPhoto(!modalPhoto)}}>
                                <Modal_PhotoButton disabled={!showPhotoButton}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Modal_BackButton />
                            </TouchableOpacity>
                        </View>
                        <View style={{marginLeft: 25, marginVertical: 50, width: '100%', minHeight: '100%', justifyContent: 'center'}}>
                            <View style={styles.membersContainer}>
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
        minHeight: SIZES.height,
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
    membersContainer: {
        marginBottom: 50,
        width: '80%',
    },
    modalContainer: {
        flexDirection: "row",
        width: '80%',
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
