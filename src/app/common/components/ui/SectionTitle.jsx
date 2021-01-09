import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { theme } from '../../../../constants';

export default function SectionTitle({ text }) {
    return (
        <>
            <Text style={styles.header}>{text}</Text>
            {/* <Text style={styles.header2}>{text}</Text> */}
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 17,
        marginBottom: theme.sizes.margin,
    },
    header2: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})
