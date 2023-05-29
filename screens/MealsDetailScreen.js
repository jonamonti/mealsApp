import { View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";

export default function MealsDetailScreen({ route }) {
    const mealId = route.params.id;
    const mealData = MEALS.filter((el) => el.id === mealId);
    console.log(mealData[0]);
    const { title, ingredients, steps, isGlutenFree, isVegan, isVegetarian, isLactoseFree } = mealData[0];
    return(
        <View>
            <Text style={{color: 'white'}}>{title}</Text>
            <Text style={{color: 'white'}}>{ingredients}</Text>
        </View>
    )
}