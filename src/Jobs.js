import React from 'react';
import { View, TextInput,Text, StyleSheet, Image } from 'react-native';
import FilterBar from './Filters';
const Jobs = () => {
  return (
    <View>
    <View style={styles.inputContainer}>
      <Image
        source={require('../images/Search.png')} // Replace with your PNG file path
        style={styles.iconStyle}
      />
     
       <TextInput
                placeholder="Search your jobs here"
                style={styles.inputStyle}
              />
            
        
    </View>
    <Text style={styles.textStyle}>
            Job Filters
        </Text>
    <FilterBar/>
    
    <View style={styles.box}>
    
    </View>
    
    </View>
  );
};
const Filters=()=>{
    return(
        <View >
            <View style={styles.filterStyle}>
            <Image
        source={require('../images/location_on.png')} // Replace with your PNG file path
        style={styles.locationStyle}
      />
        <Text>Select Your City</Text>
        <Image
        source={require('../images/arrow_drop_down.png')} // Replace with your PNG file path
        style={styles.locationStyle}
      />
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        display:'flex',
        flexDirection:'row',
       
        alignItems:'center',
        flexWrap:'wrap'
    },
    textStyle:{
        fontWeight:'bold',
        margin:7,
        fontSize:15
    },
    filterStyle:{
        
        height:50,
        width:180,
        borderWidth:2,
        borderColor:'#6ab04c',
        borderRadius:10,
        margin:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'

    },
    inputStyle:{
        width:'80%',
        height:50,
       color:'black',
      // borderWidth:2,
    //    borderColor:'#6ab04c',
       borderRadius:10,
       margin:1,
       textAlign:'center',
    //    backgroundColor:'rgba(44, 227, 179, 0.24)'}
    }
       ,
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7CEC9F',// Light greenish background
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingLeft: 15,
    paddingRight: 10,
    color:'black',
    height: 50,
    margin: 10,
    width:'90%',
  },
  iconStyle: {
    width: 24, // Adjust based on your icon size
    height: 24,
    marginRight: 10,
  },
  locationStyle: {
    width: 20, // Adjust based on your icon size
    height: 24,
    marginRight: 10,
  },
  
});

export default Jobs;
