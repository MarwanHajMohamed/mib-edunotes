package com.example.g_33.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.g_33.model.Comments;
import com.example.g_33.repository.CommentsRepository;
import com.example.g_33.exception.ResourceNotFoundException;

@Service
public class CommentsService {
    
	@Autowired
	CommentsRepository CommentsRepository;

	public CommentsService() {
		super();
	}

	public List<Comments> getComments() {
		return (List<Comments>) CommentsRepository.findAll();
	}

	public void addComments(Comments newComments) {
		CommentsRepository.save(newComments);
	}

	public Optional<Comments> findByCommentsID(Long CommentsID) {
		return CommentsRepository.findById(CommentsID);
	}

	public void deleteComments(long CommentsID) {
		Comments Comments = CommentsRepository.findById(CommentsID)
				.orElseThrow(() -> new ResourceNotFoundException("Comments", "CommentsID", CommentsID));
		CommentsRepository.delete(Comments);
	}
    
	
}
