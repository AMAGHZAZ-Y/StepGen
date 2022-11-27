import { Textarea } from "@chakra-ui/react";
import React from "react";
import { StepStore } from "../stepcore/stores";

const Output = () => {
	const [Steps] = StepStore((state) => ([state.Steps]))

	return (
		<Textarea defaultValue="Hello" value={JSON.stringify(Steps)} />
	)
}
export default Output