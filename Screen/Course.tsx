import { color } from "@rneui/base";
import { Component } from "react";
import {  FlatList, View, StyleSheet } from "react-native";
import {Text, Appbar, Card, Provider } from "react-native-paper";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from "react-native-vector-icons/Feather";
import Icon3 from "react-native-vector-icons/FontAwesome";

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
export default class GetCourse extends Component<[], { dataSource: any }>{
    constructor(props: any) {
        super(props);
        this.state = {
            dataSource: []
        };
    }
    async componentDidMount() {
        fetch('https://8161-109-107-228-123.eu.ngrok.io/api/course')
            .then(response => response.json())
            .then((responseJson) => this.setState({ dataSource: responseJson }))
            .catch(err => console.log(err)) //to catch err if any
    }
    render() {
        return (
            <Provider>
                
              
                  <View style={{backgroundColor:'white'}}>
                  <FlatList  data={this.state.dataSource} renderItem={({ item }) =>

                <Card style={styles.cardInner}>
                <Card.Actions>
                    <Card.Content>
                        <Card.Cover source={require('../assets/img/IOT.jpeg')} style={{ width: 340, alignSelf: 'center', height: 200 }} />
                        <Text style={{position:'absolute',top:22,left:22,backgroundColor:'#00ADEE',color:'white',width:74,borderWidth: 1,borderRadius: 8,}}> Best Seller </Text>
                        <Text>{'\n'}</Text>
                        <Text variant="bodyMedium" style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
                        <Text>{'\n'}</Text>
                        <Text variant="bodyMedium" style={{ fontSize: 14 }}><Icon name="calendar" color={'#F29D26'} size={20} />  ({item.dateFrom}) - ({item.dateTo})</Text>
                        <Text>{'\n'}</Text>
                        <HR />
                        <Text>{'\n'}</Text>
                        <Text variant="bodyMedium" style={{ fontSize: 14 }}><Icon name="linechart" color={'#F29D26'} size={20} /> {item.mark}</Text>
                        <Text>{'\n'}</Text>
                        <Text variant="bodyMedium" style={{ fontSize: 14 }}><Icon2 name="user" color={'#F29D26'} size={20} /> ID: {item.courseId}</Text>
                        <Text>{'\n'}</Text>
                        <Text variant="bodyMedium" style={{ fontSize: 14,alignSelf:'center' }}><Icon2 name="facebook" color={'#00ADEE'} size={20} />        <Icon3 name="whatsapp" color={'#00ADEE'} size={20} />        <Icon2 name="twitter" color={'#00ADEE'} size={20} />        <Icon3 name="envelope-o" color={'#00ADEE'} size={20} /></Text>
                        <Text>{'\n'}</Text>
                    </Card.Content>
                    </Card.Actions>

                </Card>}>
            </FlatList>

                 </View>

            </Provider>
        )
    }
    
}
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