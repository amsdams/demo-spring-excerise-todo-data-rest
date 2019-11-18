package com.amsdams.tododatarest;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "todo", path = "todo")
public interface TodoRepository extends PagingAndSortingRepository<Todo, Long> {

	List<Todo> findByTitle(@Param("title") String title);

}
