// Service logic 
package com.gateway.payment.service;

import com.gateway.payment.model.Order;
import java.util.UUID;

public class OrderService {

    public OrderResponse createOrder(Order order) {
        OrderResponse res = new OrderResponse();
        res.setOrderId(UUID.randomUUID().toString());
        res.setStatus("created");
        res.setAmount(order.getAmount());
        res.setCurrency(order.getCurrency());
        res.setReceipt(order.getReceipt());
        return res;
    }

    public static class OrderResponse {
        private String orderId;
        private String status;
        private Integer amount;
        private String currency;
        private String receipt;

        // getters and setters
        public String getOrderId() { return orderId; }
        public void setOrderId(String orderId) { this.orderId = orderId; }
        public String getStatus() { return status; }
        public void setStatus(String status) { this.status = status; }
        public Integer getAmount() { return amount; }
        public void setAmount(Integer amount) { this.amount = amount; }
        public String getCurrency() { return currency; }
        public void setCurrency(String currency) { this.currency = currency; }
        public String getReceipt() { return receipt; }
        public void setReceipt(String receipt) { this.receipt = receipt; }
    }
}
