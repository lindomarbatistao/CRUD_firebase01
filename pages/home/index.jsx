import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styles from './styles'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Home({navigation}) {
    const [codigo, setCodigo] = useState('')
    const auth = getAuth();
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const usuario = user.email
            setCodigo(usuario)
        } else {
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Página Home</Text>
            <Text>{codigo}</Text>
        </View>
    )
}
