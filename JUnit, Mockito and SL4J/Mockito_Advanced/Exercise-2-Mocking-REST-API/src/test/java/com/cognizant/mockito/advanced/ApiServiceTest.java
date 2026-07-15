package com.cognizant.mockito.advanced;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class ApiServiceTest {

    @Test
    void testRestApiMock() {

        RestClient client = mock(RestClient.class);

        when(client.getResponse())
                .thenReturn("Mock Response");

        ApiService api = new ApiService(client);

        assertEquals(
                "Fetched Mock Response",
                api.fetchData()
        );

    }

}
