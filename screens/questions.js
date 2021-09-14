import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import QuestionComponent from '../components/QuestionComponent';
import questionData from '../database/questionsData.json'
import images from "../assets/images"

const questions = (theQuestion) => {

    const [questions, setQuestions] = useState(questionData[0])
    const [questionIndex, setQuestionIndex] = useState(0)
    
    useEffect(() => {
        console.log("in the use effect")
        
        setQuestions(questionData[questionIndex])
    },);
    {console.log(questions.image)}
    return (
        <View style={styles.container}>
            <QuestionComponent question={questions.question} />
            <View style={{flex:2, paddingTop: 10}}>
                <Image
                    source={images[questions.name]}
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>
            <View style={{flex:3}}>
                <Text>HEllo</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    banner: {
        height: '100%',
        width: '100%',
    },
});

export default questions