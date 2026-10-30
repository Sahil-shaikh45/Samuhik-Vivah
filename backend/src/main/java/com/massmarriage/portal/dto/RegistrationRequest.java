package com.massmarriage.portal.dto;

import lombok.Data;

@Data
public class RegistrationRequest {
    private String username;
    private String password;
    private String role;
    private String brideName;
    private String groomName;
    private Integer brideAge;
    private Integer groomAge;
    private String contact;
    private String category;
    private String address;
}
