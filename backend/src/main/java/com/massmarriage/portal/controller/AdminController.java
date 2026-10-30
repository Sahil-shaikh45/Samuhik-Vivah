package com.massmarriage.portal.controller;

import com.massmarriage.portal.entity.CoupleProfile;
import com.massmarriage.portal.repository.CoupleProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
    private final CoupleProfileRepository profileRepository;
    private final com.massmarriage.portal.repository.GiftRepository giftRepository;

    @GetMapping("/applications")
    public List<CoupleProfile> getAllApplications() {
        return profileRepository.findAll();
    }

    @PostMapping("/add-gift/{profileId}")
    public ResponseEntity<?> addGift(@PathVariable Long profileId, @RequestBody com.massmarriage.portal.entity.Gift gift) {
        try {
            CoupleProfile profile = profileRepository.findById(profileId)
                .orElseThrow(() -> new RuntimeException("Profile not found"));
            gift.setCouple(profile);
            return ResponseEntity.ok(giftRepository.save(gift));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to add gift: " + e.getMessage());
        }
    }

    @PostMapping("/verify/{id}")
    public ResponseEntity<?> verifyApplication(@PathVariable Long id, @RequestBody java.util.Map<String, Object> details) {
        try {
            CoupleProfile profile = profileRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Profile not found"));
            
            profile.setVerificationStatus(details.get("status").toString());
            
            if ("APPROVED".equals(profile.getVerificationStatus())) {
                profile.setVerified(true);
                profile.setAssignedVenue(details.get("venue").toString());
                profile.setHallNumber(details.get("hall").toString());
                profile.setCeremonyTime(details.get("time").toString());
                profile.setAllocatedScheme(details.get("scheme").toString());
                // Generate simple QR data
                profile.setQrCodeData("PASS-" + profile.getId() + "-" + System.currentTimeMillis());
            } else {
                profile.setVerified(false);
            }
            
            return ResponseEntity.ok(profileRepository.save(profile));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Verification failed: " + e.getMessage());
        }
    }
}
