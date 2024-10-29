import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../store/contactsSlice';
import styled from 'styled-components';

const ContactContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 10px; 
    margin-bottom: 8px;
    border: 1px solid #ccc;
    border-radius: 5px; 
    background-color: #f9f9f9; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
`;

const ContactInfo = styled.div`
    flex-grow: 1; 
    margin-right: 10px; 
    `;

    const Button = styled.button`
    padding: 5px 10px; 
    border: none; 
    border-radius: 3px; 
    cursor: pointer; 
    transition: background-color 0.3s; 

    &.edit {
        background-color: #4CAF50; 
        color: white; 
    }

    &.remove {
        background-color: #f44336;
        color: white; 
    }

    &:hover.edit {
        background-color: #45a049; 

    &:hover.remove {
        background-color: #e53935; 
    }
`;

interface ContactItemProps {
    id: string;
    name: string;
    email: string;
    phone: string;
    onEdit: () => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ id, name, email, phone, onEdit }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContact(id));
};

    return (
    <ContactContainer>
        <ContactInfo>
            <strong>{name}</strong> - {email} - {phone}
        </ContactInfo>
        <Button className="edit" onClick={onEdit}>Editar</Button>
        <Button className="remove" onClick={handleRemove}>Remover</Button>
        </ContactContainer>
    );
};

export default ContactItem;
