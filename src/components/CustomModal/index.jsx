import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

export default function CustomModal({
  isOpen,
  onClose,
  modalTitle,
  confirmHandle,
  children,
}) {
  return (
    <Modal  isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />

        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="primary" color="black" onClick={confirmHandle}>
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}