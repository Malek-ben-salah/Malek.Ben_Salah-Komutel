package com.malek.demo;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Date;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.malek.demo.model.Contact;
import com.malek.demo.repository.ContactRepository;

@SpringBootTest
class ContentManagementSystemApplicationTests {

	@Autowired
	private ContactRepository contactRepository;
	
	@Test
	void contextLoads() {
		Contact contact = new Contact("test", "test", "test", "test", 25698712, new Date());
		contactRepository.save(contact);
		
		Contact found = contactRepository.findByNom(contact.getNom());
		
		assertThat(found.getNom()).isEqualTo(contact.getNom());
	}

}
