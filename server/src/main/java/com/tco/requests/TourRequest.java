package com.tco.requests;
import java.util.ArrayList;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.tco.distances.Distances; 
import com.tco.distances.Calculate; 
import com.tco.misc.BadRequestException;
import com.tco.tour.Countdown; 
import com.tco.tour.NewTour;

import com.tco.misc.Places;
import com.tco.misc.DummyPlaces;

public class TourRequest extends Request {
    private Places places; 
    private Double response;
    private Double earthRadius;
    
    private final transient Logger log = LoggerFactory.getLogger(TourRequest.class); 
    
    @Override
    public void buildResponse() throws BadRequestException {
        if (this.response > 0.0 && this.places.size() != 0) {
            Countdown count = new Countdown(this.response);
            NewTour tour = new NewTour(this.places, this.earthRadius, count);
            this.places = tour.findBestKNNTour();
        }
        log.trace("buildResponse -> {}", this);
    }

     /* The following methods exist only for testing purposes and are not used
    during normal execution, including the constructor. */
    
    public TourRequest() {
        this.requestType = "tour";
        this.earthRadius = 3959.0;
        this.response = 1.0;
        Countdown count = new Countdown(this.response);
        DummyPlaces place = new DummyPlaces("tour");
        places = place.getDummyPlaces();
    }

    public Double getEarthRadius() {
        return this.earthRadius;
    }

    public Double getresponse() {
        return this.response;
    }

    public int getPlacesSize() {
        return this.places.size();
    }
    
    public Places getPlaces() {
        return this.places;
    }
}
