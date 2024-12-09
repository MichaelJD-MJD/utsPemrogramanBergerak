import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./router";

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

/// import React from "react";
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import nimIcon from "./assets/nim-icon.png"; // Path to your NIM icon image
// import passwordIcon from "./assets/password-icon.png"; // Path to your Password icon image
// import illustration from "./assets/illustration.png"; // Path to your illustration image

// function App() {
//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.loginText}>Login</Text>
//       </View>

//       {/* Welcome text */}
//       <Text style={styles.welcomeText}>
//         Selamat datang kembali!
//         {"\n"}Harap login untuk melanjutkan
//       </Text>

//       {/* Illustration */}
//       <View style={styles.illustrationContainer}>
//         <Image
//           source={illustration}
//           style={styles.illustration}
//           resizeMode="contain"
//         />
//       </View>

//       {/* NIM Input Field */}
//       <View style={styles.inputContainer}>
//         <Image source={nimIcon} style={styles.icon} />
//         <View style={styles.inputInner}>
//           <Text style={styles.label}>NIM</Text>
//           <TextInput
//             placeholder="Masukkan NIM kamu"
//             placeholderTextColor="#8B8B8B"
//             style={styles.input}
//           />
//         </View>
//       </View>

//       {/* Password Input Field */}
//       <View style={styles.inputContainer}>
//         <Image source={passwordIcon} style={styles.icon} />
//         <View style={styles.inputInner}>
//           <Text style={styles.label}>Password</Text>
//           <TextInput
//             secureTextEntry={true}
//             placeholder="Enter your password"
//             placeholderTextColor="#8B8B8B"
//             style={styles.input}
//           />
//         </View>
//       </View>

//       {/* Login Button */}
//       <TouchableOpacity style={styles.loginButton}>
//         <Text style={styles.loginButtonText}>Login</Text>
//       </TouchableOpacity>

//       {/* Forgot Password */}
//       <Text style={styles.forgotPasswordText}>Lupa Password?</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     paddingHorizontal: 20,
//     paddingTop: 40,
//     alignItems: "center",
//   },
//   header: {
//     marginTop: 30,
//     marginBottom: 10,
//   },
//   loginText: {
//     color: "#FFC727",
//     fontSize: 32,
//     fontWeight: "700",
//     textAlign: "center",
//   },
//   welcomeText: {
//     textAlign: "center",
//     color: "#8B8B8B",
//     fontSize: 14,
//     marginTop: 10,
//     marginBottom: 30,
//     lineHeight: 22,
//   },
//   illustrationContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 30,
//   },
//   illustration: {
//     width: 300,
//     height: 200,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     backgroundColor: "#F8F8F8",
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "#E9ECEF",
//     marginBottom: 20,
//     width: "100%",
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     marginRight: 10,
//   },
//   inputInner: {
//     flex: 1,
//   },
//   label: {
//     color: "#20130B",
//     fontSize: 13,
//     fontWeight: "400",
//     marginBottom: 5,
//   },
//   input: {
//     fontSize: 14,
//     color: "#20130B",
//     paddingVertical: 5,
//     paddingHorizontal: 0,
//   },
//   loginButton: {
//     backgroundColor: "#3470A2",
//     paddingVertical: 15,
//     borderRadius: 8,
//     width: "100%",
//     alignItems: "center",
//     marginBottom: 15,
//   },
//   loginButtonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   forgotPasswordText: {
//     color: "#3470A2",
//     fontSize: 13,
//     textAlign: "center",
//   },
// });

// export default App;