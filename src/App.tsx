import { useRef } from 'react'
import { Flex, Box, Heading, Button, Image, Text, Link, VStack, Show, Hide, HStack } from '@chakra-ui/react';
import './App.css'

const Icons = () => {
  return (
    <HStack>
      <Link isExternal href="https://dexscreener.com/solana/e55atosyhaqpm1werphxkmtt34xnhbllm2ecqyqn1clz">
        <Image w="1.5rem" src="/dexscreener.png" />
      </Link>
      <Link isExternal href="https://twitter.com/luck_token_">
        <Image w="1.5rem" src="/twitter.png" />
      </Link> 
      {/* 
        add more like this
        <Link href="">
          <Image w="1.5rem" src="/twitter.png" />
        <Link href="">
      */}
    </HStack>
  )
}

const Desktop = ({ onBless }: { onBless: () => void }) => {
  return (
    <>
      <Image id="pope-pepe" src="/pope-pepe.svg" height={"100%"}  zIndex="2"/>
      <Image position="absolute" left="0" bottom="0" zIndex="1" w="4rem" src="/pepe-blush.png" />
      <VStack textAlign="center" position="absolute" right="0" top="0" w="500px" h="100%" zIndex="3" bg="green">
        <Heading variant="h1" fontSize="5rem">They'll say it was <br />$LUCK</Heading>
        <Heading variant="h2">But we know. <br />Recieve $LUCK on this <Link color="white" textDecoration="underline" isExternal href="https://en.wikipedia.org/wiki/Saint_Patrick%27s_Day">St Patricks Day</Link></Heading>
        <Button onClick={onBless}>Bless me</Button>
        <Box>
          <Text>Approved by Pope-pepe St Patrick</Text>
          <Text>More dev coming soon... (devs drinking)</Text>
        </Box>
        <Icons />
        <Image src="/gold.svg" w="full" h="200px" mt="auto" />
      </VStack>
    </>
  )
}

const Mobile = ({ onBless }: { onBless: () => void }) => {
  return (
    <VStack gap={0} pb={0} textAlign="center">
      <Box p={4}>
        <Heading variant="h1" fontSize="2rem">They'll say it was $LUCK</Heading>
        <Heading variant="h2" fontSize>But we know. <br />Recieve $LUCK on this <Link color="white" textDecoration="underline" isExternal href="https://en.wikipedia.org/wiki/Saint_Patrick%27s_Day">St Patricks Day</Link></Heading>
      </Box>
      <Box>
        <Button onClick={onBless}>Bless me</Button>
        <Text>Approved by Pope-pepe St Patrick</Text>
        <Text>More dev coming soon... (devs drinking)</Text>
      </Box>
      <Icons />
      <Image src="/gold.svg" p={4} w="full" h="200px" mt={8} />
      <Box as="div" mt="auto" position="relative" w="100vw">
        <Image position="absolute" left="0" bottom="0" zIndex="1" w="4rem" src="/pepe-blush.png" />
        <Image id="pope-pepe" src="/pope-pepe.svg" w="100vw" position="absolute" bottom="0" left="0" zIndex="2"/>
      </Box>
    </VStack>
  )
}

function App() {
  const blessing = useRef(null);

  const onBless = () => {
    if (blessing.current) {
      return
    }
    const e = document.getElementById("pope-pepe");
    e.classList.add("blessing");

    blessing.current = true;
    setTimeout(() => {
      const e = document.getElementById("pope-pepe");
      e.classList.remove("blessing");
      blessing.current = false;
    }, [1000]);
  }

  return (
    <Flex bg="green" h="100vh" w="100vw"  overflow="hidden" position="relative">
      <Show above="700px">
        <Desktop onBless={onBless} />
      </Show>
      <Hide above="700px">
        <Mobile onBless={onBless} />
      </Hide>
    </Flex>
  )
}

export default App
