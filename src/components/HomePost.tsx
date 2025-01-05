import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';

// Map image name to local images
const imageMap = {
    "service1.jpg": require('../../Images/Homeimages/m1.jpeg'),
    "service2.jpg": require('../../Images/Homeimages/m2.jpeg'),
    "service3.jpg": require('../../Images/Homeimages/m3.jpeg'),
    // Add other images here as needed
};

const HomePost = () => {
    const [servicePosts, setServicePosts] = useState([]); // State to store multiple posts

    useEffect(() => {
        // Make API call to fetch all service posts
        axios.get('http://192.168.100.22:5229/api/ServicePost') // Update with your actual API URL
            .then((response) => {
                setServicePosts(response.data); // Store all posts
            })
            .catch((error) => {
                console.error('Error fetching service posts:', error);
            });
    }, []);

    if (servicePosts.length === 0) {
        return <Text>Loading...</Text>;
    }

    return (
        <ScrollView style={styles.container}>
            {/* Map through all service posts */}
            {servicePosts.map((servicePost, index) => (
                <View key={index} style={styles.postContainer}>
                    {/* Header Section */}
                    <View style={styles.header}>
                        <View>
                            {/* Dynamically load local image based on imageName */}
                            <Image
                                source={imageMap[servicePost.imageName] || require('../../Images/Homeimages/m1.jpeg')} // Default image if not found
                                resizeMode="cover"
                                style={styles.Postimage}
                            />
                        </View>
                        <View style={styles.jobtitleDifference}>
                            <Text style={styles.Jobtitle}>{servicePost.name}</Text>
                            <View style={styles.circle1}>
                                <Text style={styles.circleText1}>10</Text>
                            </View>
                        </View>
                    </View>

                    {/* Price and Description */}
                    <Text style={styles.price}>Rs. {servicePost.minSalary} - {servicePost.maxSalary}</Text>
                    <View style={styles.textCircle}>
                        <Text style={styles.description}>{servicePost.description}</Text>
                    </View>

                    {/* Location and Date */}
                    <View style={styles.footer}>
                        <View style={styles.location}>
                            <Image
                                source={require('../../assests/icons/maps-and-flags.png')}
                                resizeMode="contain"
                                style={styles.image}
                            />
                            <Text style={[styles.footerText, { fontWeight: 'bold', fontSize: 12, color: 'red' }]}>{servicePost.address}</Text>
                        </View>
                        <View style={styles.location}>
                            <Image
                                source={require('../../assests/icons/clock.png')}
                                resizeMode="contain"
                                style={styles.image}
                            />
                            <Text style={styles.footerText}>Posted on: 11/10/2024</Text>
                        </View>
                    </View>

                    <View style={styles.line} />

                    <View style={styles.Buttons}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assests/icons/share.png')}
                                resizeMode="contain"
                                style={styles.ShareBtn}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assests/icons/bookmark.png')}
                                resizeMode="contain"
                                style={styles.ShareBtn}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    ShareBtn: {
        height: 20,
        width: 20,
        tintColor: '#6ab04c',
    },
    Buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gap: 5,
    },
    line: {
        height: 1,
        backgroundColor: '#999',
        width: '100%',
        marginVertical: 5,
    },
    jobtitleDifference: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textCircle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 5,
    },
    Postimage: {
        width: 50,
        height: 50,
        borderRadius: 45,
        borderWidth: 2,
        borderColor: '#BA2F16',
    },
    image: {
        width: 10,
        height: 10,
        tintColor: '#616C6F',
        padding: 0,
        margin: 0,
    },
    container: {
        padding: 7,
        margin: 15,
    },
    postContainer: {
        borderWidth: 1,
        borderColor: '#6AE87B',
        borderRadius: 10,
        padding: 7,
        marginBottom: 15,
        backgroundColor: '#fff',
        shadowColor: '#888',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Jobtitle: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#333',
        marginLeft: 3,
    },
    circle1: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        marginRight: 5,
        borderColor: '#6AE87B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleText1: {
        color: '#333',
        fontSize: 20,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#1A8917',
        marginVertical: 5,
    },
    description: {
        fontSize: 11,
        color: '#555',
        marginBottom: 3,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: 'bold',
        margin: 5,
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 10,
        color: '#999',
    },
});

export default HomePost;
