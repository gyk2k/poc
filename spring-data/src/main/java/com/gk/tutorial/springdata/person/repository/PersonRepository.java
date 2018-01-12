package com.gk.tutorial.springdata.person.repository;

import org.springframework.data.cassandra.repository.TypedIdCassandraRepository;

import com.gk.tutorial.springdata.person.entity.Person;

public interface PersonRepository extends TypedIdCassandraRepository<Person, String>{

}
