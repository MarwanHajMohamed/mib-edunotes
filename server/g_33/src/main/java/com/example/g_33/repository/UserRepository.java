package com.example.g_33.repository;

import com.example.g_33.model.User;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

    User findByUserID(int userID);

    User findByEmail(String email);

}
