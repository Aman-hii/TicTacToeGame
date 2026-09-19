function vowel(s){
    let count=0;
    for(let i=0;i<s.length;i++){
        if(s.charAt(i)==="a"||s.charAt(i)==="e"||s.charAt(i)==="i"||s.charAt(i)==="o"||s.charAt(i)==="u"){
            count+=1;
        }
        
    }console.log(count);

}
vowel("hello");

let arrowVowel = (str) => {
    let count=0;
    for(let char of str ){
        if(char ==="a"||char ==="e"||char ==="i"||char ==="o"||char ==="u"){
            count++;
        }
    }
    console.log(count);
}
arrowVowel("Helloo");
