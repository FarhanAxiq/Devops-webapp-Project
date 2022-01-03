package com.tco.tour;

import com.tco.distances.Calculate;
import com.tco.misc.Places;
import com.tco.misc.Place;
import java.util.Arrays;

public class NewTour {
    private Places placesList;
    private int size;
    private Double earthRadius;
    private int[] currentTour;
    private int[] shortestTour;
    private boolean[] visited;
    private int originalDistance;
    private int[][] distanceMatrix;
    private int[] originalTour;
    private int currentTourDistance;
    private int shortestTourDistance;
    private Countdown count;

    public NewTour(Places placesList, Double earthRadius, Countdown count) {
        this.placesList = placesList;
        this.size = placesList.size();
        this.earthRadius = earthRadius;
        this.currentTour = new int[this.size];
        this.shortestTour = new int[this.size];
        this.visited = new boolean[this.size];
        this.currentTourDistance = 0;
        createDistancesMatrix();
        createOriginalTour();
        this.shortestTourDistance = this.originalDistance;
        this.count = count;
    }

    /************************************************************************************************************************  
    * This function is used in the constructor to create the distance lookup table and calculate the initial trip distance
    *************************************************************************************************************************/
    private void createDistancesMatrix(){
        this.distanceMatrix = new int[this.size][this.size];
        Calculate calc = new Calculate();

        for (int i = 0; i < this.size; i++) {
            for (int j = i; j < this.size; j++) {
                if (i == j) {
                    this.distanceMatrix[i][j] = 0;
                }
                else{
                    int distanceFound = calc.circleDistance(this.placesList.get(i), this.placesList.get(j), this.earthRadius);
                    this.distanceMatrix[i][j] = distanceFound;
                    this.distanceMatrix[j][i] = distanceFound;
                    if (j == (i + 1)) {
                        this.originalDistance += distanceFound;
                    }
                }             
            }                   
        }
        this.originalDistance += calc.circleDistance(this.placesList.get(0), this.placesList.get(this.size - 1), this.earthRadius);
    }

    /**************************************************************************************************** 
    * This function is used in the constructor for initializing data member arrays
    ****************************************************************************************************/
    private void createOriginalTour() {
        this.originalTour = new int[this.size];
        for (int i = 0; i < this.size; ++i) {
            this.originalTour[i] = i;
            this.shortestTour[i] = i;
        }
    }

    /**************************************************************************************************** 
    * This function resets the necessary variables for the next tour to be found correctly
    ****************************************************************************************************/
    private void resetVisitedAndCurrentDistance() {
        for (int i = 0; i < this.size; ++i) {
            this.visited[i] = false;
        }
        this.currentTourDistance = 0;
    }

    /**************************************************************************************************** 
    * This is the public API used to start the process of finding the best tour
    ****************************************************************************************************/
    public Places findBestKNNTour() {
        for (int i = 0; i < this.size; ++i) {
            if (this.count.timer()) {
                createNearestNeighborTour(i);
                if (this.currentTourDistance < this.shortestTourDistance) {
                    updateShortestTour();
                }
                resetVisitedAndCurrentDistance();
            }
            else {
                break;
            }
        }
        shiftShortestTourIndices(); 
        return buildNewPlaces();
    }

    /**************************************************************************************************** 
    * This function greedily creates the nearest neighbor tour from a given starting city
    ****************************************************************************************************/
    private void createNearestNeighborTour(int startCityIndex) {
        /* Add starting city to tour and mark it visited */
        this.currentTour[0] = this.originalTour[startCityIndex];
        this.visited[startCityIndex] = true;
        int currentCityIndex = startCityIndex;
        
        /* Loop through unvisited cities and find nearest neighbor */
        for (int i = 1; i < this.size; ++i) {
            int nearestNeighborIndex = this.size;
            int nearestNeighborDistance = Integer.MAX_VALUE;

            /* Find closest neighbor */
            for (int j = 0; j < this.size; ++j) {
                if (this.visited[j]) {
                    continue;
                }
                else {
                    /* Get the distance b/n current city and the next city in the array */
                    int currentDistance = this.distanceMatrix[currentCityIndex][j];
                    if ((currentDistance < nearestNeighborDistance) && (currentCityIndex != j)) {
                        nearestNeighborDistance = currentDistance;
                        nearestNeighborIndex = j;
                    }
                }
            }

            /* Add Nearest Neighbor to tour and update visited */
            this.currentTour[i] = nearestNeighborIndex;
            this.currentTourDistance += nearestNeighborDistance;
            this.visited[nearestNeighborIndex] = true;
            currentCityIndex = nearestNeighborIndex;
        }
        /* Add distance of return leg */
        int lastCity = this.currentTour[this.size - 1];
        this.currentTourDistance += this.distanceMatrix[startCityIndex][lastCity];
    }


    /************************************************************************************************************************  
    * This function updates the shortest tour array to keep track of the current shortest tour found
    *************************************************************************************************************************/
    private void updateShortestTour() {
        this.shortestTourDistance = this.currentTourDistance;
        for (int i = 0; i < this.size; ++i) {
            this.shortestTour[i] = this.currentTour[i];
        }
    }


    /************************************************************************************************************************  
    * This function rotates the indices in the shortest tour array in order to preserve the original starting point
    *************************************************************************************************************************/
    private void shiftShortestTourIndices() {
        while (this.shortestTour[0] != 0) {
            int temp = this.shortestTour[0];
            for (int i = 0; i < this.size - 1; ++i) {
                this.shortestTour[i] = this.shortestTour[i + 1];
            }
            this.shortestTour[this.size - 1] = temp;
        }
    }


    /************************************************************************************************************************  
    * This function constructs a new Places object with the updated tour and returns it
    *************************************************************************************************************************/
    private Places buildNewPlaces() {
        Places newPlaces = new Places();
        for (int i = 0; i < this.size; ++i) {
            newPlaces.add(this.placesList.get(this.shortestTour[i]));
        }
        return newPlaces;
    }
}
