import React from 'react';

import { Container, GlobalLayout } from './styles';

function NoLayout({ children }) {
	return (
		<GlobalLayout>
			<Container>{children}</Container>
		</GlobalLayout>
	);
}

export default NoLayout;