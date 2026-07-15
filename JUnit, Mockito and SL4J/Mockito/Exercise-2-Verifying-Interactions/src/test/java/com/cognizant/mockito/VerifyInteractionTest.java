package com.cognizant.mockito;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

class VerifyInteractionTest {

    @Test
    void verifyMethodInvocation() {

        ExternalApi api = mock(ExternalApi.class);

        when(api.getData()).thenReturn("Data");

        MyService service = new MyService(api);

        service.fetchData();

        verify(api).getData();

    }

}
