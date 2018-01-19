package com.gk.tutorial.springdata.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/quote")
public class QuoteController {

	@RequestMapping("/data/{customer}/{sku}")
	public Map<String, Object> quote(@PathVariable String customer, @PathVariable String sku){
		return new HashMap<String, Object>() {{
			put("customer", customer);
			put("sku", sku);
			put("price", 100);
			put("quantity", 1);
		}};
	}

	@RequestMapping("/order/{customer}/{sku}/{quantity}/{price}")
	public Map<String,Object> order(@PathVariable String customer, @PathVariable String sku, @PathVariable Integer quantity, @PathVariable Double price){
		return new HashMap<String, Object>() {{
			put("customer", customer);
			put("sku", sku);
			put("price", price);
			put("quantity", quantity);
			put("orderId", UUID.randomUUID().toString());
		}};
	}

}
