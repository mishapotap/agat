import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    white: '#ffffff',
    black: '#000000',
    blue: '#0066FF',
    gray: '#BDBDBD',
    blueText: '#3C70BE',
    lightBlue: '#427ED9',
    activeNav: '#87CDF8',
    researchBg: '#060F20',

    // Error
    error: 'rgba(246, 86, 93, 1)',
    error80: 'rgba(246, 86, 93, 0.8)',
    error60: 'rgba(246, 86, 93, 0.6)',
    error20: 'rgba(246, 86, 93, 0.2)',
    error08: 'rgba(246, 86, 93, 0.08)',

    // Primary
    primary: 'rgba(78, 85, 175, 1)',
    primary80: 'rgba(78, 85, 175, 0.8)',
    primary60: 'rgba(78, 85, 175, 0.6)',
    primary20: 'rgba(78, 85, 175, 0.2)',
    primary08: 'rgba(78, 85, 175, 0.08)',

    // Secondary
    secondary: 'rgba(161, 219, 245, 1)',
    secondary80: 'rgba(161, 219, 245, 0.8)',
    secondary60: 'rgba(161, 219, 245, 0.6)',
    secondary20: 'rgba(161, 219, 245, 0.2)',
    secondary08: 'rgba(161, 219, 245, 0.08)',

    // Success
    success: 'rgba(253, 212, 70, 1)',
    success80: 'rgba(253, 212, 70, 0.8)',
    success60: 'rgba(253, 212, 70, 0.6)',
    success20: 'rgba(253, 212, 70, 0.2)',
    success08: 'rgba(253, 212, 70, 0.08)',

    // Dark
    dark: 'rgba(13, 15, 35, 1)',
    dark80: 'rgba(13, 15, 35, 0.8)',
    dark60: 'rgba(13, 15, 35, 0.6)',
    dark20: 'rgba(13, 15, 35, 0.2)',
    dark08: 'rgba(13, 15, 35, 0.08)',

    // Grey
    grey: 'rgba(160, 161, 180, 1)',
    grey80: 'rgba(160, 161, 180, 0.8)',
    grey60: 'rgba(160, 161, 180, 0.6)',
    grey20: 'rgba(160, 161, 180, 0.2)',
    grey08: 'rgba(160, 161, 180, 0.08)',

    // Light Grey
    lightGrey: 'rgba(247, 247, 247, 1)',
    lightGrey80: 'rgba(247, 247, 247, 0.8)',
    lightGrey60: 'rgba(247, 247, 247, 0.6)',
    lightGrey20: 'rgba(247, 247, 247, 0.2)',
    lightGrey08: 'rgba(247, 247, 247, 0.08)',

    // Light
    light: 'rgba(255, 255, 255, 1)',
    light80: 'rgba(255, 255, 255, 0.8)',
    light60: 'rgba(255, 255, 255, 0.6)',
    light20: 'rgba(255, 255, 255, 0.2)',
    light08: 'rgba(255, 255, 255, 0.08)',

    // Support 1
    support1: 'rgba(110, 162, 255, 1)',
    support1_08: 'rgba(110, 162, 255, 0.08)',

    // Support 2
    support2: 'rgba(249, 161, 218, 1)',
    support2_08: 'rgba(249, 161, 218, 0.08)',

    // Support 3
    support3: 'rgba(0, 210, 224, 1)',
    support3_08: 'rgba(0, 210, 224, 0.08)',

    // Support 4
    support4: 'rgba(255, 132, 13, 1)',
    support4_08: 'rgba(255, 132, 13, 0.08)',

    // Support 5
    support5: 'rgba(123, 96, 238, 1)',
    support5_08: 'rgba(123, 96, 238, 0.08)'
}

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    modalTitle: {fontWeight: '700', fontSize: 20, lineHeight: 30, color: COLORS.black},
    modalTitleWhite: {fontWeight: '700', fontSize: 23, lineHeight: 30, color: COLORS.white},
    modalTextBold: {fontWeight: '600', fontSize: 13, lineHeight: 21, color: COLORS.black},
    modalTextBoldWhite: {fontWeight: '600', fontSize: 13, lineHeight: 21, color: COLORS.white},
    modalText: {fontWeight: '400', fontSize: 13, lineHeight: 21, letterSpacing: 0.25, color: COLORS.black},
    modalTextWhite: {fontWeight: '400', fontSize: 13, lineHeight: 21, letterSpacing: 0.25, color: COLORS.white},
    modalList: {fontWeight: '400', fontSize: 13, lineHeight: 21, letterSpacing: 0.25, color: COLORS.black},
    modalListWhite: {fontWeight: '400', fontSize: 13, lineHeight: 21, letterSpacing: 0.25, color: COLORS.white},
};

export const darkTheme = {
    backgroundColor: COLORS.darkBackground,
}

export const lightTheme = {
    backgroundColor: COLORS.white,
}

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;