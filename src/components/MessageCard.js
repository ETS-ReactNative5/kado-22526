import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { grayColor, positionColor, themeColor } from '../utils/Theme/Color';
const MessageCard = ({ title, image, positon, desc, navigate }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigate('Chat')}>
            <Image source={image} style={styles.image} />
            <View style={styles.textContainer}>
                <View style={styles.headinContainer}>
                    <View>
                        <Text numberOfLines={1} style={styles.heading}>
                            {title}
                        </Text>
                        <Text numberOfLines={1} style={[styles.positonTex, { width: 200 }]}>
                            {positon}
                        </Text>
                    </View>
                    <Text numberOfLines={1} style={styles.positonText}>
                        Yesterday
          </Text>
                </View>

                <Text style={styles.descText} numberOfLines={3}>
                    {desc}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = ScaledSheet.create({
    container: {
        padding: '7@s',
        paddingLeft: '20@s',
        paddingRight: '20@s',
        flexDirection: 'row',
        borderTopColor: '#F2F1F8',
        borderTopWidth: '0.5@s',
    },
    image: {
        height: '50@s',
        width: '50@s',

        borderRadius: '100@s',
    },
    textContainer: {
        marginLeft: '10@s',
        width: '80%',
    },
    heading: {
        fontSize: '13@s',
        lineHeight: '16@s',
        color: themeColor,
        fontWeight: 'bold',
        width: '180@s',
    },
    headinContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    positonText: {
        color: positionColor,
        fontSize: '11@s',
        lineHeight: '13@s',
    },
    descText: {
        color: themeColor,
        fontSize: '10@s',
        lineHeight: '12@s',
    },
});

export default MessageCard;