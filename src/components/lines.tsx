import React, { useEffect, useState } from "react";
import StepLine from "../stepcore/stepline";
import { StepStore } from "../stepcore/stores";

const Lines = () => {
	const [Steps, setSteps] = StepStore((state) => ([state.Steps, state.Push]))
	useEffect(()=>{
		console.log(Steps)
	})
	return (
		<>
			{
				Steps.map((e,i)=>{
					return <StepLine/>
				})
			}
		</>
	)
}

export default Lines