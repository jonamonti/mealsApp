import { Pressable, Text, View, StyleSheet, Platform } from "react-native"

export default function CategoryGridTile({title, color, onPress}) {
    return(
			<View style={s.gridItem}>
				<Pressable 
					android_ripple={{color:'#ccc'}} 
					style={({ pressed }) => [s.button, pressed ? s.buttonPressed : null]} // conditional style
					onPress={onPress}
				>
					<View style={[s.innerContainer, {backgroundColor: color}]}>
						<Text style={s.title}>
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
        shadowRadius: 8, // shadow for ios
        overflow: Platform.OS === 'android' ? "hidden" : "visible"// makes the effect when clicking stay inside the round corners for android
    },
    button: {
        flex: 1
    },
		buttonPressed: {
        opacity: 0.5
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    },
    innerContainer: {
        flex: 1,
        padding: 16,
				borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    }
})