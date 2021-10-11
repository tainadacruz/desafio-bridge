package desafiobridge.springbootbackend.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "numbers")
public class Numbers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "input_number")
    private int x;

    @Column(name = "duodigito")
    private int duodigito;

    public Numbers() {
    }

    public Numbers(int x, int duodigito) {
        this.x = x;
        this.duodigito = duodigito;
    }

    public int calculaDuodigito(int value){
        int x = value;
        int number = 0;
        int flag = 0;
        int aux = 2;
        List<Integer> list = new ArrayList<Integer>();

        while(flag == 0){
            number = x * aux;
            int atual = number;
            int last;
            int length = String.valueOf(number).length();

            for(int i = 0; i < length; i++){
                if(list.size() > 2){
                    break;
                }

                last = atual % 10;
                atual = atual / 10;

                if(i == 0) {
                    list.add(last);
                }

                if (list.contains(last)){
                    continue;
                } else {
                    list.add(last);
                }

            }

            if (list.size() <= 2){
                flag = 2;
                break;
            }
            aux++;
            list.clear();

        }
        return number;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getDuodigito() {
        return duodigito;
    }

    public void setDuodigito(int duodigito) {
        this.duodigito = duodigito;
    }
}


