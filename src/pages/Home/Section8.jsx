






import { Stack, Flex,Box, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'
export default function Section8() {
  
  return (
    <Box   borderRadius={'50px'} ml={'auto'} mb={'10px'}  mr={'auto'} w={'95%'}>
    <Flex
      w={'full%'}
      borderRadius={'15px'}
      h={'40vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center '}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
Have a project in mind?
          </Text>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
Let’s create something awesome.
          </Text>
          <NavLink to={"/contactUs"}>
          <Button textAlign={'center'}>Contact Us


<ArrowForwardIcon ml={'5px'} mt={'5px'} />
</Button>
          </NavLink>
       
        </Stack>
      </VStack>
    </Flex>
    </Box>
  )
}