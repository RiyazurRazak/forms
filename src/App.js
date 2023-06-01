import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onFormSubmitHandller = () => {
    try {
      const payload = {
        name,
        email,
        password,
        mobileNumber,
        gender,
      };
      // fake server request
      console.log(payload);
      setIsFormSubmitted(true);
      //clean the state
      setName("");
      setEmail("");
      setPassword("");
      setMobileNumber("");
      setGender("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Center h="100vh" w="100vw" flexDirection="column">
      <Card w="40%">
        <CardHeader>
          <Heading size="md">Fill The Form To Proceed</Heading>
        </CardHeader>
        <CardBody textAlign="center">
          <Input
            type="text"
            placeholder="your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            mb="18px"
          />
          <Input
            type="email"
            placeholder="email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb="18px"
          />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            mb="18px"
          />
          <Input
            type="tel"
            placeholder="mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            mb="18px"
          />
          <Select
            placeholder="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            mb="18px"
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="*">Non Binary</option>
          </Select>
          <Button onClick={onFormSubmitHandller}>Submit</Button>
        </CardBody>
      </Card>

      <AlertDialog
        isOpen={isFormSubmitted}
        onClose={() => setIsFormSubmitted(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Form Submitted!</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody mb="24px">
              Thanks For Your Response
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Center>
  );
}

export default App;
