package stacks.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import stacks.data.User;

public interface UserRepository extends JpaRepository <User, Long> {
}
