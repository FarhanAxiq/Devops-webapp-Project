/**
 * Dummy test case for places, only for test purposes.
 */

package com.tco.misc;


public class DummyPlaces{
    private Places places;


    public DummyPlaces(String type) {
        this.places = new Places();
        if (type.equals("distances")){ createDistancesPlaces(); }
        if (type.equals("tour")){ createTourPlaces(); }   
    }

    public void createDistancesPlaces(){
        Place place1 = new Place();
        place1.put("name", "place A");
        place1.put("latitude", "0");
        place1.put("longitude", "1");

        Place place2 = new Place();
        place2.put("name", "place B");
        place2.put("latitude", "1");
        place2.put("longitude", "0");

        Place place3 = new Place();
        place3.put("name", "place C");
        place3.put("latitude", "1");
        place3.put("longitude", "1");

        this.places.add(place1);
        this.places.add(place2);
        this.places.add(place3);
    }

    public void createTourPlaces(){
        // Fort Collins
        Place place1 = new Place();
        place1.put("name", "FOCO");
        place1.put("latitude", "40.5853");
        place1.put("longitude", "-105.0844");

        // Boulder
        Place place2 = new Place();
        place2.put("name", "BOUL");
        place2.put("latitude", "40.0150");
        place2.put("longitude", "-105.2705");

        // Denver
        Place place3 = new Place();
        place3.put("name", "KDEN");
        place3.put("latitude", "39.7392");
        place3.put("longitude", "-104.9903");

        this.places.add(place3);
        this.places.add(place2);
        this.places.add(place1);
        
    }


    public Places getDummyPlaces(){
        return this.places;
    }
}