package com.georgerincon.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.georgerincon.model.DAOUser;

@Repository
public interface UserDao extends CrudRepository<DAOUser, Integer> {
	UserDao findByUsername(String username);
	UserDao findByEmail (String email);
}
