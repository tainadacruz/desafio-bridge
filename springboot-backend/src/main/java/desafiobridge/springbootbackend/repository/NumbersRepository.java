package desafiobridge.springbootbackend.repository;

import desafiobridge.springbootbackend.model.Numbers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NumbersRepository extends JpaRepository<Numbers, Long> {

}
