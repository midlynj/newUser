package stacks.data;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class User {

    private long id;
    private String username;
    private String email;
    private String password;
}
