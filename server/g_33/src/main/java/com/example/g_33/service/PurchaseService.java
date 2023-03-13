package com.example.g_33.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.g_33.model.Purchase;
import com.example.g_33.repository.PurchaseRepository;

@Service
public class PurchaseService {

    @Autowired
    PurchaseRepository purchaseRepository;

    public PurchaseService() {
        super();
        // TODO Auto-generated constructor stub
    }

    public List<Purchase> getPurchases() {
        return (List<Purchase>) purchaseRepository.findAll();
    }

    public void addPurchase(Purchase newPurchase) {
        purchaseRepository.save(newPurchase);
    }

    public Optional<Purchase> findByPurchaseID(Long purchaseID) {
        return purchaseRepository.findById(purchaseID);
    }

    public List<Purchase> getPurchasesByUserID(int userID) {
        return purchaseRepository.findByUserID(userID);
    }

}
