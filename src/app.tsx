import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import Lines from "./components/lines"
import ToolKit from "./components/toolkit"
import TopBar from "./components/topbar"

const App = () => {
	return (
		<ChakraProvider>
			<TopBar />
			<ToolKit />
			<Lines />
		</ChakraProvider>
	)
}

export default App