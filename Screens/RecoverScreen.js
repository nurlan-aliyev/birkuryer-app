import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import IconFont from "react-native-vector-icons/FontAwesome";

import { Formik } from "formik";
import * as yup from "yup";

import { styles } from "./Components/Styles.js";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email adress")
    .required("Email Address is Required"),
});

export default function RecoverScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF",
      }}
    >
      <Text style={styles.signInText}>Recover account</Text>
      <Text style={styles.signInPar}>
        Enter your email address and an email with instructions will be sent to
        you.
      </Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: "" }}
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
                // color={!this.state.isFocusedEmail ? "#8F95A0" : "#000"}
                style={{ marginRight: 0, marginLeft: -17 }}
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

            <TouchableOpacity
              style={styles.succesBtn}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={styles.btnText}>Recover account</Text>
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
    </View>
  );
}
