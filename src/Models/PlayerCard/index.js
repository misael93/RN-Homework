import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native';
import mainStyles from '../../Styles/mainStyles';

export default class PlayerCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            player: this.props.player
        };
    }

    render() {

        const navigator = this.props.navigator;

        return (
            <View style={mainStyles.mv5}>
                <TouchableHighlight
                    style={styles.tochableHighlight}
                    onPress={() => {
                        navigator.navigate('Player', {
                            player: this.state.player,
                            title: this.state.player.name
                        })
                    }}>
                    <View style={[mainStyles.container, mainStyles.flexRow, mainStyles.center]}>
                        <Image
                            source={{ uri: this.props.player.img }}
                            style={styles.thumbnail}
                        />
                        <View style={mainStyles.ph10}>
                            <Text style={mainStyles.bigText}>{this.props.player.name}</Text>
                            <Text>{this.props.player.country}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    tochableHighlight: {
        backgroundColor: '#EEE',
        padding: 10,
        marginHorizontal: 10
    },
    thumbnail: {
        width: 75,
        height: 75,
        borderRadius: 100
    }
});