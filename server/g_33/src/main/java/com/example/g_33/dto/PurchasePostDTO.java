package com.example.g_33.dto;

public class PurchasePostDTO {
    String purchaseID;
    int userID;

    int stars;
    double price;
    long purchaseDate;

    public PurchasePostDTO(String purchaseID, int userID, int stars, double price, long purchaseDate) {
        this.purchaseID = purchaseID;
        this.userID = userID;
        this.stars = stars;
        this.price = price;
        this.purchaseDate = purchaseDate;
    }

    public String getPurchaseID() {
        return this.purchaseID;
    }

    public void setPurchaseID(String purchaseID) {
        this.purchaseID = purchaseID;
    }

    public int getUserID() {
        return this.userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public int getStars() {
        return this.stars;
    }

    public void setStars(int stars) {
        this.stars = stars;
    }

    public double getPrice() {
        return this.price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public long getPurchaseDate() {
        return this.purchaseDate;
    }

    public void setPurchaseDate(long purchaseDate) {
        this.purchaseDate = purchaseDate;
    }

}
