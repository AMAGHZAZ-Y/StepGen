import { TabList, Tabs, Textarea, Tab, TabPanels, TabPanel, Flex } from "@chakra-ui/react";
import React from "react";
import { StepStore } from "../stepcore/stores";

const Output = () => {
	const [Steps, CSV] = StepStore((state) => ([state.Steps, state.CSV]))

	return (
		<Tabs>
			<TabList>
				<Tab>
					Output
				</Tab>
				<Tab>
					Simulation
				</Tab>
				<Tab>
					Visual Nodes
				</Tab>
				<Tab>
					RAW
				</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<Flex direction={"column"}>{CSV}</Flex>
				</TabPanel>
				<TabPanel>
					<div>Simulation goes in here...</div>
				</TabPanel>
				<TabPanel>
					<iframe src="https://giphy.com/embed/FbPsiH5HTH1Di" width="480" height="445" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/long-far-FbPsiH5HTH1Di">via GIPHY</a></p>
				</TabPanel>
				<TabPanel>
					<Textarea value={JSON.stringify(Steps)} />
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
}
export default Output