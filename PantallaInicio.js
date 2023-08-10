import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function PantallaInicio(props) {
    const {navigation} = props;
    const goApp = () => {
        navigation.navigate("Calculadora");
    }
    return (
        <View style={style.container}>
            <Text style={styles.InicioSuperiorTexto}>Comencemos a calcular</Text>
            <TouchableOpacity style={styles.botonInicio} onPress={goApp}>
                <Text style={styles.botonInicioTexto}>Calculadora</Text>
            </TouchableOpacity>
            <Text style={styles.InicioSuperiorTexto}>Presiona el botón para continuar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})