package com.todo.todolist.helloworld;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

    @GetMapping(path = "/hello")
    public String helloWorld() {
        return "Hello World";
    }


    @GetMapping(path = "/basicauth")
    public AuthenticationBean helloWorldBean() {
        
        return new AuthenticationBean("Hello, user");
    }

    @GetMapping(path = "/hellobean/{name}")
    public HelloWorldBean hwBean(@PathVariable String name) {
        return new HelloWorldBean("Hello, " + name);
    }

}
