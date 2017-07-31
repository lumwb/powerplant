import React from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import { ButtonGroup, Button, Glyphicon } from 'react-bootstrap';

const ItemHeader = ({ name, editLink, deleteAction }) =>
	<div>
		{name}
		<ButtonGroup className="pull-right">
			{editLink &&
				<LinkContainer to={editLink}>
					<Button>
						<Glyphicon glyph="edit" />
					</Button>
				</LinkContainer>}
			{deleteAction &&
				<Button onClick={deleteAction}>
					<Glyphicon glyph="trash" />
				</Button>}
		</ButtonGroup>
	</div>;

ItemHeader.propTypes = {
	name: PropTypes.string,
	editLink: PropTypes.string,
	deleteAction: PropTypes.func
};

export default ItemHeader;