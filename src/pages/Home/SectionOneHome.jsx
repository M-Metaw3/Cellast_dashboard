
import {Image, Stack, Flex, Button, Box,Text, VStack, useBreakpointValue } from '@chakra-ui/react'
// import sectionone from '../../assets/prop'
import logo from '../../assets/logo (1).svg'
import logo2 from '../../assets/Property 1=Frame 138.png'


import "./home.css"
import { NavLink } from 'react-router-dom'
import Url from '../../api/ApiUrl'
export default function SectionOneHome({data}) {
console.log(data)
  return (
    <>    <Flex
    className='navbarimage'
    style={{
      backgroundImage: `url(${Url}/Homepage/${data&&data[0]?.images})`,
    
    }}
      w={'full%'}
      h={'70vh'}
  
      backgroundSize={'cover'}
      backgroundPosition={'center '}>
         
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack  maxW={{
          
          sm: "100%", // ~480px. em is a relative unit and is dependant on the font size.
          md: "48%", // ~768px
          lg: "38%", // ~992px
          xl: "24%", // ~1280px
          }} align={'flex-start'} spacing={6}>
          <Text
        className='animation'
      
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })} style={{width:'40%',position:"absolute",}}>
          {data&&data[0]?.title}
      
          </Text>
          <Box   className='containernewtext'  style={{position:"absolute",top:"180",left:0,width:"30%",marginLeft:'40px'}}>
          <Text
     
        className='newtext'
         
            lineHeight={1.2}
         >
          {/* {data&&data[0]?.subTitle} */}
          Digital Design FOR LABORATORIES AND DENTISTS
          </Text>
          <Text
      
      className='newtext2'
      
      lineHeight={1.3}
      >
 {data&&data[0]?.subTitle}
          </Text>

        
          <NavLink to={"/services"}>
          <Button
            
            className='containerbutton'
            rounded={'full'}
            
            _hover={{ bg: 'whiteAlpha.500' }}>
              Show me more
            </Button>
            </NavLink>
          </Box>
          <Stack direction={'row'}>
         
        
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  <Box w={'100%'} >
    <Image  className='section1logo'  blur={"50"}  src={logo2} alt='Dan Abramov' /> 
    </Box>
    </>

  )
}