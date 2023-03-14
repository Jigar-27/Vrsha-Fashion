import  React from 'react';
import { View, StyleSheet, useWindowDimensions, ActivityIndicator, Text } from 'react-native';
import color from './colors';


const Loader = ({visible=false}) => {
    const{height,width}= useWindowDimensions();
    return (
        visible && (
        <View style={[style.container,{height,width}]}>
            <View style={style.Loader}>
                <ActivityIndicator size="large" color={color.darkblue} />
                <Text style={{marginLeft:10,fontSize:16}}>Loading...</Text>
            </View>
        </View>
        ));
        
};
const style = StyleSheet.create({
    container:{
        position:'absolute',
        zIndex:10,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center'
    },
    Loader:{
       height:70,
       backgroundColor:color.white,
       marginHorizontal:50,
       borderRadius:5,
       flexDirection:'row',
       alignItems:'center',
       paddingHorizontal:20, 
    }
});

export default Loader;