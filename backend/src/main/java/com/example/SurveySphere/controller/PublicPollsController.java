package com.example.SurveySphere.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.SurveySphere.dto.PublicPollsDTO;
import com.example.SurveySphere.service.PublicPollsService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/public-polls")
@CrossOrigin
public class PublicPollsController {

    @Autowired
    private PublicPollsService publicPollsService;
    
    
   //To store the details of particular poll which is being used by the particular user
    @PostMapping
    public ResponseEntity<PublicPollsDTO> createPublicPoll(@RequestBody PublicPollsDTO publicPollsDTO) {
        PublicPollsDTO createdPoll = publicPollsService.createPublicPoll(publicPollsDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPoll);
    }

    
    

    // To get all public polls
    @GetMapping
    public ResponseEntity<List<PublicPollsDTO>> getAllPublicPolls() {
        List<PublicPollsDTO> polls = publicPollsService.getAllPublicPolls();
        return ResponseEntity.ok(polls);
    }

    // To get public polls by poll ID
    @GetMapping("/polls/{pollId}")
    public ResponseEntity<List<PublicPollsDTO>> getPublicPollsByPollId(@PathVariable Long pollId) {
        List<PublicPollsDTO> polls = publicPollsService.getPublicPollsByPollId(pollId);
        return ResponseEntity.ok(polls);
    }

    // To get public polls by public ID (the user's ID)
    @GetMapping("/user/{publicId}")
    public ResponseEntity<List<PublicPollsDTO>> getPublicPollsByPublicId(@PathVariable Long publicId) {
        List<PublicPollsDTO> polls = publicPollsService.getPublicPollsByPublicId(publicId);
        return ResponseEntity.ok(polls);
    }
    
    
 // New endpoint to get the vote count by category
    @GetMapping("/user/{publicId}/votes-by-category")
    public ResponseEntity<Map<String, Long>> getVoteCountByCategory(@PathVariable Long publicId) {
        Map<String, Long> voteCountByCategory = publicPollsService.countVotesByCategory(publicId);
        return ResponseEntity.ok(voteCountByCategory);
    }

    
    
}