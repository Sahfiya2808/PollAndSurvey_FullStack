package com.example.SurveySphere.service;



import java.util.List;

import com.example.SurveySphere.dto.PublicDTO;

public interface PublicService {
	PublicDTO createUser(PublicDTO publicDTO);
	PublicDTO getUserById(Long publicId);
    List<PublicDTO> getAllUsers();
    boolean nicknameExists(String nickname);

}