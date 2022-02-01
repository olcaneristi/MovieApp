import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { allValidations } from '../../utils/validations';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { loginStyles } from '../../styles/screens/login.styles';

const Login = () => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    email: '',
    password: '',
  });


  return (
    <SafeAreaView style={loginStyles.login}>
      <View style={loginStyles.container}>
        <View style={loginStyles.main}>
          <View style={loginStyles.textContainer}></View>
          <ScrollView style={loginStyles.forms}>
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
                    autoCapitalize="none"
                    secureTextEntry={true}
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
          </ScrollView>
        </View>

        <View style={loginStyles.cta}>
          <View style={loginStyles.registerContainer}>
            <Text style={loginStyles.registerText}>Don't have an account? </Text>
            <TouchableOpacity style={loginStyles.registerButton} onPress={() => navigation.navigate('SignUp')}>
              <Text style={loginStyles.registerButtonText}>Register</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={loginStyles.submitButton} onPress={handleSubmit(onSubmit)}>
            <Text style={loginStyles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;
