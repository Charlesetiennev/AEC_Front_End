var temperature;

temperature = Number(prompt("Entrez la temperature ressentit"));

if (temperature >= -40 && temperature <= -10){
    document.write("HAAAAAAAAA! Il fait froid");
}
else if (temperature < -40){
    document.write("C'est froid!!!");

}
else{
    document.write("Enfin une belle journee!");
}