import { Box, Flex, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { Header } from '../Header'
import moment from 'moment';

export const PostCard = ({id, title, author, content, created_datetime}) => {
  return (
    <Box minH='200px' border='1px solid #999999' mb='40px'>
      <Header id={id} title={title} />
      <Box px='35px' py='20px'>
        <Flex mb='20px' justifyContent='space-between'>
          <Text fontWeight='700' fontSize='16px' color="#777777">@{author}</Text> 
          <Text fontWeight='400' fontSize='16px' color="#777777">{moment(created_datetime).fromNow()}</Text> 
        </Flex>
        <Text fontSize='16px' fontWeight='400'>
          {content}
        </Text>
      </Box>
    </Box>
  )
}
