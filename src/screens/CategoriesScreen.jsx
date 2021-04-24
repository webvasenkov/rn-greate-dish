import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { COLORS } from '../constants/constants';

const CategoriesScreen = ({ navigation }) => {
  const categoryItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate({
            routeName: 'CategoryMeal',
            params: {
              categoryId: item.id,
            },
          })
        }
      >
        <View style={styles.categoryItem}>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList keyExtractor={(item) => item.id} data={CATEGORIES} renderItem={categoryItem} numColumns={2} />
    </View>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Category',
  headerTintColor: Platform.OS === 'android' ? COLORS.primary : COLORS.accent,
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? COLORS.accent : COLORS.primary,
  },
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryItem: {
    flex: 1,
    margin: 15,
    height: 150,
    width: 150,
    backgroundColor: COLORS.primary,
  },
});
