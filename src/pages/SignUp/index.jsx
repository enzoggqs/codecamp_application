import React, { useState } from 'react'
import { Box, Text, Input, Button} from '@chakra-ui/react'

export const SignUp = () => {
  const [user, setUser] = useState('');
  const handleChange = (event) => setUser(event.target.value);

  return (
    <Box 
      display={'flex'} 
      justifyContent={'center'} 
      alignItems={'center'} 
      height={'100vh'} 
      bgColor={'#DDDDDD'}
    >
      <Box 
        width={'500px'} 
        height={'220px'} 
        bgColor={'#FFFFFF'} 
        px={'25px'} 
        py={'30px'}
      >
        <Text 
          letterSpacing={'-0.3px'} 
          pl={'5px'} 
          py={'2px'} 
          lineHeight={'25.78px'} 
          vertical-align={'middle'} 
          fontSize='22px' 
          fontWeight={'700'} 
          mb={'30px'}
        >
          Welcome to CodeLeap network!
        </Text>
        <Text 
          pl={'5px'} 
          lineHeight={'18.75px'} 
          vertical-align={'middle'} 
          fontSize='16px' 
          fontWeight={'400'} 
          mb={'19px'}
        >
          Please enter your username
        </Text>
        <Input 
          borderColor='#777777'
          onChange={handleChange} 
          value={user} 
          pl={'5px'} 
          borderRadius='6px' 
          placeholder='' 
          h='28px' 
          fontSize='15px' 
          mb='18px'
        />
        <Button 
          float={'right'} 
          bgColor={'black'} 
          color='white' 
          w='100px' 
          fontSize='16px' 
          borderRadius='0px'  
          fontWeight={'700'} 
          h='30px'
        >
          Enter
        </Button>
      </Box>
    </Box>
  )
}