package com.malek.demo.service;

import java.util.List;

import com.malek.demo.model.Contact;

public interface ContactService {
	//add contact 
	Contact addContact(Contact contact);
	//get all Contacts
	List<Contact> getAllContacts();
}
