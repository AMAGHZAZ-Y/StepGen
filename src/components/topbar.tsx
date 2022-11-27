import { Flex, IconButton, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { SunIcon, MoonIcon } from "../icons/icons";
const TopBar = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<Flex dir="row" align="center" justifyContent="space-between" p="0.5rem" bg={"blackAlpha.300"}>
			<Text fontSize="2xl" fontWeight="bold">STEPGEN</Text>
			<IconButton onClick={toggleColorMode} aria-label="light switch" icon={colorMode == "dark" ? <SunIcon /> : <MoonIcon />} />
		</Flex>
	)
}
export default TopBar