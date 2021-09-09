import React from "react";
import styles from "./styles";

import { TouchableOpacity, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import CancionText from '../CancionText';
import { useNavigation } from "@react-navigation/core";

export default function Header(){
    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={handleGoBack}
            >
                <MaterialIcons
                    name="arrow-back"
                    size={24}
                />
            </TouchableOpacity>

            <CancionText
                primary="black"
                secondary="white"
                size={24}
            />
        </View>
    );
}