'use client';

import Link from 'next/link';

import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  NumberInput,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
  },
}));

const Register = () => {
  const { classes } = useStyles();
  return (
    <div className={'flex justify-center items-center p-5'}>
      <Paper radius={0} p={30} className='lg:w-[50vw] md:w-[100%]'>
        <Title order={2} className={classes.title} ta='left' mt='md' mb={20}>
          Create new account
        </Title>

        <div className='flex flex-col gap-3'>
          <TextInput label='Full Name' placeholder='Full name' size='md' />
          <NumberInput
            label='Phone number'
            placeholder='98********'
            size='md'
            hideControls
            type='number'
          />
          <PasswordInput
            label='Password'
            placeholder='Your password'
            size='md'
          />
          <PasswordInput
            label='Confirm Password'
            placeholder='Confirm password'
            size='md'
          />
        </div>

        <Button fullWidth mt='xl' size='md'>
          Sign up
        </Button>

        <Text ta='left' mt='md'>
          Already have an account?{' '}
          <Link href={'login'}>
            <Anchor<'p'>
              weight={500}
              onClick={(event) => event.preventDefault()}
            >
              Login
            </Anchor>
          </Link>
        </Text>
      </Paper>
    </div>
  );
};

export default Register;
