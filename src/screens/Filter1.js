import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  FlatList
} from 'react-native';
import { Button } from 'react-native-paper';
import ApplyNowForm from './ApplyNowForm ';

const Filter1 = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilterType, setSelectedFilterType] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [applyNowVisible, setApplyNowVisible] = useState(false);
  // Filters with options for each category
  const filters = [
    { 
      label: 'Job Type', 
      icon: require('../../Images/Cetagories/location_on.png'), 
      dropdownIcon: require('../../Images/Cetagories/arrow_drop_down.png'), 
      options: ['Full-time', 'Part-time', 'Contract', 'Internship']
    },
    { 
      label: 'City', 
      icon: require('../../Images/Cetagories/location_on.png'), 
      dropdownIcon: require('../../Images/Cetagories/arrow_drop_down.png'), 
      options: ['New York', 'San Francisco', 'Los Angeles', 'Chicago'] 
    },
    { 
      label: 'Salary', 
      icon: require('../../Images/Cetagories/location_on.png'), 
      dropdownIcon: require('../../Images/Cetagories/arrow_drop_down.png'), 
      options: ['< 50K', '50K - 100K', '100K - 150K', '> 150K'] 
    },
    { 
      label: 'Date Posted', 
      icon: require('../../Images/Cetagories/location_on.png'), 
      dropdownIcon: require('../../Images/Cetagories/arrow_drop_down.png'), 
      options: ['Any Time ','Past 24 Hours', 'Last Week', 'Last Month'] 
    }
  ];

  // Handle when a filter is clicked
  const handleFilterClick = (filter) => {
    setSelectedFilterType(filter.label);
    setModalVisible(true); // Open the modal
  };

  // Handle the selection of a filter option
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setSelectedFilter(option);
  };

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
 
  const handleApplyNowClick = () => {
    setApplyNowVisible(true); // Show ApplyNowForm modal
  };
  // Placeholder function to show the results based on the selected filter
  const handleShowResults = () => {
    alert(`Showing results for ${selectedFilterType}: ${selectedOption}`);
    setModalVisible(false);  // Close the modal
  };

  const handleApplyFilter = () => {
    alert(`Applied filter: ${selectedFilterType} - ${selectedOption}`);
    setModalVisible(false); // Close the modal after applying
  };

  return (
    
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
      <Image
        source={require('../../Images/Cetagories/Search.png')} // Replace with your PNG file path
        style={styles.iconStyle}
      />
     
       <TextInput
                placeholder="Search your jobs here"
                style={styles.inputStyle}
              />
            
        
    </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {filters.map((filter, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.filterButton, selectedFilter === filter.label && styles.selectedFilter]}
            onPress={() => handleFilterClick(filter)}>
            <View style={styles.filterContent}>
              <Image
                source={filter.icon}
                style={[styles.iconStyle, selectedFilter === filter.label && styles.selectedIcon]}
              />
              <Text
                style={[styles.filterText, selectedFilter === filter.label && styles.selectedText]}>
                {filter.label}
              </Text>
              <Image
                source={filter.dropdownIcon}
                style={[styles.dropdownIconStyle, selectedFilter === filter.label && styles.selectedDropdownIcon]}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Modal for Dropdown */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>{selectedFilterType} Options</Text>
            <FlatList
              data={chunkArray(
                filters.find(filter => filter.label === selectedFilterType)?.options || [],
                2
              )}
              keyExtractor={(item, index) => `row-${index}`}
              renderItem={({ item }) => (
                <View style={styles.rowContainer}>
                  {item.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.modalOption}
                      onPress={() => handleOptionSelect(option)}>
                      <Text style={styles.modalOptionText}>{option}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            />
            <TouchableOpacity style={styles.showResultsButton} onPress={handleShowResults}>
              <Text style={styles.showResultsButtonText}>Show 100 Results</Text>
            </TouchableOpacity>

            {/* Apply Now Button */}
            {/* Apply Now Form Modal */}
      {applyNowVisible && (
        <ApplyNowForm visible={applyNowVisible} onClose={() => setApplyNowVisible(false)} />
      )}

      {/* Apply Now Button */}
      <TouchableOpacity style={styles.applyNowButton} onPress={handleApplyNowClick}>
        <Text style={styles.applyNowButtonText}>Apply Now</Text>
      </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  scrollContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderRadius: 15,
    marginRight: 15,
    minWidth: 120,
    borderWidth: 2,
    borderColor:'#65a765',
  },
  selectedFilter: {
    backgroundColor: '#2CE3B3',
  },
  filterText: {
    fontSize: 14,
    color: '#333',
  },
  selectedText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  filterContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginLeft: 1,
  },
  selectedIcon: {
    tintColor: '#fff',
  },
  dropdownIconStyle: {
    width: 18,
    height: 18,
    marginLeft: 5,
    tintColor: '#333',
  },
  selectedDropdownIcon: {
    tintColor: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '50%',
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalOption: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    flex: 1,
    alignItems: 'center',
  },
  modalOptionText: {
    width: '80%',
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    borderRadius: 10,
  },
  showResultsButton: {
    marginTop: 20,
    paddingVertical: 12,
    backgroundColor: '#10A881',
    borderRadius: 15,
    alignItems: 'center',
  },
  showResultsButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  applyNowButton: {
    marginTop: 15,
    paddingVertical: 12,
    backgroundColor: '#10A881', // Green color for Apply button
    borderRadius: 15,
    alignItems: 'center',
  },
  applyNowButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  scrollContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderRadius: 15,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#10A881'
  },
  filterText: {
    fontSize: 14,
    color: '#333',
  },
  applyNowButton: {
    marginTop: 15,
    paddingVertical: 12,
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    alignItems: 'center',
  },
  applyNowButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputStyle:{
    width:'80%',
    height:50,
   color:'black',
  // borderWidth:2,
//    borderColor:'#6ab04c',
   borderRadius:10,
   margin:1,
   textAlign:'center',
//    backgroundColor:'rgba(44, 227, 179, 0.24)'}
}
   ,
inputContainer: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#7CEC9F',// Light greenish background
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 25,
paddingLeft: 15,
paddingRight: 10,
color:'black',
height: 50,
margin:10,
width:'90%',
},
iconStyle: {
width: 24, // Adjust based on your icon size
height: 24,
marginRight: 10,
},
});

export default Filter1;
