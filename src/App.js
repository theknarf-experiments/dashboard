import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import GridLayout from 'react-grid-layout';
import { connect } from 'react-redux';
import TestComponent from './components/test';
import { addWidget, removeWidget, layoutChange } from './dashboard.ducks';

const Tmp = () => <div> Tmp component </div>;

const widgetTypes = [
	{ name: 'Github Notifications', id: 'github-notifications', component: Tmp },
	{ name: 'TestComponent', id: 'test-component', component: TestComponent },
];

const MyFirstGrid = ({ dashboard, dispatch }) => {
	const layoutChangeDispatch = newLayout =>
		dispatch(layoutChange( newLayout ));
	const removeWidgetDispatch = i =>
		dispatch(removeWidget( i ));

	return <GridLayout
		className="layout"
		layout={dashboard}
		cols={12}
		rowHeight={30}
		width={1200}
		onLayoutChange={layoutChangeDispatch}
		>
	{ dashboard.map( ({ i, id }) => {
		const Component = widgetTypes.find( widget => widget.id === id ).component;
		return <div key={i}>
			<Button onClick={() => removeWidgetDispatch(i)}> Close </Button>
			<Component />
		</div>;
	}) }
	</GridLayout>;
};

const Grid = connect(
	/* mapStateToProps */ ({ dashboard }) => ({ dashboard })
)(MyFirstGrid);

const App = ({ dispatch }) => {
	const addWidgetDispatch = ({ id, component }) => {
		dispatch( addWidget(id, component) );
	};

	return <Container>
		<Row>
			<Col>
				<h1> Dashboard </h1>
			</Col>
			<Col>
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Add Widget
					</Dropdown.Toggle>

					<Dropdown.Menu>
					{ widgetTypes.map( widget =>
						<Dropdown.Item onClick={() => addWidgetDispatch(widget)} key={widget.id}>{ widget.name }</Dropdown.Item>
					)}
					</Dropdown.Menu>
				</Dropdown>
			</Col>
		</Row>
		<Row>
			<Col>
				<Grid />
			</Col>
		</Row>
	</Container>;
}

export default connect()(App);
