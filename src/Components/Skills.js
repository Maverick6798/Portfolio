import React from 'react';
import { 
         Box, 
         CircularProgress, 
         CircularProgressLabel,  
        } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"


const Skills = () => {
  
let [value, setValue] = React.useState(0);

const count = () => {
  let interval = setInterval(()=>{
    value+=20;
      setValue(value);
    if(value>90)
      clearInterval()
  },10)
}
count()
  return(
      <div className="Skills" id="skills">
          <h2 className="Title">My Skills</h2>
              <ChakraProvider>
               <Box w="94%" ml={76} >
                <CircularProgress value={value<85?value:85} size="150px" p={10} color="crimson">
                  <CircularProgressLabel fontSize={20} fontFamily="sans-serif">Python</CircularProgressLabel>
                </CircularProgress>

                <CircularProgress value={value<80?value:80} p={10} size="150px" color="crimson">
                  <CircularProgressLabel pl={45} pr={45} fontSize={20} fontFamily="sans-serif">Machine Learning</CircularProgressLabel>
                </CircularProgress>

                <CircularProgress value={value<80?value:80} p={10} size="150px" color="crimson">
                  <CircularProgressLabel pl={70} pr={70} fontSize={20} fontFamily="sans-serif">Deep Learning</CircularProgressLabel>
                </CircularProgress>

                <CircularProgress value={value<75?value:75} p={10} size="150px" color="crimson">
                  <CircularProgressLabel  pl={50} pr={50} fontSize={20} fontFamily="sans-serif">Computer Vision</CircularProgressLabel>
                </CircularProgress>

                <CircularProgress value={value<60?value:60} p={10} size="150px" color="crimson">
                  <CircularProgressLabel fontSize={20} fontFamily="sans-serif">Java</CircularProgressLabel>
                </CircularProgress>

                <CircularProgress value={value<80?value:80} p={10} size="150px" color="crimson">
                  <CircularProgressLabel fontSize={20} fontFamily="sans-serif">C/C++</CircularProgressLabel>
                </CircularProgress>

                <CircularProgress value={value<90?value:90} p={10} size="150px" color="crimson">
                  <CircularProgressLabel fontSize={20} fontFamily="sans-serif">HTML</CircularProgressLabel>
                </CircularProgress>

                <CircularProgress value={value<70?value:70} p={10} size="150px" color="crimson">
                  <CircularProgressLabel fontSize={20} fontFamily="sans-serif">CSS</CircularProgressLabel>
                </CircularProgress>
                
                <CircularProgress value={value<85?value:85} p={10} size="150px" color="crimson">
                  <CircularProgressLabel fontSize={20} fontFamily="sans-serif">JavaScript</CircularProgressLabel>
                </CircularProgress>
                
                <CircularProgress value={value<80?value:80} p={10} size="150px" color="crimson">
                  <CircularProgressLabel fontSize={20} fontFamily="sans-serif">Linux</CircularProgressLabel>
                </CircularProgress>
                
                <CircularProgress value={value<90?value:90} p={10} size="150px" color="crimson">
                  <CircularProgressLabel fontSize={20} fontFamily="sans-serif">SQL</CircularProgressLabel>
                </CircularProgress>
                
                <CircularProgress value={value<90?value:90} p={10} size="150px" color="crimson">
                  <CircularProgressLabel fontSize={20} fontFamily="sans-serif">Docker</CircularProgressLabel>
                </CircularProgress>
                
                <CircularProgress value={value<75?value:75} p={10} size="150px" color="crimson">
                  <CircularProgressLabel fontSize={20} fontFamily="sans-serif">Chakra UI</CircularProgressLabel>
                </CircularProgress>
                
                <CircularProgress value={value<75?value:75} p={10} size="150px" color="crimson">
                  <CircularProgressLabel fontSize={20} fontFamily="sans-serif">Material UI</CircularProgressLabel>
                </CircularProgress>
              </Box>
              </ChakraProvider>
      </div>
  )
}

export default Skills;