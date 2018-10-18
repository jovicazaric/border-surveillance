import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import AppTitleComponent from './components/app-title/app-title';
import BorderCrossingCameraComponent from './components/border-crossing-camera/border-crossing-camera';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={true}>
        <AppTitleComponent />
		<BorderCrossingCameraComponent title="Raca - izlaz iz BiH" imageUrl="http://139.59.212.224/AMSRS_02_GP_RA01/slika.jpg" />
		<BorderCrossingCameraComponent title="Raca - ulaz u BiH" imageUrl="http://139.59.212.224/AMSRS_02_GP_RA02/slika.jpg" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 50,
	marginLeft: 10,
	marginRight: 10,
	flex: 1
  }
});