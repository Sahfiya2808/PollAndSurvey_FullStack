package com.example.SurveySphere.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.SurveySphere.dto.PollsDTO;
import com.example.SurveySphere.entity.Polls;
import com.example.SurveySphere.service.PollsService;

import java.util.List;

@RestController
@RequestMapping("/api/polls")
@CrossOrigin 
public class PollsController {
    @Autowired
    private PollsService pollsService;

    @PostMapping
    public ResponseEntity<PollsDTO> createUser(@RequestBody PollsDTO pollsDTO) {
        return ResponseEntity.ok(pollsService.createUser(pollsDTO));
    }
    
    
    //to fetch the details about particular poll
    @GetMapping("/{pollId}")
    public ResponseEntity<PollsDTO> getUserById(@PathVariable Long pollId) {
        return ResponseEntity.ok(pollsService.getUserById(pollId));
    }
    
    //to group the poll details based on category
    @GetMapping("/category/{pollCategory}")
    public ResponseEntity<List<PollsDTO>> getPollsByCategory(@PathVariable String pollCategory) {
        return ResponseEntity.ok(pollsService.getPollsByCategory(pollCategory));
    }
    
    //to group the poll details of particular user
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Polls>> getAllPollsByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(pollsService.getAllPollsByUserId(userId));
    }

    @GetMapping
    public ResponseEntity<List<PollsDTO>> getAllUsers() {
        return ResponseEntity.ok(pollsService.getAllUsers());
    }
    
    // Delete a poll based on pollId
    @DeleteMapping("/{pollId}")
    public ResponseEntity<Void> deletePoll(@PathVariable Long pollId) {
        pollsService.deletePollById(pollId);
        return ResponseEntity.noContent().build();
    }
    
    
}
    
   