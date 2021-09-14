import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native';


const QuestionComponent = ({question}) => {
    return (
        <View >
            <Text  style={styles.text}>{question}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
});
export default QuestionComponent