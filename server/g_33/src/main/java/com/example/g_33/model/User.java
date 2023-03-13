package com.example.g_33.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "userInfo")
@EntityListeners(AuditingEntityListener.class)
public class User implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int userID;

    @NotBlank
    String name;

    @NotBlank
    String email;

    @NotBlank
    String password;

    String profilePic;
    int stars;

    public User() {

    }

    public User(int userID, String name, String email, String password, String profilePic, int stars) {
        super();
        this.userID = userID;
        this.name = name;
        this.email = email;
        this.password = password;
        this.profilePic = profilePic;
        this.stars = stars;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getProfilePic() {
        return this.profilePic;
    }

    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
    }

    public int getStars() {
        return this.stars;
    }

    public void setStars(int stars) {
        this.stars = stars;
    }

    public void updateStars(int stars) {
        this.stars = getStars() + stars;
    }

    @Override
    public String toString() {
        return "User [id=" + userID + ", name=" + name + ", email=" + email + ", password=" + password + "]";
    }

}