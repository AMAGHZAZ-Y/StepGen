import { Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import StepLine from "../stepcore/stepline";
import { StepStore } from "../stepcore/stores";

const Lines = () => {
	const [Steps] = StepStore((state) => ([state.StepCount]))
	let Indents: JSX.Element[] = [];
	for (let i = 0; i < Steps; i++) {
		Indents.push(
			<Grid key={i} templateColumns="10% 90% ">
				<Text justifySelf="center" alignSelf="center" p="0.2rem">{i}</Text><StepLine step={i} />
			</Grid>
		)
	}
	return (
		<Flex direction="column" bg="blackAlpha.200" height="70vh" maxHeight="70vh" p="1rem" overflow={"auto"} >
			{
				Indents
			}
		</Flex>
	)
}

export default Lines