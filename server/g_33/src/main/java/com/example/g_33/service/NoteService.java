package com.example.g_33.service;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.g_33.model.Note;
import com.example.g_33.repository.NoteRepository;
import com.example.g_33.exception.ResourceNotFoundException;

@Service
public class NoteService {

	@Autowired
	NoteRepository noteRepository;

	public NoteService() {
		super();
		// TODO Auto-generated constructor stub
	}

	//Finds all the Notes, store it in a list and return the list
	public List<Note> getNotes() {
		return (List<Note>) noteRepository.findAll();
	}

	//Adds the Note object passed in the parameter to the noteRepository to be stored in the database 
	public void addNote(Note newNote) {
		noteRepository.save(newNote);
	}

	//Finds a Note by noteID
	public Optional<Note> findByNoteID(Long noteID) {
		return noteRepository.findById(noteID);
	}

	//Deletes a Note from the noteRepository based on the noteID passed in as a parameter
	public void deleteNote(long noteID) {
		Note note = noteRepository.findById(noteID)
				.orElseThrow(() -> new ResourceNotFoundException("Note", "noteID", noteID));
		noteRepository.delete(note);
	}

	//Gets all Notes from a specific userID
	public List<Note> getNotesByUserID(int userID) {
		return noteRepository.findByUserID(userID);
	}

	//Gets all Notes from a specific topic
	public List<Note> getNotesByTopic(String topic) {
		return noteRepository.findByTopic(topic);
	}

	//Finds a Note by noteIDCustom
	public Note findByNoteIDCustom(String noteIDCustom) {
		return noteRepository.findByNoteIDCustom(noteIDCustom);
	}

	//Gets the noteIDCustom, uses it to find the note to be updated and updates the note with the new values
	public Note updateNoteByNoteIDCustom(String noteIDCustom, Note note) {
		Note existingNote = noteRepository.findByNoteIDCustom(noteIDCustom);
		existingNote.setTitle(note.getTitle());
		existingNote.setBody(note.getBody());
		existingNote.setTopic(note.getTopic());
		existingNote.setLikes(note.getLikes());
		existingNote.setDislikes(note.getDislikes());
		return noteRepository.save(existingNote);
	}

	//Deletes a Note from the noteRepository based on the noteIDCustom passed in as a parameter
	public void deleteNoteByNoteIDCustom(String noteIDCustom) {
		Note existingNote = noteRepository.findByNoteIDCustom(noteIDCustom);
		noteRepository.delete(existingNote);
	}

}
