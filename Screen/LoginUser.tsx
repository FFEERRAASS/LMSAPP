import { Icon } from "@rneui/base";
import React, { useState } from "react";
import { Alert, Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";



const Login = ({ navigation }: any) => {

  

    //states
    const [passwordVisable, setPasswordVisable] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //user array
    const usernames = ['feras', "Mutaz", "Ayman", "Ali"];
    const passwords = ['123456', "m123456", "a123456", "l123456"];

  
    const CheckValidation = () => {
    
        if (usernames.indexOf(username) > -1 && passwords.indexOf(password) > -1) {
            let user = usernames.indexOf(username);
            let pass = passwords.indexOf(password);
            if (user == pass) {
                Alert.alert('lOGIN SUCCESSFULLY');
                navigation.navigate("MyPages")
            }
            else {
                Alert.alert('Username or password is incorrect!');
            }
        }
        else {
            Alert.alert('Username or password is incorrect!');
        }

    }

    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <View>
                <Image source={require('../assets/img/img1login.png')} style={styles.logo} />
                <Image source={require('../assets/img/img2loginpeople.png')} style={{ width: 400, height: 300, resizeMode: 'contain', marginBottom: 7 }} />
                <Text>{'\n'}</Text>
            </View>
            <TextInput style={styles.TxtInput}
                placeholder="Username"
                placeholderTextColor={'#646464'}
                onChangeText={username => setUsername(username)}
            />
            <TextInput style={styles.TxtInput}
                placeholder="Password"
                placeholderTextColor={'#646464'}
                onChangeText={password => setPassword(password)} secureTextEntry={true}
            />
            <View style={styles.register}>
                <Text style={{ color: '#00ADEE', left: 226, bottom: 40, fontWeight: '600' }}>Forget Password ? </Text>
            </View>
            <View>
                <Pressable onPress={CheckValidation} style={styles.button}>
                    <Text style={styles.login}>Login</Text>
                </Pressable >
            </View>
            <View>
                <Text style={{ alignSelf: 'flex-start', left: 20 }}>Don't hava an account ?
                    <Text style={{ color: '#00ADEE', fontWeight: 'bold', alignSelf: 'flex-end', right: 105 }}
                        onPress={() => navigation.navigate('Information')}> Register</Text></Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default Login;

/*

<Stack.Screen
         name="Home"
         component={HomeScreen}
         options={{
          headerTitle:(props)=><LogoTitle {...props}/>,
          headerRight:({navigation}:any)=>(
            <Button title="Logout" color="red"
            onPress={()=>navigation.navigate('Login')}
            />
            */