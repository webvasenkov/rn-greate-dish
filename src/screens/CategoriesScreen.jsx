import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This Categories Screen!</Text>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
