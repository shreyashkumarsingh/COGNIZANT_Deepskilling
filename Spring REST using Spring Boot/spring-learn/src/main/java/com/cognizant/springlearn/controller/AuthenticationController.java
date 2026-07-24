package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.security.JwtUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public ResponseEntity<Map<String, String>> authenticate(@RequestHeader(value = "Authorization", required = false) String authHeader) {
        LOGGER.info("START authenticate");
        String user = "user";

        if (authHeader != null && authHeader.startsWith("Basic ")) {
            String base64Credentials = authHeader.substring("Basic ".length()).trim();
            byte[] credBytes = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(credBytes);
            String[] values = credentials.split(":", 2);
            user = values[0];
        }

        String token = jwtUtil.generateToken(user);
        Map<String, String> response = new HashMap<>();
        response.put("token", token);

        LOGGER.info("END authenticate");
        return ResponseEntity.ok(response);
    }
}
