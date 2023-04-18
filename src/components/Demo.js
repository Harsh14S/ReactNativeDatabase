import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../common/Colors';
import { CommonStyles } from '../common/Styles';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default Demo = () => {
  return (
    <View style={[styles.container, CommonStyles.verticalPadding]}>
      <Text style={styles.text}>Demo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: RFPercentage(5),
    fontWeight: '700',
    color: COLORS.black
  }
})

