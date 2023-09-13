import React from 'react';

import { Container,Ctn1,Ctn2,ChildCtn1,ChildCtn2 ,InputCtn,Button} from './styles'
import Header from './Header'

function Homepage() {

	return (
		<Container>
			<Header/>
			<Ctn1>
				<ChildCtn1>
						<span><strong>NX Wave.</strong> The next-gen credit card for those who love rewards.</span>
				</ChildCtn1>
				<ChildCtn2>
					<div style={{width:'70%'}}>
						<img src='https://www.uni.cards/images/nx-wave/nx_wave_hero.png' alt='loading'/>
					</div>
				</ChildCtn2>
			</Ctn1>
			<Ctn2>
				<InputCtn placeholder='Enter Phone Number'/>
				<Button>Apply</Button>
			</Ctn2>
		</Container>
	);
}

export default Homepage;