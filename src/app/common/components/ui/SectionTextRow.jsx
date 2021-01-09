import React from 'react'
import { StyleSheet, View } from 'react-native'
import { theme } from '../../../../constants';

export default function SectionTextRow({label, value}) {
    return (
        <View style={styles.row}>
            <View style={styles.label}>{ label }</View>
            <View style={styles.value}>{ value }</View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 1,
        padding: 20,
        backgroundColor: theme.colors.section,
        borderRadius: 8,
    },
    label: {

    },
    value: {
        flexDirection: 'row',
        alignItems: 'center'
    }
    
});
