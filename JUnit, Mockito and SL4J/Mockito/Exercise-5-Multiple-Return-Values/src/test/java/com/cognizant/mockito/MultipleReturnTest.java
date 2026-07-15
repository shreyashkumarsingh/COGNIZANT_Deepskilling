package com.cognizant.mockito;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class MultipleReturnTest {

    @Test
    void multipleReturns() {

        ExternalApi api = mock(ExternalApi.class);

        when(api.getData())
                .thenReturn("First")
                .thenReturn("Second")
                .thenReturn("Third");

        MyService service = new MyService(api);

        assertEquals("First", service.fetchData());

        assertEquals("Second", service.fetchData());

        assertEquals("Third", service.fetchData());

    }

}
