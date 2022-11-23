import { Flex } from "@chakra-ui/react";
import React from "react";
import { AddBtn, DeleteBtn, GenerateBtn, SimulateBtn, UploadBtn } from "../stepcore/buttons";

const ToolKit = () => {
	return (
		<Flex dir="row" p="0.5rem">
			<AddBtn />
			<DeleteBtn />
			<UploadBtn />
			<GenerateBtn />
			<SimulateBtn />
		</Flex>
	)
}
export default ToolKit