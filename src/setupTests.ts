// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import React from 'react';

// Fix broken layout effects on testing environments
// eslint-disable-next-line import/no-named-as-default-member
React.useLayoutEffect = React.useEffect;

configure({ adapter: new Adapter() });
