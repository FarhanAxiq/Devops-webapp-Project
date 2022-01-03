package com.tco.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {

    public static Connection con;

    public static void connect() {
        try {
            Credentials db = new Credentials();
            con = DriverManager.getConnection(db.getURL(), db.getUSER(), db.getPASSWORD());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void closeConnection(Connection con) {
        try {
            if (null != con) {
                con.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}