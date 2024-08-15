package com.example.SurveySphere.service.impl;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SurveySphere.dto.PublicPollsDTO;
import com.example.SurveySphere.entity.PublicPolls;
import com.example.SurveySphere.repository.PublicPollsRepository;
import com.example.SurveySphere.service.PublicPollsService;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class PublicPollsServiceImpl implements PublicPollsService {
    @Autowired
    private PublicPollsRepository publicPollsRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public PublicPollsDTO createPublicPoll(PublicPollsDTO publicPollsDTO) {
        // Check if the user has already responded to this poll
        PublicPolls existingPoll = publicPollsRepository.findByPollIdAndPublicId(publicPollsDTO.getPollId(), publicPollsDTO.getPublicId());
        if (existingPoll != null) {
            throw new RuntimeException("You have already submitted a response for this poll.");
        }

        PublicPolls publicPolls = modelMapper.map(publicPollsDTO, PublicPolls.class);
        publicPolls = publicPollsRepository.save(publicPolls);
        return modelMapper.map(publicPolls, PublicPollsDTO.class);
    }

    @Override
    public List<PublicPollsDTO> getAllPublicPolls() {
        return publicPollsRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<PublicPollsDTO> getPublicPollsByPollId(Long pollId) {
        return publicPollsRepository.findByPollId(pollId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private PublicPollsDTO convertToDTO(PublicPolls publicPolls) {
        return modelMapper.map(publicPolls, PublicPollsDTO.class);
    }
    
    
    @Override
    public List<PublicPollsDTO> getPublicPollsByPublicId(Long publicId) {
        return publicPollsRepository.findByPublicId(publicId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    

    // Convert DTO to entity
    private PublicPolls convertToEntity(PublicPollsDTO dto) {
        return modelMapper.map(dto, PublicPolls.class);
    }
    
    
    //to take count of votes 
    @Override
    public Map<String, Long> countVotesByCategory(Long publicId) {
        List<Object[]> results = publicPollsRepository.countVotesByCategory(publicId);
        return results.stream()
                      .collect(Collectors.toMap(
                          result -> (String) result[0], 
                          result -> (Long) result[1]
                      ));
    }

    

    
}