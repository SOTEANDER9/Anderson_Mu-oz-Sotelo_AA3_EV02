package com.mediatechsoftware.magnamedic.models;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Date;

@Data
@Entity
@Table(name = "patients")
@ToString @EqualsAndHashCode
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "id")
    private int id;

    @Getter @Setter @Column(name = "identification")
    private long identification;

    @Getter @Setter @Column(name = "identification_type_id")
    private int identificationTypeId;

    @Getter @Setter @Column(name = "name")
    private String name;

    @Getter @Setter @Column(name = "last_name")
    private String lastName;

    @Getter @Setter @Column(name = "gender_id")
    private int genderId;

    @Getter @Setter @Column(name = "date_of_birth")
    private Date dateOfBirth;

    @Getter @Setter @Column(name = "address")
    private String address;

    @Getter @Setter @Column(name = "city")
    private String city;

    @Getter @Setter @Column(name = "telephone")
    private String telephone;

    @Getter @Setter @Column(name = "email")
    private String email;

    @Getter @Setter @Column(name = "blood_type_id")
    private int bloodTypeId;

    @CreationTimestamp
    @Getter @Setter @Column(name = "created_at")
    private Date createdAt;
}
