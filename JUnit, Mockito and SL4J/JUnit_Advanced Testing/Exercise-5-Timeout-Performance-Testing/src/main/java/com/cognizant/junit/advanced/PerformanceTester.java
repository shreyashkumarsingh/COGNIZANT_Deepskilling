package com.cognizant.junit.advanced;

public class PerformanceTester {

    public void performTask() {

        for(int i=0;i<1000000;i++) {

            Math.sqrt(i);

        }

    }

}
