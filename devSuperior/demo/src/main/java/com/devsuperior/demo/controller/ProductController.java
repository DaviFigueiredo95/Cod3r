package com.devsuperior.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.demo.entities.Department;

@RestController
@RequestMapping
public class ProductController {

	public Department getObjects() {
		Department d1 = new Department();
	}
	
}
