

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // To wrap around our component for navigation context
import * as router from 'react-router'
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';
import '@testing-library/jest-dom';

// Mocks
jest.mock('../hooks/AuthContext', () => ({
    useAuth: () => ({
        login: jest.fn().mockResolvedValue('Logged In')
    })
}));

const navigate = jest.fn()

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

describe('LoginForm Component', () => {
    test('renders correctly', () => {
        render(<LoginForm />, { wrapper: BrowserRouter });
        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    });

    test('allows entering username and password', async () => {
        render(<LoginForm />, { wrapper: BrowserRouter });
        await userEvent.type(screen.getByLabelText(/username/i), 'testuser');
        await userEvent.type(screen.getByLabelText(/password/i), 'password');
        expect(screen.getByLabelText(/username/i)).toHaveValue('testuser');
        expect(screen.getByLabelText(/password/i)).toHaveValue('password');
    });

    test('submits the form and navigates on successful login', async () => {
        render(<LoginForm />, { wrapper: BrowserRouter });

        await userEvent.type(screen.getByLabelText(/username/i), 'testuser');
        await userEvent.type(screen.getByLabelText(/password/i), 'password');
        await fireEvent.submit(screen.getByRole('button', { name: /login/i }));

        expect(navigate).toHaveBeenCalledWith('/add-sock');
    });
});

