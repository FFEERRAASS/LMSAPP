// import { Button, Image, Text, View } from "react-native";

// function HomeScreen({navigation}:any)
// {
//     return(
//         <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//             <Image source={require('../assets/img/mario.png')} style={{width:250,height:350}}/>
//             <Text style={{fontSize:20}}>Home Screen</Text>
//             <Text>{'\n'}</Text>

//             <Text>{'\n'}</Text>

//             <Button title="Go to Details" onPress={()=>navigation.navigate('Details')} /> 



//         </View>
//     );
// }
// export default HomeScreen;
import { color } from "@rneui/base/dist/helpers";
import { Image } from "@rneui/themed/dist/Image";
import React from "react";
import { Alert, Linking, SafeAreaView, ScrollView, ScrollViewComponent, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, IconButton, Text } from 'react-native-paper';
import Icon from "react-native-vector-icons/AntDesign";

const MyComponent = () => (
    <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
    />
);
const youtube = () => {
    Linking.openURL('https://www.youtube.com/watch?v=xadTsO9tU9s');
};
const Home = ({ navigation }: any) => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View >
                <Card style={styles.cards}>
                    <Card.Content>
                        <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>The Learning Hub</Text>
                        <Text>{'\n'}</Text>

                        <Text style={styles.fontS} variant="bodyMedium">We help you to achieve your business outcomes and stay competitive by offering engaging, on-demand & e-learning solutions.</Text>
                        <Text>{'\n'}</Text>
                        <Text variant="bodyMedium">With our integrated learning solutions and wide range of service modalities, we equip our strategic partners with the tools required to achieve their visionary outcomes going through a tailored experience.</Text>

                    </Card.Content>
                    <Text>{'\n'}</Text>

                    <Card.Cover source={require('../assets/img/feature-image.png')} style={{ width: 320, alignSelf: 'center', backgroundColor: 'null' }} />
                    <Text>{'\n'}</Text>
                    <Button textColor="white" style={{ backgroundColor: '#00ADEE', width: 150 }} onPress={() => navigation.navigate('Courses')}>Discover Products</Button>
                    <Button textColor="white" style={{ backgroundColor: '#00ADEE', width: 150, position: 'absolute', right: 1, top: 543 }} onPress={youtube}><Icon name="playcircleo" color={'white'} size={18} /> Watch Video</Button>
                    <Text>{'\n'}</Text>

                </Card>
            </View>
            <View >
                <Card style={[styles.cards, { backgroundColor: '#F4FCFF' }]}>
                    <Card.Content>
                    <Text variant="bodyMedium" style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 18 }}>What we do?</Text>
                    <Text>{'\n'}</Text>

                        <Text variant="bodyMedium" style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 16 }}>Products</Text>
                        <Text>{'\n'}</Text>

                        <Card.Cover source={require('../assets/img/Product.png')} style={{ width: 54, alignSelf: 'center', height: 53 }} />
                        <Text>{'\n'}</Text>

                        <Text variant="bodyMedium" style={{ alignSelf: 'center', fontSize: 14 }}>We offer a range of digital solutions to facilitate the educational process and improve your work.</Text>

                        <Text>{'\n'}</Text>
                        <Text variant="bodyMedium" style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 16 }}>Courses</Text>
                        <Text>{'\n'}</Text>

                        <Card.Cover source={require('../assets/img/Courses.png')} style={{ width: 54, alignSelf: 'center', height: 53 }} />
                        <Text>{'\n'}</Text>

                        <Text variant="bodyMedium" style={{ alignSelf: 'center', fontSize: 14 }}>Provides Access to a wide range of Courses Across Various Technologies. The contents are continuously updated by certified experts in line with the related certification body and explained in the most simplest forms.</Text>

                        <Text>{'\n'}</Text>
                        <Text variant="bodyMedium" style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 16 }}>Talent Hub</Text>
                        <Text>{'\n'}</Text>

                        <Card.Cover source={require('../assets/img/Talent-Hub-2.png')} style={{ width: 54, alignSelf: 'center', height: 53 }} />
                        <Text>{'\n'}</Text>

                        <Text variant="bodyMedium" style={{ alignSelf: 'center', fontSize: 14 }}>Unlock your true potential by joining the Talent Hub platform. You will find jobs, social networking opportunities, and internships.</Text>

                        <Text>{'\n'}</Text>


                    </Card.Content>


                </Card>
            </View>
            <View>
                <Card style={styles.cards}>
                    <Card.Content>
                        <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>About Us</Text>
                        <Text>{'\n'}</Text>

                        <Text style={styles.fontS} variant="bodyMedium">The recent past has opened up a new era for the educational sector thereby needing a complete transformation and provide a unique experience to its various stake holders.

                            The learning Hub with its rich experience on emerging technologies address this need and helps with a complete package of digital transformation solutions to various entities operating in this sector like governmental agencies, institutions- academic and vocational academies and training departments in corporates.

                            These products are enabled with wide range of functions automating each and every service required in the education industry.</Text>


                    </Card.Content>
                    <Text>{'\n'}</Text>

                    <Card.Cover source={require('../assets/img/About-Us-30.png')} style={{ width: 300, height: 265, alignSelf: 'center', backgroundColor: 'null' }} />
                    <Text>{'\n'}</Text>
                    <Button textColor="white" style={{ backgroundColor: '#00ADEE', width: 150 }} onPress={() => Alert.alert('Hey')}>See more</Button>
                    <Text>{'\n'}</Text>

                </Card>
            </View>

            <View >
                <Card style={[styles.cards, { backgroundColor: '#F4FCFF' }]}>
                    <Card.Content>
                        <Text variant="titleLarge" style={{ fontWeight: 'bold', alignSelf: 'center' }}>Our Products</Text>

                        <Card style={styles.cardInner}>
                            <Card.Content>
                                <Text variant="bodyMedium" style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 16 }}>Learning Management System - LMS</Text>
                                <Text>{'\n'}</Text>

                                <Card.Cover source={require('../assets/img/LMS-2.png')} style={{ width: 54, alignSelf: 'center', height: 53 }} />
                                <Text>{'\n'}</Text>

                                <Text variant="bodyMedium" style={{ fontSize: 14 }}>▪ A Comprehensive solution implement digital knowledge and learning for both academic and corporate.</Text>
                                <Text>{'\n'}</Text>

                                <Text variant="bodyMedium" style={{ fontSize: 14 }}>▪ Mobile application & Web-based platform.</Text>
                                <Text>{'\n'}</Text>

                                <Text variant="bodyMedium" style={{ fontSize: 14 }}>▪ Integration with other systems.</Text>
                                <Text>{'\n'}</Text>

                                <Text variant="bodyMedium" style={{ fontSize: 14 }}>▪ User-friendly learning tool.</Text>

                                <Text>{'\n'}</Text>
                            </Card.Content>
                        </Card>

                        <Card style={styles.cardInner}>
                            <Card.Content>
                                <Text variant="bodyMedium" style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 16 }}>Student Information System - SIS</Text>
                                <Text>{'\n'}</Text>

                                <Card.Cover source={require('../assets/img/SIS-2.png')} style={{ width: 54, alignSelf: 'center', height: 53 }} />
                                <Text>{'\n'}</Text>

                                <Text variant="bodyMedium" style={{ fontSize: 14 }}>▪ Central repository to manage all educational needs.</Text>
                                <Text>{'\n'}</Text>

                                <Text variant="bodyMedium" style={{ fontSize: 14 }}>▪ Enable educational institutes maintain student information and automate their operational services.</Text>
                                <Text>{'\n'}</Text>

                                <Text variant="bodyMedium" style={{ fontSize: 14 }}>▪ End-user profiles of the student category.</Text>
                                <Text>{'\n'}</Text>

                                <Text variant="bodyMedium" style={{ fontSize: 14 }}>▪ Mobile application & Web-based platform.</Text>
                                <Text>{'\n'}</Text>
                            </Card.Content>
                        </Card>
                        <Card style={styles.cardInner}>
                            <Card.Content>
                                <Text variant="bodyMedium" style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 16 }}>Learning Experience Platform - LXP</Text>
                                <Text>{'\n'}</Text>

                                <Card.Cover source={require('../assets/img/LXP.png')} style={{ width: 54, alignSelf: 'center', height: 53 }} />
                                <Text>{'\n'}</Text>

                                <Text variant="bodyMedium" style={{ fontSize: 14 }}>▪ A cloud based learning environment to improve employee skills.</Text>
                                <Text>{'\n'}</Text>

                                <Text variant="bodyMedium" style={{ fontSize: 14 }}>▪ Provide AI driven learning experience platform to satisfy the self-directed learning.</Text>
                                <Text>{'\n'}</Text>

           
                                <Text>{'\n'}</Text>
                            </Card.Content>
                        </Card>
                        <Card style={styles.cardInner}>
                            <Card.Content>
                                <Text variant="bodyMedium" style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 16 }}>Learning Experience Platform - LXP</Text>
                                <Text>{'\n'}</Text>

                                <Card.Cover source={require('../assets/img/KMS-1.png')} style={{ width: 54, alignSelf: 'center', height: 53 }} />
                                <Text>{'\n'}</Text>

                                <Text variant="bodyMedium" style={{ fontSize: 14 }}>▪ KMS improve cooperation, understanding and operational alignment.</Text>
                                <Text>{'\n'}</Text>

                                <Text variant="bodyMedium" style={{ fontSize: 14 }}>▪ Enable to focus on the customer base and users to achieve successful use of services and products.</Text>
                                <Text>{'\n'}</Text>
                                <Text>{'\n'}</Text>
                            </Card.Content>
                        </Card>
                    </Card.Content>
                </Card>
            </View>
        </ScrollView>
    );

}
export default Home;

const styles = StyleSheet.create({
    cards: {
        width: 380
        , alignSelf: 'center'
        , padding: 10
        , margin: 2,
        backgroundColor: 'white'
    },
    fontS: {
        fontFamily: 'sans-serif'
    },
    cardInner: {
        margin: 10,
        backgroundColor: 'white'
    }



})