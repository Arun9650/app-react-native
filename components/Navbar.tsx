import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

const Navbar = ({ navigation }: { navigation: any }) => {
  const goBack = () => navigation.goBack();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={goBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.navbarTitle}>Title</Text>
      <TouchableOpacity onPress={() => console.log('Share icon pressed')}>
        <Ionicons name="share-social-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  navbarTitle: {
    fontSize: 18,
  },
});


export default Navbar