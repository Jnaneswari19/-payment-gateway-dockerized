// Controller for /orders 
package com.gateway.payment.controller;

import com.gateway.payment.model.Order;
import com.gateway.payment.service.OrderService;
import com.gateway.payment.service.OrderService.OrderResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class OrderController {

    private final OrderService orderService = new OrderService();

    @PostMapping("/orders")
    public ResponseEntity<OrderResponse> createOrder(
            @RequestHeader("X-Api-Key") String apiKey,
            @RequestHeader("X-Api-Secret") String apiSecret,
            @RequestBody Order order) {

        if (!"key_test_abc123".equals(apiKey) || !"secret_test_xyz789".equals(apiSecret)) {
            return ResponseEntity.status(401).build();
        }

        return ResponseEntity.ok(orderService.createOrder(order));
    }
}
