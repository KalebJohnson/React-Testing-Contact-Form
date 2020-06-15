import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('test render', () => {
    render(<ContactForm />);
})

test("renders without errors", () => {
    render(<ContactForm />);
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last Name/i)
    const email = screen.getByLabelText(/email/i)

    expect(firstName).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    expect(email).toBeInTheDocument()

    fireEvent.change(firstName, { target: { value: 'Kaleb' } })
    fireEvent.change(lastName, { target: { value: 'Johnson' } })
    fireEvent.change(email, { target: { value: 'KJ45@yahoo.com' } })

    expect(firstName).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(firstName.value).toContain('Kaleb')
});

test('Changing values', () => {
    render(<ContactForm />)

    const firstName = screen.getByLabelText(/first name/i)

    fireEvent.change(firstName, { target: { value: 'Kaleb' } });

    expect(firstName).toBeInTheDocument('Kaleb');

    fireEvent.click(screen.getByTestId(/submit/i));

})