package com.example.g_33.dto;

public class NotePostDTO {

	//Columns in the Note table that aren't auto incremented
    String noteIDCustom;
    int userID;
    String title;
    String body;
    String topic;
    long changed;
    int likes;
    int dislikes;
	
  //Constructor for creating new Notes
    public NotePostDTO(String noteIDCustom, int userID, String title, String body, String topic,
			long changed, int likes, int dislikes) {
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

    //Getters and Setters for the columns in the table
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
 
    
    
}
