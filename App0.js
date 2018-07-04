import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, StatusBar, Text, Button,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window')

export default class mainScene extends Component {

  constructor(){
    super();
     this.state = { text: 'Useless Placeholder' };
  }

    header(){
        return(
            <View style={styles.header}>
                <Text style={{fontSize: 28, textAlign: 'center', color: 'white'}}>Voinext Free Call</Text>
            </View>
        );
    }

    typeBox(){
        return(
            <View style={styles.box}>
    /*        <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
*/
            </View>
        );
    }

    keyboard(){
        return(
            <View style={styles.keyboard}>
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.3)' style={styles.button} >
                    <View style={{  justifyContent:'center'}}>
                        <Text style={styles.buttonText}>1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.3)' style={styles.button}>
                    <View style={{ justifyContent:'center'}}>
                        <Text style={styles.buttonText}>2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.3)' style={styles.button}>
                    <View style={{ justifyContent:'center'}}>
                        <Text style={styles.buttonText}>3</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    keyboardTwo(){
        return(
            <View style={styles.keyboard}>
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.3)' style={styles.button} >
                    <View style={{  justifyContent:'center'}}>
                        <Text style={styles.buttonText}>4</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.3)' style={styles.button}>
                    <View style={{ justifyContent:'center'}}>
                        <Text style={styles.buttonText}>5</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.3)' style={styles.button}>
                    <View style={{ justifyContent:'center'}}>
                        <Text style={styles.buttonText}>6</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    keyboardThree(){
        return(
            <View style={styles.keyboard}>
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.3)' style={styles.button} >
                    <View style={{  justifyContent:'center'}}>
                        <Text style={styles.buttonText}>7</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.001)' style={styles.button}>
                    <View style={{ justifyContent:'center'}}>
                        <Text style={styles.buttonText}>8</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.001)' style={styles.button}>
                    <View style={{ justifyContent:'center'}}>
                        <Text style={styles.buttonText}>9</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    keyboardFour(){
        return(
            <View style={styles.keyboard}>
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.3)' style={styles.button} >
                    <View style={{  justifyContent:'center'}}>
                        <Text style={styles.buttonText}>*</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.001)' style={styles.button}>
                    <View style={{ justifyContent:'center'}}>
                        <Text style={styles.buttonText}>0</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.001)' style={styles.button}>
                    <View style={{ justifyContent:'center'}}>
                        <Text style={styles.buttonText}>#</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    callBox(){
        return(
            <View style={styles.call}>
            <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.001)' style={styles.circle}>
                <View style={{ justifyContent:'center'}}>
                     <Icon name="phone" color='white' size={44}/>
                </View>
            </TouchableOpacity>
            </View>
        );
    }
    render() {
        return (
            <View style={ styles.container }>
                <StatusBar backgroundColor="white" barStyle="default" />
                {this.header()}
                {this.typeBox()}
                {this.keyboard()}
                {this.keyboardTwo()}
                {this.keyboardThree()}
                {this.keyboardFour()}
                {this.callBox()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
    },
    header:{
        flex: 1,
        justifyContent: 'center',
        marginTop:20,
        flexDirection:'row',
        backgroundColor:'green',
        height: height*0.25,
        alignItems:'center',
        borderBottomWidth: 2,
        borderColor: 'lightgrey',
    },
    keyboard:{
        width:width,
        height: height*0.5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    box:{
        width:width,
        height: height*0.2,
      //  paddingLeft: 20,
      backgroundColor:'lightgreen'

    },
    key:{
      fontSize: 20,
      fontWeight: '200',
      fontFamily: 'Arial Rounded MT Bold',
      textAlign: 'left',
      color: 'black',
    },
    button:{
  //      padding:10,
        alignItems:'center',
        borderBottomWidth: 5,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: 'lightgrey',
        borderBottomColor: 'green',
        width: width / 3,
        height:75, ////should try make these scalable <--
        borderRadius: 5,

    },
    buttonText:{
        fontSize: 35,
        fontWeight: '200',
        fontFamily: 'Arial Rounded MT Bold',
        textAlign: 'center',
        color: 'black',
        paddingTop: 10,
    },
    call:{
        paddingTop:20,
        alignItems:'center',
        width:width,
        height: height*0.2,
    },
    circle:{

        alignItems:'center',
        backgroundColor: 'lightgreen',
        borderBottomColor: 'lightgrey',
        //should try make these scalable <--
        width: 75,
        height:75,
        borderRadius: 75,

    },

});
