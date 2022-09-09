package springdatajpacrud.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springdatajpacrud.model.Tutorial;
import springdatajpacrud.repository.TutorialRepository;

@Service
public class TutorialService {
	
	@Autowired
	TutorialRepository tutorialRepository;
		
	
	///////////////////////////////////GET BY ID
	public Tutorial findById(Long id) {
		Optional<Tutorial> result = null;
		result = tutorialRepository.findById(id.longValue());
        if(result.isEmpty()) {
            throw new NoSuchElementException();
        }
		return (result.get());
	}
	
	
	///////////////////////////////////GET ALL ITEMS
	public List<Tutorial> findAll() throws NoSuchElementException {
		List<Tutorial> result = null;
		result = tutorialRepository.findAll();
		if (result.isEmpty()) {
			throw new NoSuchElementException();
		} else {
			return (result);
		}
	}
	
	
	///////////////////////////////////POST NEW ITEM
	public Tutorial create(Tutorial tutorial) throws IllegalArgumentException{
		Tutorial result = null;
		if(tutorial.getTitle() != null && tutorial.getDescription() != null) {
			if(!tutorial.getTitle().isEmpty()) {
				result = tutorialRepository.save(tutorial);
				return(result);
			}else {
				throw new IllegalArgumentException();
			}
		}
		throw new IllegalArgumentException();
	}

	
	///////////////////////////////////PUT BY ID
	public Tutorial updateById(Long id, Tutorial tutorial) throws NoSuchElementException, IllegalArgumentException{
        Optional<Tutorial> comprobacion = tutorialRepository.findById(id.longValue());
        if(comprobacion.isEmpty()) {
            throw new NoSuchElementException();
        }
		if(tutorial.getTitle() != null && tutorial.getTitle().isEmpty()) {
			throw new IllegalArgumentException();
		}
		if(tutorial.getTitle() != null)
			comprobacion.get().setTitle(tutorial.getTitle());
		if(tutorial.getDescription() != null)
			comprobacion.get().setDescription(tutorial.getDescription());
		comprobacion.get().setPublished(tutorial.isPublished());
		Tutorial respuesta = tutorialRepository.save(comprobacion.get());
		return(respuesta);
		
	}
	
	
	///////////////////////////////////DELETE BY ID
	public Tutorial deleteById(Long id) throws NoSuchElementException{
        Optional<Tutorial> comprobacion = tutorialRepository.findById(id.longValue());
        if(comprobacion.isEmpty()) {
            throw new NoSuchElementException();
        }
		tutorialRepository.deleteById(id.longValue());
		return (comprobacion.get());
    }
}
