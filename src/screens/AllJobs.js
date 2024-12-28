// // Home.js
// import React from 'react';
// import {TouchableOpacity,StyleSheet,ScrollView, View, Text, Image } from 'react-native';
// import Headers from '../components/Header';
// const Notification=()=>{
//   return(
//     <ScrollView>
//       <View style={styles.div} >
//        <View>
//        <Image
//           source={require('../../Images/Homeimages/m1.jpeg')}
//           resizeMode="cover"
//           style={styles.horiimage}
//         />
//        </View>
//        <View>
//         <Text style={styles.horitext}>Umar Shahid posted a new post</Text>
//         <TouchableOpacity style={styles.btn}>
//           <Text style={styles.BtnText}>View</Text>
//         </TouchableOpacity>
//        </View>
//       <TouchableOpacity>
//         <Text style={styles.NotifiText}>2 min</Text>
//       <Image
//                 source={require('../../assests/icons/delete.png')}
//                 resizeMode="contain"
//                 style={styles.dotsIcon}
//         />
//       </TouchableOpacity>
//       </View>
//       <View style={styles.div} >
//        <View>
//        <Image
//           source={require('../../Images/Homeimages/m2.jpeg')}
//           resizeMode="cover"
//           style={styles.horiimage}
//         />
//        </View>
//        <View>
//         <Text style={styles.horitext}>Khalida Farooq gave feedback</Text>
//         <TouchableOpacity style={styles.btn}>
//           <Text style={styles.BtnText}>View</Text>
//         </TouchableOpacity>
//        </View>
//       <TouchableOpacity>
//       <Text style={styles.NotifiText}>2 min</Text>
//       <Image
//                 source={require('../../assests/icons/delete.png')}
//                 resizeMode="contain"
//                 style={styles.dotsIcon}
//               />
//       </TouchableOpacity>
//       </View>
//       <View style={styles.div} >
//        <View>
//        <Image
//           source={require('../../Images/Homeimages/m3.jpeg')}
//           resizeMode="cover"
//           style={styles.horiimage}
//         />
//        </View>
//        <View>
//         <Text style={styles.horitext}>Naemm ul Haq viewed your profile</Text>
//         <TouchableOpacity style={styles.btn}>
//           <Text style={styles.BtnText}>View</Text>
//         </TouchableOpacity>
//        </View>
//       <TouchableOpacity>
//       <Text style={styles.NotifiText}>2 min</Text>
//       <Image
//                 source={require('../../assests/icons/delete.png')}
//                 resizeMode="contain"
//                 style={styles.dotsIcon}
//               />
//       </TouchableOpacity>
//       </View>
//       <View style={styles.div} >
//        <View>
//        <Image
//           source={require('../../Images/Homeimages/m4.jpeg')}
//           resizeMode="cover"
//           style={styles.horiimage}
//         />
//        </View>
//        <View>
//         <Text style={styles.horitext}>Zumar Mohib Accepted your request</Text>
//         <TouchableOpacity style={styles.btn}>
//           <Text style={styles.BtnText}>View</Text>
//         </TouchableOpacity>
//        </View>
//       <TouchableOpacity>
//       <Text style={styles.NotifiText}>2 min</Text>
//       <Image
//                 source={require('../../assests/icons/delete.png')}
//                 resizeMode="contain"
//                 style={styles.dotsIcon}
//               />
//       </TouchableOpacity>
//       </View>
//       <View style={styles.div}>
       
//        <View>
//        <Image
//           source={require('../../Images/Homeimages/m5.jpeg')}
//           resizeMode="cover"
//           style={styles.horiimage}
//         />
//        </View>
//        <View>
//         <Text style={styles.horitext}>Umar Shahid posted a new post</Text>
//         <TouchableOpacity style={styles.btn}>
//           <Text style={styles.BtnText}>View</Text>
//         </TouchableOpacity>
//        </View>
//       <TouchableOpacity>
//       <Text style={styles.NotifiText}>2 min</Text>
//       <Image
//                 source={require('../../assests/icons/delete.png')}
//                 resizeMode="contain"
//                 style={styles.dotsIcon}
//               />
//       </TouchableOpacity>
//       </View>
//       <View style={styles.div} >
//        <View>
//        <Image
//           source={require('../../Images/Homeimages/m6.jpeg')}
//           resizeMode="cover"
//           style={styles.horiimage}
//         />
//        </View>
//        <View>
//         <Text style={styles.horitext}>Umar Shahid posted a new post</Text>
//         <TouchableOpacity style={styles.btn}>
//           <Text style={styles.BtnText}>View</Text>
//         </TouchableOpacity>
//        </View>
//       <TouchableOpacity>
//       <Text style={styles.NotifiText}>2 min</Text>
//       <Image
//                 source={require('../../assests/icons/delete.png')}
//                 resizeMode="contain"
//                 style={styles.dotsIcon}
//               />
//       </TouchableOpacity>
//       </View>
//       <View style={styles.div} >
//        <View>
//        <Image
//           source={require('../../Images/Homeimages/m7.jpeg')}
//           resizeMode="cover"
//           style={styles.horiimage}
//         />
//        </View>
//        <View>
//         <Text style={styles.horitext}>Umar Shahid posted a new post</Text>
//         <TouchableOpacity style={styles.btn}>
//           <Text style={styles.BtnText}>View</Text>
//         </TouchableOpacity>
//        </View>
//       <TouchableOpacity>
//       <Text style={styles.NotifiText}>2 min</Text>
//       <Image
//                 source={require('../../assests/icons/delete.png')}
//                 resizeMode="contain"
//                 style={styles.dotsIcon}
//               />
//       </TouchableOpacity>
//       </View>
//       <View style={styles.div} >
//        <View>
//        <Image
//           source={require('../../Images/Homeimages/m8.jpeg')}
//           resizeMode="cover"
//           style={styles.horiimage}
//         />
//        </View>
//        <View>
//         <Text style={styles.horitext}>Umar Shahid posted a new post</Text>
//         <TouchableOpacity style={styles.btn}>
//           <Text style={styles.BtnText}>View</Text>
//         </TouchableOpacity>
//        </View>
//       <TouchableOpacity>
//       <Text style={styles.NotifiText}>2 min</Text>
//       <Image
//                 source={require('../../assests/icons/delete.png')}
//                 resizeMode="contain"
//                 style={styles.dotsIcon}
//               />
//       </TouchableOpacity>
//       </View><View style={styles.div} >
//        <View>
//        <Image
//           source={require('../../Images/Homeimages/m10.jpeg')}
//           resizeMode="cover"
//           style={styles.horiimage}
//         />
//        </View>
//        <View>
//         <Text style={styles.horitext}>Umar Shahid posted a new post</Text>
//         <TouchableOpacity style={styles.btn}>
//           <Text style={styles.BtnText}>View</Text>
//         </TouchableOpacity>
//        </View>
//       <TouchableOpacity>
//       <Text style={styles.NotifiText}>2 min</Text>
//       <Image
//                 source={require('../../assests/icons/delete.png')}
//                 resizeMode="contain"
//                 style={styles.dotsIcon}/>
//       </TouchableOpacity>
//       </View>
//     </ScrollView>
//   )
// }
// const AllJobs = () => {
//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
//     {/* Header */}
//     <Headers />
//     <Notification />
    
//   </ScrollView>
//   );
// };
// const styles = StyleSheet.create({
//   NotifiText:{
//     fontSize:10,
//   },
//   BtnText:{
//     fontSize:16,
//     color:'#6ab04c',
//     marginStart:18,
//     marginTop:3,
//   },
//   btn:{
//     width:70,
//     height:30,
//     marginTop:4,
//     borderWidth:1,
//     borderColor:"#6ab04c",
//     borderRadius:60,
//     marginStart:5,
//   },
 
//   item: {
//     alignItems: 'center',
//     marginRight: 2,
//   },
//   horiimage: {
//     width: 60,
//     height: 60,
//     borderRadius: 45,
//   },
//   horitext: {
//     marginTop: 10,
//     marginStart:5,
//     fontSize: 15,
//     color: '#000',
//   },
//  div:{
//   flex: 1,
//   height: 80,
//   borderWidth: 1,
//   borderBottomColor: '#99AAAB',
//   borderTopColor: 'white',
//   borderStartColor: 'white',
//   borderEndColor: 'white',
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'space-between', // Ensures space between elements
//   paddingHorizontal: 10, // Adds spacing around the content
//   marginTop:3,
//  },
//  dotsIcon: {
//   width: 25,
//   height: 20,
//   tintColor: '#616C6F', // Optional: style the dots
// },
 
// });

// export default AllJobs;

// Home.js
import React from 'react';
import { Image, StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import Filter1 from './Filter1';

const AllJobs = ({ navigation }) => {
  const jobCategories = [
    { id: 1, name: 'Plumber', jobs: 120, image: require('../../Images/Cetagories/image1.png') },
    { id: 2, name: 'Electrician', jobs: 90, image: require('../../Images/Cetagories/image3.png') },
    { id: 3, name: 'Web Developer', jobs: 150, image: require('../../Images/Cetagories/image5.png') },
    { id: 4, name: 'Cook', jobs: 50, image: require('../../Images/Cetagories/cook.png') },
    { id: 5, name: 'Driver', jobs: 80, image: require('../../Images/Cetagories/image4.png') },
    { id: 6, name: 'Painter', jobs: 130, image: require('../../Images/Cetagories/image2.png') },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Job Categories</Text>
      <View style={styles.mainBox}>
        {jobCategories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.boxStyle}
            onPress={() => navigation.navigate('Filter1', { category })}
          >
            <Image
              source={category.image}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.jobName}>{category.name}</Text>
            <Text>{category.jobs} jobs</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
  
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 20,
    textAlign: 'center',
  },
  mainBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  boxStyle: {
    height: 180,
    width: '48%',
    borderWidth: 2,
    borderColor: '#65a765',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  jobName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
  },
  icon: {
    width: 100,
    height: 70,
    marginBottom: 10,
  },
});

export default AllJobs;
