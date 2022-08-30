import { Box, Flex, Text } from '@chakra-ui/layout'
import React, { useContext, useState } from 'react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { useDisclosure } from '@chakra-ui/hooks'
import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Textarea } from '@chakra-ui/textarea'
import axios from 'axios'
import { PostsContext } from '../../postsContext'

export const Header = ({id, title}) => {
  const [posts, setPosts] = useContext(PostsContext);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const editPost = useDisclosure();
  const deletePost = useDisclosure();

  console.log(posts);

  let handleContentChange = (e) => {
    let inputValue = e.target.value
    setNewContent(inputValue)
  }

  let handleTitleChange = (e) => {
    let inputValue = e.target.value
    setNewTitle(inputValue)
  }

  async function handleDeletePost (thisId) {
    await axios.delete(`https://dev.codeleap.co.uk/careers/${thisId}/`);
    setPosts(posts.filter(post => post.id !== thisId));
    deletePost.onClose();
  }

  async function handleEditPost (thisId, thisTitle, thisContent) {
    await axios
      .patch(`https://dev.codeleap.co.uk/careers/${thisId}/`, {
          title: thisTitle,
          content: thisContent
      }, {
          headers: { 'Content-type': 'application/json; charset=UTF-8' }
      });

    const postsAux = [...posts];
    const postToChange = posts.findIndex(p => p.id === thisId);
    postsAux[postToChange].title = thisTitle;
    postsAux[postToChange].content = thisContent;
    setPosts(postsAux);
    editPost.onClose();
  }

  const renderCustomModels = () => (
    <>
      <Modal isOpen={editPost.isOpen} onClose={editPost.onClose}>
        <ModalOverlay />
        <ModalContent borderRadius='0px'>
          <ModalHeader>Edit Item</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Text mb='7px' fontSize='16px' fontWeight='400'>Title</Text>
            <Input 
              value={newTitle} 
              onChange={handleTitleChange}
              h='28px' 
              mb='19px' 
              fontSize='14px'
            />
            <Text mb='7px' fontSize='16px' fontWeight='400'>Content</Text>
            <Textarea
              value={newContent}
              onChange={handleContentChange}
              borderRadius='5px' 
              placeholder='' 
              h='74px' 
              fontSize='14px'
              mb='10px'
            />
          </ModalBody>

          <ModalFooter>
            <Button 
              borderRadius='0px'
              mr={3} 
              onClick={() => handleEditPost(id, newTitle, newContent)} 
              fontSize='16px' 
              fontWeight='700' 
              bgColor='black' 
              color='white'
              h='33px'
              w='111px'
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={deletePost.isOpen} onClose={deletePost.onClose}>
        <ModalOverlay />
        <ModalContent pt='15px' borderRadius='0px'>
          <ModalCloseButton />

          <ModalBody>
            <Text mb='7px' fontSize='16px' fontWeight='400'>Are you sure you want to delete this item?</Text>
            
          </ModalBody>

          <ModalFooter>
            <Button 
              borderRadius='0px'
              mr={3} 
              onClick={deletePost.onClose} 
              fontSize='13px' 
              fontWeight='700' 
              bgColor='white' 
              color='black'
              border='1px solid black'
              h='30px'
              w='100px'
            >
              Cancel
            </Button>
            <Button 
              borderRadius='0px'
              mr={3} 
              onClick={() => handleDeletePost(id)} 
              fontSize='13px' 
              fontWeight='700' 
              bgColor='white' 
              color='black'
              border='1px solid black'
              h='30px'
              w='100px'
            >
              OK
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );

  return (
    <Box 
      display='flex' 
      px={'37px'} 
      alignItems={'center'} 
      w={'100%'} 
      bgColor={'black'} 
      color='white' 
      h={title ? '70px' : '80px'}
    >
      {renderCustomModels()}
      {title ? 
        <Flex w='100%' justifyContent='space-between'>
          <Text fontSize={'18px'} fontWeight='700'>{title}</Text>
          <div>
            <DeleteIcon onClick={() => deletePost.onOpen()} cursor='pointer' w={5} h={5} mr='30px' />
            <EditIcon onClick={() => editPost.onOpen()} cursor='pointer' w={5} h={5} />
          </div>
        </Flex>
        :
        <Text fontSize={'22px'} fontWeight='700'>CodeLeap Network</Text>
      }
    </Box>
  )
}
