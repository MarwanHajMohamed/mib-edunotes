package com.example.g_33.model;


import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "Topics")
@EntityListeners(AuditingEntityListener.class)
public class Topic implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//Columns in the 'Topic' table as attributes
	@Id
	@NotBlank
    String topic_name;
	
	//Topic constructors
	public Topic() {
		
	}

	public Topic(String topic_name) {
		super();
		this.topic_name = topic_name;
	}

	//Gets a Topic object name
	public String getTopicName() {
		return topic_name;
	}

	//Sets a Topic object name
	public void setTopicName(String topic_name) {
		this.topic_name = topic_name;
	}

	//Returns a toString of all the Topic's attributes
	@Override
	public String toString() {
		return "Topic [topicName=" + topic_name + "]";
	}
	
	
}
