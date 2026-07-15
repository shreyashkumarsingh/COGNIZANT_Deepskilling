package com.cognizant.mockito.advanced;

public class FileService {

    private final FileReaderService reader;
    private final FileWriterService writer;

    public FileService(FileReaderService reader,
                       FileWriterService writer) {

        this.reader = reader;
        this.writer = writer;

    }

    public String processFile() {

        String content = reader.read();

        writer.write(content);

        return "Processed " + content;

    }

}
