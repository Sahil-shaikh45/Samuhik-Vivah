package com.massmarriage.portal.repository;

import com.massmarriage.portal.entity.Gift;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface GiftRepository extends JpaRepository<Gift, Long> {
    List<Gift> findByCoupleId(Long coupleId);
}
