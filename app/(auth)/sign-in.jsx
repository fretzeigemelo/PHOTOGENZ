import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
    
    }, 2000);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#EF5A6F' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={{ alignItems: 'center', paddingHorizontal: 16, marginVertical: 24 }}>
          
          <Image
            source={images.logo}
            resizeMode="contain"
            style={{ width: 500, height: 60 }}
          />
          
          <Text style={{ fontSize: 24, color: 'white', marginTop: 0, fontFamily: 'u_regular' }}>
            Sign in to PhotoGenzHub
          </Text>

          { }
          <Text style={{ fontSize: 16, color: 'white', marginTop: 28, alignSelf: 'flex-start', fontFamily: 'u_regular' }}>
            Email
          </Text>
          
          { }
          <TextInput
            placeholder="Email"
            value={form.email}
            onChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
            style={{
              height: 50,
              width: '100%',
              backgroundColor: 'white',
              borderRadius: 8,
              marginTop: 8,
              paddingHorizontal: 16,
            }}
          />

          { }
          <Text style={{ fontSize: 16, color: 'white', marginTop: 28, alignSelf: 'flex-start', fontFamily: 'u_regular' }}>
            Password
          </Text>

          { }
          <TextInput
            placeholder="Password"
            value={form.password}
            onChangeText={(e) => setForm({ ...form, password: e })}
            secureTextEntry
            style={{
              height: 50,
              width: '100%',
              backgroundColor: 'white',
              borderRadius: 8,
              marginTop: 8,
              paddingHorizontal: 16,
            }}
          />
          
          { }
          <TouchableOpacity
            onPress={submit}
            style={{
              backgroundColor: '#AF1740',
              paddingVertical: 12,
              paddingHorizontal: 32,
              borderRadius: 8,
              marginTop: 28,
              width: '100%',
              alignItems: 'center',
            }}
            disabled={isSubmitting}
          >
            <Link href="/home">
              <Text style={{ color: 'white', fontSize: 26, fontWeight: '600', fontFamily: 'Jubar-Bold' }}>
                {isSubmitting ? 'Signing In...' : 'Sign In'}
              </Text>
            </Link>
          </TouchableOpacity>

          { }
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20 }}>
            <Text style={{ fontSize: 20, color: '#ffff', fontFamily: 'p_regular' }}>
              Don't have an account?
            </Text>
            
            <Link
              href="/sign-up"
              style={{ fontSize: 18, color: '#AF1740', fontFamily: 'u_bold', marginLeft: 8 }}
            >
              Sign up
            </Link>
          </View>

          { }
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', marginTop: 40, marginBottom: 20 }}>
            <TouchableOpacity style={{ backgroundColor: '#3b5998', padding: 12, borderRadius: 8 }}>
              <Icon name="facebook" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#FF0000', padding: 12, borderRadius: 8 }}>
              <Icon name="youtube" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#E4405F', padding: 12, borderRadius: 8 }}>
              <Icon name="instagram" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#DB4437', padding: 12, borderRadius: 8 }}>
              <Icon name="google" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#1DB954', padding: 12, borderRadius: 8 }}>
              <Icon name="spotify" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#07C160', padding: 12, borderRadius: 8 }}>
              <Icon name="wechat" size={24} color="white" />
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn
