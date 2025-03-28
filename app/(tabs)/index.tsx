import Login from '@/components/login';
import ShoppingList from '@/components/ShoppingList';
import { on } from 'events';
import { View, Image, StyleSheet, Platform, TouchableOpacity, Text, Alert } from 'react-native';


export default function HomeScreen() {

  function hnadelDelete() {
    Alert.alert("Are you sure you want to delete this?", "It will be gone for good.", [
      {
        text: "Yes",
        onPress: () => console.log("Yes")
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel")
      }
    ]);
  }

  return (
    <View style={styles.titleContainer}>
      <Login />
      {/* <ShoppingList /> */}

    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {

    display: 'flex',
    justifyContent: "center",
    height: "100%",
    marginTop: 50,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },


  button: {
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
