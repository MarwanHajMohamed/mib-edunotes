package com.example.g_33.service;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.g_33.model.Topic;
import com.example.g_33.repository.TopicRepository;
import com.example.g_33.exception.ResourceNotFoundException;

@Service
public class TopicService {

	@Autowired
	TopicRepository topicRepository;

	public TopicService() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	//Finds all the topics, store it in a list and return the list
	public List<Topic> getTopics(){
		return (List<Topic>) topicRepository.findAll();
	}
	
	//Adds the topic object passed in the parameter to the topicRepository to be stored in the database 
	public void addTopic(Topic newTopic) {
		topicRepository.save(newTopic);
	}
	
}
