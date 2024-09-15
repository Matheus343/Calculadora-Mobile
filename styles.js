import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
    },
    result: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      width: '100%',
      height: 400,
      backgroundColor: '#f5f5f5'
    },
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      minHeight: 85,
      minWidth: 90
    },
    textButton: {
      color: "#5b5b5b",
      fontSize: 25,
    },
    resultText: {
      fontWeight: '100',
      fontSize: 80,
      margin: 10,
      alignSelf: 'flex-end',
      color: '#000',
    },
    historyText: {
      fontSize: 22,
      marginBottom: 0,
      marginRight: 10,
      alignSelf: 'flex-end',
    },
  });

export default styles;