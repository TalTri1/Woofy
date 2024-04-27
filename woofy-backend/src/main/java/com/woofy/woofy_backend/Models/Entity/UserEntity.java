package com.woofy.woofy_backend.Models.Entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.woofy.woofy_backend.Models.Enums.RoleEnum;
import jakarta.persistence.*;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_user")
public class UserEntity implements UserDetails {

    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private Integer id;

    @Email(message = "Email should be valid")
    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @Column(name = "first_name", unique = true, nullable = false)
    private String firstName;

    @Column(name = "last_name", unique = true, nullable = false)
    private String lastName;

    @Pattern(regexp="(^$|[0-9]{10})", message="Phone number must be exactly 10 digits long")
    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Size(min = 8, message = "Password must be at least 8 characters long")
    @Column(name = "password", nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "roles", nullable = false)
    private RoleEnum role;

    @OneToMany(mappedBy = "user")
    @Column(name = "tokens")
    private List<TokenEntity> tokens;

    @CreationTimestamp
    @Column(updatable = false, name = "created_at")
    private Date createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Date updatedAt;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return role.getAuthorities();
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}