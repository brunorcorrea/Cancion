import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    searchBar: {
        width: "100%",
        height: 90,
        backgroundColor: "#fddc5c",
        paddingHorizontal: 20,
        paddingTop: getStatusBarHeight(),
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    
    title: {
        marginBottom: 10,
        color: "#fff",
        fontFamily: 'Bungee_400Regular',
        lineHeight: 20,
        fontSize: 20
    },

    wrappersList: {
        marginTop: 20,
        paddingHorizontal: 20,
        marginBottom: 10
    }
});

export default styles;