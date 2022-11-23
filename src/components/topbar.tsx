import { Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { SunIcon } from "../icons/icons";
const TopBar = () => {
	return (
		<Flex dir="row" justify="space-evenly" align="center" p="0.5rem">
			<Text fontSize="2xl">UNIMAKERS</Text>
			<Text fontSize="2xl" fontWeight="bold">STEPGEN</Text>
			<IconButton aria-label="light switch" icon={<SunIcon />} />
		</Flex>
	)
}
export default TopBar