import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../store/contactsSlice';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    gap: 8px;
    margin-bottom: 16px;
    background-color: #f9f9f9;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    

`;


const InputContainer = styled.div`
    display: flex;
    gap: 8px;
`;

const Input = styled.input`
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
    width: 100%;
    max-width: 200px;
    &:focus {
        border-color: #010bff;
}
`;

const Button = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
}
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
`;

interface ContactFormProps {
    contactToEdit?: { id: string; name: string; email: string; phone: string };
}

const ContactForm: React.FC<ContactFormProps> = ({ contactToEdit }) => {
    const [name, setName] = useState(contactToEdit?.name || '');
    const [email, setEmail] = useState(contactToEdit?.email || '');
    const [phone, setPhone] = useState(contactToEdit?.phone || '');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

const handleSubmit = () => {
    if (!name || !email || !phone) {
        setError('Por favor, preencha todos os campos antes de adicionar.');
        return;
    }

    const contact = {
        id: contactToEdit?.id || uuidv4(),
        name,
        email,
        phone,
    };

    if (contactToEdit) {
        dispatch(editContact(contact));
    } else {
        dispatch(addContact(contact));
    }

    setName('');
    setEmail('');
    setPhone('');
    setError('');
};

    return (
    <FormContainer>
        <InputContainer>
        <Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <Input
            type="tel"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
        />
        <Button onClick={handleSubmit}>
            {contactToEdit ? 'Editar Contato' : 'Adicionar Contato'}
        </Button>
        </InputContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormContainer>
  );
};

export default ContactForm;
