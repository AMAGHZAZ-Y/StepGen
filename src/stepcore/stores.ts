import create from "zustand";

export interface Step {
	id: number,
	func: string,
	args: string[],
};

interface StepState {
	Schema: [],
	Steps: Step[],
	setSchema: (newSchema: []) => void,
	Push: (step: Step) => any,
	Pop: () => any,
}

export const StepStore = create<StepState>((set, get) => (
	{
		Schema: [],
		Steps: [],
		setSchema: (newSchema) => set(() => ({ Schema: newSchema })),
		Push: (step) => set((state) => ({ Steps: [...state.Steps, step] })),
		Pop: () => set((state) => ({ Steps: state.Steps.splice(1) }))
	}
))