import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import PantallaInicio from './PantallaInicio'
import PantallaCalculadora from './PantallaCalculadora'

const Stack = createStackNavigator();
export default function PantallasTransicion(){
    return(
        <Stack.Navigator PantallaInicio="Home">
            <Stack.Screen name="INICIO" component = {PantallaInicio} />
            <Stack.Screen name="Calculadora" component={PantallaCalculadora} />
        </Stack.Navigator>
    )
}