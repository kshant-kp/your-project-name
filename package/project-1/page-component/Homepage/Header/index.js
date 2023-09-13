import React from 'react';

import {Container,IconCtn,Ctn1,Ctn2,Button} from './styles'
import LogoIcon from '../../../assets/icons/unilogo.svg'

function Header() {

	return (
		<Container>
			<Ctn1>
				<IconCtn>
					<LogoIcon/>
				</IconCtn>
			</Ctn1>
			<Ctn2>
				<Button>
					Uni PayCheck
				</Button>
			</Ctn2>
		</Container>
	);
}

export default Header;