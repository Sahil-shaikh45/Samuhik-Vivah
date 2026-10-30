package com.massmarriage.portal.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "couple_profiles")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CoupleProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    private String brideName;
    private String groomName;
    private Integer brideAge;
    private Integer groomAge;
    private String contactNumber;
    private String category; // SC, ST, OBC, OPEN
    private String address;
    private String city;
    private String district;
    private String familyInfo;
    
    private String profilePicture;
    private String assignedVenue;
    private String hallNumber;
    private String ceremonyTime;
    private String allocatedScheme;
    
    private boolean isVerified = false;
    private String verificationStatus = "PENDING"; // PENDING, APPROVED, REJECTED
    private String qrCodeData;
}
