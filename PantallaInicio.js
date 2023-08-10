import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function PantallaInicio(props) {
    const {navigation} = props;
    const goApp = () => {
        navigation.navigate("Calculadora");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.InicioSuperiorTexto}>Comencemos a calcular</Text>
            <TouchableOpacity style={styles.botonInicio} onPress={goApp}>
                <Text style={styles.botonInicioTexto}>{'-> Calculadora <-'}</Text>
            </TouchableOpacity>
            <Text style={styles.InicioInferiorTexto}>Presiona el botón para continuar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    InicioSuperiorTexto:{
        fontSize: 40,
        margin: 20,
        marginTop: 100,
        marginBottom: 170,
        textAlign: "center",


    },
    botonInicio:{
        backgroundColor: "#53FA96",
        padding: 20,
        borderRadius: 10,
        
    },
    botonInicioTexto:{
        fontSize: 30,

    },

})