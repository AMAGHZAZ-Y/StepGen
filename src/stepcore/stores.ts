import create from "zustand";

export interface Step {
	id: number,
	func: string,
	args: string[],
};

interface StepState {
	StepCount: number,
	Schema: [],
	Steps: Step[],
	increment: () => void,
	decrement: () => void,
	setSchema: (newSchema: []) => void,
	Push: (step: Step) => any,
	Pop: () => any,
}

export const StepStore = create<StepState>((set, get) => (
	{
		StepCount: 0,
		Schema: [],
		Steps: [],
		increment: () => set((state) => ({ StepCount: state.StepCount + 1 })),
		decrement: () => set((state) => ({ StepCount: state.StepCount - 1 })),
		setSchema: (newSchema) => set(() => ({ Schema: newSchema })),
		Push: (step) => set((state) => ({ Steps: [...state.Steps, step] })),
		Pop: () => set((state) => ({ Steps: state.Steps.splice(1) }))
	}
))