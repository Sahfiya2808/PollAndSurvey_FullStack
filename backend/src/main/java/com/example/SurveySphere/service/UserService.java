package com.example.SurveySphere.service;



import java.util.List;

import com.example.SurveySphere.dto.UserDTO;

public interface UserService {
    UserDTO createUser(UserDTO userDTO);
    UserDTO getUserById(Long userId);
    List<UserDTO> getAllUsers();
    UserDTO updateUser(Long userId, UserDTO usersDTO);
    void deleteUser(Long userId);
}