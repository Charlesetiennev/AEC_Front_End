var note;

note = Number(prompt("Entrez la note sur 100: "));

if (note >= 90){
    document.write("La note est de A");
}
    else if(note >= 80 && note < 90 ){
    document.write("La note est de B");
}
        else if(note >= 70 && note < 80){
            document.write("La note est de C");
}
            else if(note >=60 && note < 70){
                document.write("La note est de D");
}
                else {
                    document.write("La note est de E");
}