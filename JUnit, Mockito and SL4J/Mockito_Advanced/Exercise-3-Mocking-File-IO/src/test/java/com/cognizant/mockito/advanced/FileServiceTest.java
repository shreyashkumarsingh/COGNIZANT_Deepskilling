package com.cognizant.mockito.advanced;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class FileServiceTest {

    @Test
    void testFileMock() {

        FileReaderService reader =
                mock(FileReaderService.class);

        FileWriterService writer =
                mock(FileWriterService.class);

        when(reader.read())
                .thenReturn("Mock File Content");

        FileService service =
                new FileService(reader, writer);

        assertEquals(
                "Processed Mock File Content",
                service.processFile()
        );

        verify(writer)
                .write("Mock File Content");

    }

}
