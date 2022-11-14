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
    @GetMapping("/{id}")
    public User fetchUserById(@PathVariable long id) {
        // search through the list of posts
        // and return the post that matches the given id

        User user = findUserById(id);
        if (user == null) {
            throw new RuntimeException("Not sure what you're asking for");
        }
        return user;
    }

    private User findUserById(long id) {
        for (User user : m) {
            if (user.getId() == id) {
                return user;
            }
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteUserById(@PathVariable long id) {
        // search through the list of posts
        // and delete the post that matches the given id
        User user = findUserById(id);
        if (user != null) {
            m.remove(user);
            return;
        }
        throw new RuntimeException("User not found");
    }

}