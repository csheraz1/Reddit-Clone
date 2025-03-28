package com.example.backend;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class config implements WebMvcConfigurer{
    @Override
    public void addCorsMappings(CorsRegistry registery){
        registery.addMapping("/*").allowedMethods("*");
    }
}
