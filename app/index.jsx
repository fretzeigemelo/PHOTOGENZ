import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: '#EF5A6F', flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '100%', alignItems: 'center', paddingHorizontal: 16 }}>
          
          {/* Logo Section */}
          <Image
            source={images.logo}
            style={{ width: 600, height: 60, marginTop: 5, fontWeight: '700' }}
            resizeMode="contain"
          />
          
          {/* Portfolio Image */}
          <Image
            source={images.camera}
            style={{ width: 300, height: 200, borderRadius: 0 }}
            resizeMode="cover"
          />

          {/* Title Text */}
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 24, color: 'white', fontWeight: '700', textAlign: 'center', fontFamily: 'Jura-Bold' }}>
              Photography is the Beauty of Life Captured, Perfect Shot, Perfect Light
            </Text>
          </View>

          {/* Join Us Text */}
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#EEEEEE', marginTop: 20, textAlign: 'center', fontFamily: 'Jura-Bold' }}>
            Capturing Moments, Creating Memories
          </Text>

          {/* Continue with Email Button */}
          <TouchableOpacity
            onPress={() => router.push('/sign-in')}
            style={{
              backgroundColor: '#FFA500',
              paddingVertical: 12,
              paddingHorizontal: 100,
              borderRadius: 15,
              marginTop: 28,
              alignItems: 'center',
            }}
            >
            <Text style={{ color: 'black', fontSize: 20, fontWeight: '900',fontFamily:"Jubar-Bold" }}>
              Continue with Email
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}