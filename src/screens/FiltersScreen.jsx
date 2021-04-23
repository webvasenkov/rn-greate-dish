import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FilterScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This Filter Screen!</Text>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
