import React, { useState } from "react";
import styles from "./styles";

import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import Header from "../../components/Header";

import { MaterialIcons } from '@expo/vector-icons';

import YoutubePlayer from 'react-native-youtube-iframe';

export default function Music(){
    const [isPlaying, setIsPlaying] = useState(false);

    const [musicData, setMusicData] = useState({
        name: "Nome da música",
        artist: "Nome do artista",
        image: "https://www.recorteadesivo.com.br/site/fotoTexturaMaterial?id_recorte_personalizado=43&id_materia_prima=406&tamanho=290x290%22}",
        description: "Descrição da música",
        videoId: 'gnIZ7RMuLpU',
        rating: '98%',
        ratingColor: 'white',
        duration: '3:49 min'
    });

    return(
        <ScrollView style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <Image
                    style={styles.image}
                    source={{uri: musicData.image}}
                />

                <TouchableOpacity
                    style={styles.playBtn}
                    activeOpacity={0.8}
                    onPress={() => {setIsPlaying(!isPlaying)}}
                >
                    <MaterialIcons
                        name={isPlaying ? 'pause' : 'play-arrow'}
                        size={64}
                        color="#fff"
                    />
                </TouchableOpacity>
                <View style={styles.titleView}>
                    <View style={styles.info}>
                        <Text style={styles.music}>{musicData.name}</Text>
                        <Text style={ [styles.rating, {color: musicData.ratingColor}] }>{musicData.rating}</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.artist}>{musicData.artist}</Text>
                        <Text style={styles.duration}>{musicData.duration}</Text>
                    </View>

                    <View style={styles.descView}>
                        <Text style={styles.descTitle}>Descrição:</Text>
                    </View>

                    <Text style={styles.desc}>{musicData.description}</Text>
                </View>
            </View>

            <YoutubePlayer
                height={200}
                play={isPlaying}
                videoId={musicData.videoId}
            />
        </ScrollView>
    );
}