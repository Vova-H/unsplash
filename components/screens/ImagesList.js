import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ImageItem from "../UI/ImageItem";

const ImagesList = () => {

    const [data, setData] = useState([])
    const [perPage, setPerPage] = useState(10)
    const [page, setPage] = useState(1)


    const API_KEY = "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
    const URL = `https://api.unsplash.com/photos/?page=${page}&client_id=${API_KEY}&per_page=${perPage}`

    const getImages = async () => {
        const response = await fetch(`${URL}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        const responseData = await response.json()
        setData(responseData)
    }

    const nextPage = () => {
        setPage(page => page + 1)
    }
    const prevPage = () => {
        if (page > 1) {
            setPage(page => page - 1)
        }
    }
    const increasePerPage = () => {
        if (perPage <= 100) {
            setPerPage(prevState => prevState + 5)
        }
    }
    const decreasePerPage = () => {
        if (perPage > 5) {
            setPerPage(prevState => prevState - 5)
        }
    }

    useEffect(() => {
        getImages()
    }, [page, perPage])

    const renderImage = ({item}) => {
        return (
            <ImageItem item={item}/>
        )
    }

    return (
        <View style={styles.container}>
            {data ?
                <FlatList data={data} renderItem={renderImage} keyExtractor={
                    item => {
                        return item.id
                    }
                }/>
                : <Text style={styles.loading}>Loading</Text>
            }
            <View style={styles.navigationWrapper}>
                <TouchableOpacity style={styles.navigationButtonWrapper}
                                  onPress={() => prevPage()}>
                    <Text style={styles.navigationButton}>Prev Page</Text>
                </TouchableOpacity>

                <Text style={styles.pageNumber}>{page}</Text>

                <TouchableOpacity style={styles.navigationButtonWrapper}
                                  onPress={() => nextPage()}>
                    <Text style={styles.navigationButton}>Next Page</Text>
                </TouchableOpacity>

                <View style={styles.perPageWrapper}>
                    <View style={{marginRight: "15%"}}>
                        <Text style={{fontSize: 20}}>Per Page: {perPage}</Text>
                    </View>
                    <View style={styles.perPageControlElements}>
                        <TouchableOpacity onPress={increasePerPage}>
                            <Text style={{fontSize: 30}}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={decreasePerPage}>
                            <Text style={{fontSize: 50}}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: "2%",
        paddingTop: "5%",
    },
    loading: {
        fontSize: 30,
        fontWeight: "700"
    },
    navigationWrapper: {
        width: "100%",
        height: "15%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    navigationButtonWrapper: {
        justifyContent: "center",
        minHeight: "100%",
        width: "10%"

    },
    navigationButton: {
        fontSize: 15,
        textAlign: "center",
    },
    pageNumber: {
        fontSize: 30
    },

    perPageWrapper: {
        height: "100%",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },

    perPageControlElements: {
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ImagesList;
