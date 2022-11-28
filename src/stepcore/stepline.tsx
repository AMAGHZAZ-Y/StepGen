import { Button, Flex, Input, InputGroup, InputLeftAddon, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Step, StepStore } from "./stores";

const StepLine = (props) => {
	const [Schema] = StepStore((state) => ([state.Schema]))
	const [Steps, setSteps] = StepStore((state) => ([state.Steps, state.setSteps]))
	const [Choice, setChoice] = useState<string>();
	const [Step, setStep] = useState<Step>()
	const Funcs = [];
	let Args = [];
	Schema.forEach((e) => {
		Funcs.push(e["Func"]);
	})
	Schema.forEach((e) => {
		if (Choice == e["Func"]) {
			Args = e["Args"]
		}
	})

	const check = () => {
		let args: string[] = [];
		let steps = [...Steps];
		let inputs = document.getElementById(props.step as string)?.querySelectorAll("input")
		inputs?.forEach((e) => {
			if (e.value) args.push(e.value)
		})
		setStep({
			id: props.step,
			func: Choice as string,
			args: args
		})
		steps[props.step] = Step as Step;
		setSteps(steps);
	}

	return (
		<Flex gap="0.2rem" p="0.2rem" onChange={check} id={props.step}>
			<Select placeholder="Select Function" value={Choice} onChange={(e) => { setChoice(e.target.value) }} variant={"filled"}>
				{
					Funcs.map((e, i) => {
						return <option value={e} key={i}>{e}</option>
					})
				}
			</Select>
			<Flex gap="0.2rem">
				{
					Args.map((e, i) => {
						return <Input name="inputline" variant={"outline"} placeholder={e["Input"]} type={e["Type"]} textAlign="center" key={i} />
					})
				}
			</Flex>
		</Flex >
	)
}

export default StepLine