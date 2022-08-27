import React, { useState } from 'react'
import { Box, Text, Input, Button } from '@chakra-ui/react'

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
        width={'26vw'} 
        height={'25vh'} 
        bgColor={'#FFFFFF'} 
        px={'1.4vw'} 
        py={'2.2vh'}
      >
        <Text 
          letterSpacing={'-0.3px'} 
          pl={'0.3125vw'} 
          py={'0.4vh'} 
          lineHeight={'1.3vw'} 
          vertical-align={'middle'} 
          fontSize='2.7vh' 
          fontWeight={'700'} 
          mb={'2.7vh'}
        >
          Welcome to CodeLeap network!
        </Text>
        <Text 
          pl={'0.3125vw'} 
          lineHeight={'0.97vw'} 
          vertical-align={'middle'} 
          fontSize='2.1vh' 
          fontWeight={'400'} 
          mb={'1.2vh'}
        >
          Please enter your username
        </Text>
        <Input 
          onChange={handleChange} 
          value={user} 
          pl={'0.3125vw'} 
          borderRadius='0.5vh' 
          placeholder='' 
          h='3vh' 
          fontSize='1.9vh' 
          mb='2.8vh'
        />
        <Button 
          float={'right'} 
          bgColor={'black'} 
          color='white' 
          w='5.8vw' 
          height='23px' 
          fontSize='2.1vh' 
          borderRadius='0px'  
          fontWeight={'700'} 
          h='3.5vh'
        >
          Enter
        </Button>
      </Box>
    </Box>
  )
}