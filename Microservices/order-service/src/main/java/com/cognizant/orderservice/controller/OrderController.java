package com.cognizant.orderservice.controller;

import com.cognizant.orderservice.dto.UserDTO;
import com.cognizant.orderservice.model.OrderResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final WebClient webClient;

    public OrderController(@Value("${user.service.url:http://localhost:8084}") String userServiceUrl) {
        this.webClient = WebClient.builder().baseUrl(userServiceUrl).build();
    }

    @GetMapping("/{orderId}/user/{userId}")
    public Mono<OrderResponse> getOrderWithUser(@PathVariable("orderId") Long orderId, @PathVariable("userId") Long userId) {
        return webClient.get()
                .uri("/users/{id}", userId)
                .retrieve()
                .bodyToMono(UserDTO.class)
                .onErrorReturn(new UserDTO(userId, "Fallback User", "fallback@cognizant.com"))
                .map(user -> new OrderResponse(orderId, "Spring Boot 3 Masterclass Course", 499.0, user));
    }
}
