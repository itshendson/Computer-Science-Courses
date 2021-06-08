public class stringExercise {

    //Practice Exercises from: https://codingbat.com/java

    //Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. "<<word>>".
    // Note: use str.substring(i, j) to extract the String starting at index i and going up to but not including index j.
    public static String parseString(String out, String word) {
        return out.substring(0,2) + word + out.substring(2,4);
    }

    //The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word "Yay".
    // Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".
    public static String makeTags(String tag, String word) {
        return "<" + tag + ">" + word + "</" + tag + ">";
    }

    //Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged.
    //This is a little harder than it looks.
    //withoutX2("xHi") → "Hi"
    //withoutX2("Hxi") → "Hi"
    //withoutX2("Hi") → "Hi"
    public static String withoutX2(String str) {
        String word = "";
        char[] chars = str.toCharArray();
        int count = 0;

        for (char c : chars) {
            if (count < 2) {
                if (!String.valueOf(c).equals("x")) {
                    word += String.valueOf(c);
                    count++;
                } else {
                    count++;
                    continue;
                }
            }
            else {
                word += String.valueOf(c);
            }
        }
        return word;
    }

//    Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy" and the 'z' in "fez" count, but not the 'y' in "yellow".
//    countYZ("fez day") → 2
//    countYZ("day fez") → 2
//    countYZ("day fyyyz") → 2
    public static int countYZ(String str) {
        String[] words;
        int count = 0;

        words = str.split(" ");
        for (String word: words) {
            if (word.substring(word.length()-1).toLowerCase().equals("y") || word.substring(word.length()-1).toLowerCase().equals("z")) {
                count++;
            } else {
                ;
            }
        }
        return count;
    }




}
