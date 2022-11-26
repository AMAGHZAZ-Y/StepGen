import { Flex, Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { Schema } from "./stores";

const StepLine = () => {
	let [Func, setFunc] = useState("");
	let [Opts, setOpts] = useState(Element[""]);
	if (process.env.NODE_ENV !== 'production') {
		console.log("new StepLine")
	}
	const handleChange = (event) => {
		setFunc(event.target.value);
		let opts = Options()
		setOpts(opts)
	}
	const Options = () => {
		let opts: JSX.Element[] = [];
		Schema.forEach(e => {
			let opt = <option value={e}>{e}</ option>
			opts.push(opt)
		});
		return opts
	}
	const Args = () => {
		let args: JSX.Element[] = []
		Schema[Func].forEach((e) => {
			if (e == "output") return;
			let arg = <Input type={e} />
			args.push(arg);
		})
	}
	return (
		<Flex dir="row">
			<Select placeholder="Select Function" value={Func} onChange={handleChange}>
				{
					Opts?.map((e) => {
						return e
					})
				}
			</Select>
			{

			}
		</Flex>
	)
}

export default StepLine