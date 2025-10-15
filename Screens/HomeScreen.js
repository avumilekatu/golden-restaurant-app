 import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5' }}
      style={styles.background}
      blurRadius={2}
    >
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text style={styles.title}>🍴 Golden Restaurant 🍴</Text>
        <Text style={styles.subtitle}>Where Taste Meets Perfection</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddMenu')}
        >
          <Text style={styles.buttonText}>Add Menu Item</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.navigate('MenuList')}
        >
          <Text style={styles.buttonText}>View Menu List</Text>
        </TouchableOpacity>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFD700', // gold
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#B8860B',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 5,
  },
  secondaryButton: {
    backgroundColor: '#DAA520',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
});
