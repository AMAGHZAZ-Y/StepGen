import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import StepLine from "../stepcore/stepline";
import { StepStore } from "../stepcore/stores";

const Lines = () => {
	const [Steps] = StepStore((state) => ([state.StepCount]))
	let Indents: JSX.Element[] = [];
	for (let i = 0; i < Steps; i++) {
		Indents.push(<Flex key={i}><Text justifySelf="center" alignSelf="center" p="0.2rem">{i}</Text><StepLine step={i} /></Flex>)
	}
	return (
		<>
			{
				Indents
			}
		</>
	)
}

export default Lines