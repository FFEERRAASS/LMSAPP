import { Component, ReactNode } from "react";
import { Image, Text, View } from "react-native";

class CustomCard extends Component<any>{
    render() {
        return (
            <View style={{ backgroundColor: '#7E9181' }}>
                <Text style={{ fontSize: 25, position: "absolute", left: 140, top: 50, color: "black" }}>{this.props.title}</Text>
                <Text style={{ fontSize: 15, position: "absolute", left: 190, top: 90, fontStyle: "italic" }}>{this.props.major}</Text>
                <Image source={this.props.url} style={{ width: 120, height: 120, top: 2, borderWidth: 2, borderColor: 'black', borderRadius: 20, margin: 10 }}></Image>
            </View>
        )
    }
}
export default CustomCard;
// import React from "react";
// import { Component, ReactNode } from "react";
// import { Button, Image, Text, View } from "react-native";

// class CustomCard extends Component <any,any>{
//     constructor(props:any){
//         super(props)
//         this.state={isHidden:false}
//     }
//     showHideText=()=>{
//         this.setState({isHidden:!this.state.isHidden})
//     }
//     render() {
//         return(
//             <View>
//                 <Image source={this.props.url} style={{width:300,height:300,alignSelf:'center'}}/>
//                 {!this.state.isHidden && <Text style={{fontSize:30,alignSelf:'center'}}>{this.props.title}</Text>}

//                 <Button title="Show" onPress={this.showHideText} />
//             </View>
//         );
// }
// }

