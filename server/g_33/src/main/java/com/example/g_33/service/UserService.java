package com.example.g_33.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.g_33.model.User;
import com.example.g_33.repository.UserRepository;

@Service
public class UserService {
    int currentID;

    @Autowired
    UserRepository userRepository;

    public UserService() {
        super();
        // TODO Auto-generated constructor stub
    }

    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }

    public void addUser(User newUser) {
        userRepository.save(newUser);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User findByUserID(int userID) {
        return userRepository.findByUserID(userID);
    }

    public User updateStarsByUserID(int userID, User user) {
        User existingUser = userRepository.findByUserID(userID);
        existingUser.updateStars(user.getStars());
        return userRepository.save(existingUser);
    }

    public User updateProfilePicByUserID(int userID, User user) {
        User existingUser = userRepository.findByUserID(userID);
        existingUser.setProfilePic(user.getProfilePic());
        return userRepository.save(existingUser);
    }

    public User updateNameByUserID(int userID, User user) {
        User existingUser = userRepository.findByUserID(userID);
        existingUser.setName(user.getName());
        return userRepository.save(existingUser);
    }

}
