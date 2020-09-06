import React from 'react';
import { Box, Button, Heading } from 'grommet';
import { Notification } from 'grommet-icons';

const AppBar = (props) => (
	<Box
		tag='header'
		direction='row'
		align='center'
		justify='between'
		background='brand'
		pad={{ left: 'medium', right: 'small', vertical: 'small' }}
		elevation='medium'
		style={{ zIndex: '1' }}
		{...props}
	/>
);

function NavBar() {
	return (
		<AppBar>
			<Heading level='3' margin='none'>
				Portfolio
			</Heading>
			<Button
				icon={<Notification />}
			/>
		</AppBar>
        
	);
}

export default NavBar;
