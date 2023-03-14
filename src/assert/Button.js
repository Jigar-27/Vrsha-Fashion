import React from 'react';
import { TouchableOpacity,Text } from 'react-native';
import color from './colors';

const Button = ({title, onpress = () => {} }) => {
    return(
        <TouchableOpacity 
            activeOpacity={0.7}
            onPress={onpress} 
            style={{
                height:55, 
                width:"100%",
                backgroundColor:color.blue,
                justifyContent:'center',
                alignItems:'center',
                marginVertical:20
            }}>
            <Text style={{color:color.white,fontWeight:'bold',fontSize:18}}>
                {title}
            </Text>
            </TouchableOpacity>
    );
};

export default Button;