
import React, { Component } from "react";
import { Text , View } from "react-native";
const Information =()=>{
    const name ='Feras';
    const age=22;
  
    return (
      <Text style={{fontSize:40}} >
        hello iam {name} , my age is {age};
      </Text>
    );
  }
  export default Information;
