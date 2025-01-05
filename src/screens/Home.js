import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView
import Headers from '../components/Header';
import HomePost from '../components/HomePost';

const ElevatedCards = () => {
  return (
    <View>
      <ScrollView horizontal={true} style={styles.horicontainer}>
        <View style={styles.item}>
          <Image
            source={require('../../Images/Homeimages/m1.jpeg')}
            resizeMode="cover"
            style={styles.horiimage}
          />
          <Text style={styles.horitext}>Umar Shahid</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../Images/Homeimages/m2.jpeg')}
            resizeMode="cover"
            style={styles.horiimage}
          />
          <Text style={styles.horitext}>Khalida Farooq</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../Images/Homeimages/m7.jpeg')}
            resizeMode="cover"
            style={styles.horiimage}
          />
          <Text style={styles.horitext}>Aiman Mughal</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../Images/Homeimages/m9.jpeg')}
            resizeMode="cover"
            style={styles.horiimage}
          />
          <Text style={styles.horitext}>Fatima Murtaza</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../Images/Homeimages/m4.jpeg')}
            resizeMode="cover"
            style={styles.horiimage}
          />
          <Text style={styles.horitext}>Zumar Mohib</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../Images/Homeimages/m6.jpeg')}
            resizeMode="cover"
            style={styles.horiimage}
          />
          <Text style={styles.horitext}>Gareeda Faris</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../Images/Homeimages/m3.jpeg')}
            resizeMode="cover"
            style={styles.horiimage}
          />
          <Text style={styles.horitext}>Naemm ul Haq</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Header */}
      <ScrollView style={{ flex: 1 }}>
        <Headers />
        {/* Following Awam */}
        <ElevatedCards />
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
          <HomePost />
          
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  horicontainer: {
    padding: 5,
  },
  item: {
    alignItems: 'center',
    marginRight: 2,
  },
  horiimage: {
    width: 70,
    height: 70,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#BA2F16',
  },
  horitext: {
    marginTop: 5,
    fontSize: 10,
    color: '#000',
  },
  headingtext: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    margin: 5,
  },

  cardElevated: {
    backgroundColor: 'black',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#E333',
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  voice: {
    marginLeft: 2, // Space between search bar and voice icon
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    backgroundColor: '#cdffcd',
    height: 30,
    borderRadius: 20,
    borderColor: '#D9F5C5',
    borderWidth: 2,
  },
  bars: {
    marginStart: 5,
  },
  Lang: {
    backgroundColor: '#D9F5C5',
    height: 15,
    width: 50,
    borderRadius: 30,
    alignContent: 'center',
    marginEnd: 10,
  },
  Langtext: {
    fontSize: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: 'white',
  },
  location: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 5,
    fontSize: 8,
    color: '#6ab04c',
    fontWeight: 'bold',
  },
  searchBar: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginTop: 8,
    marginBottom: 5,
    borderRadius: 10,
    width: 180, // Adjusted width for search input
    paddingHorizontal: 10,
    borderColor: '#65a765',
    borderWidth: 1, // Inner padding
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: 'black',
  },
  searchIcon: {},
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 20,
    height: 20,
    tintColor: '#6ab04c',
    padding: 0,
    margin: 0,
  },
});
export default Home;
