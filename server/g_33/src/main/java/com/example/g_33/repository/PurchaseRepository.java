package com.example.g_33.repository;

import com.example.g_33.model.Purchase;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface PurchaseRepository extends CrudRepository<Purchase, Long> {
    List<Purchase> findByPurchaseID(int purchaseID);

    List<Purchase> findByUserID(int userID);

}
