import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Keyboard, Alert } from 'react-native';
import axios from 'axios';
import Input from './assert/Input';
import color from './assert/colors';
import Button from './assert/Button';
import Loader from './assert/Loader';

const Registrationscreen = ({ navigation }) => {
  const [Inputs, setInputs] = React.useState({
    name: 'jigar',
    phonenumber: '1234567890',
    email: '27jigarjoshi@gmail.com',
    password: '123456',
  });
  const [Loading, setLoading] = React.useState(false);
  const [errors, seterrors] = React.useState({})
  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!Inputs.email) {
      handlerror('please enter email', 'email');
      valid = false;
    } else if (!Inputs.email.match(/\S+@\S+\.\S+/)) {
      handlerror('please enter valid email', 'email');
      valid = false;
    }
    if (!Inputs.name) {
      handlerror('please enter name', 'name');
      valid = false;
    }
    if (!Inputs.phonenumber) {
      handlerror('please enter phone number', 'phonenumber');
    }
    if (!Inputs.password) {
      handlerror('please enter password', 'password');
      valid = false;
    } else if (!Inputs.password.length > 5) {
      handlerror('Min length of password is 5', 'password');
      valid = false;
    }
    if (valid) {
      register();
    }
  };
  const handleonchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      try {
        
          axios({
            method:'POST',
            url:'http://192.168.56.1/jigar/insert.php',
            data: JSON.stringify({
                name: 'skp',
                phonenumber: '1234567890',
                email: 'a@123.com',
                password: '258369741',
            })
        })
        .then((response) => {
            console.log('response data:', response.data)
          }).catch((error) => {
            console.log('error:', error)
          })
          // console.log(Inputs);
    // navigation.navigate('Login');
  } catch (error) {
    Alert.alert("error", "somthing went wrong")
  }
}, 1)
  };
const handlerror = (errormessage, input) => {
  seterrors((prevState) => ({ ...prevState, [input]: errormessage }));
};
return (
  
  <SafeAreaView style={{ backgroundColor: color.white, flex: 1 }}>
    <Loader visible={Loading} />
    <ScrollView contentContainerStyle=
      {{
        paddingTop: 50,
        paddingHorizontal: 20,
      }}>
        
      <Text style={{ color: color.black, fontSize: 40, fontWeight: 'bold', }}>Registration</Text>
      <View style={{ marginVertical: 20 }}>
        <Input
          placeholder="Enter your Email Address"
          iconname="email-outline"
          lable="Email"
          error={errors.email}
          onFocuse={() => {
            handlerror(null, 'email');
          }}
          onChangeText={text => handleonchange(text, 'email')}
        />  
        <Input
          placeholder="Enter your name"
          iconname="account-outline"
          lable="name"
          error={errors.name}
          onFocuse={() => {
            handlerror(null, 'name');
          }}
          onChangeText={text => handleonchange(text, 'name')}
        />
        <Input
          keyboardType="numeric"
          placeholder="Enter your Phone number"
          iconname="phone-outline"
          lable="Phone number"
          error={errors.phonenumber}
          onFocuse={() => {
            handlerror(null, 'phonenumber');
          }}
          onChangeText={text => handleonchange(text, ' phonenumber')}
        />
        <Input
          placeholder="Enter your Password"
          iconname="lock-outline"
          lable="Password"
          password
          error={errors.password}
          onFocuse={() => {
            handlerror(null, 'password');
          }}
          onChangeText={text => handleonchange(text, 'password')}
        />
        <Button title="Register" onpress={validate} />
        <Text
          onPress={()=> navigation.navigate("Login")}
          style={{
            color: color.black,
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Already have an accont? Login
        </Text>
      </View>
    </ScrollView>
  </SafeAreaView>
  
);
};

export default Registrationscreen;