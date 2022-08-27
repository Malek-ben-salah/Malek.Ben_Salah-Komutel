package com.malek.demo.serviceImpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.malek.demo.model.Contact;
import com.malek.demo.repository.ContactRepository;
import com.malek.demo.service.ContactService;

@Service
@Transactional
public class ContactServiceImpl implements ContactService {

	@Autowired
	private ContactRepository contactRepository;
	
	@Override
	public Contact addContact(Contact contact) {
		System.out.println("adding contact : "+contact.getNom());
		return contactRepository.save(contact);
	}

	@Override
	public List<Contact> getAllContacts() {
		System.out.println("fetching contacts...");
		return contactRepository.findAll();
	}

}
