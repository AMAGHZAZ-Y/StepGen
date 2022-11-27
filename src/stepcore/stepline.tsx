import { Flex, Input, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {StepStore } from "./stores";

const StepLine = (props) => {
		const [Steps, Schema] = StepStore((state)=>([state.Steps, state.Schema]))
		const [Choice, setChoice] = useState<string>();
		const Funcs = [];
		const Args = [];
		Schema.forEach((e)=>{
			Funcs.push(e["Func"]);
		})
		Schema.forEach((e)=>{
			Args.push(e["Args"]);
		})
		useEffect(()=>{
			console.log(Choice)
		})
		return (
			<>
				<Select placeholder="Select Function" value={Choice} onChange={(e)=>{setChoice(e.target.value)}}>
					{
						Funcs.map((e,i)=>{
							return <option value={e}>{e}</option>
						})
					}
				</Select>

			</>
		)
}

export default StepLine