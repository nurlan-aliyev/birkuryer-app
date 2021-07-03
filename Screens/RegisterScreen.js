import React from "react";
import { Text,
   View,
   TextInput,
   TouchableOpacity,
   KeyboardAvoidingView, 
   Platform, 
   ScrollView 
  } from "react-native";

import IconFont from "react-native-vector-icons/FontAwesome";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";

import { Formik } from "formik";
import * as yup from "yup";

import { styles } from "./Components/Styles.js";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  passConfirm: yup.string().required("Confirm your password"),
});

export default function RegisterScreen(props) {
  const andPlt = Platform.OS === 'android' ? true : false
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        paddingTop: andPlt ? 25 : 0
      }}
    >
      <ScrollView bounces="false" contentContainerStyle={{flex:1,   alignItems: "center",
        justifyContent: "center",
        paddingTop: andPlt ? 25 : 0}}>
      <Text style={styles.signInText}>Please Sign up</Text>
      <Text style={styles.signInPar}>Fill out the form to get started.</Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: "", password: "", passConfirm: "", realName: "", phoneNumber: "" }}
        onSubmit={(values) => console.log(values)}
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
              <IconFont
                name="user"
                size={30}
                // color={!this.state.isFocusedPass ? "#8F95A0" : "#000"}
              />
              <TextInput
                name="realName"
                placeholder="Name"
                style={styles.textField}
                onChangeText={handleChange("realName")}
                onBlur={handleBlur("realName")}
                value={values.realName}
                autoCapitalize="words"
              />
            </View>

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
                name="phone"
                size={30}
                // color={!this.state.isFocusedPass ? "#8F95A0" : "#000"}
              />
              <TextInput
                name="phoneNumber"
                placeholder="Phone Number"
                style={styles.textField}
                onChangeText={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                value={values.phoneNumber}
                keyboardType="phone-pad"
                autoCapitalize="none"
              />
            </View>
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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <IconMaterial
                name="key-variant"
                size={30}
                style={{ marginRight: -6, marginLeft: -6 }}
                // color={!this.state.isFocusedPass ? "#8F95A0" : "#000"}
              />
              <TextInput
                name="passConfirm"
                placeholder="Confirm Password"
                style={styles.textField}
                onChangeText={handleChange("passConfirm")}
                onBlur={handleBlur("passConfirm")}
                value={values.passConfirm}
                secureTextEntry
                autoCapitalize="none"
              />
            </View>
            {errors.passConfirm && (
              <Text style={{ fontSize: 14, color: "red" }}>
                {errors.passConfirm}
              </Text>
            )}

            <TouchableOpacity
              style={styles.succesBtn}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <Text style={styles.signInPar}>Have an account?</Text>
              <TouchableOpacity
                onPress={() => props.navigation.replace("Home")}
                style={{ marginLeft: 8 }}
              >
                <Text style={{ color: "#21C87A", fontSize: 16 }}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
