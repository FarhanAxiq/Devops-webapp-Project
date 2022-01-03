package com.tco.distances;
import java.util.ArrayList;
import com.tco.misc.Places;
import com.tco.misc.Place;
import com.tco.distances.Calculate; 


public class Distances{
    private String name; 
    private Double earthRadius;
    private Integer latitude; 
    private Integer longitude;
    private Integer origin; 
    private Integer destination; 
    private Places places;
    private Double[] distances; 
    private Integer[] distance; 
  
  
    public Distances(Places places, Double earthRadius){
        this.places = places;
        this.earthRadius = earthRadius;
        this.destination = null; 
        this.origin = null; 
    } 

    public Integer[] doubleToIntegerArray(Double[] doubleArray){
        distance = new Integer[doubleArray.length];

        if(doubleArray.length <= 0) return distance;

        for(int i = 0; i < doubleArray.length; i++){
            distance[i] = doubleArray[i].intValue();
        }
        return distance;    
    } 
    

    public Integer[] SendInfoForCalculations(){


        if(this.places.isEmpty()){
            return distance;
        }

        this.distances = new Double[places.size()];   
        Calculate calculate = new Calculate();
        double distanceFound = 0;
        
        for(int i = 0; i < places.size()-1; i++){  
            distanceFound = calculate.circleDistance(places.get(i), places.get(i+1), earthRadius);    
            this.distances[i] = distanceFound;
        }
        distanceFound = calculate.circleDistance(places.get(0), places.get(places.size()-1), earthRadius);
        this.distances[places.size()-1] = distanceFound;
        return doubleToIntegerArray(this.distances);

    }
}


