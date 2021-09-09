import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity, Image, Text, View } from "react-native";

export default function Wrapper({title,subtitle,img,type,id}){
    const navigation = useNavigation();

    function handleGoToNext(){
        if(type === "ARTIST") navigation.navigate("Artist",{id});
        else if(type === "MUSIC") navigation.navigate("Music", {id});
    }

    return(
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            onPress={handleGoToNext}
        >
            <View>
                <Image 
                    source={ {uri: img} }
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.textBox}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </TouchableOpacity>
    );
}