package com.massmarriage.portal.service;

import com.massmarriage.portal.dto.RegistrationRequest;
import com.massmarriage.portal.dto.LoginRequest;
import com.massmarriage.portal.dto.UserResponse;
import com.massmarriage.portal.entity.CoupleProfile;
import com.massmarriage.portal.entity.Role;
import com.massmarriage.portal.entity.User;
import com.massmarriage.portal.repository.CoupleProfileRepository;
import com.massmarriage.portal.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final CoupleProfileRepository profileRepository;
    private final com.massmarriage.portal.repository.GiftRepository giftRepository;

    @Transactional
    public User registerUser(RegistrationRequest request) {
        // Create User
        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(request.getPassword()); // In production, use BCrypt
        user.setRole(Role.valueOf(request.getRole()));
        User savedUser = userRepository.save(user);

        // Create Profile if BRIDE or GROOM
        if (savedUser.getRole() == Role.BRIDE || savedUser.getRole() == Role.GROOM) {
            CoupleProfile profile = new CoupleProfile();
            profile.setUser(savedUser);
            profile.setBrideName(request.getBrideName());
            profile.setGroomName(request.getGroomName());
            profile.setBrideAge(request.getBrideAge());
            profile.setGroomAge(request.getGroomAge());
            profile.setContactNumber(request.getContact());
            profile.setCategory(request.getCategory());
            profile.setAddress(request.getAddress());
            profile.setVerificationStatus("PENDING");
            profileRepository.save(profile);
        }
        return savedUser;
    }

    @Transactional(readOnly = true)
    public UserResponse loginUser(LoginRequest request) {
        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        UserResponse response = new UserResponse();
        response.setId(user.getId());
        response.setUsername(user.getUsername());
        response.setRole(user.getRole().name());

        // Fetch profile details if they exist
        profileRepository.findAll().stream()
                .filter(p -> p.getUser().getId().equals(user.getId()))
                .findFirst()
                .ifPresent(p -> {
                    response.setBrideName(p.getBrideName());
                    response.setGroomName(p.getGroomName());
                    response.setCategory(p.getCategory());
                    response.setVerificationStatus(p.getVerificationStatus());
                    response.setQrCodeData(p.getQrCodeData());
                    response.setVerified(p.isVerified());
                    response.setAssignedVenue(p.getAssignedVenue());
                    response.setHallNumber(p.getHallNumber());
                    response.setCeremonyTime(p.getCeremonyTime());
                    response.setAllocatedScheme(p.getAllocatedScheme());
                    response.setProfilePicture(p.getProfilePicture());
                    // Fetch gifts
                    response.setGifts(giftRepository.findByCoupleId(p.getId()));
                });

        return response;
    }
}
