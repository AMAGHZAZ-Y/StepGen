import { Button, IconButton, Input, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, ModalBody, ModalFooter } from "@chakra-ui/react";
import React from "react";
import { StepStore, Step } from "./stepstore";
import { PlusIcon, DeleteIcon } from "../icons/icons";
export const AddBtn = () => {
	let step: Step
	const click = () => {
		StepStore.push(step);
		if (process.env.NODE_ENV !== 'production') {
			console.log(StepStore)
		}
	}

	return (
		<IconButton onClick={click} aria-label="Add Button" icon={<PlusIcon />} />
	)
}

export const DeleteBtn = () => {
	let step: Step
	const click = () => {
		StepStore.pop();
		if (process.env.NODE_ENV !== 'production') {
			console.log(StepStore)
		}
	}
	return (
		<IconButton onClick={click} aria-label="Delete Button" icon={<DeleteIcon />} />
	)
}

export const GenerateBtn = () => {
	return (
		<Button>
			Generate
		</Button>
	)
}

export const UploadBtn = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button>Upload</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						Upload Schema
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Input type={"file"} placeholder="Select" />
					</ModalBody>
					<ModalFooter>
						<Button>Submit</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}
export const SimulateBtn = () => {
	return (
		<Button>
			Simulate
		</Button>
	)
}