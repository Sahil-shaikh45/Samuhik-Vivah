package com.massmarriage.portal.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "documents")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String documentType; // AADHAAR, AGE_PROOF, INCOME, CASTE, ADDRESS
    private String fileName;
    private String filePath;
    private String status = "PENDING"; // PENDING, APPROVED, REJECTED
    private String remarks;
}
