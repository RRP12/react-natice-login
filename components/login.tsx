import React from "react";
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  Keyboard,
  Text,
} from "react-native";

export default function Login() {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  async function handelSignIn() {
    try {
      console.log("Sign In button clicked");

      let bodyContent = JSON.stringify({
        username: text,
        password: number,
      });

      console.log("bodyContent", bodyContent);

      let response = await fetch("http://192.168.1.8:5001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: bodyContent,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let data = await response.json();
      console.log("Response data:", data);
    } catch (error) {
      console.error("Error during sign-in:", error.message);
    }
  }

  function onPressFunction() {}
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.InnerContainer}
        onPressOut={() => {
          Keyboard.dismiss();
        }}
        onPress={onPressFunction}
      >
        <Image
          style={styles.tinyLogo}
          source={require("../assets/images/yuppcom_logo.jpeg")}
        />
        <Text style={styles.header_text}>Sign in to your account</Text>
        <View style={styles.inputConatiner}>
          <View style={styles.InputlabelContainer}>
            <Text style={styles.label}> User Name</Text>
            <TextInput
              value={text}
              onChangeText={onChangeText}
              style={styles.input}
              placeholder="Enter your user name "
              keyboardType="default"
            />
          </View>

          <View style={styles.InputlabelContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              value={number}
              onChangeText={onChangeNumber}
              style={styles.input}
              placeholder="Enter your password "
              keyboardType="default"
            />
            <Text style={styles.forgetPassword}>Forget Password</Text>
          </View>

          <Pressable style={styles.SigninContainer} onPress={handelSignIn}>
            <Text style={styles.SigninText}>Sign In</Text>
          </Pressable>

          <Text style={styles.solcialLoginlabel}>others ways to sign in </Text>
        </View>
        <View style={styles.SocialLoginContainer}>
          <Image
            style={styles.google_logo}
            source={require("../assets/images/Mobile_google_icon.png")}
          />
        </View>
        <Text style={styles.CreateAccountText}>
          Dont't have a account? <Text>Sign Up</Text>
        </Text>
      </Pressable>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    height: "100%",
    borderColor: "red",
    borderStyle: "solid",
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  InnerContainer: {
    borderWidth: 1,
    padding: 10,
    width: "100%",
    height: "100%",
    display: "flex",
  },

  input: {
    height: 40,

    borderWidth: 1,
    padding: 10,
    borderColor: "#D8D8D8",
    borderRadius: 5,
    width: "100%",
  },

  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },

  header_text: {
    alignSelf: "center",
    marginTop: 40,
    fontSize: 20,
    fontWeight: "500",
  },

  inputConatiner: {
    marginTop: 40,
    borderColor: "black",
    display: "flex",
  },
  label: {
    marginRight: 12,
  },
  InputlabelContainer: {
    margin: 12,
    display: "flex",
    gap: 10,
  },

  forgetPassword: {
    alignSelf: "flex-end",
    color: "grey",
    fontFamily: "Roboto",
    fontStyle: 18,
    fontWeight: "600",
  },

  SigninContainer: {
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 1,
    width: "100%",
    padding: 10,
    backgroundColor: "#004643",
  },

  SigninText: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },

  solcialLoginlabel: {
    color: "grey",
    alignSelf: "center",
    marginTop: 20,
  },

  google_logo: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },

  SocialLoginContainer: {
    marginTop: 30,
    borderColor: "red",
  },

  CreateAccountText: {
    marginTop: 10,
    borderColor: "red",
    alignSelf: "center",
  },
});
