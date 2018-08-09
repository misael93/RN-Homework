import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView, StyleSheet } from 'react-native';
import mainStyles from '../../Styles/mainStyles';

export default class Login extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title')
        };
    };

    constructor() {
        super();
    }

    render() {

        const { navigation } = this.props;
        const player = navigation.getParam('player');

        const dimensions = Dimensions.get('window');
        const imgH = Math.round(dimensions.width * 9 / 16);
        const imgW = dimensions.width - 24;

        return (
            <View style={styles.view}>
                <ScrollView>
                    <View style={styles.imgBorder}>
                        <Image
                            source={{ uri: player.img }}
                            style={{ height: imgH, width: imgW }}
                        />
                    </View>
                    <View style={[mainStyles.container, mainStyles.card]}>
                        <Text>
                            <Text style={styles.property}>Team: </Text>
                            {player.team}
                        </Text>
                        <Text>
                            <Text style={styles.property}>Country: </Text>
                            {player.country}
                        </Text>
                        <Text>
                            <Text style={styles.property}>Age: </Text>
                            {player.age}
                        </Text>
                        <Text>
                            <Text style={styles.property}>Biggest achievment: </Text>
                            {player.biggestAchievment}
                        </Text>
                        <Text>
                            <Text style={styles.property}>Bio: </Text>
                            {player.bio}
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    view: {
        padding: 10,
        backgroundColor: '#444',
        height: '100%'
    },
    imgBorder: {
        borderWidth: 2,
        borderColor: '#FFF'
    },
    leftAlign: {
        alignItems: 'flex-start'
    },
    property: {
        fontWeight: 'bold',
        fontSize: 15
    }
});