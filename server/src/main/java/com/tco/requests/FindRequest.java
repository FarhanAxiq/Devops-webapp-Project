package com.tco.requests;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.tco.database.Query;
import com.tco.misc.BadRequestException;
import com.tco.misc.Places;

public class FindRequest extends Request {

    private String match;
    private Integer limit;
    private Integer found;
    private Places places;
    private String[] where = null;
    private String[] type = null;

    private final transient Logger log = LoggerFactory.getLogger(FindRequest.class);

    @Override
    public void buildResponse() throws BadRequestException {
        Query query = new Query(this.match, this.limit, this.type, this.where);
        this.found = query.selectCount();
        this.places = query.selectAll();
        if(this.type == null) this.type = null;
        else this.type = type;
        if(this.where == null) this.where = null;
        else this.where = where;
        log.trace("buildResponse -> {}", this);
    }


/* The following methods exist only for testing purposes and are not used
during normal execution, including the constructor. */
    public FindRequest() {
        this.requestType = "find";
        this.match = "#1";
        this.limit = 0;
    }

    public String getMatch(){
        return this.match;
    }

    public Integer getLimit(){
        return this.limit;
    }

    public String[] getTypes(){ 
        return this.type;
    }
    public String[] getWhere(){ 
        return this.where;
    }
    
    public Integer getFound(){
        return this.found;
    }

    public void setType() {
        this.type = new String[]{"heliport"};
    }

    public void setWhere() {
        this.where = new String[]{"Canada"};
    }   
}