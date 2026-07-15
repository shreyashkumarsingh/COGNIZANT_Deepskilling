package com.cognizant.mockito.advanced;

public class ApiService {

    private final RestClient client;

    public ApiService(RestClient client) {

        this.client = client;

    }

    public String fetchData() {

        return "Fetched " + client.getResponse();

    }

}
