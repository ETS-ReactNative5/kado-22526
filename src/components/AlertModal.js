import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {aliceGrey, buttonColor} from '../utils/Theme/Color';
function AlertModal({title, message, showModal, setShowModal}) {
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Modal isVisible={showModal}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>{title}</Text>
          <Text style={styles.messageText}>{message}</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.OkButton}
            onPress={toggleModal}
            underlayColor="#fff">
            <Text style={styles.buttonText}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 1,
    borderColor: aliceGrey,
  },
  buttonText: {
    color: buttonColor,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
  },
  OkButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    margin: 12,
  },
  content: {
    padding: 22,
    paddingHorizontal: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: '700',
  },
  messageText: {
    fontSize: 16,
  },
});

export default AlertModal;
