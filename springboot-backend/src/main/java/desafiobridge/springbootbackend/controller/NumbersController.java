package desafiobridge.springbootbackend.controller;

import desafiobridge.springbootbackend.model.Numbers;
import desafiobridge.springbootbackend.repository.NumbersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class NumbersController {

    @Autowired
    private NumbersRepository numbersRepository;

    // get all numbers
    @GetMapping("/numbers")
    public List<Numbers> getAllNumbers(){
        return numbersRepository.findAll();
    }

}
