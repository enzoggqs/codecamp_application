import React, { useEffect, useState } from 'react'
import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import axios from 'axios'
import { PostCard } from '../../components/PostCard'
import InfiniteScroll from 'react-infinite-scroll-component'

export const Main = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [fetchData, setFetchData] = useState();
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(`https://dev.codeleap.co.uk/careers/`);
    setFetchData(data);
    setPosts(data.results);
  };

  const fetchNewData = async () => {
    const { data } = await axios.get(fetchData.next);
    setFetchData(data);
    setPosts(current => [...current, ...data.results]);
  }

  useEffect(() => {
    getData();
  }, [])
  
  let handleContentChange = (e) => {
    let inputValue = e.target.value
    setContent(inputValue)
  }

  let handleTitleChange = (e) => {
    let inputValue = e.target.value
    setTitle(inputValue)
  }

  return (
    <Box 
      display={'flex'} 
      justifyContent={'center'} 
      h={posts.length <= 0 ? '100vh' : '100%'} 
      width={'100%'}
      bgColor={'#DDDDDD'}
      // overflowY={'scroll'}
    >
      <Box width='800px' >
        <Header/>
        <Box
          px='38px' 
          pt='36px' 
          h='100% - 80px' 
          bgColor={'white'}
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#999999",
              borderRadius: "24px",
            },
          }}
        >
          <Box h='300px' border='1px solid #999999' px='31px' pt='14px' mb='28px'>
            <Text fontSize='22px' fontWeight='700' letterSpacing='-0.8px' mb='20px'>
              What's on your mind?
            </Text>
            <Text fontSize='16px' fontWeight='400'>
              Title
            </Text>
            <Input
              value={title}
              onChange={handleTitleChange}
              borderRadius='5px' 
              w='659px'
              h='28px' 
              fontSize='14px' 
              mb='10px'
            />
            <Text fontSize='16px' fontWeight='400'>
              Content
            </Text>
            <Textarea
              value={content}
              onChange={handleContentChange}
              borderRadius='5px' 
              placeholder='' 
              w='659px'
              h='74px' 
              fontSize='14px' 
              mb='16px'
            />
            <Button 
              float={'right'} 
              bgColor={'black'} 
              color='white' 
              w='111px' 
              height='33px' 
              fontSize='16px' 
              borderRadius='0px' 
              fontWeight={'700'} 
            >
              Create
            </Button>
          </Box>
          <InfiniteScroll
            dataLength={posts.length}
            next={fetchNewData}
            hasMore={true}
            loader={<h4>Loading... </h4>}
          >
            {posts.map(post => (
              <PostCard 
                title={post.title} 
                author={post.username} 
                created_datetime={post.created_datetime}
                content={post.content}
              />
            ))}
          </InfiniteScroll>
        </Box>
      </Box>
    </Box>
  )
}
