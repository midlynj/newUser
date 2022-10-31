package stacks.controller;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.*;
import stacks.data.User;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/users", produces = "application/json")

public class UserController {
    ArrayList<User> m;

    @CrossOrigin
    @GetMapping("")
    public List<User> fetchUsers() {

        User meep = new User(1,"meep","d@.com","1234");
        m.add(meep);
        return m;
    }

    @CrossOrigin
    @PostMapping("")
    public User addUser(@RequestBody User newUser) {
        m.add(newUser);
        return newUser;

    }
}