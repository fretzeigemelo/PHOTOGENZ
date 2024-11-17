import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import React from 'react';


const data = [
  { id: '1', imageUrl: require('../../assets/images/n.jpg'), name: 'CAMERA' },
  { id: '2', imageUrl: require('../../assets/images/t.jpg'), name: 'COLLAGE' },
  { id: '3', imageUrl: require('../../assets/images/r.jpg'), name: 'PHOTOS' },
  { id: '4', imageUrl: require('../../assets/images/m.jpg'), name: 'VIDEOS' },
  { id: '5', imageUrl: require('../../assets/images/w.jpg'), name: 'PINS' },
  { id: '6', imageUrl: require('../../assets/images/s.jpg'), name: 'FAVORITES' },
 
];

const Home = () => {
 
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={item.imageUrl}  
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.imageName}>{item.name}</Text> {}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Gallery</Text>
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
    backgroundColor: '#9900F0',
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
    flex: 1,
    margin: 8,
    backgroundColor: '#fff', 
    borderRadius: 8, 
    elevation: 4, 
    overflow: 'hidden',
    alignItems: 'center', 
  },
  image: {
    width: '100%',
    height: 200, 
    borderTopLeftRadius: 8, 
    borderTopRightRadius: 8, 
  },
  imageName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center', 
    padding: 8, 
  },
});

export default Home