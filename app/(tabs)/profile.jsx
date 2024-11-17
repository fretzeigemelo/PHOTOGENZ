import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/hy.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/bl.jpg')} 
          style={styles.overlay}
          imageStyle={{ borderRadius: 20 }} 
        >
          <View style={styles.content}>
            <Image
              source={require('../../assets/images/sa.jpg')}
              style={styles.profileImage}
            />
            <Text style={styles.name}>Fretzei Gemelo</Text>
            <Text style={styles.birthdate}>October 17, 2003</Text>
            <Text style={styles.detailed}> fretzeigemelo@gmail.com</Text>
            <Text style={styles.detailed}>  (+63) 158-453-116</Text>
            <Text style={styles.detailed}>  Magsaysay, Toledo City</Text>
            <Text style={styles.bio}>
                  Camera Setting Guide {'\n'}
                  {'\n'}
                     Aperture: f/1.8-f/5.6 in low light or for a narrower depth of field, and f/8-f/16 for a wider DoF{'\n'}
                  {'\n'}
                    Shutter Speed: From 30 seconds to 1/4000th of a second depending on the scene{'\n'}
                    {'\n'}
                   ISO: 100-3200 in entry-level cameras, and 100-6400 in more advanced cameras{'\n'}
                    {'\n'}
                     Camera Mode: Manual camera mode or Aperture-priority mode {'\n'}
                      {'\n'}
                      Color Space: sRGB{'\n'}
            </Text> 
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  container: {
    width: '140%',
    borderRadius: 40,
    overflow: 'hidden', 
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.7, 
    shadowRadius: 6,
  },
  overlay: {
    width: '100%',
    padding: 30, 
    alignItems: 'center',
    backgroundColor: 'rgba(165, 148, 249, 0.5)', 
  },
  content: {
    alignItems: 'center',
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 65,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    fontFamily: 'Poppins-ExtraLight', 
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000000', 
  },
 birthdate: {
  fontFamily: 'Poppins-ExtraLight', 
  fontSize: 13,
  fontWeight: 'bold',
  marginBottom: 5,
  color: '#000000', 
},
detailed: {
 fontFamily: 'Poppins-Light', 
 fontSize: 10,
 fontWeight: 'bold',
 marginBottom: 5,
 color: '#000000',
},
   bio: {
    fontFamily: 'Poppins-ExtraBold',
    fontWeight: 'bold',
    fontSize: 9,
    textAlign: 'left',
    color: '#1D24CA', 
    marginHorizontal: 20,
   
  },
});

export default Profile
