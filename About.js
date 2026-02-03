import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Image source={require('./assets/downloadd.png')} style={styles.logo} resizeMode="contain" />

      <View style={styles.main}>
        <Text style={styles.title}>About Rent Housing System</Text>
        <Text style={styles.text}>
          Rent Housing System helps connect displaced individuals with available
          rental properties, making housing searches easier and more accessible.
        </Text>

        <Text style={styles.subtitle}>Our Mission</Text>
        <Text style={styles.text}>
          To simplify the process of finding affordable and reliable rental
          properties.
        </Text>

        <Text style={styles.subtitle}>Key Features</Text>
        <View style={styles.features}>
          <Text style={styles.feature}> Easy property search</Text>
          <Text style={styles.feature}> Affordable housing options</Text>
          <Text style={styles.feature}> Secure tenant-landlord communication</Text>
          <Text style={styles.feature}> Real-time property availability</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  logo: {
    alignSelf: 'center', 
    width: 150, 
    height: 150, 
    marginBottom: -40, 
    zIndex: 10, 
  },
  main: {
    marginTop: 40, 
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 10, 
    boxShadow:'2px 3px 10px'
  },
  title: {
    fontSize: 22,
    color: '#005e6e',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
    textAlign: 'center',
  },
  features: {
    marginTop: 20,
    textAlign: 'center',
  },
  feature: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
});

export default About;
