import React from "react";
import { Button, Image, Text, View } from "react-native";


function DetailsScreen({ navigation }: any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../assets/img/mario.png')} style={{ width: 250, height: 350 }} />

            <Text style={{ fontSize: 20 }}>Details Screen</Text>
            <Text>{'\n'}</Text>

            <Text>{'\n'}</Text>
            {/* <Button title="Gotohome" onPress={()=>navigation.navigate('Home Page')}/> */}
            <Button title="Go Back" onPress={() => navigation.goBack()} />

        </View>
    );
}

export default DetailsScreen;