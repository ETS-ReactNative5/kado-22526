import React, {useRef} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {EditCompanyPofileScreen} from '../Screen';

import RBSheet from 'react-native-raw-bottom-sheet';
import {Text} from 'react-native';
import {View} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {buttonColor} from '../utils/Theme/Color';

const EditCompanyPofileContainr = props => {
  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };
  const refRBSheet = useRef();
  return (
    <SafeAreaView style={styles.container}>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            height: 150,
          },
        }}>
        <View>
          <TouchableOpacity
            onPress={() => refRBSheet.current.close()}
            style={styles.btnContainer}>
            <Text style={styles.uploadBtnText}>Upload Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => refRBSheet.current.close()}
            style={styles.btnContainer}>
            <Text style={styles.uploadBtnText}>Cancel</Text>
          </TouchableOpacity>
        </View>

        <StatusBar
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.4)"
        />
      </RBSheet>
      <EditCompanyPofileScreen goBack={goBack} refRBSheet={refRBSheet} />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10@s',
  },
  uploadBtnText: {
    color: buttonColor,
    fontSize: '15@s',
    lineHeight: '18@s',
    fontWeight: 'bold',
  },
});

export default EditCompanyPofileContainr;
