package com.example.g_33.dto;

public class TopicPostDTO {

	//Columns in the Topic table that aren't auto incremented
	String topic_name;

	//Constructor for creating new Topics
	public TopicPostDTO(String topic_name) {
		super();
		this.topic_name = topic_name;
	}

	//Gets a topic object name
	public String getTopicName() {
		return topic_name;
	}

	//Sets a topic object name
	public void setTopicName(String topicName) {
		this.topic_name = topicName;
	}
	
	
}
