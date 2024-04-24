import React, { useState } from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { Rating, RatingValueType } from './components/Rating/Rating';
import { OnOff } from './components/UnControlledOnOff/OnOff';
import { UnControlledAccordion2 } from './components/UnControlledAccordion/UnControlledAccordion2';
import { UnControlledRating } from './components/UnControlledRating/UnControlledRating';
import { ControlledOnOff } from './components/OnOff/ControlledOnOff';
// import { Cube } from './OnOff';

function App() {
	let [ratingValue, setRatingValue] = useState<RatingValueType>(1)
	let [accordionStatus, setAccordionStatus] = useState<boolean>(true)
	let [on, setOn] = useState(false)

	return (
		<div className="App">


			<Accordion titleValue='Title2' collapsed={accordionStatus} onClick={() => setAccordionStatus(!accordionStatus)} />
			{/* <ControlledOnOff on={on} setOn={setOn} /> */}
			<OnOff onChange={setOn} /> {on.toString()}
		</div>
	);
}

export default App;
