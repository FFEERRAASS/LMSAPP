import React from "react";
import { Button, Image, Text, View } from "react-native";



function SettingScreen({navigation}:any){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/img/mario.png')} style={{width:250,height:350}}/>
            <Text style={{fontSize:20}}>Setting Screen</Text>
            <Text>{'\n'}</Text>

            <Button title="Go to Login" onPress={()=>navigation.navigate('Login')} /> 
            <Text>{'\n'}</Text>

            </View>
    );
    }
    export default SettingScreen;