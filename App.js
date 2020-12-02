import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function App(props) {



  // Destructuring first parament is state and scnd id function from which we will update
  const [name,setName] = useState("Ayesha"); //default value
  // const [email,setEmail] = useState("ayesha@gmail.com")


  
  useEffect(()=>{
    //  i will run on every render
  })

  // Component did mount
  useEffect(()=>{
    //  i will run only on  first render
  },[])


  useEffect(()=>{
    //  i will run when name will be updated
  },[name])


  // component unmount
  useEffect(()=>{
    // when component will unmount
    return () =>{
      
    }
  })



  // if we have an array
  // const [arr,setArr] = useState(["car","bike"]);



  // if we have an object
  // const [obj, setObj] = useState({
  //   app_name:"chat",
  //   Developer:"Ayesha"
  // })
 


  // Functions
  // it will update state when called
  // const handleClick = () =>{
  //   setName("dani");
  //   setEmail("dani@gmail.com");
  // }
  



//  To set data in object
// const handleClick4 =() =>{
// setObj({
//   app_name:"chatapp",
//   Developer:"Ayesha Ghani"
// })
// }




// to add data in object
// const handleClick4 =() =>{
//   setObj({
//  ...obj,
//  for:"Android"
//   })
//   }


  // To set data in array
// const handleClick3 =() =>{
// setArr([...arr,"bike","truck"]);
// }

// to set data in object
 
  
  return (
    <View style={styles.container}>
<Text>hello</Text>


       <Text>React Hooks</Text>
      <Text>Hello {name}</Text>
  {/* <Text>{email}</Text> */}
  <Button
        title="Update Name"
        onPress={() => setName("Ghani")}
      />
       {/* <Button
        title="Update Email"
        onPress={() => setEmail("Ghani@gmail.com")}
      />
       <Button
        title="Update"
        onPress={handleClick}
      />  */}
 {/* to get object  */}
  {/* <Text>{obj.app_name}</Text>
  <Text>{obj.Developer}</Text>
  <Button
        title="Update"
        onPress={handleClick4}
      />
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

