/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return (
    <Image source={require('../assets/log_new.png')} style={styles.image} />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 130,
    marginTop: 40,
    marginBottom: 8,
  },
})
