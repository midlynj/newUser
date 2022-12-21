package stacks.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import stacks.data.Product;

public interface ProductRepository extends JpaRepository <Product, Long> {
}
