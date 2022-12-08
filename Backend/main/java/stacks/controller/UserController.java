package stacks.controller;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.*;
import stacks.data.User;
import stacks.repository.UserRepository;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/users", produces = "application/json")

public class UserController {

    private UserRepository userRepository;

    @CrossOrigin
    @GetMapping("")
    public List<User> fetchAllUsers() {

       List<User> allUsers = userRepository.findAll();
       return allUsers;
    }

    @CrossOrigin
    @PostMapping("")
    public void addAUser(@RequestBody User newUser) {
        userRepository.save(newUser);
    }
    @CrossOrigin
    @DeleteMapping("/{id}")
    private void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }

    @CrossOrigin
    @PutMapping("/{id}")
    private void editUserInformation(@PathVariable Long id, @RequestBody User updateUser) {
        updateUser.setId(id);
        userRepository.save(updateUser);
    }

}