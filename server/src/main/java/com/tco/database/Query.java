package com.tco.database;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;
import com.tco.database.DatabaseConnection;
import java.sql.*;
import java.util.Map;
import java.util.HashMap;

import com.tco.misc.Places;
import com.tco.misc.Place;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Query {

    private static String match;
    private static Integer limit;
    private Places places;
    private Integer result;
    private String[] where = null;
    private String[] type = null;
    private String filter;

    private final transient Logger log = LoggerFactory.getLogger(Query.class);

   public Query(String match, Integer limit, String[] type, String[] where){
       this.match = match;
       this.limit = (limit == 0) ? 100 : (limit);
       this.type = type;
       this.where = where;
       this.places = new Places();
       this.result = 0;
       DatabaseConnection.connect();
   }

   public String checkType(String[] type){
        HashMap<String, String> types = new HashMap<String, String>();
        types.put("airport", "\'small_airport\', \'medium_airport\', \'large_airport\'");
        types.put("heliport", "\'heliport\'");
        types.put("balloonport","\'balloonport\'");
        types.put("other",  "\'seaplane_base\', \'closed\'");
        String filter = "(";
        int size = type.length;
        int index = 0;
        for(String s : type){
            if(size != 0 && index != 0) filter += ", ";
            filter += types.get(s); 
            size--;
            index++;
        }
        filter += ")";
        return filter;
}
    public String buildSelectAllQuery(){
        String query =  "SELECT world.iata_code, world.name, world.latitude, world.longitude, world.municipality,"
                        + " region.name, country.name, continent.name, world.altitude"
                        + " FROM world"
                        + " INNER JOIN continent ON world.continent = continent.id"
                        + " INNER JOIN country ON world.iso_country = country.id"
                        + " INNER JOIN region ON world.iso_region = region.id"
                        + " WHERE (world.iata_code  LIKE \'%" + this.match + "%\'"
                        + " OR world.name LIKE \'%" + this.match + "%\'"
                        + " OR continent.name LIKE \'%" + this.match + "%\'"
                        + " OR world.municipality LIKE \'%" + this.match + "%\'"
                        + " OR country.name LIKE \'%" + this.match + "%\'"
                        + " OR region.name LIKE \'%" + this.match + "%\')";
        return query;
    }
    
    public String buildSelectCountQuery(){
        String query =  "SELECT COUNT(*)"
                        + " FROM world"
                        + " INNER JOIN continent ON world.continent = continent.id"
                        + " INNER JOIN country ON world.iso_country = country.id"
                        + " INNER JOIN region ON world.iso_region = region.id"
                        + " WHERE (world.iata_code LIKE \'%" + this.match + "%\'"
                        + " OR world.name LIKE \'%" + this.match + "%\'"
                        + " OR continent.name LIKE \'%" + this.match + "%\'"
                        + " OR world.municipality LIKE \'%" + this.match + "%\'"
                        + " OR country.name LIKE \'%" + this.match + "%\'"
                        + " OR region.name LIKE \'%" + this.match + "%\')";

        return query;
    }

    public String appendToQuery(String selectStatement){
        boolean whereExists = this.where != null && this.where.length != 0;
        boolean typeExists = this.type != null && this.type.length != 0;
        if(whereExists && typeExists){
            return selectStatement +=  " AND country.name IN ('"+ this.where[0] +"')"
                                + " AND world.type IN " + checkType(this.type)
                                + " LIMIT " + this.limit+ ";";  
        }
        else if(whereExists && !typeExists){
            return selectStatement +=  " AND country.name IN ('"+ this.where[0] +"')"
                                + " LIMIT " + this.limit+ ";";

        }else if(!whereExists && typeExists){
            return selectStatement +=  " AND world.type IN " + checkType(this.type)
                                + " LIMIT " + this.limit+ ";";
        }else{
            return selectStatement += " LIMIT " + this.limit+ ";";
        } 
    }
   
    public Integer selectCount() {
        String selectCountStatement = buildSelectCountQuery();
        selectCountStatement = appendToQuery(selectCountStatement);
        try {
            Statement query = DatabaseConnection.con.createStatement();
            ResultSet rs =  query.executeQuery(selectCountStatement);
            if (!rs.next()) {
                result = -1;
            } 
            else {
                result = rs.getInt("count(*)");
            }
            
            
        } catch (Exception e){
            log.error("Database connection failed");  
        }
        return result;
    }

    public Places selectAll(){
        int result = 0;
        String selectAllStatement = buildSelectAllQuery();
        selectAllStatement = appendToQuery(selectAllStatement);
        try {
            Statement query = DatabaseConnection.con.createStatement();
            ResultSet rs =  query.executeQuery(selectAllStatement);
            
            if (!rs.next()) {
                result = -1;
            }
            else {
                places = convertQueryResultsToPlaces(rs);
            }
        } catch (Exception e){
            log.error(e.getMessage());         
        }
        return places;
    }

    public Places convertQueryResultsToPlaces(ResultSet results){
        try {
            do {
                Place place = new Place();
                place.put("name", results.getString("name"));
                place.put("latitude", results.getString("latitude"));
                place.put("longitude", results.getString("longitude"));
                places.add(place);
            }
            while (results.next());
            
        } catch (Exception e) {
            log.error("Failed to convert ResultSet to Places");
        }
        return places;
    }


    /* For testing use only */

    public Places getPlaces(){
       return this.places;
    }

    @Override
    public String toString() {
        return getPlaces().toString();
    }
}
