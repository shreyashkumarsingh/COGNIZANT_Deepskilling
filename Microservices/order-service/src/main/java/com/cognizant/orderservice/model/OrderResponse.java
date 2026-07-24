package com.cognizant.orderservice.model;

import com.cognizant.orderservice.dto.UserDTO;

public class OrderResponse {
    private Long orderId;
    private String item;
    private double price;
    private UserDTO user;

    public OrderResponse() {}

    public OrderResponse(Long orderId, String item, double price, UserDTO user) {
        this.orderId = orderId;
        this.item = item;
        this.price = price;
        this.user = user;
    }

    public Long getOrderId() { return orderId; }
    public void setOrderId(Long orderId) { this.orderId = orderId; }

    public String getItem() { return item; }
    public void setItem(String item) { this.item = item; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public UserDTO getUser() { return user; }
    public void setUser(UserDTO user) { this.user = user; }
}
