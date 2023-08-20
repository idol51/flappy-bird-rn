import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    gameEngine:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    points: {
        textAlign: 'center', 
        fontSize: 40, 
        fontWeight: 'bold', 
        margin: 20
    },
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    startButon: {
        backgroundColor: 'black',
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    startButtonText: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 20
    }
})