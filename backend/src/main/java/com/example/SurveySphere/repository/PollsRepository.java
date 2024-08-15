package com.example.SurveySphere.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.SurveySphere.entity.Polls;

import java.util.List;

@Repository
public interface PollsRepository extends JpaRepository<Polls, Long> {
    List<Polls> findAllByPollCategory(String pollCategory); // Ensure the method name matches the property name
    
    
    @Query("SELECT p FROM Polls p WHERE p.user.id = :userId")
    List<Polls> findAllPollsByUserId(@Param("userId") Long userId);
}