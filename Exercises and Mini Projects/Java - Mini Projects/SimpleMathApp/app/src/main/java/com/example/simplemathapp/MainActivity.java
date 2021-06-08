package com.example.simplemathapp;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.inputmethod.EditorInfo;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button addButton = (Button) findViewById(R.id.addButton);
        Button subButton = (Button) findViewById(R.id.subButton);
        Button divButton = (Button) findViewById(R.id.divButton);
        Button mulButton = (Button) findViewById(R.id.mulButton);

        Button aboutButton = (Button) findViewById(R.id.aboutButton);
        Button listButton = (Button) findViewById(R.id.listButton);

        final EditText firstNumEditText = (EditText) findViewById(R.id.firstNumEditText);
        final EditText secondNumEditText = (EditText) findViewById(R.id.SecondNumEditText);
        final TextView resultTextView = (TextView) findViewById(R.id.resultTextView);

        // Launches the 'About' activity
        aboutButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent aboutPageIntent = new Intent(getApplicationContext(), AboutPage.class);
                aboutPageIntent.putExtra("package name", "Will this simple calculator work? Find out on tonight's 6-o-clock news! Based off of: https://www.youtube.com/watch?v=6ow3L39Wxmg&list=WL&index=1&t=1439s&ab_channel=BillButterfield");
                startActivity(aboutPageIntent);
            }
        });

        // Launches the 'List' activity
        listButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent listPageIntent = new Intent(getApplicationContext(), ListPage.class);
                startActivity(listPageIntent);
            }
        });


        addButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int num1 = Integer.parseInt(firstNumEditText.getText().toString()); //Convert the text in EditText then convert it to String then convert it to integer
                int num2 = Integer.parseInt(secondNumEditText.getText().toString());

                int result = num1 + num2;

                resultTextView.setText(""+result);
                resultTextView.onEditorAction(EditorInfo.IME_ACTION_DONE); // Dismisses keyboard after results shown
            }
        });

        subButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int num1 = Integer.parseInt(firstNumEditText.getText().toString()); //Convert the text in EditText then convert it to String then convert it to integer
                int num2 = Integer.parseInt(secondNumEditText.getText().toString());

                int result = num1 - num2;

                resultTextView.setText(""+result);
                resultTextView.onEditorAction(EditorInfo.IME_ACTION_DONE); // Dismisses keyboard after results shown
            }
        });

        divButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int num1 = Integer.parseInt(firstNumEditText.getText().toString()); //Convert the text in EditText then convert it to String then convert it to integer
                int num2 = Integer.parseInt(secondNumEditText.getText().toString());

                int result = num1 / num2;

                resultTextView.setText(""+result);
                resultTextView.onEditorAction(EditorInfo.IME_ACTION_DONE); // Dismisses keyboard after results shown
            }
        });

        mulButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int num1 = Integer.parseInt(firstNumEditText.getText().toString()); //Convert the text in EditText then convert it to String then convert it to integer
                int num2 = Integer.parseInt(secondNumEditText.getText().toString());

                int result = num1 * num2;

                resultTextView.setText(""+result);
                resultTextView.onEditorAction(EditorInfo.IME_ACTION_DONE); // Dismisses keyboard after results shown
            }
        });

    }
}