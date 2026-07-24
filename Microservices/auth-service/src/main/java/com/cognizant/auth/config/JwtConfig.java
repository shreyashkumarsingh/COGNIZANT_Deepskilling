package com.cognizant.auth.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JwtConfig {

    @Value("${spring.security.jwt.secret:SecretJwtKeyForCognizantDeepskillingMicroservicesTraining2026!}")
    private String secret;

    public String getSecret() {
        return secret;
    }
}
