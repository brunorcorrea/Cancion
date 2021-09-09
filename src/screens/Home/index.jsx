import React, {useState} from 'react';

import styles from './styles';
import { ScrollView, View, TouchableOpacity, Text, TextInput } from 'react-native';

import CancionText from '../../components/CancionText';

import { MaterialIcons } from '@expo/vector-icons';

import Wrapper from '../../components/Wrapper';

export default function Home(){
    const [isSearchEnabled, setIsSearchEnabled] = useState(false);
    const [artistName, setArtistName] = useState("");

    function handleKeyPress(){
        //chamada da API
    }

    function changeSearchStatus(){
        setIsSearchEnabled(!isSearchEnabled);
    }

    return(
        <ScrollView style={styles.container}>
            {/* SearchBar */}
            <View style={styles.searchBar}>
                {isSearchEnabled ? (
                    <TextInput
                        style={styles.input}
                        placeholder="Insira um cantor..."
                        onSubmitEditing={handleKeyPress}
                        onChangeText={setArtistName}
                        autoFocus
                    />
                ) : (
                    <CancionText
                        primary="black"
                        secondary="white"
                        size={24}
                    />
                )}
                <TouchableOpacity
                    onPress={changeSearchStatus}
                >
                    <MaterialIcons
                       name={isSearchEnabled ? "close" : "search"}
                       size={24} 
                    />
                </TouchableOpacity>
            </View>

            
            <View style={styles.wrappersList}>
                <Text style={styles.title}>Resultado:</Text>
                <Wrapper
                    title="Imagine Dragons"
                    subtitle="Pop Rock"
                    img="https://i.imgur.com/C9mOxBH.png"
                    id={2}
                    type="ARTIST"
                />
                <Wrapper
                    title="Imagine Dragons"
                    subtitle="Pop Rock"
                    img="https://i.imgur.com/C9mOxBH.png"
                    id={2}
                    type="ARTIST"
                />
                <Wrapper
                    title="Imagine Dragons"
                    subtitle="Pop Rock"
                    img="https://i.imgur.com/C9mOxBH.png"
                    id={2}
                    type="ARTIST"
                />
            </View>

            <Text style={styles.title}>Histórico:</Text>
        </ScrollView>
    );
}