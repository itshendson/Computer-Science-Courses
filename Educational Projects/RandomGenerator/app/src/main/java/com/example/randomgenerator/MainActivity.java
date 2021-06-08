package com.example.randomgenerator;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.SeekBar;
import android.widget.TextView;

import java.util.Random;

public class MainActivity extends AppCompatActivity {

    Button rollButton;
    TextView textView;
    SeekBar seekBar;
    Random rand;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main); // This is what connects our layout (called activity_main.xml) with our activity/code

        //Assigning the resource id to a variable
        rollButton = (Button) findViewById(R.id.rollButton);
        textView = (TextView) findViewById(R.id.textView2);
        seekBar = (SeekBar) findViewById(R.id.seekBar);
        rand = new Random();

        rollButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int randInt = rand.nextInt(seekBar.getProgress()); //Generate a number between 0 and the seekbar
                textView.setText(""+randInt); //funny way of converting integer to String in order for setText to work LOL
            }
        }); //weird syntax here
    }

}

