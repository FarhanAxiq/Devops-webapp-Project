import React, { useEffect, useState } from 'react';
import { usePlaces } from '../hooks/usePlaces';
import { Collapse, Modal } from 'reactstrap';
import Header from './Margins/Header';
import Footer from './Margins/Footer';
import About from './About/About';
import Find from './Find/Find';
import WhereIs from './WhereIs/WhereIs';
import Planner from './Trip/Planner';
import { useToggle } from '../hooks/useToggle';
import { LOG } from '../utils/constants';
import { getOriginalServerUrl, sendAPIRequest } from '../utils/restfulAPI';

export default function Page(props) {
	const [showAbout, toggleAbout] = useToggle(false);
	const [serverSettings, processServerConfigSuccess] = useServerSettings(props.showMessage);
	const [showFind, toggleFind] = useToggle(false);
	const { places, selectedIndex, placeActions } = usePlaces();

	return (
		<>
			<Header toggleAbout={toggleAbout} closeFind={showFind} />
			<div className="body">
				<Collapse isOpen={showAbout && !showFind}>
					<About closePage={toggleAbout} />
				</Collapse>
				<Collapse isOpen={!showAbout && !showFind} data-testid="planner-collapse">
					<Planner showMessage={props.showMessage} openFind={toggleFind} places={places} selectedIndex={selectedIndex} placeActions={placeActions} serverSettings={serverSettings} />
				</Collapse>
				<Collapse isOpen={showFind} data-testid="find-collapse">
					<Find closePage={toggleFind} places={places} selectedIndex={selectedIndex} placeActions={placeActions} serverSettings={serverSettings} />
				</Collapse>
			</div>
			<Footer
				serverSettings={serverSettings}
				processServerConfigSuccess={processServerConfigSuccess}
			/>
		</>
	)
}

function useServerSettings(showMessage) {
	const [serverUrl, setServerUrl] = useState(getOriginalServerUrl());
	const [serverConfig, setServerConfig] = useState(null);

	useEffect(() => {
		sendConfigRequest();
	}, []);

	function processServerConfigSuccess(config, url) {
		LOG.info("Switching to Server:", url);
		setServerConfig(config);
		setServerUrl(url);
	}

	async function sendConfigRequest() {
		const configResponse = await sendAPIRequest({ requestType: "config" }, serverUrl);
		if (configResponse) {
			processServerConfigSuccess(configResponse, serverUrl);
		} else {
			setServerConfig(null);
			showMessage(`Config request to ${serverUrl} failed. Check the log for more details.`, "error");
		}
	}

	return [{ serverUrl: serverUrl, serverConfig: serverConfig }, processServerConfigSuccess];
}
