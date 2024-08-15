package com.example.SurveySphere.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SurveySphere.dto.PollsDTO;
import com.example.SurveySphere.entity.Polls;
import com.example.SurveySphere.repository.PollsRepository;
import com.example.SurveySphere.service.PollsService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PollsServiceImpl implements PollsService {

    @Autowired
    private PollsRepository pollsRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public PollsDTO createUser(PollsDTO pollsDTO) {
    	Polls user = modelMapper.map(pollsDTO, Polls.class);
        user = pollsRepository.save(user);
        return modelMapper.map(user, PollsDTO.class);
    }

    @Override
    public PollsDTO getUserById(Long pollsId) {
    	Polls user = pollsRepository.findById(pollsId).orElseThrow(() -> new RuntimeException("User not found"));
        return modelMapper.map(user, PollsDTO.class);
    }

    @Override
    public List<PollsDTO> getAllUsers() { 
        return pollsRepository.findAll().stream()
                .map(user -> modelMapper.map(user, PollsDTO.class))
                .collect(Collectors.toList());
    }
    
    @Override
    public List<PollsDTO> getPollsByCategory(String pollCategory) {
        return pollsRepository.findAllByPollCategory(pollCategory).stream()
                .map(polls -> modelMapper.map(polls, PollsDTO.class))
                .collect(Collectors.toList());
    }
    
    @Override
    public List<Polls> getAllPollsByUserId(Long userId) {
        return pollsRepository.findAllPollsByUserId(userId);
    }
    
    public void deletePollById(Long pollId) {
        pollsRepository.deleteById(pollId);
    }
    
    
   
    
}