package com.cognizant.mockito;

import org.junit.jupiter.api.Test;
import org.mockito.InOrder;

import static org.mockito.Mockito.*;

class InteractionOrderTest {

    @Test
    void verifyCallOrder() {

        ExternalApi api = mock(ExternalApi.class);

        api.getData();

        api.getData();

        InOrder order = inOrder(api);

        order.verify(api).getData();

        order.verify(api).getData();

    }

}
