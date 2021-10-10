package desafiobridge.springbootbackend.controller;

import desafiobridge.springbootbackend.model.Numbers;
import desafiobridge.springbootbackend.repository.NumbersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class NumbersController {

    @Autowired
    private NumbersRepository numbersRepository;
    private Numbers object_number = new Numbers();

    // get all numbers
    @GetMapping("/numbers")
    public List<Numbers> getAllNumbers(){
        return numbersRepository.findAll();
    }

    // enter number
    @PostMapping("/numbers")
    public Numbers addNumber(@RequestBody Numbers number){
        int duo = object_number.calculaDuodigito(number.getX());
        number.setDuodigito(duo);
        return numbersRepository.save(number);
    }

}
