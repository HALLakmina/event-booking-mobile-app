import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-web'

const SearchBar = ({onChange}) => {
    return (
        <TextInput placeholder="Search event" onChange={onChange} style={styles.searchStyle}/>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchStyle:{
        borderRadius:"10px",
        padding:"10px",
        margin:"10px",
        backgroundColor:"white"
    }
})