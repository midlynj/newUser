package stacks.data;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString

public class Product {
    private long id;
    private String name;
    private long quantity;
    private long price;
    private String category;
    private String image;

}
