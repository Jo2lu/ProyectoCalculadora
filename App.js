import 'react-native-gesture-handler';
import { StatusBar} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import PantallasTransicion from './PantallasTransicion'

export default function App(){
    return(
        <NavigationContainer>
            <PantallasTransicion />
        </NavigationContainer>
    )
}