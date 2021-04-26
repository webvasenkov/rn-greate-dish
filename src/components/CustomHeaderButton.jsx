import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons';
import { COLORS } from '../constants/constants';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={21}
      color={Platform.OS === 'android' ? COLORS.primary : COLORS.accent}
    />
  );
};

export default CustomHeaderButton;
