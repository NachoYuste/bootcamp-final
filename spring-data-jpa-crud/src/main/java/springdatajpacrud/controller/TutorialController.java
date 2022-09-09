package springdatajpacrud.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import springdatajpacrud.model.Tutorial;
import springdatajpacrud.service.TutorialService;

@RestController
public class TutorialController {

	@Autowired
	TutorialService tutorialService;
	
	///////////////////////////////////EMPTY CALL
	@GetMapping("")
	String simpleResponse() {
		return("Llamada vacía");
	}
	
	
	///////////////////////////////////GET BY ID
	@GetMapping("/tutorials/{id}")
	ResponseEntity<Tutorial> readById(@PathVariable Long id) {
		Tutorial tutorialResponse = null;
		HttpStatus estado = HttpStatus.OK;
		try {
			tutorialResponse = tutorialService.findById(id);
		}catch(NoSuchElementException e) {
			estado = HttpStatus.NO_CONTENT;
		}

	    return new ResponseEntity<Tutorial>(tutorialResponse, estado);
	}
	

	///////////////////////////////////GET ALL ITEMS
	@GetMapping("/tutorials")
	ResponseEntity<List<Tutorial>> readAll() {
		HttpStatus estado = HttpStatus.OK;
		List<Tutorial> tutorial = null;
		try {
			tutorial = tutorialService.findAll();
		} catch (NoSuchElementException e) {
			estado = HttpStatus.NO_CONTENT;
		}
		return new ResponseEntity<List<Tutorial>>(tutorial, estado);
	}
	
	
	///////////////////////////////////POST NEW ITEM
	@PostMapping("/tutorials")
	ResponseEntity<Tutorial> create(@RequestBody Tutorial tutorialRequest) {
		Tutorial tutorialResponse = null;
		HttpStatus estado = HttpStatus.OK;
		try {
			tutorialResponse = tutorialService.create(tutorialRequest);
		}catch(IllegalArgumentException e){
			estado = HttpStatus.BAD_REQUEST;
		}
			return new ResponseEntity<Tutorial>(tutorialResponse, estado);
	}
	
	
	///////////////////////////////////UPDATE BY ID
	@PutMapping("/tutorials/{id}")
	ResponseEntity<Tutorial> updateById(@PathVariable Long id, @RequestBody Tutorial tutorialRequest) {
		Tutorial tutorialResponse = null;
		HttpStatus estado = HttpStatus.OK;
		try {
			tutorialResponse = tutorialService.updateById(id, tutorialRequest);
		}catch(NoSuchElementException e) {
			estado = HttpStatus.NO_CONTENT;
		}catch(IllegalArgumentException e) {
			estado = HttpStatus.NO_CONTENT;
		}
		return new ResponseEntity<Tutorial>(tutorialResponse, estado);
	}
	
	
	///////////////////////////////////DELETE BY ID
	@DeleteMapping("/tutorials/{id}")
	ResponseEntity<Tutorial> deleteById(@PathVariable Long id) {
		Tutorial tutorialResponse = null;
		HttpStatus estado = HttpStatus.OK;
		try {
			tutorialResponse = tutorialService.deleteById(id);
		}catch(NoSuchElementException e) {
			estado = HttpStatus.NO_CONTENT;
		}
		return new ResponseEntity<Tutorial>(tutorialResponse, estado);
	}
}
