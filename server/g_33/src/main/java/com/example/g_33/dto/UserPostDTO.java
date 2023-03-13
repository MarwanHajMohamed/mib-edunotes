package com.example.g_33.dto;

public class UserPostDTO {
    int id;
    String name;
    String email;
    String password;
    String profilePic;
    int stars;

    public UserPostDTO(int id, String name, String email, String password, String profilePic, int stars) {
        super();
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.profilePic = profilePic;
        this.stars = stars;
    }

    public int getID() {
        return id;
    }

    public void setID(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

}
