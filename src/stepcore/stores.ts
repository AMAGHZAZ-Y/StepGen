import create from "zustand";

export type Step = {
	id: number,
	func: string,
	args: string[],
};

interface StepState {
	Schema: [],
	ParsedSchema: [],
	StepCount: number,
	Steps: Step[],
	Push: (step: Step) => any,
	Pop: () => any,

}

export const Schema = [];

export const StepStore = create<StepState>((set, get) => (
	{
		Schema: [],
		ParsedSchema: [],
		StepCount: 0,
		Steps: [],
		Push: (step) => set((state) => ({ Steps: [...state.Steps, step] })),
		Pop: () => set((state) => ({ Steps: state.Steps.splice(1) }))
	}
))