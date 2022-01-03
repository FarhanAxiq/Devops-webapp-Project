package com.tco.database;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class TestQuery {

    private Query query;
    @BeforeEach
    public void createConfigurationForTestCases() {
        DatabaseConnection.connect();
        query = new Query("sembawang", 0, null, null);
    }

    @Test
    @DisplayName("DatabaseConnection is not null")
    public void testConnection() {
        assertNotNull(DatabaseConnection.con);
    }

    @Test
    @DisplayName("Testing SelectCount with match \"sembawang\", found: \"1\"")
    public void testSelectCount() {
        int found = query.selectCount();
        assertEquals(1, found);
    }

    @Test
    @DisplayName("Testing selectAll with match \"sembawang\", result: \"[{name=Sembawang Air Base, latitude=1.4252599477767944, longitude=103.81300354003906}]\"")
    public void testSelectAll() {
        query.selectAll();
        String result = query.getPlaces().toString();
        assertEquals("[{name=Sembawang Air Base, latitude=1.4252599477767944, longitude=103.81300354003906}]", result);
    }
    @Test
    @DisplayName("Testing selectAll with match \"DJJ\", found: \"1\"")
    public void testAirportCode() {
        int found = query.selectCount();
        assertEquals(1, found);
    }
}