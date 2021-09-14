import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import QuestionComponent from '../components/QuestionComponent';
import questionData from '../database/questionsData.json'
import images from "../assets/images"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';

const questions = (theQuestion) => {

    const [questions, setQuestions] = useState(questionData[0])
    const [questionIndex, setQuestionIndex] = useState(0)
    
    useEffect(() => {
        //console.log("in the use effect")
        
        setQuestions(questionData[questionIndex])
    },);
    const renderQuestion = () => {
        return(
            <View>
                <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                    <Text style={{color: '#ffff', fontSize:20,opacity:0.6}}>{questionIndex+1}</Text>
                    <Text style={{color: '#ffff', fontSize:20,opacity:0.6}}>/ {questionData.length}</Text>
                </View>
                <Text style={{color:'#ffff', fontSize:30}}>{questions.question}</Text>
            </View>
        )
    }

    const renderOptions = () => {
        return(
            <View>
                {questions.answers.map(option => {
                    {console.log(option)}
                    return(
                        <TouchableOpacity key={option} 
                            style={{borderWidth:3, 
                                    borderColor:'#1E90FF', 
                                    backgroundColor:'#0040AF', 
                                    height:60,
                                    borderRadius:20,
                                    flexDirection:'row',
                                    alignItems:'center',
                                    justifyContent:'space-between',
                                    paddingHorizontal:20,
                                    marginVertical: 10,


                        }}>
                        <Text style={{fontSize:20, color:'#ffff'}}>
                            {option}
                        </Text>
                    </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
    return (
        // <View style={styles.container}>
        //     <QuestionComponent question={questions.question} />
        //     <View style={{flex:2, paddingTop: 10}}>
        //         <Image
        //             source={images[questions.name]}
        //             style={styles.banner}
        //             resizeMode="contain"
        //         />
        //     </View>
        //     <View style={{flex:3}}>
        //         <Text>HEllo</Text>
        //     </View>
        // </View>
        <SafeAreaView style={{flex:1}}>
            <StatusBar barStyle="light-content" backgroundColor={'red'}/>
            <View style={{flex:1, paddingVertical:40, paddingHorizontal:16, position:'relative', backgroundColor:'#252c4a'}}>
                <Image source={require('../assets/change.png')} 
                    style={{width:'100%', height:130, bottom:1, left:0, right:0, position:'absolute', opacity:0.8}} />
                {renderQuestion()}
                {renderOptions()}
            </View>

        </SafeAreaView>
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