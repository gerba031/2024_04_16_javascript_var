var mystring = '   ...ovo je moj novi "string"     ';
console.log(mystring);

var duljina = mystring.length;
console.log("duljina teksta je: " + duljina + " znakova");
console.log(typeof duljina);
console.log("znak na mjestu 13 je: " + mystring.charAt(13));
console.log(mystring.trim());
console.log(mystring.indexOf("moj"));
console.log(mystring.replace ("moj", "tvoj"));
console.log(mystring.replaceAll ("o", "$"));
console.log(mystring.toUpperCase());
console.log(mystring.substring(10, mystring.length));

var myNiz = mystring.split(" ");
console.log("kraj");





