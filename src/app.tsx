import { ChakraProvider, Grid, GridItem, Divider } from "@chakra-ui/react"
import React from "react"
import Lines from "./components/lines"
import Output from "./components/output"
import ToolKit from "./components/toolkit"
import TopBar from "./components/topbar"
import { StepStore } from "./stepcore/stores"

const App = () => {
	StepStore.setState(() => ({ Schema: JSON.parse(localStorage.getItem("schema") as string) }))
	return (
		<ChakraProvider>
			<TopBar />
			<ToolKit />
			<Grid templateColumns="1fr 1fr" gap="1rem">
				<GridItem colStart={1}>
					<Lines />
				</GridItem>
				<GridItem colStart={2}>
					<Output />
				</GridItem>
			</Grid>
		</ChakraProvider>
	)
}

export default App