// @ts-nocheck
import React from 'react';
import { View, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import TitleText from '../components/Text/TitleText';
import IconText from '../components/Text/IconText';
import BodyText from '../components/Text/IconText';
import Card from '../components/Card';
import CustomHeaderButton from '../components/CustomHeaderButton';

const MealDetailScreen = ({ navigation }) => {
  const meals = useSelector((state) => state.meals.all);
  const meal = meals.find(({ id }) => id === navigation.getParam('mealId'));
  const { title, imageUrl, duration, complexity, affordability, ingredients, steps } = meal;

  return (
    <ScrollView>
      <ImageBackground source={{ uri: imageUrl }} style={styles.background}>
        <View style={styles.overlay}>
          <TitleText style={styles.title}>{title}</TitleText>
        </View>
      </ImageBackground>
      <View style={styles.descContainer}>
        <Card>
          <IconText dataIcon={{ name: 'time-outline' }}>{duration}m</IconText>
        </Card>
        <Card>
          <IconText dataIcon={{ name: 'restaurant-outline' }}>{complexity}</IconText>
        </Card>
        <Card>
          <IconText dataIcon={{ name: 'wallet-outline' }}>{affordability}</IconText>
        </Card>
      </View>
      <TitleText style={styles.headTitle}>Ingredients</TitleText>
      <Card style={styles.card}>
        {ingredients.map((ingredient) => (
          <BodyText key={ingredient}>- {ingredient}</BodyText>
        ))}
      </Card>
      <TitleText style={styles.headTitle}>Steps</TitleText>
      <Card style={styles.card}>
        {steps.map((step, i) => (
          <BodyText key={step} style={styles.paragraph}>
            <TitleText>№{i + 1}</TitleText> {step}
          </BodyText>
        ))}
      </Card>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.getParam('mealTitle'),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title='Favorite' iconName='heart-outline' onPress={() => console.log('Mark Favorite')} />
    </HeaderButtons>
  ),
});

export default MealDetailScreen;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: 200,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
  },
  descContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  headTitle: {
    textAlign: 'center',
  },
  card: {
    margin: 15,
  },
});
