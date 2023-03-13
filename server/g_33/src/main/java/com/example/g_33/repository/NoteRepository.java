package com.example.g_33.repository;

import com.example.g_33.model.Note;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface NoteRepository extends CrudRepository<Note, Long> {
	List<Note> findByTopic(String topic);

	List<Note> findByUserID(int userID);

	Note findByNoteIDCustom(String noteIDCustom);

}
