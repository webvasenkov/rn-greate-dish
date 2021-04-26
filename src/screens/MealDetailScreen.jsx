import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

const getMeal = (navigation) => MEALS.find(({ id }) => id === navigation.getParam('mealId'));
const MealDetailScreen = ({ navigation }) => {
  const { title } = getMeal(navigation);

  return (
    <View style={styles.container}>
      <Text>This Meal Detail {title}!</Text>
      <Button title='Go To Home!' onPress={() => navigation.popToTop()} />
    </View>
  );
};

MealDetailScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: getMeal(navigation).title,
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title='Favorite' iconName='heart-outline' onPress={() => console.log('Mark Favorite')} />
    </HeaderButtons>
  ),
});

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
