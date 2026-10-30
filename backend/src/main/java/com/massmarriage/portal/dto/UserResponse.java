package com.massmarriage.portal.dto;

import lombok.Data;

@Data
public class UserResponse {
    private Long id;
    private String username;
    private String role;
    private String brideName;
    private String groomName;
    private String category;
    
    // New fields for real-time status
    private String verificationStatus;
    private String qrCodeData;
    private String assignedVenue;
    private String hallNumber;
    private String ceremonyTime;
    private String allocatedScheme;
    private String profilePicture;
    private boolean isVerified;
    private java.util.List<com.massmarriage.portal.entity.Gift> gifts;
}
