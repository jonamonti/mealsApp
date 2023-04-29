import { Pressable, Text, View, StyleSheet } from "react-native"

export default function CategoryGridTile({title, color}) {
    return(
        <View style={s.gridItem}>
            <Pressable style={s.button}>
                <View style={s.innerContainer}>
                    <Text>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const s = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4, // shadow for android
        backgroundColor: 'white', // for having shadow on ios we need a backgroundColor
        shadowColor: 'black', // shadow for ios
        shadowOpacity: 0.25, // shadow for ios
        shadowOffset: {width: 0, height: 2}, // shadow for ios
        shadowRadius: 8 // shadow for ios

    },
    button: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center"
    }
})