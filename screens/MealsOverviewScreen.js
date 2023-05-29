import { View, FlatList, StyleSheet } from "react-native";
import { useEffect, useLayoutEffect } from "react";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

export default function MealsOVerviewScreen({ route, navigation }) {
    // route is a Navigation prop. Has a property 'params' that allows to receive data sent from a navigation.navigate().
    // Also we can use useRoute hook.
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((el) => {
        return el.categoryIds.indexOf(catId) >= 0
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((el) => el.id === catId).title

        navigation.setOptions({ // setting screen title dynamically
            title: categoryTitle
    }) 
    }, [catId, navigation])



    const renderMealItem = (itemData) => {
        const { id, title, imageUrl, duration, complexity, affordability } = itemData.item

        const mealItemProps = {
            id,
            title,
            imageUrl, 
            duration,
            complexity,
            affordability
        }

        return (
            <MealItem {...mealItemProps}/>
        )
    }

    return(
    <View style={s.container}>
        <FlatList 
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}/>
    </View>
    ) 
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})

