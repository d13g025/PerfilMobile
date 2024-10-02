import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importando ícones

const Skills = () => {
  return (
    <View style={styles.skillsContainer}>
      <Text style={styles.sectionTitle}>Skills</Text>
      
      {/* PHP */}
      <View style={styles.skill}>
        <Text>PHP:</Text>
        <View style={styles.stars}>
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star" size={20} color="#FFD700" />
        </View>
      </View>

      {/* CSS */}
      <View style={styles.skill}>
        <Text>CSS:</Text>
        <View style={styles.stars}>
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star" size={20} color="#FFD700" />
        </View>
      </View>

      {/* HTML */}
      <View style={styles.skill}>
        <Text>HTML:</Text>
        <View style={styles.stars}>
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star" size={20} color="#FFD700" />
        </View>
      </View>

      {/* Java */}
      <View style={styles.skill}>
        <Text>Java:</Text>
        <View style={styles.stars}>
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star-half-full" size={20} color="#FFD700" />
        </View>
      </View>

      {/* C */}
      <View style={styles.skill}>
        <Text>C:</Text>
        <View style={styles.stars}>
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star" size={20} color="#FFD700" />
        </View>
      </View>

      {/* Python */}
      <View style={styles.skill}>
        <Text>Python:</Text>
        <View style={styles.stars}>
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star-half-full" size={20} color="#FFD700" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  skillsContainer: {
    marginTop: 30,
    marginLeft: 20,
    width: '90%',
    padding: 10,
    backgroundColor: '#8ecae6',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  skill: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  stars: {
    flexDirection: 'row',
  },
});

export default Skills;
