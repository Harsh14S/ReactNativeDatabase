import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CommonStyles } from '../Styles';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../Colors';

export default HeaderHome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.green,
    paddingVertical: RFPercentage(0.5)
  },
  text: {
    fontSize: RFPercentage(4),
    fontWeight: '700',
    color: COLORS.white,
  },
})

