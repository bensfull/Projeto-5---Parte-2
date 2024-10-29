import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ContactItem from './ContactItem';
import ContactForm from './ContactForm';

const ContactList: React.FC = () => {
    const contacts = useSelector((state: RootState) => state.contacts.contacts);
    const [editingContact, setEditingContact] = useState<{ id: string; name: string; email: string; phone: string } | undefined>(undefined);

    return (
    <div>
        <ContactForm contactToEdit={editingContact} />
        {contacts.map(contact => (
        <ContactItem
            key={contact.id}
            {...contact}
            onEdit={() => setEditingContact(contact)}
        />
        ))}
    </div>
    );
};

export default ContactList;
