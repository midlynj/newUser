package stacks.controller;


import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import stacks.data.Product;

import stacks.repository.ProductRepository;


import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/products", produces = "application/json")
public class ProductController {

    private ProductRepository productRepository;


    @CrossOrigin
    @GetMapping("")
    public List<Product> fetchProducts() {

        List<Product> products = productRepository.findAll();

        return products;
    }

    @CrossOrigin
    @PostMapping("")
    public void addAProduct(@RequestBody Product newProduct) {
        productRepository.save(newProduct);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    private void deleteProduct(@PathVariable Long id) {
        productRepository.deleteById(id);
    }

    @CrossOrigin
    @PutMapping("/{id}")
    private void editProduct(@PathVariable Long id, @RequestBody Product updateProduct) {
        updateProduct.setId(id);
        productRepository.save(updateProduct);
    }

    @CrossOrigin
    @GetMapping("/{id}")
    private void getProductById(@PathVariable Long id) {
        productRepository.findById(id);

    }
}
