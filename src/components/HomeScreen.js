import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../common/Colors';
import { CommonStyles } from '../common/Styles';
import HeaderHome from '../common/Headers/HeaderHome';
import Button from '../common/CommonComponents/Button';

import { openDatabase } from 'react-native-sqlite-storage'
import IconIndex from '../assets/Icons/IconIndex';

let db = openDatabase({ name: 'UserDatabase.db' });

export default HomeScreen = ({ navigation }) => {
  const [userList, setUserList] = useState(null);

  useEffect(() => {
    db.transaction(txn => {
      txn.executeSql('SELECT * FROM table_user', [], (tx, res) => {
        let temp = [];
        for (let i = 0; i < res.rows.length; i++) {
          // console.log(res.rows.item(i));
          temp.push(res.rows.item(i))
        }
        setUserList(temp);
      })
    })
  }, [])
  return (
    <View style={[styles.container, CommonStyles.verticalPadding]}>
      <HeaderHome />
      <View style={{ flex: 1, justifyContent: 'flex-end', width: '100%', paddingHorizontal: RFPercentage(2), paddingVertical: RFPercentage(1.5) }}>
        <FlatList
          data={userList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            console.log(item);
            return (
              <View key={index} style={{ width: '100%', backgroundColor: COLORS.white, marginVertical: RFPercentage(0.5), paddingHorizontal: RFPercentage(2), paddingVertical: RFPercentage(2) }}>
                <Text style={styles.userText}>Name: {item.user_name}</Text>
                <Text style={styles.userText}>Phone: {item.user_contact}</Text>
                <Text style={styles.userText}>Address: {item.user_address}</Text>
                <View style={{ flexDirection: 'row', marginTop: RFPercentage(1), flex: 1, backgroundColor: COLORS.grey, justifyContent: 'space-around', }}>
                  <TouchableOpacity>
                    <Image source={IconIndex.editPencil} style={{ height: RFPercentage(3), width: RFPercentage(3) }} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={IconIndex.filledBin} style={{ height: RFPercentage(3), width: RFPercentage(3) }} />
                  </TouchableOpacity>
                </View>
              </View>
            )
          }}
        />
      </View>
      <View style={{ width: '100%', paddingHorizontal: RFPercentage(5) }}>
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
  },
  userText: {
    fontSize: RFPercentage(2.5),
  }
})
