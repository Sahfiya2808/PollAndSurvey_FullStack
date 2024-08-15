package com.example.SurveySphere.service;


import java.util.List;

import com.example.SurveySphere.dto.PollsDTO;
import com.example.SurveySphere.entity.Polls;

public interface PollsService {
	PollsDTO createUser(PollsDTO pollsDTO);
	PollsDTO getUserById(Long pollsId);
    List<PollsDTO> getAllUsers();
    List<PollsDTO> getPollsByCategory(String pollCategory);
    List<Polls> getAllPollsByUserId(Long userId);
    void deletePollById(Long pollId);

}