import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import React from 'react';


const data = [
  { id: '1', uri: require('../../assets/images/s.jpg'), width: 170, height: 220 },
  { id: '2', uri: require('../../assets/images/nm.jpg'), width: 180, height: 220 },
  { id: '3', uri: require('../../assets/images/b.jpg'), width: 170, height: 390 },
  { id: '4', uri: require('../../assets/images/j.jpg'), width:  180, height: 390 },
  { id: '5', uri: require('../../assets/images/ni.jpg'), width: 170, height: 220 },
  { id: '6', uri: require('../../assets/images/city.jpg'), width: 180, height: 220 },
  { id: '7', uri: require('../../assets/images/tg.jpg'), width: 170, height: 400 },
  { id: '8', uri: require('../../assets/images/bn.jpg'), width:  180, height: 400 },
  { id: '9', uri: require('../../assets/images/ge.jpg'), width: 180, height: 500 },
  { id: '10', uri: require('../../assets/images/ey.jpg'), width: 180, height: 500 },
  { id: '11', uri: require('../../assets/images/ok.jpg'), width: 170, height: 220 },
  { id: '12', uri: require('../../assets/images/sh.jpg'), width: 180, height: 220 },
];

const Favorites = () => {
  
  const renderItem = ({ item }) => (
    <View style={[styles.card, { width: item.width }]}>
      <Image
        source={item.uri}  
        style={[styles.image, { height: item.height }]} 
        resizeMode="cover"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorites</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} 
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.columnWrapper} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF4B91',
    padding: 16,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#F5F5F5',
    fontFamily: 'Jubar-Bold',
    textAlign: 'center',
  },
  listContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingBottom: 20, 
  },
  columnWrapper: {
    justifyContent: 'space-between', 
  },
  card: {
    margin: 8,
    backgroundColor: '#fff', 
    borderRadius: 8, 
    elevation: 4, 
    overflow: 'hidden',
    alignItems: 'center', 
  },
  image: {
    width: '100%', 
    borderRadius: 8, 
  },
});

export default Favorites