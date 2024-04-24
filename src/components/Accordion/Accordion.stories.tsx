import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Accordion } from './Accordion';
import { Component, useState } from 'react';



const meta: Meta<typeof Accordion> = {
	component: Accordion,
};

// export default meta;


export default {
	component: Accordion
}


const onChangeHandler = action('on change')

export const CollapsedAccordion = () => {
	return <Accordion titleValue='CollapsedAccordion' collapsed={true} onClick={onChangeHandler} />

}

export const OpenedAccordion = () => {
	return <Accordion titleValue='OpenedAccordion' collapsed={false} onClick={() => { }} />
}

export const AccordionDemo = () => {
	const [collapsed, setCollapsed] = useState(false)
	return <Accordion titleValue='AccordionDemo' collapsed={collapsed} onClick={() => { setCollapsed(!collapsed) }} />
}