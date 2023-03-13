package com.example.g_33.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.g_33.dto.NotePostDTO;
import com.example.g_33.model.Note;
import com.example.g_33.service.NoteService;

// comparator and collectors added by Inayah
import java.util.Comparator;
import java.util.stream.Collectors;

@RestController
public class NoteController {

    @Autowired
    NoteService noteService;

    // Get All Notes
    @GetMapping("/note")
    public List<Note> getNotes() {
        return noteService.getNotes();
    }

    // Post new note to DB
    @PostMapping("/note")
    public ResponseEntity<Optional<Note>> addNote(@RequestBody NotePostDTO newNoteDTO) {

        if (newNoteDTO.getNoteIDCustom() == null ||
                newNoteDTO.getTitle() == null ||
                newNoteDTO.getTopic() == null) {
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
        }

        Note newNote = new Note(newNoteDTO.getNoteIDCustom(),
                newNoteDTO.getUserID(), newNoteDTO.getTitle(),
                newNoteDTO.getBody(), newNoteDTO.getTopic(),
                newNoteDTO.getChanged(),
                newNoteDTO.getLikes(), newNoteDTO.getDislikes());
        noteService.addNote(newNote);
        return new ResponseEntity<>(Optional.ofNullable(newNote), HttpStatus.CREATED);

    }

    // Get Note by noteID
    @GetMapping("/note/{noteID}")
    public Optional<Note> getNoteByNoteID(@PathVariable(value = "noteID") long NoteID) {
        return noteService.findByNoteID(NoteID);
    }

    // Delete a note by noteID
    @DeleteMapping("/note/{noteID}")
    public String deleteNote(@PathVariable(value = "noteID") int NoteID) {
        noteService.deleteNote(NoteID);
        return "Note Deleted";
    }

    // Get all notes with a certain topic
    @GetMapping("/notes/topic/{topic}")
    public List<Note> getNotesByTopic(@PathVariable(value = "topic") String topic) {
        return noteService.getNotesByTopic(topic);
    }

    // Get all notes with a certain userID
    @GetMapping("/notes/user/{userID}")
    public List<Note> getNotesByUserID(@PathVariable(value = "userID") int userID) {
        return noteService.getNotesByUserID(userID);
    }

    // Get a note with a certain noteCustomID
    @GetMapping("/note/findByNoteIDCustom")
    public Optional<Note> getNoteByNoteIDCustom(@RequestParam String noteIDCustom) {
        return Optional.ofNullable(noteService.findByNoteIDCustom(noteIDCustom));
    }

    // Update note
    @PutMapping("/note/updateByNoteIDCustom/{noteIDCustom}")
    public Note updateNoteByNoteIDCustom(@PathVariable String noteIDCustom, @RequestBody Note note) {
        return noteService.updateNoteByNoteIDCustom(noteIDCustom, note);
    }

    // Delete a note by noteIDCustom
    @DeleteMapping("/note/deleteByNoteIDCustom/{noteIDCustom}")
    public void deleteNoteByNoteIDCustom(@PathVariable(value = "noteIDCustom") String noteIDCustom) {
        noteService.deleteNoteByNoteIDCustom(noteIDCustom);
    }

        //added by Inayah
        // Get recommended notes based on likes and dislikes
        @GetMapping("/note/recommended")
        public List<Note> getRecommendedNotes() {
            List<Note> allNotes = noteService.getNotes();
            
            // Sort the notes by likes and dislikes
            List<Note> sortedNotes = allNotes.stream()
                    .sorted(Comparator.comparing(Note::getLikes).reversed()
                            .thenComparing(Comparator.comparing(Note::getDislikes)))
                    .collect(Collectors.toList());
            
            // Return the first 10 notes with the highest like/dislike ratio
            return sortedNotes.stream()
                    .limit(10)
                    .collect(Collectors.toList());
        }

}
