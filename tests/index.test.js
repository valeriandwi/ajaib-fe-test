import React from 'react';
import {screen,render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../src/pages';
import rootReducer from '../src/app/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from "redux-thunk";
import { Provider } from 'react-redux';
import './matchMedia.mock';

function renderWithProviders(ui, { reduxState } = {}) {
    const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
    const store = configureStore({reducer : rootReducer},composedEnhancer);
    return render(<Provider store={store}>{ui}</Provider>);
}

test("render successfully", () => {
    renderWithProviders(<Home/>)
})

test("on click reset filter", () => {
    renderWithProviders(<Home/>);
    const btnPagination = screen.getByTestId("reset-filter");
    userEvent.click(btnPagination);
})