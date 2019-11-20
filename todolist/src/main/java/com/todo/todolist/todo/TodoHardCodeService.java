package com.todo.todolist.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * A service defines the logic of how to interact with the database
 *
 *
 */
@Service
public class TodoHardCodeService {
    private static List<Todo> db = new ArrayList<>();
    private static int idCounter = 1;

    static {
        db.add(new Todo(idCounter++, "haochao", "learn to dance", new Date(), false));
        db.add(new Todo(idCounter++, "haochao", "learn angular", new Date(), false));
        db.add(new Todo(idCounter++, "haochao", "learn microservice", new Date(), false));
        db.add(new Todo(idCounter++, "haochao", "learn python", new Date(), false));
    }

    public List<Todo> getAllTodo() {
        return db;
    }

    public Todo deleteById(long id) {
        Todo td = findById(id);
        if (td == null) return null;
        db.remove(td);
        return td;
    }

    public Todo findById(long id) {
        for (Todo todo : db) {
            if (todo.getId() == id) {
                return todo;
            }
        }
        return null;
    }

    public Todo save(Todo todo) {
        if (todo.getId() <= 0) {
            todo.setId(idCounter++);
            db.add(todo);
        } else {
            deleteById(todo.getId());
            db.add(todo);
        }
        return todo;
    }
}
