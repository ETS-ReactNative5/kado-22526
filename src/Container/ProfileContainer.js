import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { ProfileScreen } from '../Screen';

const ProfileContainer = props => {
    const goBack = () => {
        const { navigation } = props;
        navigation.goBack();
    };

    const navigate = async routeName => {
        const { navigation } = props;
        await navigation.navigate(routeName);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ProfileScreen navigate={navigate} goBack={goBack} />
        </SafeAreaView>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
});

export default ProfileContainer;