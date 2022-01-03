package com.tco.database;

public class Credentials {
    
    private String USER;
    private String PASSWORD;
    private  String URL;

    public Credentials(){
        this.USER = "cs314-db";
        this.PASSWORD = "eiK5liet1uej";

        String useTunnel = System.getenv("CS314_USE_DATABASE_TUNNEL");
        if(useTunnel != null && useTunnel.equals("true")) {
            this.URL = "jdbc:mariadb://127.0.0.1:6666/cs314";
        }
        else {
            this.URL = "jdbc:mariadb://faure.cs.colostate.edu/cs314";
}
    }

    public String getUSER(){
        return this.USER;
    }

    public String getPASSWORD(){
        return this.PASSWORD;
    }

    public String getURL(){
        return this.URL;
    }
}
