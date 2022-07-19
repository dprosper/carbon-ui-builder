import React from 'react';
import { UIAccordion } from './components/ui-accordion';
import { UIAccordionItem } from './components/ui-accordion-item';
import { UIBreadcrumb } from './components/ui-breadcrumb';
import { UIBreadcrumbItem } from './components/ui-breadcrumb-item';
import { UIButton } from './components/ui-button';
import { UIColumn } from './components/ui-column';
import { UIGrid } from './components/ui-grid';
import { UIRow } from './components/ui-row';

export const setItemInState = (item: any, state: any, setState: (state: any) => void) => {
	const itemIndex = state.items.findIndex((i: any) => i.id === item.id);

	setState({
		...state,
		items: [
			...state.items.slice(0, itemIndex),
			item,
			...state.items.slice(itemIndex + 1)
		]
	});
};

export const renderComponents = (state: any, setState: (state: any) => void, setGlobalState: (state: any) => void) => {
	switch (state.type) {
		case 'accordion':
			return <UIAccordion key={state.id} state={state} setState={setState} setGlobalState={setGlobalState} />;

		case 'accordion-item':
			return <UIAccordionItem key={state.id} state={state} setState={setState} setGlobalState={setGlobalState} />;

		case 'button':
			return <UIButton key={state.id} state={state} setState={setState} setGlobalState={setGlobalState} />;

		case 'breadcrumb':
			return <UIBreadcrumb key={state.id} state={state} setState={setState} setGlobalState={setGlobalState} />;

		case 'breadcrumb-item':
			return <UIBreadcrumbItem key={state.id} state={state} setState={setState} setGlobalState={setGlobalState} />;

		case 'grid':
			return <UIGrid key={state.id} state={state} setState={setState} setGlobalState={setGlobalState} />;

		case 'row':
			return <UIRow key={state.id} state={state} setState={setState} setGlobalState={setGlobalState} />;

		case 'column':
			return <UIColumn key={state.id} state={state} setState={setState} setGlobalState={setGlobalState} />;

		default:
			break;
	}

	if (state.items && Array.isArray(state.items)) {
		// setItem is a setState for that particular item
		const setItem = (item: any) => setItemInState(item, state, setState);

		return state.items.map((item: any) => renderComponents(item, setItem, setState));
	}
};
