package com.example.g_33.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.g_33.dto.UserPostDTO;
import com.example.g_33.model.User;
import com.example.g_33.service.UserService;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/user")
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @PostMapping("/user")
    public ResponseEntity<Optional<User>> addUser(@RequestBody UserPostDTO newUserDTO) {

        if (newUserDTO.getName() == null ||
                newUserDTO.getEmail() == null ||
                newUserDTO.getPassword() == null) {
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
        }

        User newUser = new User(newUserDTO.getID(), newUserDTO.getName(),
                newUserDTO.getEmail(), newUserDTO.getPassword(), newUserDTO.getProfilePic(), newUserDTO.getStars());
        userService.addUser(newUser);
        return new ResponseEntity<>(Optional.ofNullable(newUser), HttpStatus.CREATED);

    }

    // Get User by Email
    @GetMapping("/user/findByEmail")
    public Optional<User> getUserByEmail(@RequestParam String email) {
        return Optional.ofNullable(userService.findByEmail(email));
    }

    // Get User by ID
    @GetMapping("/user/{userID}")
    public User getUserByUserID(@PathVariable(value = "userID") int userID) {
        return userService.findByUserID(userID);
    }

    // Update Stars of user
    @PutMapping("/user/{userID}")
    public User updateStarsByUserID(@PathVariable int userID, @RequestBody User user) {
        return userService.updateStarsByUserID(userID, user);
    }

    // Update profile pic
    @PutMapping("/user/pic/{userID}")
    public User updateProfilePicByUserID(@PathVariable int userID, @RequestBody User user) {
        return userService.updateProfilePicByUserID(userID, user);
    }

    // Update username
    @PutMapping("/user/name/{userID}")
    public User updateNameByUserID(@PathVariable int userID, @RequestBody User user) {
        return userService.updateNameByUserID(userID, user);
    }

}
