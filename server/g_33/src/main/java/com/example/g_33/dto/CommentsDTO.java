package com.example.g_33.dto;

public class CommentsDTO {

    int userID;
    String body;
    long changed;
    int likes;
    int dislikes;
	
    public CommentsDTO(int userID, String body, long changed, int likes, int dislikes) {
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
 
    
    
}
