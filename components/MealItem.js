import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native"; // we need this hook because MealItem is not registered as screen in App.js


export default function MealItem({id, title, imageUrl, duration, complexity, affordability}) {
		const navigation = useNavigation();
		const pressHandler = () => {
			navigation.navigate('MealsDetail', { id });
		};

	return(
			<View style={s.mealItem}>
					<Pressable 
						android_ripple={{ color: '#ccc'}}
						style={({ pressed }) => pressed ? s.buttonPressed : null}
						onPress={pressHandler}
					>
						<View style={s.innerContainer}>
							<View>
								<Image style={s.image} source={{uri: imageUrl}}/>
								<Text style={s.title}>{title}</Text>
							</View>
							<View style={s.details}>
								<Text style={s.detailItem}>{duration}m</Text>
								<Text style={s.detailItem}>{complexity.toUpperCase()}</Text>
								<Text style={s.detailItem}>{affordability.toUpperCase()}</Text>
							</View>
							</View>
					</Pressable>
					
			</View>
	)
}

const s = StyleSheet.create({
	mealItem: {
		margin: 16, 
		borderRadius: 6,
		overflow: "hidden",
		backgroundColor: 'white',
		elevation: 4,
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: {width: 0, height: 2},
		shadowRadius: 8,
		overflow: Platform.OS === 'android' ? "hidden" : "visible"

	},
	innerContainer: {
		borderRadius: 8,
		overflow: "hidden"
	},
	buttonPressed: {
		opacity: 0.5
	},
	image: {
		width: '100%',
		height: 200
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 18,
		margin: 8
	},
	details: {
		flexDirection: "row",
		alignItems: "center",
		padding: 8,
		justifyContent: "center"
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 12
	}

})