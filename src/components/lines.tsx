import React from "react";
import StepLine from "../stepcore/stepline";
import { StepStore } from "../stepcore/stores";

const Lines = () => {
	const [Steps] = StepStore((state) => ([state.Steps]))
	return (
		<>
			{
				Steps.map((e, i) => {
					return <StepLine key={i} />
				})
			}
		</>
	)
}

export default Lines