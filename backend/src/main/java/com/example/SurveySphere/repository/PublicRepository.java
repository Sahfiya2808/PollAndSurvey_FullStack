package com.example.SurveySphere.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SurveySphere.entity.Public;

@Repository
public interface PublicRepository extends JpaRepository<Public, Long> { 
	 boolean existsByNickname(String nickname);
	 

}