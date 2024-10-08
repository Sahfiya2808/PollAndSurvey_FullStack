package com.example.SurveySphere.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SurveySphere.entity.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> { }