import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardSection from './src/components/CardSection';
import Card from './src/components/Card';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Card>
            <CardSection>
              <Text>Hello!</Text>
            </CardSection>
          </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
