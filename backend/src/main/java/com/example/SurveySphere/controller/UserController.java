package com.example.SurveySphere.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.SurveySphere.dto.UserDTO;
import com.example.SurveySphere.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin 
public class UserController {
    @Autowired
    private UserService userService;

    //to add users
    @PostMapping("/add")
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(userService.createUser(userDTO));
    }

    
   //to fetch details of the users based on id
    @GetMapping("/{userId}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long userId) {
        return ResponseEntity.ok(userService.getUserById(userId));
    }

    // to get all user details
    @GetMapping("/fetch")
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
    
    //to update poll details
    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody UserDTO usersDTO) {
        return ResponseEntity.ok(userService.updateUser(id, usersDTO));
    }

    //to deleted the poll details
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}