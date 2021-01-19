import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { DeleteAccountScreen } from '../Screen';
import AboutUsScreen from '../Screen/AboutUsScreen';

const DeleteAccountContainer = props => {
    const goBack = () => {
        const { navigation } = props;
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <DeleteAccountScreen goBack={goBack} />
        </SafeAreaView>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
});

export default DeleteAccountContainer;