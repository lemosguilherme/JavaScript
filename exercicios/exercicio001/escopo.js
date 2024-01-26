let global = "global"
let nivel1 = undefined 
let nivel2 = undefined
let nivel3 = undefined

function funçãoNivel1(){
    let nivel1 = "Entrei"
    console.log(`\nAcesso da função nivel 1: \nGlobal: ${global} \nnivel1: ${nivel1 ? nivel1 : "Nivel1 Inacessivel"} \nnivel2: ${nivel2 ? nivel2 : "Nivel2 Inacessivel"} \nnivel3: ${nivel3 ? nivel3 : "Nivel3 Inacessivel"}`)

    function funçãoNivel2(){
        let nivel2 = "Entrei"
        console.log(`\nAcesso da função nivel 2: \nGlobal: ${global} \nnivel1: ${nivel1 ? nivel1 : "Nivel1 Inacessivel"} \nnivel2: ${nivel2 ? nivel2 : "Nivel2 Inacessivel"} \nnivel3: ${nivel3 ? nivel3 : "Nivel3 Inacessivel"}`)

        function funçãoNivel3(){
            let nivel3 = "Entrei"
            console.log(`\nAcesso da função nivel 3: \nGlobal: ${global} \nnivel1: ${nivel1 ? nivel1 : "Nivel1 Inacessivel"} \nnivel2: ${nivel2 ? nivel2 : "Nivel2 Inacessivel"} \nnivel3: ${nivel3 ? nivel3 : "Nivel3 Inacessivel"}`)  
        };
        funçãoNivel3()  
    };
    funçãoNivel2()   
};
funçãoNivel1()

