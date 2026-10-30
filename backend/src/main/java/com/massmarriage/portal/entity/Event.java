package com.massmarriage.portal.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "events")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private LocalDate eventDate;
    private String description;

    @ManyToOne
    @JoinColumn(name = "venue_id")
    private Venue venue;

    private Integer totalCouples;
    private String organizerInfo;
    private String status; // UPCOMING, ONGOING, COMPLETED, CANCELLED
}
