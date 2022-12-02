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
	CSV: string[],
	increment: () => void,
	decrement: () => void,
	setSchema: (newSchema: []) => void,
	Pop: () => any,
	setSteps: (steps: Step[]) => any,
	setCSV: (newCSV: string[]) => void
}

export const StepStore = create<StepState>((set, get) => (
	{
		StepCount: 0,
		Schema: [],
		Steps: [],
		CSV: [],
		increment: () => set((state) => ({ StepCount: state.StepCount + 1 })),
		decrement: () => set((state) => ({ StepCount: state.StepCount - 1 })),
		setSchema: (newSchema) => set(() => ({ Schema: newSchema })),
		Pop: () => set((state) => ({ Steps: state.Steps.splice(1) })),
		setSteps: (steps) => set(() => ({ Steps: steps })),
		setCSV: (newCSV) => set(() => ({ CSV: newCSV }))
	}
))