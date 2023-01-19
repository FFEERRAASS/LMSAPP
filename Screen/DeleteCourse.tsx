import { Alert, FlatList, Button, StyleSheet, Text, View, TextInput } from "react-native";
import axios from "axios";
import React from "react";
import { Appbar, Card, Provider } from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";

const DeleteCourse=()=>{
const[cId,setCourseId]=React.useState('');
const Delete=()=>{
  axios.delete('https://8161-109-107-228-123.eu.ngrok.io/api/course/delete/'+parseInt(cId))
  .then(function(res){
    Alert.alert('Course Delete Successfully');
  }).catch(function(err) {
    Alert.alert(err.message);
  })
  
}
    return(

      <Provider>

      <View style={styles.mainBox}>
        <HR></HR>
        <Text style={{fontSize:20,textAlign:'center'}}>Delete Course</Text>
        <HR></HR>
        <Text>{'\n'}</Text>
        <Text>Course ID</Text>
        <TextInput style={styles.inputtxt}
        placeholder="Enter Course ID"
        defaultValue={cId}
        onChangeText={cId=>setCourseId(cId)}
        />
                <Button title="Save" color={"green"} onPress={Delete}></Button>

      </View>
  </Provider>
    );
  }
  export default DeleteCourse;
  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      padding:16,

    },
   
    inputtxt:{
      
        height: 50,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderRadius: 18,
        color: 'black',
        borderColor: '#c0c0c0',
        paddingLeft: 20

    },
    mainBox:{
      textAlign:'center',
      margin:15,
    }
  })
  const HR = () => {
    return (
        <View
            style={{
                borderBottomColor: '##a7a5a5',
                borderBottomWidth: 1,
                margin: 2,
            }}
        />
    );
};