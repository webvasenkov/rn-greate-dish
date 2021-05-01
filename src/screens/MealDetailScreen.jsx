// @ts-nocheck
import React, { useEffect, useCallback } from 'react';
import { View, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavoriteAC } from '../store/reducers/mealsReducer';
import TitleText from '../components/Text/TitleText';
import IconText from '../components/Text/IconText';
import BodyText from '../components/Text/IconText';
import Card from '../components/Card';
import CustomHeaderButton from '../components/CustomHeaderButton';

const MealDetailScreen = ({ navigation }) => {
  const meals = useSelector((state) => state.meals.all);
  const mealId = navigation.getParam('mealId');
  const { title, imageUrl, duration, complexity, affordability, ingredients, steps } = meals.find(
    ({ id }) => id === mealId
  );
  const dispatch = useDispatch();
  const cb = () => dispatch(toggleFavoriteAC(mealId));
  const toggleFavorite = useCallback(cb, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({ toggleFavorite });
  }, [toggleFavorite]);

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
      <Item
        title='Favorite'
        iconName={navigation.getParam('isFavorite') ? 'heart' : 'heart-outline'}
        onPress={navigation.getParam('toggleFavorite')}
      />
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
