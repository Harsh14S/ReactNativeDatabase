import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../common/Colors';
import { CommonStyles } from '../common/Styles';
import Button from '../common/CommonComponents/Button';
import { openDatabase } from 'react-native-sqlite-storage'
import IconIndex from '../assets/Icons/IconIndex';
import { useIsFocused } from '@react-navigation/native';
import HeaderUserDataListing from '../common/Headers/HeaderUserDataListing';

let db = openDatabase({ name: 'UserDatabase.db' });

export default UserDataListing = ({ navigation }) => {
  const [userList, setUserList] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    getUserData();
  }, [])
  useEffect(() => {
    getUserData();
    // deleteUser()
  }, [isFocused])

  const getUserData = () => {
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
  }

  const deleteUser = (userID) => {
    db.transaction(txn => {
      txn.executeSql(
        'DELETE FROM  table_user where user_id=?', [userID], (tx, res) => {
          getUserData();
        })
    })
  }

  return (
    <View style={[styles.container, CommonStyles.verticalPadding]}>
      <HeaderUserDataListing />
      <View style={{ flex: 1, justifyContent: 'flex-end', width: '100%', paddingHorizontal: RFPercentage(2), paddingVertical: RFPercentage(1.5) }}>
        <FlatList
          data={userList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            // console.log(item);
            return (
              <View key={index} style={{ width: '100%', backgroundColor: COLORS.white, marginVertical: RFPercentage(0.5), paddingHorizontal: RFPercentage(2), paddingVertical: RFPercentage(2) }}>
                <Text style={styles.userText}>Name: {item.user_name}</Text>
                <Text style={styles.userText}>Phone: {item.user_contact}</Text>
                <Text style={styles.userText}>Address: {item.user_address}</Text>
                <View style={{ flexDirection: 'row', marginTop: RFPercentage(1.5), flex: 1, justifyContent: 'space-around', }}>
                  <TouchableOpacity onPress={() => {
                    navigation.navigate('updateUser', {
                      data: {
                        id: item.user_id,
                        name: item.user_name,
                        phone: item.user_contact,
                        address: item.user_address,
                      }
                    })
                  }}>
                    <Image source={IconIndex.editPencil} style={{ height: RFPercentage(3), width: RFPercentage(3) }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    deleteUser(item.user_id);
                  }}>
                    <Image source={IconIndex.filledBin} style={{ height: RFPercentage(3), width: RFPercentage(3), tintColor: COLORS.redColor }} />
                  </TouchableOpacity>
                </View>
              </View>
            )
          }}
        />
      </View>
      <View style={{ width: '100%', paddingHorizontal: RFPercentage(5), marginBottom: RFPercentage(1) }}>
        <Button title={'Add New User'} onPress={() => navigation.navigate('addNewUser')} />
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
