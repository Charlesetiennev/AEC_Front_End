// Transférer les valeurs Fahrenheit de -40 à 40 en Celsius
// par tranche de 5. (Celsius = 5/9(fahrenheit-32))


for(var fahrenheit = -40; fahrenheit<=40; fahrenheit+=5){
    celsius = (fahrenheit-32)*5/9;
    document.write(fahrenheit + " fahrenheit donne :" + celsius + " Celsius<br>")
}
