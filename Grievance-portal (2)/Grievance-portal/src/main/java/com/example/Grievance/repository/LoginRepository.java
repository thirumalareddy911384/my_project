package com.example.Grievance.repository;

// public class LoginRepository {
    
// }
import org.springframework.data.repository.CrudRepository;
// import com.example.Grievance.model.Grievance;
import com.example.Grievance.model.Login;




public interface LoginRepository extends CrudRepository<Login, Long> {

   // public Grievance save(Grievance grievance);

}
