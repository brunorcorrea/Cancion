import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 90,
        backgroundColor: "#fddc5c",
        paddingHorizontal: 20,
        paddingTop: getStatusBarHeight(),
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: 'row'
    }
});

export default styles;