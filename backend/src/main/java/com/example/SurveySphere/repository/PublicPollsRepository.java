package com.example.SurveySphere.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.SurveySphere.entity.PublicPolls;

@Repository
public interface PublicPollsRepository extends JpaRepository<PublicPolls, Long> {
	 List<PublicPolls> findByPollId(Long pollId);
	 PublicPolls findByPollIdAndPublicId(Long pollId, Long publicId);
	 
	 List<PublicPolls> findByPublicId(Long publicId);
	 
	// Method to count votes by category for a specific public user
	    @Query("SELECT p.category, COUNT(p) FROM PublicPolls p WHERE p.publicId = :publicId GROUP BY p.category")
	    List<Object[]> countVotesByCategory(@Param("publicId") Long publicId);
	    
}