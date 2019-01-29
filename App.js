import React from 'react'
import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import { purple, white } from './colors'

function AndreStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

function Home ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Text>To Dashboard</Text>
      </TouchableOpacity>
    </View>
  )
}

function Dashboard () {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  )
}

const routeConfigs = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Dashboard',
    }
  },
}

const Stacks = createStackNavigator(routeConfigs)

const AppContainer = createAppContainer(Stacks)

export default class App extends React.Component {
  navigation = () => {
    console.log('navegou...')
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <AndreStatusBar  backgroundColor={purple} barStyle='light-content' />
        <AppContainer />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
