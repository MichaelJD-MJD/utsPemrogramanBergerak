import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from "react-native";

const HomeScreen = ({ navigation }) => {
  const data = [
    { id: "1", room: "Ruangan 001", time: "Kemarin, 10:09", status: "Sedang Dipinjam" },
    { id: "2", room: "Ruangan 002", time: "Kemarin, 11:59", status: "Sedang Dipinjam" },
    { id: "3", room: "Ruangan 003", time: "Kemarin, 11:59", status: "Selesai Antrian" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
      <Image
          style={styles.itemIcon} 
          source={require('../../assets/icons/home.png')} 
        />
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.itemRoom}>{item.room}</Text>
        <Text style={styles.itemTime}>{item.time}</Text>
      </View>
      <Text style={styles.itemStatus}>{item.status}</Text>
    </View>
  );

  const handleListFacultyScreen = () => {
    navigation.navigate("ListFacultyScreen");
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Selamat Pagi</Text>
        <Text style={styles.userName}>FahMiZahKei</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.facultyInfo}>
            Fakultas Ilmu Komputer{"\n"}Jurusan Sistem Informasi
          </Text>
          <Image
            style={styles.logo}
            source={require("../../assets/images/user-image.png")}
          />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Apa yang kamu cari hari ini"
        />
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Kategori</Text>
      <View style={styles.categories}>
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={handleListFacultyScreen}
        >
          <Image
            style={styles.categoryIcon}
            source={require("../../assets/icons/p1.png")}
          />
          <Text style={styles.categoryText}>Peminjaman</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Image
            style={styles.categoryIcon}
            source={require("../../assets/icons/p2.png")}
          />
          <Text style={styles.categoryText}>Pengembalian</Text>
        </TouchableOpacity>
      </View>

      {/* Riwayat Peminjaman */}
      <Text style={styles.sectionTitle}>Riwayat Peminjaman</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
     minHeight: 800,
    
  },
  header: {
    backgroundColor: "#3470A2",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 30,
  },
  greeting: {
    color: "#FFFFFF",
    fontSize: 15,
    marginTop: 30, // Tambahkan jarak vertikal
  },
  
  userName: {
    color: "#FFC727",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    padding: 10,
  },
  facultyInfo: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  logo: {
    width: 60,
    height: 60,
  },
  searchBar: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  sectionTitle: {
    color: "#002649",
    fontSize: 16,
    fontWeight: "bold",
    margin: 20,
    marginBottom: 10,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: "center",
  },
  categoryIcon: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 12,
    color: "#002649",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 1,
  },
  iconContainer: {
    backgroundColor: "#E8E8E8",
    borderRadius: 20,
    padding: 10,
  },
  itemIcon: {
    width: 24,
    height: 24,
  },
  itemContent: {
    flex: 1,
    marginLeft: 10,
  },
  itemRoom: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#002649",
  },
  itemTime: {
    fontSize: 12,
    color: "#8A8A8A",
  },
  itemStatus: {
    fontSize: 12,
    color: "#FFC727",
  },
});
