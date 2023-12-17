package com.example.Grievance.model;


import jakarta.persistence.*;

@Entity
@Table(name = "")
public class Login {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "Email_Id")
	private static String Email_Id;

    @Column(name = "Password")
	private String password;

	public Login() {

	}
    public Login(String Email_Id ,String Password){
		this.Email_Id=Email_Id;
		this.password=Password;

	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getEmail_Id() {
		return Email_Id;
	}
	public void setEmail_Id(String email_Id) {
		Email_Id = email_Id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Login [id=" + id + ", Email_Id=" + Email_Id + ", password=" + password + "]";
	}

	
}