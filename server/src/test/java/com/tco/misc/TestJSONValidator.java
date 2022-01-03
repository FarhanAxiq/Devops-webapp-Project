package com.tco.misc;

import com.tco.requests.ConfigRequest;
import com.tco.requests.FindRequest;

import java.lang.reflect.Type;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertFalse;

public class TestJSONValidator {

    private void test(String request, Type type, boolean valid) {
        try {
            JSONValidator.validate(request, type);
            assertTrue(valid);
        } catch ( Exception e ) {
            assertFalse(valid);
        }
    }

    @Test
    @DisplayName("Config request should fail schema validation")
    public void testConfigRequestFail() {
        test("{}", ConfigRequest.class, false);
    }

    @Test
    @DisplayName("Config request should pass schema validation")
    public void testConfigRequestPass() {
        test("{\"requestType\":\"config\",\"features\":[\"config\"]}", ConfigRequest.class, true);
    }

    @Test
    @DisplayName("Find request should fail schema validation")
    public void testFindRequestFail() {
        test("{}", FindRequest.class, false);
    }

    @Test
    @DisplayName("Find request should pass schema validation")
    public void testFindRequestPass() {
        test("{\"requestType\": \"find\",\"match\": \"\",\"limit\":  0}", FindRequest.class, true);
    }

    @Test
    @DisplayName("There should be no schema for the JSONValidator class")
    public void testMissingSchema() {
        test("", JSONValidator.class, false);
    }
}
