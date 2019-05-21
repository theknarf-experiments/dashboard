import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GridLayout from 'react-grid-layout';
import { connect } from 'react-redux';
import TestComponent from './components/test';
import { addWidget } from './dashboard.ducks';

const MyFirstGrid = ({ dashboard }) => {
	const layout = dashboard;

	return <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
		<div key="a">a</div>
		<div key="b">b</div>
		<div key="c">c</div>
		<div key="d"><TestComponent /></div>
	</GridLayout>;
};

const Grid = connect(
	/* mapStateToProps */ ({ dashboard }) => ({ dashboard })
)(MyFirstGrid);

const App = ({ dispatch }) => {
	const addWidgetGithubNotification = () => {
		dispatch( addWidget() );
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
						<Dropdown.Item onClick={addWidgetGithubNotification}>Github Notifications</Dropdown.Item>
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
