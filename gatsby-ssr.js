import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Theme from './src/themes/theme';

export const wrapRootElement = ({ element }) => (
	<ThemeProvider theme={Theme}>
		{/* <GlobalStyles /> */}
		{element}
	</ThemeProvider>
);
