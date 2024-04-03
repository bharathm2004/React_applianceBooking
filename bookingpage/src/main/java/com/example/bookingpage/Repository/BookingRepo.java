package com.example.bookingpage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bookingpage.model.Booking;

public interface BookingRepo extends JpaRepository<Booking,String> {
    
}
