import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import ToolKit from "./components/toolkit"
import TopBar from "./components/topbar"

const App = () => {
	return (
		<ChakraProvider>
			<TopBar />
			<ToolKit />
		</ChakraProvider>
	)
}

export default App