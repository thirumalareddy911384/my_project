// package com.example.Grievance.controller;

// // public class LoginController {
    
// // }
// // package com.example.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.RestController;
// import com.example.Grievance.repository.GrievanceRepository;
// import com.example.Grievance.model.Login;
// import com.example.Grievance.model.Grievance;
// @RestController
// @CrossOrigin(origins = "*", allowedHeaders = "*")
// public class LoginController {

// 	@Autowired
// 	GrievanceRepository GrievanceRepo;
	
// }
package com.example.Grievance.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// import com.example.Grievance.model.Complent;
// import com.example.Grievance.model.Grievance;
import com.example.Grievance.model.Login;
// import com.example.Grievance.repository.GrievanceRepository;
import com.example.Grievance.repository.LoginRepository;


@CrossOrigin(origins="*", allowedHeaders="*")
@RestController
@RequestMapping("/api/v1/")
public class LoginController {

	@Autowired
	LoginRepository loginRepository;

	@GetMapping("/login")
	public ResponseEntity<List<Login>> getAllLogin(@RequestParam(required = false) String title) {

		List<Login> login = new ArrayList<Login>();

		loginRepository.findAll().forEach(login::add);

		return new ResponseEntity<>(login, HttpStatus.OK);

	}

    @PostMapping("/login")
	public ResponseEntity<Login> createLogin(@RequestBody  Login login) {
		Login _login = loginRepository.save(new Login(login.getEmail_Id(),login.getPassword()));
		return new ResponseEntity<>(_login, HttpStatus.CREATED);

	}

	@PutMapping("/login/{id}")
	public ResponseEntity<Login>  updateLogin(@PathVariable("id") long id, @RequestBody Login login) {
		Optional<Login> loginData = loginRepository.findById(id);

		Login _login = loginData.get();
		
        _login.setEmail_Id(login.getEmail_Id());
        _login.setPassword(login.getPassword());
       
		return new ResponseEntity<>(loginRepository.save(_login), HttpStatus.OK);
	}

	public LoginRepository getLoginRepository() {
		return loginRepository;
	}

	public void setLoginepository(LoginRepository loginRepository) {
		this.loginRepository =loginRepository;
	}

	@DeleteMapping("/login/{id}")
	public ResponseEntity<HttpStatus> deleteLogin(@PathVariable("id") long id) {
		try {
			loginRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/login")
	public ResponseEntity<HttpStatus> deleteAllGrievance() {
		try {
			loginRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

}