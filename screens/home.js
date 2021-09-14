import React from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from '../assets/earth.png'; 
import Title from ".././components/Title";


const Home = ({navigation}) => {
    return (
        <View>
            <Title />
            <View style={styles.imageContainer}>
                <Image 
                    source={logo} 
                    style={styles.banner} 
                    resizeMode="contain"
                
            /> 
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("questions")}>
                <Text style={{textAlign: 'center'}}>Lets Start</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        height: 400,
        width: 300
    },
    imageContainer : {
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems: 'center'
    }
});

export default Home