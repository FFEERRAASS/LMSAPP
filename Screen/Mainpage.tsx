import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MainPage=({navigation}:any)=>{
    return(
      <View>
        <Text style={{fontSize:30,textAlign:'center',fontWeight:'500'}}>Hello World, LMS APP!</Text>
      <TouchableOpacity style={Styles.buttons} onPress={()=>navigation.navigate('GetCourse')}>

        <Text style={Styles.txt}>Get All Course</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.buttons} onPress={()=>navigation.navigate('CreateCourse')}>

        <Text style={Styles.txt}>Create Course</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.buttons} onPress={()=>navigation.navigate('UpdateCourse')}>

        <Text style={Styles.txt}>Update Course</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.buttons} onPress={()=>navigation.navigate('DeleteCourse')}>

        <Text style={Styles.txt}>Delete Course</Text>
      </TouchableOpacity>
      </View>
    );
  }


  export default MainPage;


  const Styles=StyleSheet.create({
    contaienr:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            padding:16
    },
    buttons:{
        alignItems:'center',
        textAlign:'center',
        backgroundColor:'#dddddd',
        padding:10,
        width:'100%',
        color:'black',
        marginTop:16
    },
    txt:{
        color:'black',
        fontSize:16
    }
  })
