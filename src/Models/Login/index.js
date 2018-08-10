import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import TopBar from '../TopBar';
import mainStyles from '../../Styles/mainStyles';

export default class Login extends Component {

    static navigationOptions = {
        title: 'Login',
    };

    constructor() {

        super();
        this.state = {
            email: '',
            password: '',
            message: ''
        }

    }

    emailChanged = (text) => {
        this.setState({ email: text });
    }

    passwordChanged = (text) => {
        this.setState({ password: text });
    }

    validateLogin() {

        var e = this.state.email.toLowerCase();
        var p = this.state.password;
        if (e == 'h' && p == '1') {
            this.setState({
                email: '',
                password: '',
                message: ''
            });
            this.props.navigation.navigate('PlayerList');
        } else {
            this.setState({ password: '' });
            this.setState({ message: 'Wrong username/password' });
        }

    }

    render() {

        return (
            <View style={[mainStyles.container, mainStyles.background, styles.view, mainStyles.p10]}>
                <TopBar />
                <Text style={[mainStyles.bigText, styles.title]}>My Favorite Players</Text>
                <Text style={[mainStyles.bigText, styles.title]}>Welcome</Text>
                <View style={[mainStyles.card, styles.login]}>
                    <TextInput
                        onChangeText={this.emailChanged}
                        placeholder='Email'
                        value={this.state.email}
                    />
                    <TextInput
                        onChangeText={this.passwordChanged}
                        placeholder='Password'
                        secureTextEntry={true}
                        value={this.state.password}
                    />
                    <Text style={[styles.danger, mainStyles.p10]}>
                        {this.state.message}
                    </Text>
                    <Button
                        title='Login'
                        color='#00529F'
                        onPress={() => this.validateLogin()}
                    ></Button>
                </View>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center'
    },
    login: {
        width: '100%'
    },
    title: {
        color: '#EEE'
    },
    danger: {
        color: 'red'
    },
});