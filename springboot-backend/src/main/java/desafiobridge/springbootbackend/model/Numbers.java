package desafiobridge.springbootbackend.model;

import javax.persistence.*;

@Entity
@Table(name = "numbers")
public class Numbers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "input_number")
    private float x;

    @Column(name = "duodigito")
    private float duodigito;

    public Numbers() {
    }

    public Numbers(float x, float duodigito) {
        this.x = x;
        this.duodigito = duodigito;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public float getX() {
        return x;
    }

    public void setX(float x) {
        this.x = x;
    }

    public float getDuodigito() {
        return duodigito;
    }

    public void setDuodigito(float duodigito) {
        this.duodigito = duodigito;
    }
}


