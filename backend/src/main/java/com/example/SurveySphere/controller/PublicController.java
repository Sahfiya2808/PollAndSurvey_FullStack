package com.example.SurveySphere.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.SurveySphere.dto.PublicDTO;
import com.example.SurveySphere.service.PublicService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/public")
@CrossOrigin 
public class PublicController {
    @Autowired
    private PublicService publicService;

    @PostMapping
    public ResponseEntity<PublicDTO> createUser(@RequestBody PublicDTO publicDTO) {
        return ResponseEntity.ok(publicService.createUser(publicDTO));
    }
    
    
    //to fetch user based on their id
    @GetMapping("/{publicId}")
    public ResponseEntity<PublicDTO> getUserById(@PathVariable Long publicId) {
        return ResponseEntity.ok(publicService.getUserById(publicId));
    }
    
    //to check whether the nickname present or not
    @GetMapping("/check")
    public ResponseEntity<Map<String, Boolean>> checkNicknameExists(@RequestParam String nickname) {
        boolean exists = publicService.nicknameExists(nickname);
        Map<String, Boolean> response = new HashMap<>();
        response.put("exists", exists);
        return ResponseEntity.ok(response);
    }
    
    //to fetch public details
    @GetMapping
    public ResponseEntity<List<PublicDTO>> getAllUsers() {
        List<PublicDTO> users = publicService.getAllUsers();
        return ResponseEntity.ok(users);
    }
    
    
}