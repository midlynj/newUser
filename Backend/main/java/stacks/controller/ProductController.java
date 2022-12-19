package stacks.controller;


import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import stacks.data.Product;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/products", produces = "application/json")
public class ProductController {

    @CrossOrigin
    @GetMapping("")
    public List<Product> fetchProducts() {

        List<Product> products = new ArrayList<>();

        return products;

    }

}
