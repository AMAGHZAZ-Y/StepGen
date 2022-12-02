import { Button, Text, IconButton, Tooltip, Input, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, ModalBody, ModalFooter, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { StepStore, Step } from "./stores";
import { PlusIcon, DeleteIcon } from "../icons/icons";
import { stat } from "fs";
export const AddBtn = () => {
	const [addStep] = StepStore((state) => ([state.increment]))
	const [Schema] = StepStore((state) => ([state.Schema]))
	const click = () => {
		addStep();
	}
	const label = (Schema == null) ? "No Schema" : "Click Here to add a new line"
	return (
		<>
			<Tooltip label={label}>
				<IconButton onClick={click} icon={<PlusIcon />} aria-label="add line" disabled={(Schema == null)} />
			</Tooltip>
		</>
	)
}

export const DeleteBtn = () => {
	const [Pop, Decrement, Count] = StepStore((state) => ([state.Pop, state.decrement, state.StepCount]))
	const click = () => {
		Pop();
		if (Count > 0) Decrement();
	}
	return (
		<IconButton onClick={click} aria-label="Delete Button" icon={<DeleteIcon />} />
	)
}

export const GenerateBtn = () => {
	const [StepCount, Steps, setCSV] = StepStore((state) => ([state.StepCount, state.Steps, state.setCSV]))
	const ParseSteps = () => {
		let csv: string[] = []
		Steps.forEach(e => {
			let str = `${e.id} - ${e.func}`
			e["args"].forEach((e) => {
				str = str.concat(` - ${e}`)
			})
			csv.push(str);
		})
		console.log(csv)
		setCSV(csv);
	}
	return (
		<Button onClick={ParseSteps} disabled={(StepCount == 0)}>
			Generate
		</Button>
	)
}

export const UploadBtn = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [File, setFile] = useState<string>()
	const [Loaded, setLoaded] = useState(false);
	const [setSchema] = StepStore((state) => ([state.setSchema]))
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
	const [StepCount] = StepStore((state) => ([state.StepCount]))
	return (
		<Button disabled={(StepCount == 0)}>
			Simulate
		</Button>
	)
}