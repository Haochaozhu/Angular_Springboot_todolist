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
public class TodoResource {

    @Autowired
    private TodoHardCodeService todoHardCodeService;

    @GetMapping(path = "/users/{user_name}/todos")
    public List<Todo> getAllTodos(@PathVariable String user_name) {
        return todoHardCodeService.getAllTodo();
    }

    @GetMapping(path = "/users/{user_name}/todos/{id}")
    public Todo getTodo(@PathVariable String user_name, @PathVariable long id) {
        return todoHardCodeService.findById(id);
    }

    @DeleteMapping(path = "/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable String username, @PathVariable long id) {
        Todo todo = todoHardCodeService.deleteById(id);
        if (todo != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping(path = "/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id,
                                           @RequestBody Todo todo) {
        Todo todoUpdated = todoHardCodeService.save(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping(path = "/users/{username}/todos/")
    public ResponseEntity<Void> updateTodo(@PathVariable String username,
                                           @RequestBody Todo todo) {
        Todo todoCreated = todoHardCodeService.save(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().
                path("/{id").buildAndExpand(todoCreated.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }



}
//    protected void configure(HttpSecurity http) throws Exception {
//        this.logger.debug("Using default configure(HttpSecurity). If subclassed this will potentially override subclass configure(HttpSecurity).");
//        ((HttpSecurity)((HttpSecurity)((AuthorizedUrl)http.authorizeRequests().anyRequest()).authenticated().and()).formLogin().and()).httpBasic();
//    }
