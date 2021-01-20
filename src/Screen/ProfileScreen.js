import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import calander from '../assets/Image/calander.png';
import uset from '../assets/Image/user.png';
import editButton from '../assets/Image/editbtn.png';
import { BackHeader, Header, Input } from '../components';
import {
    buttonColor,
    darkBlue,
    lightBlackColor,
    lightGray,
    lughtBlue,
    themeColor,
    white,
} from '../utils/Theme/Color';
import { ScaledSheet } from 'react-native-size-matters';

const ProfileScreen = ({ goBack, navigate }) => {
    return (
        <View style={styles.container}>
            <BackHeader title="Profile Info" goBack={goBack} />
            <ScrollView contentContainerStyle={styles.bodyContainer}>
                <View style={styles.body}>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity>
                            <Image resizeMode="cover" style={styles.image} source={uset} />
                            <TouchableOpacity style={styles.editBtnContainer}>
                                <Image source={editButton} />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 50 }}>
                        <Input
                            secureTextEntry={false}
                            iconShow={true}
                            iconName="chevron-down"
                            placeholder="Undergraduate Student"
                        />
                    </View>
                    <View>
                        <Input
                            secureTextEntry={false}
                            iconShow={false}
                            placeholder="Name of University"
                        />
                    </View>
                    <View>
                        <Input
                            secureTextEntry={false}
                            iconShow={false}
                            placeholder="Field of Study"
                        />
                    </View>
                    <View>
                        <Text style={styles.payMarginText}>
                            Relevant Skills: (Seperate your skill with ; )
            </Text>
                        <View style={styles.skillContainer}>
                            <View style={styles.skillItem}>
                                <Text style={styles.skillBtnText}>Website Design</Text>
                            </View>
                            <View style={styles.skillItem}>
                                <Text style={styles.skillBtnText}>UI Design</Text>
                            </View>
                            <View style={styles.skillItem}>
                                <Text style={styles.skillBtnText}>JS Development</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.inputCOntainer}>
                        <Input
                            secureTextEntry={false}
                            iconShow={true}
                            placeholder="Years of experience"
                            iconName="chevron-down"
                        />
                    </View>
                    <View style={styles.inputCOntainer}>
                        <Input
                            secureTextEntry={false}
                            keyboardType="numeric"
                            iconShow={true}
                            iconName="chevron-down"
                            placeholder="Work type(full-time,part-time,remote etc)"
                        />
                    </View>
                    <View style={styles.inputCOntainer}>
                        <Input
                            secureTextEntry={false}
                            iconShow={false}
                            placeholder="Hours available per week"
                        />
                    </View>
                    <View style={styles.inputCOntainer}>
                        <Input
                            secureTextEntry={false}
                            iconShow={true}
                            iconName="chevron-down"
                            placeholder="Allowed to work in the US?"
                        />
                    </View>
                    <Text style={styles.payMarginText}>Pay marin:</Text>
                    <View style={styles.ammountContainer}>
                        <View style={{ width: '49%' }}>
                            <Input
                                secureTextEntry={false}
                                iconShow={false}
                                iconName="chevron-down"
                                placeholder="Min $"
                            />
                        </View>
                        <View style={{ width: '49%' }}>
                            <Input
                                secureTextEntry={false}
                                iconShow={false}
                                iconName="chevron-down"
                                placeholder="Max $"
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigate('AboutUs')}
                        style={styles.registerBtnContainer}>
                        <Text style={styles.registerText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    bodyContainer: {
        // flex: 1,
        padding: '1@s',
        paddingBottom: '20@s',
        justifyContent: 'space-between',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50@s',
        marginBottom: '100@s',
    },
    text: {
        fontSize: '17@s',
        lineHeight: '20@s',
        color: themeColor,
        fontWeight: 'normal',
        textAlign: 'center',
        marginTop: '10@s',
    },
    body: {
        padding: '10@s',
        paddingLeft: '15@s',
        paddingRight: '15@s',
        justifyContent: 'center',
    },
    registerBtnContainer: {
        padding: '10@s',
        backgroundColor: buttonColor,
        marginTop: '30@s',
        borderRadius: '5@s',
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerText: {
        color: white,
        fontSize: '14@s',
        lineHeight: '18@s',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginText: {
        color: buttonColor,
        fontSize: '14@s',
        lineHeight: '18@s',
        marginLeft: '5@s',
    },
    alreadyText: {
        color: lightBlackColor,
        fontSize: '14@s',
        lineHeight: '18@s',
    },
    forgotPasswordContainer: {
        marginTop: '10@s',
        alignItems: 'flex-end',
    },

    forgotPasswordText: {
        color: buttonColor,
        fontSize: '12@s',
        lineHeight: '14@s',
        fontWeight: 'bold',
    },

    image: {
        height: '128@s',
        width: '128@s',
        borderRadius: 35,
        resizeMode: 'cover',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20@s',
    },
    editBtnContainer: {
        position: 'absolute',
        bottom: 0,
        right: '-7@s',
    },
    inputCOntainer: {
        marginTop: '5@s',
    },
    registerBtnContainer: {
        padding: '10@s',
        backgroundColor: buttonColor,
        marginTop: '30@s',
        borderRadius: '5@s',
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerText: {
        color: white,
        fontSize: '14@s',
        lineHeight: '18@s',
    },
    ammountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    payMarginText: {
        marginLeft: '20@s',
        marginTop: '10@s',
        color: themeColor,
        fontWeight: 'bold',
    },
    skillContainer: {
        borderColor: '#CBCBCB',
        borderWidth: 1,
        paddingLeft: '10@s',
        paddingRight: '10@s',
        paddingTop: '3@s',
        paddingBottom: '20@s',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: lightGray,
        borderRadius: '8@s',
        marginTop: '3@s',
    },
    skillItem: {
        backgroundColor: lughtBlue,
        borderRadius: '50@s',
        padding: '7@s',
        paddingRight: '12@s',
        paddingLeft: '12@s',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '3@s',
        marginRight: '3@s',
    },
    skillBtnText: {
        fontSize: '11@s',
        lineHeight: '13@s',
        fontWeight: '600',
        color: darkBlue,
    },
});

export default ProfileScreen;