package com.tco.requests;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import com.tco.misc.Places;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestDistanceRequest {

    private DistancesRequest dist;

    @BeforeEach
    public void createConfigurationForTestCases() {
        dist = new DistancesRequest();
        dist.buildResponse();
    }

    @Test
    @DisplayName("Request type is \"distances\"")
    public void testType() {
        String type = dist.getRequestType();
        assertEquals("distances", type);
    }

    @Test
    @DisplayName("Earth Radius is \"3959\" miles")
    public void testEarthRadius() {
        Double earthRad = dist.getEarthRadius();
        assertEquals(3959.0, earthRad);
    }

    @Test
    @DisplayName("Places is \"[{name=place A, latitude=0, longitude=1}, {name=place B, latitude=1, longitude=0}, {name=place C, latitude=1, longitude=1}]\"")
    public void testPlaces() {
        String equals = "[{name=place A, latitude=0, longitude=1}, {name=place B, latitude=1, longitude=0}, {name=place C, latitude=1, longitude=1}]";
        Places result = dist.getPlaces();
        assertEquals(equals, result.toString());
    }

    @Test
    @DisplayName("Distances found is \"98, 69, 69\"")
    public void testDistances() {
        Integer[] expectedResult = new Integer[]{98, 69, 69};
        Integer[] result = dist.getDistances();
        assertTrue(Arrays.equals(expectedResult, result));
    }
}