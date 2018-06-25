import React from 'react';
import { SafeAreaView } from 'react-navigation';
import styles from '../styles'

import { 
  Text, 
  View
} from 'react-native';

class Home extends React.Component {
  state = {}

  componentWillMount() {}

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <Text>Home</Text>
     </SafeAreaView>
    )
  }
}

export default Home;