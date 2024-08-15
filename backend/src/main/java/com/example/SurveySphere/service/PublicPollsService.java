package com.example.SurveySphere.service;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.SurveySphere.dto.PublicPollsDTO;
import com.example.SurveySphere.entity.PublicPolls;
import com.example.SurveySphere.repository.PublicPollsRepository;

public interface PublicPollsService {
	 PublicPollsDTO createPublicPoll(PublicPollsDTO publicPollsDTO);
	    List<PublicPollsDTO> getAllPublicPolls();
	    List<PublicPollsDTO> getPublicPollsByPollId(Long pollId);
	    
	    
	    List<PublicPollsDTO> getPublicPollsByPublicId(Long publicId);
	    
	    //count of votes on each category by the user
	    Map<String, Long> countVotesByCategory(Long publicId);
}