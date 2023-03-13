package com.example.g_33.repository;

import com.example.g_33.model.Topic;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface TopicRepository extends CrudRepository<Topic,Long> {

}
