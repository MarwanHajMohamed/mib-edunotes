package com.example.g_33.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "PurchaseHistory")
@EntityListeners(AuditingEntityListener.class)
public class Purchase implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotBlank
    String purchaseID;

    int userID;

    @NotNull
    int stars;

    double price;

    @NotNull
    long purchase_date;

    public Purchase() {

    }

    public Purchase(String purchaseID, int userID, int stars, double price, long purchase_date) {
        super();
        this.purchaseID = purchaseID;
        this.userID = userID;
        this.stars = stars;
        this.price = price;
        this.purchase_date = purchase_date;
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
        return this.purchase_date;
    }

    public void setPurchaseDate(long purchase_date) {
        this.purchase_date = purchase_date;
    }

    @Override
    public String toString() {
        return "Purchase [p_ID=" + purchaseID + ", stars=" + stars
                + ", price=" + price + ", date=" + purchase_date + "]";
    }

}