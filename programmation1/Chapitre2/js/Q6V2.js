var note;

note = Number(prompt("Entrez la note sur 100: "));

if (note <= 60) {
    document.write("Le note est de E");
}
    else if (note >60 && note <= 70 ){
    document.write("Le note est de D");
}
        else if( note >70 && note <= 80 ){
        document.write("Le note est de C");
}
            else if (note >80 && note <= 90){
            document.write("Le note est de B");
}
                else {
                document.write("La note est de A");
                }
