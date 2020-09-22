function ispaAmong() {
    let impostor= true; /* True- verdadero osea que si eres el impostor */

    /* Si el impostor NO es true/verdadero, osea es false....un tripulante mas */
    if (impostor == !true) {
        alert("Eres un tripulante, ojala no te funen")
    } else { /* Si es true entonces es un impostor */
        alert("Eres un impostor, cuidado que nadie te descubra")
    }
}
function ispaAmong2() {
    let impostor= true; /* True- verdadero osea que si eres el impostor */

    /* Si el impostor NO es true/verdadero, osea es false....un tripulante mas */
    if (impostor == !true) {
        alert("Eres un impostor, cuidado que nadie te descubra")
        
    } else { /* Si es true entonces es un impostor */
        alert("Eres un tripulante, ojala no te funen")
    }
}