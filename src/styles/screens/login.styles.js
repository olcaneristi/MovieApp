import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'rgba(201, 202, 236, 0.4)',
    borderRadius: 10,
    height: 60,
    marginVertical: 10,
    padding: 15,
    color: 'white',
    fontSize: 16,
    letterSpacing: 1.2,
  },

  passwordField: {
    position: 'relative',
  },

  password: {
    paddingRight: 45,
  },

  showIcon: {
    position: 'absolute',
    bottom: 30,
    right: 15,
  },

  error: {
    color: '#f0b4b4',
    fontSize: 13,
    paddingHorizontal: 5,
    letterSpacing: 0.6,
    marginBottom: 5,
  },

  forgotPassword: {
    marginLeft: 'auto',
  },
  forgotPasswordText: {
    fontSize: 15,
    color: '#fff',
  },

  cta: {
    width: '100%',
  },

  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  registerText: {
    color: 'gray',
    marginRight: 5,
    fontSize: 16,
  },

  registerButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  submitButton: {
    borderRadius: 15,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },

  signInText: {
    color: '#000',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
  },
});
