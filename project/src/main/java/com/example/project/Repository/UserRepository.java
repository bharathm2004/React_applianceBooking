package com.example.project.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;

import com.example.project.model.User;

public interface UserRepository extends JpaRepository<User,String> {
    //User findByUsername(String username);  
} 