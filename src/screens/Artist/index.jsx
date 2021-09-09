import React from "react";

import styles from "./styles";

import { Text, ScrollView, View, Image } from "react-native";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";

export default function Artist(){
    return (
        <ScrollView style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <Image
                    source={{uri: "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2021/07/coldplay-music-of-the-spheres.png"}}
                    style={styles.image}
                />

                <Text style={styles.artist}>ColdPlay</Text>
                <Text style={styles.info}>
                    Estilo: Alternative Rock {'\n'}
                    Integrantes: 4 {'\n'}
                    País: Inglaterra {'\n'}
                    Ano de formação: 1996 {'\n'}
                    Descrição: Coldplay é uma banda de rock alternativo britânica formada em 1996 pelo vocalista Chris Martin eo guitarrista Jonny Buckland no University Colle ... Mostrar mais
                </Text>

                <View style={styles.titleView}>
                    <Text style={styles.title}>Músicas</Text>
                </View>

                <Wrapper
                    title="In my place"
                    subtitle="ColdPlay"
                    img="https://lastfm.freetls.fastly.net/i/u/ar0/91839d35e0804e68bccaceb26aa2c115.jpg"
                    type="MUSIC"
                    id={1}
                />
                
            </View>
        </ScrollView>
    );
}