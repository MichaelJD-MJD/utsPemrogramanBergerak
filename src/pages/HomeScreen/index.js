import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useRef, useEffect } from "react";

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("MainApp");
    }, 3000);
  }, []);

  const handleListScreen = () => {
    // Navigasi ke HomeScreen setelah login
    navigation.navigate("ListFacultyScreen");
  };

  return (
    <View style={styles.container}>
      {/* Top Section with Welcome */}
      <View style={styles.topSection}>
        <View style={styles.circleBackground} />
        <Image
          source={{ uri: "https://via.placeholder.com/236x220" }}
          style={styles.topImage}
        />
        <View style={styles.welcomeContainer}>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeText}>Selamat Pagi</Text>
            <Text style={styles.userName}>Bryan Hanggara</Text>
          </View>
          <View style={styles.notificationIconContainer}>
            <View style={styles.notificationIcon}>
              <Image
                source={{ uri: "https://via.placeholder.com/22x17" }}
                style={styles.notificationBell}
              />
              <View style={styles.notificationDot}></View>
            </View>
          </View>
        </View>
        <View style={styles.facultyInfoContainer}>
          <Text style={styles.facultyInfo}>
            Fakultas Ilmu Komputer{"\n"}Jurusan Sistem Informasi
          </Text>
        </View>
        <View style={styles.searchBar}>
          <View style={styles.searchIconContainer}>
            <View style={styles.searchIcon}></View>
          </View>
          <Text style={styles.searchText}>Apa yang kamu cari hari ini</Text>
        </View>
      </View>

      {/* Category Section */}
      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>Kategori</Text>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryItem}>
            <View style={styles.categoryIcon}>
              <View style={styles.categoryIconBackground}></View>
            </View>
            <Text style={styles.categoryText}>Sarana</Text>
          </View>
          <View style={styles.categoryItem}>
            <View style={styles.categoryIcon}>
              <View style={styles.categoryIconBackground}></View>
            </View>
            <TouchableOpacity onPress={handleListScreen}>
              <Text style={styles.categoryText}>Prasarana</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categoryItem}>
            <View style={styles.categoryIcon}>
              <View style={styles.categoryIconBackground}></View>
            </View>
            <Text style={styles.categoryText}>Kemahasiswaan</Text>
          </View>
          <View style={styles.categoryItem}>
            <View style={styles.categoryIcon}>
              <View style={styles.categoryIconBackground}></View>
            </View>
            <Text style={styles.categoryText}>Layanan</Text>
          </View>
        </View>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <View style={styles.footerIcon}></View>
          <Text style={styles.footerText}>Beranda</Text>
        </View>
        <View style={styles.footerItem}>
          <View style={styles.footerIcon}></View>
          <Text style={styles.footerText}>Lainnya</Text>
        </View>
        <View style={styles.footerItem}>
          <View style={styles.footerIcon}></View>
          <Text style={styles.footerText}>Akademik</Text>
        </View>
        <View style={styles.footerItem}>
          <View style={styles.footerIcon}></View>
          <Text style={styles.footerText}>Pesan</Text>
        </View>
        <View style={styles.footerItem}>
          <View style={styles.footerIcon}></View>
          <Text style={styles.footerText}>Akun</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topSection: {
    backgroundColor: "#3470A2",
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  circleBackground: {
    position: "absolute",
    width: 494,
    height: 494,
    backgroundColor: "#63ABE6",
    borderRadius: 247,
    top: 34,
    left: 166,
  },
  topImage: {
    position: "absolute",
    width: 236,
    height: 220,
    left: 225,
    top: 105,
  },
  welcomeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  welcomeTextContainer: {
    flexDirection: "column",
  },
  welcomeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },
  userName: {
    color: "#FFC727",
    fontSize: 20,
    fontWeight: "800",
  },
  notificationIconContainer: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 12,
  },
  notificationIcon: {
    width: 32,
    height: 30,
    position: "relative",
  },
  notificationBell: {
    width: 22.27,
    height: 17.5,
  },
  notificationDot: {
    width: 5.33,
    height: 5,
    backgroundColor: "#82B3FD",
    borderRadius: 50,
    position: "absolute",
    top: 5,
    right: 0,
  },
  facultyInfoContainer: {
    marginTop: 20,
    backgroundColor: "rgba(255, 255, 255, 0.48)",
    borderRadius: 10,
    padding: 20,
    backdropFilter: "blur(30px)",
  },
  facultyInfo: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 10,
  },
  searchIconContainer: {
    width: 20,
    height: 20,
    backgroundColor: "#8A8A8A",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    backgroundColor: "#8A8A8A",
  },
  searchText: {
    color: "#8A8A8A",
    fontSize: 14,
  },
  categorySection: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  categoryTitle: {
    color: "#002649",
    fontSize: 20,
    fontWeight: "600",
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  categoryItem: {
    alignItems: "center",
  },
  categoryIcon: {
    width: 45,
    height: 45,
    backgroundColor: "#FFC727",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryIconBackground: {
    width: 35,
    height: 33,
    backgroundColor: "#7CC3FF",
  },
  categoryText: {
    color: "#5F5F61",
    fontSize: 14,
    marginTop: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: 10,
    borderTopColor: "#D9D9D9",
    borderTopWidth: 2,
  },
  footerItem: {
    alignItems: "center",
  },
  footerIcon: {
    width: 24,
    height: 24,
    backgroundColor: "#FFC727",
  },
  footerText: {
    color: "#FFC727",
    fontSize: 10,
    fontFamily: "Poppins",
    marginTop: 3,
  },
});




