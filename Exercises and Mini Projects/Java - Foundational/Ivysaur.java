package learningJava;

public class Ivysaur extends Bulbasaur {

    //Notice that we don't need need to recreate the variables name and age, even though they're private

    private int evolution;

    public Ivysaur(String name, int age, int evolution) {
        super(name, age);
        this.evolution = evolution;
    }

    //Defining the same method again in the subclass will override the method in the superclass
    //"this.name" doesn't work unless the name and age variable is declared to be "protected
    public void speak() {
        System.out.println("My nickname is "+this.name+" and I am "+this.age+" years old. I am " + this.getClass());
    }

    public int getAge() {
        return this.age;
    }


}
