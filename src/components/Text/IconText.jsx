import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BodyText } from '../../components';
import { Ionicons } from '@expo/vector-icons';

const IconText = ({ children, style, dataText, dataIcon }) => {
  return (
    <View style={[styles.container, style]}>
      <Ionicons style={styles.icon} size={16} {...dataIcon} />
      <BodyText style={styles.text} {...dataText}>
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
