package com.tco.database;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;

import static org.junit.jupiter.api.Assertions.assertNotNull;

public class TestDatabaseConnection {

    @BeforeEach
    public void createConfigurationForTestCases() {
        DatabaseConnection.connect();
    }

    @Test
    @DisplayName("DatabaseConnection is not null")
    public void testConnection() {
        assertNotNull(DatabaseConnection.con);
    }
}