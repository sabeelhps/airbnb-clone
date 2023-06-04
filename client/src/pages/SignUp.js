import React,{useRef} from 'react';
import { FormControl, FormLabel,FormHelperText, Input, Button, Heading, Box} from '@chakra-ui/react'
import axios from 'axios';

const SignUp = () => {

    const emailInputRef = useRef();
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    const formSubmitHandler = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/v1/auth/register', {
                username: usernameInputRef.current.value,
                password: passwordInputRef.current.value,
                email: emailInputRef.current.value
            });
            if (res.status !== 200) {
                throw new Error('Authentication failed!');
            }
            window.localStorage.setItem('token', res.data.token);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <Box width='600px' margin='30px auto'>
                <Heading>SignUp</Heading>
                <FormControl mb='2'>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' ref={emailInputRef}/>
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl mb='2'>
                    <FormLabel>Username</FormLabel>
                    <Input type='text' ref={usernameInputRef}/>
                </FormControl>
                <FormControl mb='2'>
                    <FormLabel>Password</FormLabel>
                    <Input type='password' ref={passwordInputRef}/>
                </FormControl>
                <Button type='submit' colorScheme='blue'>Button</Button>
            </Box>
        </form>
  )
}

export default SignUp;