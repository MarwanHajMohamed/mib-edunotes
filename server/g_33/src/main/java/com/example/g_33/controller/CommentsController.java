package com.example.g_33.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


 import com.example.g_33.dto.CommentsDTO;
 import com.example.g_33.model.Comments;
 import com.example.g_33.service.CommentsService;
public class CommentsController {
    
    @Autowired
    CommentsService CommentsService;

    // Get All Comments
    @GetMapping("/Comments")
    public List<Comments> getComments() {
        return CommentsService.getComments();
    }

    // Post new comments to DB
    @PostMapping("/Comments")
    public ResponseEntity<Optional<Comments>> addComments(@RequestBody CommentsDTO newCommentsDTO) {

        Comments newComments = new Comments(
                newCommentsDTO.getUserID(), newCommentsDTO.getBody(), 
                newCommentsDTO.getChanged(), newCommentsDTO.getLikes(), 
                newCommentsDTO.getDislikes());
        CommentsService.addComments(newComments);
        return new ResponseEntity<>(Optional.ofNullable(newComments), HttpStatus.CREATED);

    }

    // Get Comments by CommentsID
    @GetMapping("Comments/{CommentsID}")
    public Optional<Comments> getCommentsByCommentsID(@PathVariable(value = "CommentsID") long CommentsID) {
        return CommentsService.findByCommentsID(CommentsID);
    }

    // Delete a Comments by CommentsID
    @DeleteMapping("/Comments/{CommentsID}")
    public String deleteComments(@PathVariable(value = "CommentsID") int CommentsID) {
        CommentsService.deleteComments(CommentsID);
        return "Comments Deleted";
    }

}
