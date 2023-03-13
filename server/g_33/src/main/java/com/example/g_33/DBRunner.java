package com.example.g_33;

import com.example.g_33.model.*;
import com.example.g_33.repository.*;
import java.math.BigDecimal;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


@Component
public class DBRunner implements CommandLineRunner{
	@Autowired 
	private NoteRepository noteRepository;
	
	@Autowired
	private TopicRepository topicRepository;
	
	@Override
	 public void run(String... args) throws Exception {		
		
	}
}
