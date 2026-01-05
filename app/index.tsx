import React, { useRef } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'


const SplashScreen = () => {

    const fadeAnim = useRef(new Animated.Value(0)).current
    const scaleAnim = useRef(new Animated.Value(0)).current
    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.iconContainer,
                    { 
                        opacity: fadeAnim,

                    }
                ]}>

                <Text>SplashScreen</Text>
            </Animated.View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4CAF50',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 20,
        letterSpacing: 1
    }
})