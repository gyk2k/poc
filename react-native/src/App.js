import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet , Button, Alert, ListView } from 'react-native'

const base = 'http://192.168.43.171:8080';

export default class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = {};
	  }
	
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.appHeader}>
        	<Text style={styles.appTitle}>Welcome to Yagna Guided Selling Platform v3</Text>
        </View>
        <View style={styles.body}>
        	<Form/>
        </View>
      </View>
    )
  }
}

export class Form extends Component {
	constructor(props) {
	    super(props);
	    this.state = {};
	  }
	
	render() {
    	if(this.state.data == null){
            return <View>
	            	<TextInput style={styles.textInput} placeholder="Enter Customer Info" onChangeText={(text) => this.setState({customer: text})}/>
	            	<TextInput style={styles.textInput} placeholder="Enter SKU" onChangeText={(text) => this.setState({sku:text})}/>
	            	<Button onPress={this.submit} title="Submit"/>
            	</View>;
    	}

    	return <Data data={this.state.data}/>;
	}
	
	submit = () => {
		  fetch(base+"/quote/data/"+this.state.customer+"/"+this.state.sku)
			 .then((response) => response.json())
			 .then((responseJson) => {
		    	 this.setState({ data: responseJson });
		     });
	  }
}
			    
export class Data extends Component {
	constructor(props) {
	    super(props);
	    this.state = {}
	  }
	
	render(){
		if(this.props.data && this.state.data == null){
			return <View>
			<Text>Dear {this.props.data.customer}, your quote is ready</Text>
			<Text>SKU: {this.props.data.sku}</Text>
			<Text>Quantity: {this.props.data.quantity}</Text>
			<Text>Price: {this.props.data.price}</Text>
			<Button onPress={this.placeOrder} title="Place Order"/>
		</View>
		}
		return <Order data={this.state.data}/>
	}
	
	placeOrder = () => {
		fetch(base+"/quote/order/"+this.props.data.customer+"/"+this.props.data.sku+"/"+this.props.data.quantity+"/"+this.props.data.price)
		 .then((response) => response.json())
		 .then((responseJson) => {
	    	 this.setState({ data: responseJson });
	     });
	}
}

export class Order extends Component {
	constructor(props) {
	    super(props);
	  }
	
	render(){
		if(this.props.data){
			return <View>
			<Text>Thank you {this.props.data.customer}, your order is placed with Order ID: {this.props.data.orderId}</Text>
		</View>
		}
		return <View/>
	}
	
}
			    
const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  appHeader: {
    height:100,
    backgroundColor: '#222',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appBody: {
	    flex: 1,
	  },
  appTitle: {
    fontSize: 16,
    color: 'white'
  },
  textInput: {
	  height: 40, 
	  borderColor: 'gray', 
	  borderWidth: 1
  }
})