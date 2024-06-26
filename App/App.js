import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
      <Image
        source={require('./assets/profile.png')}
        style={styles.image}
      /> 
      <Text style={styles.welcome}>Welcome back</Text>
        <Image source={require('./assets/search.png')}  style={styles.image1}/>
      </View>
      <Text style={styles.name}>Eric Atsu</Text>
        <Image source={require('./assets/Card.png')}  style={styles.card}/>
      <View style={styles.row1}>
        <View>
          <Image source={require('./assets/send.png')}  style={styles.send}/>
          <Text style={styles.sent}>Sent</Text>
        </View>
        <View>
          <Image source={require('./assets/recieve.png')}  style={styles.send}/>
          <Text style={styles.sent1}>Recieve</Text>
        </View>
        <View>
          <Image source={require('./assets/loan.png')}  style={styles.send}/>
          <Text style={styles.sent}>Loan</Text>
        </View>
        <View>
          <Image source={require('./assets/topUp.png')}  style={styles.send}/>
          <Text style={styles.sent}>TopUp</Text>
        </View>
      </View>
      <View style={styles.transactionmain}>
      <Text style={styles.transaction}>Transaction</Text>
      <Text style={styles.seeall}>See All</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  image: {
    marginTop: 80,
  },
  image1:{
    borderRadius: 80,
    backgroundColor: 'whitesmoke',
    marginTop: 95,
    marginLeft: 170,
  },

  row: {
    flexDirection: 'row',
  },

  row1: {
    flexDirection: 'row',
    marginTop: 44,
    marginLeft: 5,
    justifyContent:'space-evenly',
  },

  welcome: {
    marginTop: 85,
    marginLeft: 40,
    color: 'grey',
    fontSize: 20,
  },
  name: {
    marginLeft: 80,
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: -18,
  },
  card: {
    marginLeft: 35,
    marginTop: 30,
  },
  send:{
    height: 35,
    width: 25,
    borderRadius: 30,
    borderColor: 'black',
    backgroundColor:'whitesmoke',
    padding:30,
  },
  sent:{
    fontWeight:'bold',
    marginTop:20,
    marginLeft: 10,
    fontSize: 20,
  },
  sent1:{
    fontWeight:'bold',
    marginTop:20,
    marginLeft: -7,
    fontSize: 20,
  },
  transactionmain:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop: 40,
  },
  transaction:{
    fontWeight:'bold',
    fontSize: 40,
  },
  seeall:{
    fontWeight:'bold',
    color:'blue',
    fontSize:20,
    marginTop:15,
  },
});
