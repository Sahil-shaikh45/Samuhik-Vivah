package com.massmarriage.portal.config;

import com.massmarriage.portal.entity.Role;
import com.massmarriage.portal.entity.User;
import com.massmarriage.portal.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository) {
        return args -> {
            if (userRepository.findByUsername("admin").isEmpty()) {
                userRepository.save(new User(null, "admin", "admin123", Role.ADMIN, null));
                System.out.println("Admin user created: admin / admin123");
            }
            
            if (userRepository.findByUsername("bride01").isEmpty()) {
                userRepository.save(new User(null, "bride01", "bride123", Role.BRIDE, null));
                System.out.println("Bride user created: bride01 / bride123");
            }

            if (userRepository.findByUsername("groom01").isEmpty()) {
                userRepository.save(new User(null, "groom01", "groom123", Role.GROOM, null));
                System.out.println("Groom user created: groom01 / groom123");
            }

            if (userRepository.findByUsername("govt_officer").isEmpty()) {
                userRepository.save(new User(null, "govt_officer", "govt123", Role.GOVT, null));
                System.out.println("Govt user created: govt_officer / govt123");
            }

            if (userRepository.findByUsername("sponsor_corp").isEmpty()) {
                userRepository.save(new User(null, "sponsor_corp", "invest123", Role.INVESTOR, null));
                System.out.println("Investor user created: sponsor_corp / invest123");
            }
        };
    }
}
