import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";

import IconFont from "react-native-vector-icons/FontAwesome";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";

import { Formik } from "formik";
import * as yup from "yup";

import { styles } from "./Components/Styles.js";

const deviceWidth = Dimensions.get("window").width;

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

export default function LoginScreen(props) {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <ScrollView bounces="false" contentContainerStyle={{flex:1}}>
      <Text style={styles.signInText}>Please Sign In</Text>
      <Text style={styles.signInPar}>Sign in to manage your account.</Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          if (
            values.email === "test1234@gmail.com" &&
            values.password === "test1234"
          ) {
            props.navigation.replace("My Home");
          } else {
            console.log(values.email, values.password);
          }
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <IconMaterial
                name="email-outline"
                size={30}
                // color={!this.state.isFocusedEmail ? "#8F95A0" : "#000"}
                style={{ marginRight: -6, marginLeft: -6 }}
              />
              <TextInput
                name="email"
                placeholder="Email Address"
                style={styles.textField}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            {errors.email && (
              <Text style={{ fontSize: 14, color: "red" }}>{errors.email}</Text>
            )}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <IconFont
                name="lock"
                size={30}
                // color={!this.state.isFocusedPass ? "#8F95A0" : "#000"}
              />
              <TextInput
                name="password"
                placeholder="Password"
                style={styles.textField}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
                autoCapitalize="none"
              />
            </View>
            {errors.password && (
              <Text style={{ fontSize: 14, color: "red" }}>
                {errors.password}
              </Text>
            )}
            <TouchableOpacity
              style={{
                margin: 10,
                left: deviceWidth - deviceWidth * 0.79,
              }}
              onPress={() => props.navigation.replace("RecoverScreen")}
            >
              <Text style={{ color: "#21C87A", fontSize: 14 }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.succesBtn}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <View style={{ flexDirection: "row", marginTop: 8 }}>
        <Text style={styles.signInPar}>Do not have an account?</Text>
        <TouchableOpacity
          style={{ marginLeft: 8 }}
          onPress={() => props.navigation.replace("RegisterScreen")}
        >
          <Text style={{ color: "#21C87A", fontSize: 16 }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
