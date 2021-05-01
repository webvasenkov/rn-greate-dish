// @ts-nocheck
import React, { useState, useEffect, useCallback } from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import { COLORS } from '../constants/constants';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';
import { filteredAC } from '../store/reducers/mealsReducer';
import CustomHeaderButton from '../components/CustomHeaderButton';
import TitleText from '../components/Text/TitleText';
import BodyText from '../components/Text/BodyText';

const Label = ({ name, value, onChange }) => (
  <View style={styles.label}>
    <BodyText>{name}</BodyText>
    <Switch value={value} onValueChange={onChange} thumbColor={COLORS.primary} trackColor={{ true: COLORS.accent }} />
  </View>
);

const FilterScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const dispatch = useDispatch();
  const cb = () =>
    dispatch(
      filteredAC({
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree,
      })
    );
  const saveFilters = useCallback(cb, [isGlutenFree, isVegan, isVegetarian, isLactoseFree, dispatch]);
  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.container}>
      <TitleText style={styles.title}>Available filters / restrictions</TitleText>
      <View style={styles.labelContainer}>
        <Label name='Gluten Free' value={isGlutenFree} onChange={() => setIsGlutenFree(!isGlutenFree)} />
        <Label name='Vegan' value={isVegan} onChange={() => setIsVegan(!isVegan)} />
        <Label name='Vegetarian' value={isVegetarian} onChange={() => setIsVegetarian(!isVegetarian)} />
        <Label name='Lactose Free' value={isLactoseFree} onChange={() => setIsLactoseFree(!isLactoseFree)} />
      </View>
    </View>
  );
};

FilterScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title='Menu' iconName='menu-outline' onPress={navigation.toggleDrawer} />
    </HeaderButtons>
  ),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title='Save' iconName='save-outline' onPress={navigation.getParam('save')} />
    </HeaderButtons>
  ),
});

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    textAlign: 'center',
  },
  labelContainer: {
    marginVertical: 25,
  },
  label: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
