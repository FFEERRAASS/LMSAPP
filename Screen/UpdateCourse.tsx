import { Alert, Button, ScrollView, StyleSheet, Text, View , TextInput} from "react-native";
import axios from "axios";
import { useState } from "react";
import { Appbar, Provider } from "react-native-paper";
const UpdateCourse=()=>{

  const[cId,setCourseId]=useState('');
  const [courseName,setCourseName]=useState('');
  const [status,setCourseStatus]=useState('');
  const [startDate,setStartDate]=useState('');
  const [endDate,setEndDate]=useState('');
  const [coursemark,setCourseMark]=useState('');
  const UpdateCourses=async()=>{
    axios.put('https://8161-109-107-228-123.eu.ngrok.io/api/course',{
      "courseId":parseInt(cId),
      "name":courseName,
      "status":status,
      "dateFrom":startDate,
      "dateTo":endDate,
      "mark":parseInt(coursemark)
    })
    .then(function(res){
      Alert.alert('Course Updated Successfully');
    }).catch(function(err) {
      Alert.alert(err.message);
    })
  }
    return(
    <ScrollView>
      <Provider>

      <View style={styles.mainBox}>
      <HR></HR>
        <Text style={{fontSize:20,textAlign:'center'}}>Update Course</Text>
        <HR></HR>
        <Text>{'\n'}</Text>
      <Text style={styles.lbl}>Course ID</Text>
        <TextInput style={styles.inputTxt}
        onChangeText={cId=>setCourseId(cId)}
        defaultValue={cId}
        placeholder="Enter Course ID"
        />
        <Text style={styles.lbl}>Course Name</Text>
        <TextInput style={styles.inputTxt}
        onChangeText={courseName=>setCourseName(courseName)}
        defaultValue={courseName}
        placeholder="Enter Course Name"
        />
         <Text style={styles.lbl}>Course Status</Text>
        <TextInput style={styles.inputTxt}
        onChangeText={status=>setCourseStatus(status)}
        defaultValue={status}
        placeholder="Enter Status"
        />
        <Text style={styles.lbl}>Course Start Date</Text>
        <TextInput style={styles.inputTxt}
        onChangeText={startDate=>setStartDate(startDate)}
        defaultValue={startDate}
        placeholder="Enter Start Date"
        />
        <Text style={styles.lbl}>Course End Date</Text>
        <TextInput style={styles.inputTxt}
        onChangeText={endDate=>setEndDate(endDate)}
        defaultValue={startDate}
        placeholder="Enter End Date"
        />
         <Text style={styles.lbl}>Course Mark</Text>
        <TextInput style={styles.inputTxt}
        onChangeText={coursemark=>setCourseMark(coursemark)}
        defaultValue={coursemark}
        placeholder="Enter course mark"
        keyboardType='numeric'
        dataDetectorTypes={"phoneNumber"}
        />
        <HR/>
        <Text>{'\n'}</Text>
        <Button title="Save" color={"green"} onPress={UpdateCourses}></Button>

      </View>
      </Provider>
    </ScrollView>
    );
  
    return(
      <Text>Hey</Text>
    );
  }
  export default UpdateCourse;
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
      height: 50,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderRadius: 18,
        color: 'black',
        borderColor: '#c0c0c0',
        paddingLeft: 20
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
  