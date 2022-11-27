import { TabList, Tabs, Textarea, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import React from "react";
import { StepStore } from "../stepcore/stores";

const Output = () => {
	const [Steps] = StepStore((state) => ([state.Steps]))

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
			</TabList>
			<TabPanels>
				<TabPanel>
					<div>CSV output goes here...</div>
					<div>+ Button to download it</div>
				</TabPanel>
				<TabPanel>
					<div>Simulation goes in here...</div>
				</TabPanel>
				<TabPanel>
					<iframe src="https://giphy.com/embed/FbPsiH5HTH1Di" width="480" height="445" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/long-far-FbPsiH5HTH1Di">via GIPHY</a></p>
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
}
export default Output