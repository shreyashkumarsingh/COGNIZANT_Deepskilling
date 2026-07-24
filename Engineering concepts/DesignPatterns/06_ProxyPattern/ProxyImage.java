public class ProxyImage implements Image {
    private String filename;
    private RealImage cachedImage;

    public ProxyImage(String filename) {
        this.filename = filename;
    }

    @Override
    public void display() {
        if (cachedImage == null) {
            System.out.println("Cache miss. Fetching image...");
            cachedImage = new RealImage(filename);
        } else {
            System.out.println("Cache hit. Using cached image for: " + filename);
        }
        cachedImage.display();
    }
}
