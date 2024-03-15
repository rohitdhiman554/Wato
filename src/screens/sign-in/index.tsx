import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../../App';

type SignUpScreenProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const SignIn = ({navigation}: SignUpScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onGooglePress = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please sign-in to your account</Text>
      <View style={styles.innerContainer}>
        <Image
          source={require('../../assets/images/god-rays.png')}
          style={styles.image}
          blurRadius={50}
        />
        <View style={styles.blurLayer} />
        <View style={styles.containerInside}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#888"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            placeholderTextColor="#888"
            onChangeText={setPassword}
            secureTextEntry
          />
          <View style={styles.termsContainer}>
            <Text style={styles.termsLink}>Forgot Password?</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInContainer}>
            <Text style={styles.termsText}>
              New to our platform?
              <Text
                style={styles.termsLink}
                onPress={() => navigation.navigate('SignUp')}>
                &nbsp;Create an account
              </Text>
            </Text>
          </TouchableOpacity>
          <Text style={styles.separator}>or</Text>
          <TouchableOpacity style={styles.googleButton} onPress={onGooglePress}>
            <Image
              source={require('../../assets/images/googleIcon.png')}
              style={styles.googleLogo}
            />
            <Text style={styles.googleButtonText}>Continue With Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#131415',
  },
  innerContainer: {
    borderRadius: 8,
    display: 'flex',
    marginVertical: 20,
    borderWidth: 1,
    borderColor: 'gray',
  },
  input: {
    width: '100%',
    padding: 10,
    color: 'white',
    marginVertical: 10,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
  },
  text: {
    fontSize: 20,
    color: 'white',
    margin: 10,
  },
  containerInside: {
    padding: 12,
  },
  blurLayer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.1,
    backgroundColor: 'gray',
  },
  image: {
    resizeMode: 'contain',
    top: 0,
    right: 0,
    position: 'absolute',
    zIndex: 0,
  },
  termsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    display: 'flex',
    marginVertical: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: 'transparent',
  },
  checkboxInnerChecked: {
    backgroundColor: '#D4FB54',
  },
  termsText: {
    fontSize: 12,
    color: 'white',
  },
  button: {
    width: '100%',
    padding: 12,
    marginTop: 20,
    backgroundColor: '#D4FB54',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: 'black',
  },
  termsLink: {
    color: '#D4FB54',
    textAlign: 'right',
  },
  signInContainer: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },
  googleButton: {
    flexDirection: 'row',
    display: 'flex',
    borderColor: '#FFF',
    borderWidth: 1,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: {height: 1, width: 0},
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    color: 'white',
    fontWeight: '500',
  },
});
