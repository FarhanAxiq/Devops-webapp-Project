package com.tco.distances;
import com.tco.misc.Place;
import java.lang.Math.*;

public class Calculate {
  
  private String place1Name;
  private Double place1Longitude;
  private Double place1Latitude;
  private String place2Name;
  private Double place2Longitude;
  private Double place2Latitude;
  private Double absoluteDifferenceLongitude;
  private Double absoluteDifferenceLatitude;
  private Double thetaBBy;
  
  
   public long arctan(Double radius, Double centralAngle){ return Math.round(centralAngle * radius); }

   public Double absoluteDifferences(Double num1, Double num2) { return Math.abs(num1-num2); }
  
   public int circleDistance(Place p1, Place p2, Double radius){
       
      double foundDistance = 0; 

      place1Latitude = Math.toRadians(Double.parseDouble(p1.get("latitude")));
      place1Longitude = Math.toRadians(Double.parseDouble(p1.get("longitude")));
      place1Name = p1.get("name");

      place2Latitude = Math.toRadians(Double.parseDouble(p2.get("latitude")));
      place2Longitude = Math.toRadians(Double.parseDouble(p2.get("longitude")));
      place2Name = p2.get("name");

      absoluteDifferenceLongitude = absoluteDifferences(place1Longitude, place2Longitude);
      absoluteDifferenceLatitude = absoluteDifferences(place1Latitude, place2Latitude);


      Double numerator1 = Math.pow( (Math.cos(place2Latitude) * Math.sin(absoluteDifferenceLongitude)), 2);
      Double numerator2 = Math.cos(place1Latitude) * Math.sin(place2Latitude);
      Double numerator3 = Math.sin(place1Latitude) * Math.cos(place2Latitude) * Math.cos(absoluteDifferenceLongitude);
      Double numerator4 = numerator2 - numerator3;
      Double numeratorFinal = Math.sqrt(numerator1 + Math.pow(numerator4, 2));

      Double denominator0 = Math.sin(place1Latitude) * Math.sin(place2Latitude);
      Double denominator1 = Math.cos(place1Latitude) * Math.cos(place2Latitude) * Math.cos(absoluteDifferenceLongitude);
      Double dFinal = denominator0 + denominator1;

      thetaBBy = Math.atan2(numeratorFinal, dFinal);

      foundDistance = arctan(radius, thetaBBy);
      return (int)foundDistance;
    }
}
