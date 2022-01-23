import { TouchableOpacity, Image, SafeAreaView } from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <SafeAreaView>
      <TouchableOpacity activeOpacity={0.8} style={{ marginTop: 10 }}>
        <Image
          style={{ height: 30, width: '100%', resizeMode: 'contain' }}
          source={require('../../assets/headerLogo2.png')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
