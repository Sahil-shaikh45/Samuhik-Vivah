-- Samuhik Vivah Management System Database Setup
CREATE DATABASE IF NOT EXISTS vivahdb;
USE vivahdb;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Couple Profiles Table
CREATE TABLE IF NOT EXISTS couple_profiles (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT,
    bride_name VARCHAR(150),
    groom_name VARCHAR(150),
    bride_age INT,
    groom_age INT,
    contact_number VARCHAR(15),
    category VARCHAR(20) DEFAULT 'OPEN',
    address TEXT,
    city VARCHAR(100),
    district VARCHAR(100),
    is_verified BOOLEAN DEFAULT FALSE,
    verification_status VARCHAR(20) DEFAULT 'PENDING',
    registration_id VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Venues Table
CREATE TABLE IF NOT EXISTS venues (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200),
    address TEXT,
    capacity INT,
    city VARCHAR(100)
);

-- Seed Data
INSERT INTO users (username, password, role) VALUES 
('admin', 'admin123', 'ADMIN'),
('govt_officer', 'govt123', 'GOVT'),
('sponsor_corp', 'invest123', 'INVESTOR'),
('bride01', 'bride123', 'BRIDE'),
('groom01', 'groom123', 'GROOM')
ON DUPLICATE KEY UPDATE username=username;

INSERT INTO venues (name, address, capacity, city) 
VALUES ('BKC Grand Ground', 'Bandra Kurla Complex, Area 5', 500, 'Mumbai')
ON DUPLICATE KEY UPDATE name=name;
