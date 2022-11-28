import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import StepLine from "../stepcore/stepline";
import { StepStore } from "../stepcore/stores";

const Lines = () => {
	const [Steps] = StepStore((state) => ([state.Steps]))
	return (
		<>
			{
				Steps.map((e, i) => {
					return (
						<Flex key={i}>
							<Text justifySelf="center" alignSelf="center" p="0.2rem">{i}</Text>
							<StepLine step={i} />
						</Flex>
					)
				})
			}
		</>
	)
}

export default Lines