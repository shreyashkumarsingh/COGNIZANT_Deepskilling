public class BuilderTest {
    public static void main(String[] args) {
        Computer gamingPC = new Computer.Builder()
                .cpu("Intel Core i9-13900K")
                .ram("32GB DDR5")
                .storage("2TB NVMe SSD")
                .gpu("NVIDIA RTX 4090")
                .os("Windows 11")
                .build();

        Computer officePC = new Computer.Builder()
                .cpu("Intel Core i5-13400")
                .ram("16GB DDR4")
                .storage("512GB SSD")
                .build();

        System.out.println("Gaming PC:");
        System.out.println(gamingPC);

        System.out.println("\nOffice PC:");
        System.out.println(officePC);
    }
}
