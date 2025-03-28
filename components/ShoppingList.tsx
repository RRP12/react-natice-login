import React, { useEffect } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
// import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';

export default function ShoppingList({ name }: any) {
  const [products, setProducts] = React.useState([]);

  // Map the products to match the desired format and ensure unique keys
  let FilteredList = products?.map((p: any, index: number) => {
    return {
      key: `${p.name}`, // Append index to ensure uniqueness
    };
  });

  console.log("FilteredList", FilteredList);

  useEffect(() => {
    fetch("http://192.168.1.8:5000/api/products") // Replace localhost with your machine's IP
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <View>
      <ShopList FilteredList={FilteredList} />
    </View>
  );
}

const ShopList = ({ FilteredList }: any) => {
  return (
    <View style={styles.Container}>
      <FlatList
        style={styles.listStyle}
        data={FilteredList}
        renderItem={({ item }) => <Text >{item.key}</Text>} // Display the key
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    display: "flex",
    gap: "10px"
  },
  ListItem: {
    borderWidth: 1,
  },
  Container: {
    margin: 10,
    backgroundColor: "#f5fcff",
    borderWidth: 1,
    borderColor: "black",

  },
});