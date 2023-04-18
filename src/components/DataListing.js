import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../common/Colors';
import { CommonStyles } from '../common/Styles';
import HeaderHome from '../common/Headers/HeaderHome';
import Button from '../common/CommonComponents/Button';
import { openDatabase } from 'react-native-sqlite-storage'

let db = openDatabase({ name: 'UserDatabase.db' });

export default DataListing = ({ navigation }) => {
  useEffect(() => {
    db.transaction(txn => {
      txn.executeSql('SELECT * FROM table_user', [], (tx, res) => {
        let temp = [];
        for (let i = 0; i < res.rows.length; i++) {
          console.log(res.rows.item(i));
        }
      })
    })
  }, [])
  return (
    <View style={[styles.container, CommonStyles.verticalPadding]}>
      <HeaderHome />
      <View style={{ flex: 1, justifyContent: 'flex-end', width: '100%', paddingHorizontal: RFPercentage(5) }}>
        <Button title={'Add New User'} onPress={() => navigation.navigate('AddNewUser')} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: COLORS.blue,
  },
  text: {
    fontSize: RFPercentage(5),
    fontWeight: '800',
    color: COLORS.white,
  }
})
