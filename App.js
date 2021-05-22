import React , {useState} from 'react';
import {
  Text , 
  StyleSheet ,
  View,
  TouchableOpacity ,
  StatusBar ,
} from 'react-native' ;


const App = () =>{

// State
  const [randomColor,setRandomColor] = useState('rgb(20 , 121 ,206)') ; 
  const [anotherVar, setAnother] = useState(true) ;

// Method
  const changeBg = () =>{
    let color = 'rgb(' + 
    Math.floor(Math.random() * 256) + 
    "," +  Math.floor(Math.random() * 256)  + "," + 
    Math.floor(Math.random() * 256) + 
    ')'  ;

    setRandomColor(color) ;
  }

  const changeToBlack = ()=>{
    setRandomColor('black') ;
  }

  return (
    <>
    <StatusBar style = {{backgroundColor :randomColor}} />
      <View style={[styles.container,{backgroundColor:randomColor}]}>
        <TouchableOpacity onPress = {changeBg}>
          <Text style={[styles.text,styles.btn]}>Tap Me</Text>
        </TouchableOpacity>
        <Text> </Text>
        <TouchableOpacity onPress={changeToBlack}>
          <Text style = {[styles.text , styles.btn,{backgroundColor :"teal"}]} >Reset</Text>
        </TouchableOpacity>
      </View>

    </>
  )
}
export default App;


 const styles = StyleSheet.create({
  container : {
    flex:1 ,
    alignItems : "center" ,
    justifyContent : "center" ,
    backgroundColor: ""
  },
  text: {
    fontWeight:"bold" ,
    color:"white" ,
    fontSize : "18px" ,
    textTransform : "Uppercase" ,
  } ,
  btn : {
    width:"150px" ,
    padding: "0.8rem" ,
    borderRadius : "5px" ,
    backgroundColor :"teal" ,
    textAlign : "center"
  }
})
