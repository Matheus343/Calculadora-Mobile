import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styles from './styles.js';

export default function App() {

  const buttons = ['AC', 'DEL', '^', '/', '7', '8', '9', '*', '4', '5', '6', '-', '3', '2', '1', '+', '0', '.', '+/-', '=']
  
  const [currentNumber, setCurrentNumber] = useState("")
  const [lastNumber, setLastNumber] = useState("")
  const [overwrite, setOverwrite] = useState(false) // Novo estado para controlar se o próximo input deve sobrescrever

  const handleInput = (buttonPressed) => {
    if (['*', '/', '+', '-', '^'].includes(buttonPressed)) {
      if (overwrite) {
        setOverwrite(false)
      }
      setCurrentNumber(currentNumber + " " + buttonPressed + " ")
      return
    }
    if (buttonPressed === "DEL") {
      setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)))
      return
    }
    if (buttonPressed === ".") {
      if (overwrite) {
        setCurrentNumber(buttonPressed)
        setOverwrite(false)
      } else {
        setCurrentNumber(currentNumber + buttonPressed)
      }
      return
    }
    if (buttonPressed === "+/-") {
      return
    }
    if (buttonPressed === "AC") {
      setLastNumber("")
      setCurrentNumber("")
      setOverwrite(false)
      return
    }
    if (buttonPressed === "=") {
      setLastNumber(currentNumber + " = ")
      calculator()
      setOverwrite(true)
      return
    }
    if (overwrite) {
      setCurrentNumber(buttonPressed)
      setOverwrite(false)
    } else {
      setCurrentNumber(currentNumber + buttonPressed)
    }
  }

  const calculator = () => {
    const splitNumbers = currentNumber.split(" ")
    const operator = splitNumbers[1]
    let result = 0
    switch (operator) {
      case '*':
        result = parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])
        break
      case '/':
        result = parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])
        break
      case '+':
        result = parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])
        break
      case '-':
        result = parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])
        break
      case '^':
        result = Math.pow(parseFloat(splitNumbers[0]), parseFloat(splitNumbers[2]))
        break
    }
    setCurrentNumber(result.toString())
  }

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <TextInput
          style={styles.resultText}
          value={currentNumber}
          editable={false}
        />
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) =>
          <TouchableOpacity key={button} style={styles.button} onPress={() => handleInput(button)}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}


