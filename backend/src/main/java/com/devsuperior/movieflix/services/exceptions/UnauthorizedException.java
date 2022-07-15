package com.devsuperior.movieflix.services.exceptions;

public class UnauthorizedException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public UnauthorizedException(final String msg) {
		super(msg);
	}
}
