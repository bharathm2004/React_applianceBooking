package com.example.bookingpage.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.*;
import com.example.bookingpage.Repository.BookingRepo;
import com.example.bookingpage.model.Booking;

@Service
public class BookingService {
    @Autowired
    BookingRepo br;

    public Booking addBooking(Booking b)
    {
        return br.save(b);
    }

    public List<Booking> getBookingDetails()
    {
        return br.findAll();
    }

    public Booking getemail(String email)
    {
        return br.findById(email).orElse(null);
    }
    public Boolean updateBooking(String email,Booking b)
    {
        if(this.getemail(email)==null)
        {
            return false;
        }
        try
        {
            br.save(b);
        }
        catch(Exception e)
        {
            return false;
        }
        return true;
    }
    public Boolean deleteBooking(String email)
    {
        if(this.getemail(email)== null)
        {
            return false;
        }
        br.deleteById(email);
        return true;
    }
    public List<Booking> sort(String email)
    {
        Sort sort=Sort.by(Sort.Direction.ASC,email);
        return br.findAll(sort);
    }
    public List<Booking> page(int pageSize,int pageNumber)
    {
        Pageable page=PageRequest.of(pageNumber, pageSize);
        return br.findAll(page).getContent();
    }
    public List<Booking> getsort(int pageNumber,int pageSize,String field)
    {          return br.findAll(PageRequest.of(pageNumber, pageSize)
          .withSort(Sort.by(Sort.Direction.ASC,field))).getContent();
    }
}
