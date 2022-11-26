
import { StepStore } from "./stores";

export const ParseSchema = () => {
	let schema = StepStore.getState().Schema;
	let parsed = [];
	schema.map((e, i) => {
		let obj = (e["Func"] == "Move") ? e[i] : null
	})
}