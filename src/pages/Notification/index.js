import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import arrowLeft from "../../assets/icons/arrow-left.png";

const Notification = ({ navigation }) => {
  const notification = [
    {
      title: 'Staff baru saja menyetujui Peminjaman',
      subtitle: 'Ruangan Sudah Berhasil di Pinjam',
    },
    {
      title: 'Staff baru saja menyetujui Peminjaman',
      subtitle: 'Peralatan Sudah Berhasil di Pinjam',
    },
    {
      title: 'Staff baru saja menyetujui Pengembalian',
      subtitle: 'Terimakasih atas Pengembaliannya',
    },
    {
      title: 'Staff baru saja menolak Peminjaman',
      subtitle: 'Coba di waktu lain',
    },
    {
      title: 'Staff baru saja menolak Peminjaman',
      subtitle: 'Peralatan Sudah habis',
    },
    {
      title: 'Staff baru saja menolak Peminjaman',
      subtitle: 'Ruangan Sudah Terpakai',
    },
    {
        title: 'Staff baru saja menyetujui Peminjaman',
        subtitle: 'Ruangan Sudah Berhasil di Pinjam',
      },
      {
        title: 'Staff baru saja menyetujui Peminjaman',
        subtitle: 'Peralatan Sudah Berhasil di Pinjam',
      },
      {
        title: 'Staff baru saja menyetujui Pengembalian',
        subtitle: 'Terimakasih atas Pengembaliannya',
      },
  ];

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header dengan Back dan Search */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
          <Image style={styles.arrowIcon} source={arrowLeft} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBox}
          placeholder="Apa yang kamu cari hari ini"
          placeholderTextColor="#8A8A8A"
        />
      </View>

      {/* Notifikasi */}
      <View style={styles.card}>
        <ScrollView>
          {notification.map((notification, index) => (
            <View key={index} style={styles.notificationItem}>
              <View style={styles.iconWrapper}>
                <View style={styles.iconBackground} />
                <View style={styles.icon} />
              </View>

              <View style={styles.notificationText}>
                <Text style={styles.title}>{notification.title}</Text>
                <Text style={styles.subtitle}>{notification.subtitle}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 50,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3470A2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  searchBox: {
    flex: 1,
    height: 46,
    padding: 16,
    backgroundColor: '#F9F9F9',
    borderRadius: 25,
    borderColor: '#D1D1D1',
    borderWidth: 1,
    fontSize: 14,
    color: '#181D27',
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 44,
    elevation: 4,
    padding: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9',
    paddingBottom: 8,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconBackground: {
    width: 40,
    height: 40,
    backgroundColor: '#3470A2',
    opacity: 0.05,
    borderRadius: 20,
    position: 'absolute',
  },
  icon: {
    width: 17,
    height: 17,
    backgroundColor: '#3470A2',
    borderRadius: 8.5,
  },
  notificationText: {
    flex: 1,
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    color: '#181D27',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 11,
    color: '#ABABAB',
  },
});

export default Notification;
