import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import React from 'react';


const images = [
  { id: '1', uri: require('../../assets/images/m.jpg'), width: 300, height: 500 },
  { id: '2', uri: require('../../assets/images/bv.jpg'), width: 300, height: 500 },
  { id: '3', uri: require('../../assets/images/mj.jpg'), width: 300, height: 500 },
  { id: '4', uri: require('../../assets/images/fg.jpg'), width: 300, height: 500 },
  { id: '5', uri: require('../../assets/images/d.jpg'), width: 300, height: 500 },
  { id: '6', uri: require('../../assets/images/a.jpg'), width: 300, height: 500 },
  { id: '7', uri: require('../../assets/images/x.jpg'), width: 300, height: 500 },
  { id: '8', uri: require('../../assets/images/k.jpg'), width: 300, height: 500 },
];

const Videos = () => {
  
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
      <Text style={styles.header}>Videos</Text>
      <FlatList
        data={images}
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
    backgroundColor: '#FF7F3E', 
    padding: 16,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FAF7F0',
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

export default Videos
