import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../common/Colors';
import { CommonStyles } from '../common/Styles';
import Button from '../common/CommonComponents/Button';
import HeaderAddNewUser from '../common/Headers/HeaderAddNewUser';
import TextInput from '../common/CommonComponents/TextInput';
import { openDatabase } from 'react-native-sqlite-storage'

let db = openDatabase({ name: 'UserDatabase.db' })

export default AddNewUser = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    db.transaction((txn) => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        (tx, res) => {
          console.log('item:', res);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }, []);


  const saveData = () => {
    if (name !== '' & phone !== '' & address !== '') {
      db.transaction((txn) => {
        txn.executeSql(
          'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
          [name, phone, address],
          (tex, res) => {
            // console.log("Response: ", res);
            if (res.rowsAffected === 1) {
              navigation.goBack();
            } else {
              console.log("Response: ", res);
            }
          }
        )
      })
    }
  }

  return (
    <View style={[styles.container, CommonStyles.verticalPadding]}>
      <HeaderAddNewUser />
      <View style={{ flex: 1, width: '100%', paddingHorizontal: RFPercentage(5) }}>
        <TextInput
          value={name}
          title={"Name"}
          placeholder={"Enter your name"}
          onChangeText={(nameTxt) => setName(nameTxt)}
        />
        <TextInput
          value={phone}
          title={"Phone Number"}
          placeholder={"Enter your Phone Number"}
          onChangeText={(phoneTxt) => setPhone(phoneTxt)}
        />
        <TextInput
          value={address}
          title={"Address"}
          placeholder={"Enter your Address"}
          onChangeText={(addressTxt) => setAddress(addressTxt)}
        />
        {/* <TextInput title={""} placeholder={"Enter your address"} /> */}
        <Button title={'Save User'} onPress={() => {
          saveData();
          setName('')
          setAddress('')
          setPhone('')
        }} buttonStyle={{ marginTop: RFPercentage(2) }} />
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
