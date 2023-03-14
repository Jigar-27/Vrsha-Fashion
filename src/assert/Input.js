import React, { useState }  from 'react';
import { View, Text, StyleSheet, TextInput, error } from 'react-native';
import color from './colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Input = ({
    lable,
    iconname,
    error,
    password,
    onFocuse=()=>{},
    ...props
    }) => {

    const [isFocuse,setisFocuse] = React.useState(false);
    const [hidepassword,sethidepassword] = React.useState(password);
    
    return(
      <View style={{marginBottom:20}}>
        <Text style={style.lable}>{lable}</Text>
        <View 
          style={[
            style.inputcontainer,
            {
              borderColor:error 
                ?color.red 
                :isFocuse
                ?color.darkblue
                :color.light 
            }
            ]}>
            <Icon 
            name={iconname} 
            style={{fontSize:22,color:color.darkblue,marginRight:10}} 
            />
            <TextInput
              secureTextEntry={hidepassword}
              autoCorrect={false} 
              style={{color:color.darkblue,flex:1}}
              onFocus={()=>{
                onFocuse();
                setisFocuse(true);
              }} 
              onBlurs={()=>{
                setisFocuse(false);
             }}
              {...props}
            />
            {password && 
              (
              <Icon 
              onPress={()=> sethidepassword(!hidepassword)}
              style={{fontSize:22,color:color.darkblue}} 
              name={hidepassword ?'eye-outline' :'eye-off-outline'} />
              )}
           
        </View>
        {error &&
        (
          <Text style={{color:color.red,fontSize:12,marginTop:7}}>
            {error}
          </Text>
        )}
      </View>
    );
};

const style = StyleSheet.create({lable: {
    marginVertical:5,
    color:color.grey,
    fontSize:14,
    },
    inputcontainer:{
        height:55,
        backgroundcolor:color.light,
        flexDirection:'row',
        paddingHorizontal:15,
        borderWidth:0.5,
        alignItems:'center',
    },
    });

export default Input;