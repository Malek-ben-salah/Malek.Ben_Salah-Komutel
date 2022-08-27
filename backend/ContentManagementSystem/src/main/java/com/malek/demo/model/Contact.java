package com.malek.demo.model;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Contact {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nom;
	private String adress;
	private String ville;
	private String pays;
	private int telephone;
	private Date debut_de_contrat;

	public Contact() {
		super();
	}

	public Contact(String nom, String adress, String ville, String pays, int telephone, Date debut_de_contrat) {
		super();
		this.nom = nom;
		this.adress = adress;
		this.ville = ville;
		this.pays = pays;
		this.telephone = telephone;
		this.debut_de_contrat = debut_de_contrat;
	}

	public Long getId() {
		return id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getAdress() {
		return adress;
	}

	public void setAdress(String adress) {
		this.adress = adress;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public String getPays() {
		return pays;
	}

	public void setPays(String pays) {
		this.pays = pays;
	}

	public int getTelephone() {
		return telephone;
	}

	public void setTelephone(int telephone) {
		this.telephone = telephone;
	}

	public Date getDebut_de_contrat() {
		return debut_de_contrat;
	}

	public void setDebut_de_contrat(Date debut_de_contrat) {
		this.debut_de_contrat = debut_de_contrat;
	}

	@Override
	public String toString() {
		return "Contact [id=" + id + ", Nom=" + nom + ", adress=" + adress + ", ville=" + ville + ", pays=" + pays
				+ ", telephone=" + telephone + ", debut_de_contrat=" + debut_de_contrat + "]";
	}

}
