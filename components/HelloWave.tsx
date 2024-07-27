import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';


import { ThemedText } from '@/components/ThemedText';

export function HelloWave({
  title, image
}: {
  title: string;
  image: ImageSourcePropType;
}) {
  
  

  return (
    <View style={styles.container}>
        <Image source={image}  alt='icon' style={styles.image} />
        <ThemedText style={styles.text}>{title}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 5,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginRight: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 14,
  }
});