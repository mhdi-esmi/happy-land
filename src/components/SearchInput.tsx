import { SearchIcon } from "@chakra-ui/icons";
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  // const setSearchText = useGameQueryStore((s) => s.setSerchedText);
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  return (
    <>
      <form
      // onSubmit={(event) => {
      //   event.preventDefault();
      //   navigate("/");
      //   // if (ref.current) setSearchText(ref.current.value);
      // }}
      >
        <InputGroup onClick={onOpen} size="lg">
          <InputLeftElement children={<SearchIcon />} />
          <Input
            ref={ref}
            borderRadius={20}
            placeholder="Search Product..."
            variant="flushed"
          />
        </InputGroup>
      </form>
      <Modal
        size="xl"
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody pb={6}>
            <FormControl
              onSubmit={(event) => {
                event.preventDefault();
                navigate("/");
                // if (initialRef.current) setSearchText(initialRef.current.value);
              }}
            >
              <InputGroup>
                <InputLeftElement children={<SearchIcon />} />
                <Input
                  ref={initialRef}
                  borderRadius={20}
                  placeholder="Search Product..."
                  variant="unstyled"
                  mt={2}
                />
              </InputGroup>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchInput;
