import React from 'react';
import {Image, StyleSheet, View} from "react-native";

const ImageDetail = (props) => {

    const item = props.route.params.item

    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image
                    source={{
                        uri: item.urls.full,
                    }}
                    style={styles.image}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageWrapper: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: "100%",
    }
})


export default ImageDetail;
