import { StyleSheet, View } from 'react-native';
import Home from './src/views/Home/Home';
import Routes from './src/routes/Routes';

export default function App() {
  return (
    <View style={styles.container} >
      {/* <Home/> */}
      <Routes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212F3C',
  },
});
