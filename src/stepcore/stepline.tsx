import { Flex, Input, InputGroup, InputLeftAddon, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { StepStore } from "./stores";

const StepLine = (props) => {
	const [Schema] = StepStore((state) => ([state.Schema]))
	const [Choice, setChoice] = useState<string>();
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

	return (
		<Flex gap="0.2rem" p="0.2rem">
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
						return <Input variant={"outline"} placeholder={e["Input"]} type={e["Type"]} textAlign="center" key={i} />
					})
				}
			</Flex>
		</Flex >
	)
}

export default StepLine