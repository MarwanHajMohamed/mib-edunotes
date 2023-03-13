package com.example.g_33.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "Comments")
@EntityListeners(AuditingEntityListener.class)
public class Comments implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long CommentsID;


	int userID;

	@NotBlank
	String title;

	String body;

	long changed;

	int likes;

	int dislikes;

	public Comments() {

	}

	public Comments(int userID, String body,long changed, int likes, int dislikes) {
        super();
		this.userID = userID;
		this.body = body;
		this.changed = changed;
		this.likes = likes;
		this.dislikes = dislikes;
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

	@Override
	public String toString() {
		return "Note [noteID=" + CommentsID + ", userID=" + userID + ", title=" + title
				+ ", body=" + body + ", changed=" + changed + ", likes=" + likes
				+ ", dislikes=" + dislikes + "]";
	}

}