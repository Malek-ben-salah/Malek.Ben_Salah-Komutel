package com.malek.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.malek.demo.model.Contact;
import com.malek.demo.service.ContactService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/contacts")
public class ContactController {

	@Autowired
	private ContactService contactService;
	
	@PostMapping
	public ResponseEntity<Contact> saveContact(@RequestBody Contact contact){
		return ResponseEntity.ok().body(contactService.addContact(contact));
	}
	
	@GetMapping
	public ResponseEntity<List<Contact>> getContacts(){
		return ResponseEntity.ok(contactService.getAllContacts());
	}
}
