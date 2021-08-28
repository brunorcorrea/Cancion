import React from 'react';
import styles from './styles';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import CancionText from '../../components/CancionText';
import LPImage from '../../assets/lp-image.png';

export default function LandingPage(){
    return(
        <View style={styles.container}>
            <View style={styles.cancion}>
                <CancionText
                    primary="white"
                    secondary="yellow"
                    size={48}
                />
            </View>

            <Image
                source={LPImage}
                style={styles.image}
                resizeMode="contain"
            />

            <View style={styles.btnView}>
                <TouchableOpacity
                    style={styles.btn}
                    activeOpacity={0.8}
                >
                    <MaterialIcons
                        name="music-note"
                        color="#000"
                        size={24}
                    />
                    <Text style={styles.btnText}>Pesquisar Músicas</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}