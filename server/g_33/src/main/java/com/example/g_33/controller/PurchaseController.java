package com.example.g_33.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.g_33.dto.PurchasePostDTO;
import com.example.g_33.model.Purchase;
import com.example.g_33.service.PurchaseService;

@RestController
public class PurchaseController {

    @Autowired
    PurchaseService purchaseService;

    // Get all purchase history
    @GetMapping("/purchase")
    public List<Purchase> getPurchases() {
        return purchaseService.getPurchases();
    }

    //
    @PostMapping("/purchase")
    public ResponseEntity<Optional<Purchase>> addPurchase(@RequestBody PurchasePostDTO newPurchaseDTO) {

        Purchase newPurchase = new Purchase(newPurchaseDTO.getPurchaseID(), newPurchaseDTO.getUserID(),
                newPurchaseDTO.getStars(), newPurchaseDTO.getPrice(), newPurchaseDTO.getPurchaseDate());
        purchaseService.addPurchase(newPurchase);
        return new ResponseEntity<>(Optional.ofNullable(newPurchase), HttpStatus.CREATED);
    }

    // Get purchase history by ID
    @GetMapping("/purchase/user/{userID}")
    public List<Purchase> getPurchasesByUserID(@PathVariable(value = "userID") int userID) {
        return purchaseService.getPurchasesByUserID(userID);
    }

}
