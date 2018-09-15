import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
import { Image } from 'react-native'; 
import { ImageBackground } from 'react-native'; 

class BackgroundImage extends Component {

    render() {
        return (
            <ImageBackground
                source={require('./res/bg.jpg')}
                style={styles.backgroundImage}
            >
                {this.props.children}
            </ImageBackground>
        )
    }
}

export default class ButtonBasics extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {
        return (
            <BackgroundImage>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={{ width: 300, height: 150,}}
                            source={require('./res/logo.png')}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={this._onPressButton}
                            title="New Photo"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={this._onPressButton}
                            title="Tex Files Manager"
                            color="#841584"
                        />
                    </View>
                    <View style={styles.alternativeLayoutButtonContainer}>
                        <Button
                            onPress={this._onPressButton}
                            title="About"
                        />
                        <Button
                            onPress={this._onPressButton}
                            title="Exit"
                            color="#841584"
                        />
                    </View>
                </View>
            </BackgroundImage>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});