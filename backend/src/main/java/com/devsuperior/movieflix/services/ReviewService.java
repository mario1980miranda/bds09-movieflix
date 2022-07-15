package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private AuthService authService;
	
	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		
		final User user = authService.authenticated();
		
		final Movie movieEntity = movieRepository.getOne(dto.getMovieId());
		
		Review entity = new Review();
		entity.setMovie(movieEntity);
		entity.setUser(user);
		entity.setText(dto.getText());
		
		repository.save(entity);
		
		return new ReviewDTO(entity);
	}

	@Transactional(readOnly = true)
	public List<ReviewDTO> findReviewsByMovieId(Long movieId) {
		final List<Review> list = repository.findReviewsByMovieId(movieId);
		return list.stream().map(entity -> new ReviewDTO(entity)).collect(Collectors.toList());
	}
}
