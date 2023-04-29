import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

// this function doesn't have to be calculated on every re-render. 
// That's why we create it outside the component function.
const renderCategoryItem = (itemData) => {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
}

export default function CategoriesScreen(){
    return(
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderCategoryItem}
            numColumns={2}
            horizontal={false}
        />
    );
}