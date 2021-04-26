import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BodyText from './BodyText';

const IconText = ({ children, style, iconStyle, textStyle, dataText, dataIcon }) => {
  return (
    <View style={[styles.container, style]}>
      <Ionicons style={[styles.icon, iconStyle]} size={16} {...dataIcon} />
      <BodyText style={[styles.text, textStyle]} {...dataText}>
        {children}
      </BodyText>
    </View>
  );
};

export default IconText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  text: {
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
