var pronoun = ['the', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];
const extension = ['.com', '.es'];

for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
        for (var k = 0; k < noun.length; k++) {
            for (var l = 0; l < extension.length; l++) {

                const combinacion = pronoun[i] + adj[j] + noun[k] + extension[l];

                console.log(combinacion);
            }
        }
    }
}
