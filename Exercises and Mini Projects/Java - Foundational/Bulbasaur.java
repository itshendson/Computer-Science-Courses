package learningJava;

public class Bulbasaur {

    protected String name; //Best Practice: It's better to use private so that you don't accidentally let other class use this variable.
    protected int age;
    private static String type;

    public Bulbasaur(String name, int age) {
        this.name = name;
        this.age = age;
        add2();
    }

    public void speak() {
        System.out.println("My nickname is "+this.name+" and I am "+this.age+" years old.");
    }

    public int getAge() {
        return this.age;
    }

    //Notice that this method is public. This lets other class like Main to use setAge()
    public void setAge(int age) {
        this.age = age;
    }

    //Notice that this method is private. Only this class can use add2()
    private void add2() {
        this.age = this.age + 2;

    }

}
