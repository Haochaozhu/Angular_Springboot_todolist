package com.todo.todolist.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoJpaResource {

    @Autowired
    private TodoHardCodeService todoHardCodeService;

    @Autowired
    private TodoJpaRepository todoJpaRepository;

    @GetMapping(path = "/jpa/users/{user_name}/todos")
    public List<Todo> getAllTodos(@PathVariable String user_name) {
        return todoJpaRepository.findByUsername(user_name);
//        return todoHardCodeService.getAllTodo();
    }

    @GetMapping(path = "/jpa/users/{user_name}/todos/{id}")
    public Todo getTodo(@PathVariable String user_name, @PathVariable long id) {
        return todoJpaRepository.findById(id).get();
    }

    @DeleteMapping(path = "/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable String username,
                                           @PathVariable long id) {

        todoJpaRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }

    @PutMapping(path = "/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id,
                                           @RequestBody Todo todo) {
        Todo todoUpdated = todoJpaRepository.save(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping(path = "/jpa/users/{username}/todos/")
    public ResponseEntity<Void> createTodo(@PathVariable String username,
                                           @RequestBody Todo todo) {
        todo.setUsername(username);
        Todo todoCreated = todoJpaRepository.save(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().
                path("/{id").buildAndExpand(todoCreated.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }


}