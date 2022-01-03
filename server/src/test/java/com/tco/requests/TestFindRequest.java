package com.tco.requests;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;

import com.tco.misc.BadRequestException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class TestFindRequest {

    private FindRequest find;

    @BeforeEach
    public void createConfigurationForTestCases() throws BadRequestException {
        find = new FindRequest();
        find.buildResponse();
    }

    @Test
    @DisplayName("Request type is \"find\"")
    public void testType() {
        String type = find.getRequestType();
        assertEquals("find", type);
    }

    @Test
    @DisplayName("Match is \"#1\"")
    public void testMatch() {
        String match = find.getMatch();
        assertEquals("#1", match);
    }

    @Test
    @DisplayName("Limit is \"0\"")
    public void testLimit() {
        Integer limit = find.getLimit();
        assertEquals(0, limit); 
    }


    @Test
    @DisplayName("Query found is \"2\"")
    public void testFound() {
        Integer found = find.getFound();
        assertEquals(2, found); 
    }

    @Test
    @DisplayName("Type is \"heliport\"")
    public void testTypeProperty() {
        find.setType();
        String[] types = find.getTypes();
        assertEquals("heliport", types[0]);
    }

    @Test
    @DisplayName("Where is \"Canada\"")
    public void testWhere() {
        find.setWhere();
        String[] where = find.getWhere();
        assertEquals("Canada", where[0]);
    }


}