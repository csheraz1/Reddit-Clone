package com.example.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class Controller {
    

    @GetMapping("/feed")
    public String getMethodName() {
        String URL = "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images/size.png";
        String[] imageURLs = {URL, URL, URL};
        return URL;
    }
    
}
