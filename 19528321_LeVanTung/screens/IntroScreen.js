import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class IntroScreen extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View>
                <Text> Sig IN </Text>
                <View style={styles.sc2Bottom}>

                    <Text style={styles.txtChonMau}>
                        Chọn một màu bên dưới:
                    </Text>

                    
                    <Button
                        title='Go back'
                        onPress={() => { navigation.goBack() }}

                    >

                    </Button>

                    <Button title="Home " onPress={() => { navigation.navigate('Home') }}>

                    </Button>
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    sc2:{
        flex: 1,
    },
})
