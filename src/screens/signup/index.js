import React, { useRef } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { allValidations } from '../../utils/validations';
import { useNavigation } from '@react-navigation/native';
import { loginStyles } from '../../styles/screens/login.styles';

const SignUp = () => {
  const navigation = useNavigation();


  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });
  const password1 = useRef({});
  password1.current = watch('password', '');

  return (
    <View style={loginStyles.login}>
      <View style={loginStyles.container}>
        <View style={loginStyles.main}>
          <ScrollView style={[loginStyles.forms, registerStyles.forms]}>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: allValidations.REQUIRED,
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  autoCapitalize="none"
                  style={loginStyles.input}
                  placeholder="Full name"
                  placeholderTextColor={'rgba(213, 214, 240, 0.7)'}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                />
              )}
              name="name"
            />
            {errors.name && <Text style={loginStyles.error}>{errors?.name?.message}</Text>}

            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: allValidations.REQUIRED,
                },
                pattern: allValidations.CHECK_VALIDITY_OF_EMAIL,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  autoCapitalize="none"
                  style={loginStyles.input}
                  placeholder="Email or username"
                  placeholderTextColor={'rgba(213, 214, 240, 0.7)'}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                />
              )}
              name="email"
            />
            {errors.email && <Text style={loginStyles.error}>{errors?.email?.message}</Text>}

            <View style={loginStyles.passwordField}>
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: allValidations.REQUIRED,
                  },
                  minLength: allValidations.MIN_LENGTH_PASSWORD(8),
                  pattern: allValidations.CHECK_PASSWORD,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    secureTextEntry={true}
                    autoCapitalize="none"
                    style={[loginStyles.input, loginStyles.password]}
                    placeholder="Password"
                    placeholderTextColor={'rgba(213, 214, 240, 0.7)'}
                    onBlur={onBlur}
                    value={value}
                    onChangeText={onChange}
                  />
                )}
                name="password"
              />
            </View>
            {errors.password && <Text style={loginStyles.error}>{errors?.password?.message}</Text>}

            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: allValidations.REQUIRED,
                },
                validate: value => value === password1.current || 'The passwords do not match',
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  secureTextEntry={true}
                  autoCapitalize="none"
                  style={loginStyles.input}
                  placeholder="Confirm Password"
                  placeholderTextColor={'rgba(213, 214, 240, 0.7)'}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                />
              )}
              name="confirmPassword"
            />
            {errors.confirmPassword && <Text style={loginStyles.error}>{errors?.confirmPassword?.message}</Text>}
          </ScrollView>
        </View>

        <View style={loginStyles.cta}>
          <View style={loginStyles.registerContainer}>
            <Text style={loginStyles.registerText}>Already have an account? </Text>
            <TouchableOpacity style={loginStyles.registerButton} onPress={() => navigation.navigate('Login')}>
              <Text style={loginStyles.registerButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={loginStyles.submitButton} onPress={handleSubmit(onSubmit)}>
            <Text style={loginStyles.signInText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const registerStyles = StyleSheet.create({
  registerText: {
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
  },
});

export default SignUp;
