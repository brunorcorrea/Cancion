import React from 'react';

import { Text } from 'react-native';

import styles from './styles';

export default function CancionText({ primary,secondary,size }){
    return(
        <Text style={ [ { color: primary, fontSize: size }, styles.cancion ] }>
            CANCI
            <Text style={{ color: secondary, fontSize: size}}>.</Text>
            ON
        </Text>
    );
}