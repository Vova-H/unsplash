import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const ImageItem = ({item}) => {

    const navigation = useNavigation()

    return (
        <View style={styles.imageItemContainer}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('ImageDetail', {
                        item
                    })
                }
                }
                style={styles.imageWrapper}>
                <Image
                    source={{
                        uri: item.urls.thumb,
                    }}
                    style={styles.image}
                />
            </TouchableOpacity>
            <View style={styles.infoWrapper}>
                {item.description ?
                    <Text style={styles.description}>{item.description}</Text>
                    :
                    <Text style={styles.description}>{item.alt_description}</Text>

                }
                <Text style={styles.username}>{item.user.name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageItemContainer: {
        flex: 1,
        width: "100%",
        height: 77,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "10%",
    },
    imageWrapper: {
        width: "20%",
        height: "100%",
        marginRight: "5%",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 50
    },
    infoWrapper: {
        width: "75%"
    },
    username: {
        textTransform: "capitalize",
        textDecorationLine: "underline",
        fontSize: 18,
        fontWeight: "700"
    },
    description: {
        textTransform: "capitalize"
    }
})


export default ImageItem;
