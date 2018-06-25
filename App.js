import React from 'react';
import styles from './styles'
import { StyleSheet, Text, View } from 'react-native';

import RootNavigator from './navigation/RootNavigation';

export default class App extends React.Component {
  render() {
    return (
        <RootNavigator />
    );
  }
}
