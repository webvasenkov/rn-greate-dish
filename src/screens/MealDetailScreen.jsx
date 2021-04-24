import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MealDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This Meal Detail Screen!</Text>
      <Button title='Go To Home!' onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
