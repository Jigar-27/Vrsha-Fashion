import React  from 'react';
import { SafeAreaView, ScrollView, Text, View, Keyboard, Alert  } from 'react-native';
import Input from './assert/Input';
import color from './assert/colors';
import Button from './assert/Button';
import Loader from './assert/Loader';

const Loginscreen = ({navigation}) => {
  const [Inputs,setInputs]=React.useState({
    email:'',
    password:'',
  });
  const [Loading,setLoading]=React.useState(false);
  const [errors,seterrors]=React.useState({})
  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!Inputs.email) {
      handlerror('please enter email', 'email');
      valid = false;
    }
    if (!Inputs.password) {
      handlerror('please enter password', 'password');
      valid = false;
    } 
    if(valid){
      login();
    }
  };
  const handleonchange=(text,input)=>{
    setInputs((prevState)=>({...prevState,[input]:text}));
  };
  const login = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      try {
        axios({
          'method':'GET',
          'url':'http://192.168.56.1/jigar/select.php',
          
          'params': {
              'email' : Inputs.email,
              'password': Inputs.password,
          },
      })
          .then((response) => {
            console.log('response:', response.data)
          }).catch((error) => {
            console.log('error:', error)
          })
          navigation.navigate('Home');
  } catch (error) {
    Alert.alert("error", "somthing went wrong")
  }
}, 3000)
  };
  const handlerror=(errormessage,input)=>{
    seterrors((prevState)=>({...prevState,[input]:errormessage}));
  };
    return(
      <SafeAreaView style={{backgroundColor:color.white,flex:1}}>
        <Loader visible={Loading} />
        <ScrollView contentContainerStyle=
        {{paddingTop:50,
          paddingHorizontal:20,
        }}>
            <Text style={{color:color.black,fontSize:40,fontWeight:'bold',}}>Login</Text>
            <View style={{marginVertical:20}}>
                <Input 
                  placeholder="Enter your Email Address" 
                  iconname="email-outline" 
                  lable="Email"
                  error={errors.email}
                  onFocuse={()=>{
                    handlerror(null,'email');
                  }}
                  onChangeText={text=>handleonchange(text,'email')}
                />
                
                <Input 
                  placeholder="Enter your Password" 
                  iconname="lock-outline" 
                  lable="Password"
                  password
                  error={errors.password}
                  onFocuse={()=>{
                    handlerror(null,'password');
                  }}
                  onChangeText={text=>handleonchange(text,'password')}
                />
                <Button title="Login" onpress={validate} />
                <Text 
                  onPress={()=> navigation.navigate("Registration")}
                  style={{
                    color:color.black,
                    textAlign:'center',
                    fontSize:16,
                    fontWeight:'bold',
                  }}>
                    Don't have an accont? Register
                </Text>
            </View>
        </ScrollView>
      </SafeAreaView>
    );
};

export default Loginscreen;