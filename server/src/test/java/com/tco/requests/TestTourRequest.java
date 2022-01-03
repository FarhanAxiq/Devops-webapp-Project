package com.tco.requests;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import com.tco.misc.BadRequestException;
import com.tco.misc.Place;
import com.tco.misc.Places;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;


public class TestTourRequest {
    private TourRequest tour;

    @BeforeEach
    public void createConfigurationForTestCases() throws BadRequestException {
        tour = new TourRequest();
        tour.buildResponse();
    }

    
    @Test
    @DisplayName("Request type is \"tour\"")
    public void testType() {
        String type = tour.getRequestType();
        assertEquals("tour", type);
    }

    @Test
    @DisplayName("Earth Radius is \"3959.0\"")
    public void testEarthRadius() {
        Double earthRadius = tour.getEarthRadius();
        assertEquals(3959.0, earthRadius);
    }

    @Test
    @DisplayName("Response Time is \"1.0\"")
    public void testresponse() {
        Double response = tour.getresponse();
        assertEquals(1.0, response);
    }

    @Test
    @DisplayName("Places has 3 items")
    public void testPlacesSize() {
        int placesSize = tour.getPlacesSize();
        assertEquals(3, placesSize);
    }

    @Test
    @DisplayName("Starting place is preserved")
    public void testStartPlace() {
        Places places = tour.getPlaces();
        Place firstPlace = places.get(0);
        assertEquals("KDEN", firstPlace.get("name"));
    }
    
}
