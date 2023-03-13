package com.example.g_33.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "Notes")
@EntityListeners(AuditingEntityListener.class)
public class Note implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//Columns in the 'Note' table as attributes
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long noteID;

	@NotBlank
	String noteIDCustom;

	int userID;

	@NotBlank
	String title;

	String body;

	@NotBlank
	String topic;

	long changed;

	int likes;

	int dislikes;

	//Note constructors
	public Note() {

	}

	public Note(String noteIDCustom, int userID, String title, String body, String topic, long changed, int likes,
			int dislikes) {
		super();
		this.noteIDCustom = noteIDCustom;
		this.userID = userID;
		this.title = title;
		this.body = body;
		this.topic = topic;
		this.changed = changed;
		this.likes = likes;
		this.dislikes = dislikes;
	}

	//Getters and Setters for a Note object attributes
	public Long getNoteID() {
		return noteID;
	}

	public void setNoteID(Long noteID) {
		this.noteID = noteID;
	}

	public String getNoteIDCustom() {
		return noteIDCustom;
	}

	public void setNoteIDCustom(String noteIDCustom) {
		this.noteIDCustom = noteIDCustom;
	}

	public int getUserID() {
		return userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

	public int getLikes() {
		return likes;
	}

	public void setLikes(int likes) {
		this.likes = likes;
	}

	public int getDislikes() {
		return dislikes;
	}

	public void setDislikes(int dislikes) {
		this.dislikes = dislikes;
	}

	public long getChanged() {
		return changed;
	}

	public void setChanged(long changed) {
		this.changed = changed;
	}

	//Returns a toString of all the Note's attributes
	@Override
	public String toString() {
		return "Note [noteID=" + noteID + ", noteIDCustom=" + noteIDCustom + ", userID=" + userID + ", title=" + title
				+ ", body=" + body + ", topic=" + topic + ", changed=" + changed + ", likes=" + likes
				+ ", dislikes=" + dislikes + "]";
	}

}