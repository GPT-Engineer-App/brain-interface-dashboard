import { Box, Button, Container, Flex, Heading, Text, VStack, useToast } from "@chakra-ui/react";
import { FaBrain } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  // Simulated function to fetch EEG signal data and classification results
  const fetchEEGData = async () => {
    try {
      // Simulated API call to backend
      const response = await fetch("/api/eeg-data");
      const data = await response.json();

      toast({
        title: "Data Retrieved",
        description: "EEG data and classification results successfully fetched.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      console.log(data); // Log data for development purposes
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch EEG data.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Flex alignItems="center" justifyContent="space-between" w="full">
          <Heading as="h1" size="xl">
            <FaBrain /> BCI Dashboard
          </Heading>
          <Button colorScheme="blue" onClick={fetchEEGData}>
            Fetch EEG Data
          </Button>
        </Flex>
        <Box borderWidth="1px" borderRadius="lg" w="full" p={4}>
          <Heading as="h2" size="lg">
            EEG Signal Visualization
          </Heading>
          <Text mt={4}>EEG signal data will be visualized here.</Text>
          {/* Placeholder for EEG signal visualization */}
        </Box>
        <Box borderWidth="1px" borderRadius="lg" w="full" p={4}>
          <Heading as="h2" size="lg">
            Classification Results
          </Heading>
          <Text mt={4}>Results from machine learning models will be displayed here.</Text>
          {/* Placeholder for classification results */}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
