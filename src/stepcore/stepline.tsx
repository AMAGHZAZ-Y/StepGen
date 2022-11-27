import { Flex, Input, InputGroup, InputLeftAddon, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {StepStore } from "./stores";

const StepLine = (props) => {
		const [Schema] = StepStore((state)=>([state.Schema]))
		const [Choice, setChoice] = useState<string>();
		const Funcs = [];
		let Args = [];
		Schema.forEach((e)=>{
			Funcs.push(e["Func"]);
		})
		useEffect(()=>{
			console.log(Args)
		})
		
		Schema.forEach((e)=>{
			if (Choice == e["Func"]){
				Args = e["Args"]
			}
		})

		return (
			<Flex>
				<Select placeholder="Select Function" value={Choice} onChange={(e)=>{setChoice(e.target.value)}}>
					{
						Funcs.map((e,i)=>{
							return <option value={e}>{e}</option>
						})
					}
				</Select>
				<InputGroup>
					{
						Args.map((e,i)=>{
							return <Input placeholder={e["Input"]} type={e["Type"]} textAlign="center"/>
						})
					}
				</InputGroup>
			</Flex>
		)
}

export default StepLine