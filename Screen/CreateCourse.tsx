import {TextInput, Alert, Button, ScrollView, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useState } from "react";
import { Appbar, Provider } from "react-native-paper";
const CreateCourse=()=>{

  const [courseName,setCourseName]=useState('');
  const [status,setCourseStatus]=useState('');
  const [startDate,setStartDate]=useState('');
  const [endDate,setEndDate]=useState('');
  const [coursemark,setCourseMark]=useState('');
  const CreateCourses=async()=>{
    axios.post('https://8161-109-107-228-123.eu.ngrok.io/api/course',{
      "name":courseName,
      "status":status,
      "dateFrom":startDate,
      "dateTo":endDate,
      "mark":parseInt(coursemark)
    },{
      "headers":{
        'Content-Type':'application/json'
      }})
    .then(function(res){
      Alert.alert('Course Created Successfully');
    }).catch(function(err) {
      Alert.alert(err.message);
    })
  }
 
    return(
    <ScrollView>
      <Provider>

      <View style={styles.mainBox}>
      <HR></HR>
        <Text style={{fontSize:20,textAlign:'center'}}>Create Course</Text>
        <HR></HR>
        <Text>{'\n'}</Text>
        <Text style={styles.lbl}>Course Name</Text>
        <TextInput style={styles2.TxtInput}
        onChangeText={courseName=>setCourseName(courseName)}
        defaultValue={courseName}
        placeholder="Enter Course Name"
        />
         <Text style={styles.lbl}>Course Status</Text>
        <TextInput style={styles2.TxtInput}
        onChangeText={status=>setCourseStatus(status)}
        defaultValue={status}
        placeholder="Enter Status"
        />
        <Text style={styles.lbl}>Course Start Date</Text>
        <TextInput style={styles2.TxtInput}
        onChangeText={startDate=>setStartDate(startDate)}
        defaultValue={startDate}
        placeholder="Enter Start Date"
        />
        <Text style={styles.lbl}>Course End Date</Text>
        <TextInput style={styles2.TxtInput}
        onChangeText={endDate=>setEndDate(endDate)}
        defaultValue={startDate}
        placeholder="Enter End Date"
        />
         <Text style={styles.lbl}>Course Mark</Text>
        <TextInput style={styles2.TxtInput}
        onChangeText={coursemark=>setCourseMark(coursemark)}
        defaultValue={coursemark}
        placeholder="Enter course mark"
        keyboardType='numeric'
        dataDetectorTypes={"phoneNumber"}
        />
        <HR/>
        <Text>{'\n'}</Text>
        <Button title="Save" color={"green"} onPress={CreateCourses}></Button>

      </View>
      </Provider>
    </ScrollView>
    );
  }
  export default CreateCourse;

  const styles=StyleSheet.create({
    mainBox:{
      textAlign:'center',
      margin:15,
      justifyContent:'space-between'
    },
    btn:{
      marginTop:0,

    },
    lbl:{
      marginTop:10,
      marginBottom:5,
      
    },
    inputTxt:{
      height:45,
      marginBottom:15
    }
  })
  const styles2 = StyleSheet.create({
    logo: {
        width: 300,
        height: 80,
        resizeMode: 'contain',
        position: 'relative',
        left: 60,
        top: 10,
        marginBottom: 20
    }
    , TxtInput: {
        height: 50,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderRadius: 18,
        color: 'black',
        borderColor: '#c0c0c0',
        paddingLeft: 20


    },
    register: {
        position: 'relative',
        top: 40,
        left: 45,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#212529',

    },
    login: {
        fontSize: 20,
        fontWeight: 'bold',
        position: 'relative',
        left: '43%',
        color: 'white',
        top: 10

    },
    button: {
        backgroundColor: '#00ADEE',
        borderRadius: 20,
        color: 'black',
        height: 50,
        margin: 10
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
