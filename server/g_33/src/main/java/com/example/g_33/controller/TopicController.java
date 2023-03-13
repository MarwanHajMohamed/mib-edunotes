package com.example.g_33.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.g_33.dto.TopicPostDTO;
import com.example.g_33.model.Topic;
import com.example.g_33.service.TopicService;

@RestController
public class TopicController {

	 @Autowired
	 TopicService topicService;
	 
	// Get All Topics
	 @GetMapping("/topic")
	 public List<Topic> getTopics(){
		 return topicService.getTopics();
	 }
	 
	// Post new topic to DB
	 @PostMapping("/topic")
	 public ResponseEntity<Optional<Topic>> addTopic(@RequestBody TopicPostDTO newTopicDTO){
		 if(newTopicDTO.getTopicName() == null) {
			 return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST); 
		 }
		 
		 Topic newTopic = new Topic(newTopicDTO.getTopicName());
		 topicService.addTopic(newTopic);
		 return new ResponseEntity<>(Optional.ofNullable(newTopic), HttpStatus.CREATED);
	 }
}
