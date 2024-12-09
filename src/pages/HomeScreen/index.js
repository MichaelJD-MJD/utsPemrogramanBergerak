import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from "react-native";

const HomeScreen = ({ navigation }) => {
  const data = [
    { id: "1", room: "Advancing Class", time: "Hari Ini, 10:09", status: "Sedang Dipinjam" },
    { id: "2", room: "Aula Serba Guna Lt.3", time: "Hari Ini, 11:59", status: "Sedang Dipinjam" },
    { id: "3", room: "Ruang Kelas 4.2", time: "Kemarin, 11:59", status: "Selesai Peminjaman" },
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
  const handleReturningScreen = () => {
    navigation.navigate("ReturningScreen");
  }
  const handleNotification = () => {
    navigation.navigate("Notification");
  }
  return (
    <View style={styles.container}>
     <View style={styles.header}>
  <View style={styles.infoContainer}>
    {/* Left side: Logo and Text */}
    <View style={styles.leftContainer}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/user-image.png")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.userName}>Famichael Zahkei</Text>
        <Text style={styles.facultyInfo}>Jurusan Sistem Informasi</Text>
      </View>
    </View>

    {/* Right side: Notification Icon */}
    <TouchableOpacity onPress={handleNotification}>
      <Image
        style={styles.notificationIcon}
        source={require("../../assets/icons/bells.png")} // Ganti dengan path gambar notifikasi
      />
    </TouchableOpacity>
  </View>
</View>


      {/* Search Bar */}
<View style={styles.searchBar}>
  <Image
    style={styles.search}
    source={require("../../assets/icons/search1.png")}
  />
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
        <TouchableOpacity style={styles.categoryItem}
        onPress={handleReturningScreen}
        >
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
    padding: 15, // Menyesuaikan padding agar lebih proporsional
  },
  
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    
    borderRadius: 10,
    padding: 10,
  },
  
  leftContainer: {
    flexDirection: "row", // Menyusun logo dan teks dalam satu baris
    alignItems: "center", // Menjaga keselarasan vertikal
  },
  
  textContainer: {
    marginLeft: 10, // Memberikan jarak antara logo dan teks
  },
  
  userName: {
    color: "#FFFFFF",
    fontSize: 22, // Ukuran font yang lebih besar untuk nama
    fontWeight: "bold",
  },
  
  facultyInfo: {
    color: "#FFFFFF",
    fontSize: 14, // Ukuran font yang lebih kecil untuk jurusan
  },
  
  logo: {
    width: 60,
    height: 60,
    marginRight:8,
  },
  
  notificationIcon: {
    width: 30, // Sama besar dengan logo
    height: 30,
    marginRight: 13,
  },
  
  searchBar: {
    marginTop: 15,
    marginHorizontal: 20, // Memberikan margin kiri dan kanan
    flexDirection: 'row', // Menyusun gambar dan input dalam satu baris
    alignItems: 'center', // Mengatur posisi gambar dan input agar rata tengah secara vertikal
    backgroundColor: "#FFFFFF", // Memberikan latar belakang pada kontainer pencarian
    borderRadius: 20, // Membuat sudut kontainer menjadi bulat
    elevation: 2, // Memberikan bayangan
    paddingVertical: 8, // Memberikan padding vertikal lebih kecil
    maxWidth: '90%', // Menyesuaikan lebar kontainer dengan lebar layar
    alignSelf: 'center', // Memastikan kontainer search bar berada di tengah
  },
  
  search: {
    width: 18, // Mengurangi ukuran gambar pencarian agar lebih proporsional
    height: 18, // Mengurangi ukuran gambar pencarian
    marginRight: 10, // Memberikan jarak antara gambar dan input teks
    marginLeft: 15,
  },
  
  searchInput: {
    flex: 1, // Memberikan ruang agar TextInput mengambil lebih banyak ruang dalam kontainer
    backgroundColor: "#FFFFFF", // Warna latar belakang input
    padding: 5, // Mengurangi padding dalam input untuk ukuran yang lebih kecil
    borderRadius: 20, // Membuat sudut input menjadi bulat
    fontSize: 14, // Mengurangi ukuran font agar sesuai dengan ukuran bar
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