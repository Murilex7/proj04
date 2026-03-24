const nome=prompt("Digite seu nome");
const idade=parseInt(prompt("digite sua idade"));




const possuiCadrastro=prompt("Você possui cadastro? S/N") .toUpperCase();
if (possuiCadrastro !== "S"){
    alert("Acesso negado, você não possui cadastro");
} else {
    if (idade >= 18) {
        alert("Acesso liberado")
    } else {
        const possuiAutorizacao=prompt("Você possui autorização S/N") .toUpperCase();
        if (idade <18 || possuiAutorizacao !== "S") {
            const estaAcompanhando=prompt("Você está acompanhado S/N") .toUpperCase();
            if (estaAcompanhando === "S") {
                alert("Acesso permitido com restrição, entrada somente com restrição");
            } else {
                alert("Acesso negado Menor desacompanhado");
            }

        } else {
            alert("Acesso Liberado.");
        }
    }
}
