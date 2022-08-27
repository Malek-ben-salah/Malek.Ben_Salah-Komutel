package com.malek.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.malek.demo.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {

	Contact findByNom(String nom);
}
