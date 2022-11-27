import { Button, Text, IconButton, Input, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, ModalBody, ModalFooter, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { StepStore, Step } from "./stores";
import { PlusIcon, DeleteIcon } from "../icons/icons";
export const AddBtn = () => {
	const [addSteps] = StepStore((state)=>([ state.Push]))
	const click = ()=>{
		const step: Step = {
			id: 0,
			func: "",
			args: []
		}
		addSteps(step);
	}
	return (
		<IconButton onClick={click} icon={<PlusIcon />} aria-label="add line" />
	)
}

export const DeleteBtn = () => {
	let step: Step
	const [Pop] = StepStore((state)=>([state.Pop]))
	const click = () => {
		Pop();
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
	const [File, setFile] = useState<string>()
	const [Loaded, setLoaded] = useState(false);
	const [setSchema] = StepStore((state)=>([state.setSchema]))
	let toast = useToast();
	const handleUpload = (event) => {
		const reader = new FileReader();
		reader.onloadend = () => {
			setFile(reader.result as string)
			localStorage.setItem("schema", reader.result as string)
			setLoaded(true);
		}
		reader.readAsText(event.target.files[0])
	}
	const handleSubmit = () => {
		setSchema(JSON.parse(File as string))
		toast({
			duration: 2500,
			title: "Upload Status",
			description: "The Schema File has been uploaded successfully",
			status: "success"
		})
		onClose()
	}
	return (
		<>
			<Button onClick={onOpen}>Upload</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						Upload Schema
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text p="0.5rem">Please select your schema from your filesystem</Text>
						<Input type={"file"} placeholder="Select" onChange={handleUpload} />
					</ModalBody>
					<ModalFooter>
						<Button onClick={handleSubmit} disabled={!Loaded}>Submit</Button>
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