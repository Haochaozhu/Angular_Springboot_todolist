package com.todo.todolist.jwt;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcTester {
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encoded = encoder.encode("password");
        System.out.println(encoded);
    }
}
