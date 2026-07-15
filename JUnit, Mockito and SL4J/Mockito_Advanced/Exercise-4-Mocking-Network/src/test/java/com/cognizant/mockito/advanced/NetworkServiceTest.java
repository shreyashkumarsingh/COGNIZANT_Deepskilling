package com.cognizant.mockito.advanced;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class NetworkServiceTest {

    @Test
    void testNetworkMock() {

        NetworkClient client =
                mock(NetworkClient.class);

        when(client.connect())
                .thenReturn("Mock Connection");

        NetworkService service =
                new NetworkService(client);

        assertEquals(
                "Connected to Mock Connection",
                service.connectToServer()
        );

    }

}
