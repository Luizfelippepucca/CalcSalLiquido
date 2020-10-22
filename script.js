let btn = document.querySelector('button');

let campo = document.querySelector('input');
 //tabela 1
 let campoLiq = document.getElementById('empregadoLiq');
 let campoInss = document.getElementById('empregadoInss');
 let campoIrpf = document.getElementById('empregadoIrpf');
//tabela 2
 let campoLiq1 = document.getElementById('empregadoLiq1');
 let campoInss1 = document.getElementById('empregadoInss1');
 let campoIrpf1 = document.getElementById('empregadoIrpf1');

 //tabela 3
 let campoLiq2 = document.getElementById('empregadoLiq2');
 let campoInss2 = document.getElementById('empregadoInss2');
 let campoIrpf2 = document.getElementById('empregadoIrpf2');

 

function instrucoes(){
    let dicas = document.querySelector('div','.fecharDicas');
    let itensDica = document.querySelectorAll('h4');
    let btnSvg = document.querySelector('svg','.teste');


 itensDica.forEach(function(valor,index){
    if(valor.classList.contains('mostrarItem')== false){
        valor.classList.add('mostrarItem');
    };

 });
 
    if(dicas.classList.contains('abrirDicas') == false ){
        dicas.classList.add('abrirDicas');
        if(dicas.classList.contains('abrirDicas') == true){
            btnSvg.classList.add('fecharBtnSvg');
        };
       
        
    };

    

    btnSvg.addEventListener('click',function(){
        itensDica.forEach(function(valor,index){
             if(valor.classList.contains('mostrarItem') == true){
                 valor.classList.remove('mostrarItem');
                 dicas.classList.remove('abrirDicas');
                 btnSvg.classList.remove('fecharBtnSvg');
             };

             
        });
});
}


   


 
 
btn.addEventListener('click',function(){
    let total = campo.value;
    let virgula = total.indexOf(',')
    let salarioInss = 1045.00;
   
   
    

    if(total.length < 4 || virgula !== -1){
      
       instrucoes();
    
        campo.value = '';
        campoLiq.innerHTML = '';
        campoInss.innerHTML = '';
        campoIrpf.innerHTML = '';

        campoLiq1.innerHTML = '';
        campoInss1.innerHTML = '';
        campoIrpf1.innerHTML = '';

        campoLiq2.innerHTML = '';
        campoInss2.innerHTML = '';
        campoIrpf2.innerHTML = '';

        

    }else if(total <= salarioInss){
            
            let irpf =  'isento';
            let aliquota = 7.5;
            let inss = (total/100) * aliquota;
            let subTotal = total - inss;
           
            let exibirLiquides = subTotal.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            let exibirInss = inss.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            campoLiq.innerHTML = exibirLiquides;
            campoInss.innerHTML = exibirInss;
            campoIrpf.innerHTML = irpf;
            
            campoLiq1.innerHTML = exibirLiquides;
            campoInss1.innerHTML = exibirInss;
            campoIrpf1.innerHTML = irpf;

            campoLiq2.innerHTML = exibirLiquides;
            campoInss2.innerHTML = exibirInss;
            campoIrpf2.innerHTML = irpf;

           
            
    }else if(total>=1045.01 && total<=2089.60 ){
             
            aliquota = 9.0;
            inss = (total/100) * aliquota;
            subTotal = total - inss;
            exibirLiquides = subTotal.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            exibirInss = inss.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
           
            campoLiq.innerHTML = exibirLiquides;
            campoInss.innerHTML = exibirInss;

            campoLiq1.innerHTML = exibirLiquides;
            campoInss1.innerHTML = exibirInss;

            campoLiq2.innerHTML = exibirLiquides;
            campoInss2.innerHTML = exibirInss;
           
        
        if( subTotal<=1903.98){
            irpf = 'isento';
            exibirIrpf = irpf.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            campoIrpf.innerHTML = exibirIrpf;

            campoIrpf1.innerHTML = exibirIrpf;

            campoIrpf2.innerHTML = exibirIrpf;
           

        }else if( subTotal >=1903.99 && subTotal<=2826.65){
            irpf =  142.80;
            let liquides = subTotal - irpf;
            exibirLiquides = liquides.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            exibirInss = inss.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            exibirIrpf = irpf.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            campoLiq.innerHTML = exibirLiquides;
            campoInss.innerHTML = exibirInss;
            campoIrpf.innerHTML = exibirIrpf;

            campoLiq1.innerHTML = exibirLiquides;
            campoInss1.innerHTML = exibirInss;
            campoIrpf1.innerHTML = exibirIrpf;

            campoLiq2.innerHTML = exibirLiquides;
            campoInss2.innerHTML = exibirInss;
            campoIrpf2.innerHTML = exibirIrpf;
            
        };
        
    

    

    }else if(total>=2089.61 && total<=3134.40){
             
        aliquota = 12.0;
        inss = (total/100) * aliquota;
        subTotal = total - inss;
        console.log(subTotal);
    
    if(subTotal<=1903.98){
        irpf = 'isento';
        exibirLiquides = subTotal.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
        exibirInss = inss.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
       
        campoLiq.innerHTML = exibirLiquides;
        campoInss.innerHTML = exibirInss;

        campoLiq1.innerHTML = exibirLiquides;
        campoInss1.innerHTML = exibirInss;

        campoLiq2.innerHTML = exibirLiquides;
        campoInss2.innerHTML = exibirInss;
       
        exibirIrpf = irpf.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
        campoIrpf.innerHTML = exibirIrpf;
        campoIrpf1.innerHTML = exibirIrpf;
        campoIrpf2.innerHTML = exibirIrpf;

        }else if( subTotal >=1903.99 && subTotal<=2826.65){
            irpf =  142.80;
            let liquides = subTotal - irpf;
            exibirLiquides = liquides.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            exibirInss = inss.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            exibirIrpf = irpf.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            campoLiq.innerHTML = exibirLiquides;
            campoInss.innerHTML = exibirInss;
            campoIrpf.innerHTML = exibirIrpf;

            campoLiq1.innerHTML = exibirLiquides;
            campoInss1.innerHTML = exibirInss;
            campoIrpf1.innerHTML = exibirIrpf;

            campoLiq2.innerHTML = exibirLiquides;
            campoInss2.innerHTML = exibirInss;
            campoIrpf2.innerHTML = exibirIrpf;
            
        }

    }else if(total>=3134.41 && total<=6101.06){
             
        aliquota = 14.0;
        inss = (total/100) * aliquota;
        subTotal = total - inss;
        console.log(subTotal);
    
    if(subTotal<=1903.98){
        irpf = 'isento';
        exibirLiquides = subTotal.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
        exibirInss = inss.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
       
        campoLiq.innerHTML = exibirLiquides;
        campoInss.innerHTML = exibirInss;

        campoLiq1.innerHTML = exibirLiquides;
        campoInss1.innerHTML = exibirInss;

        campoLiq2.innerHTML = exibirLiquides;
        campoInss2.innerHTML = exibirInss;
       
        exibirIrpf = irpf.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
        campoIrpf.innerHTML = exibirIrpf;
        campoIrpf1.innerHTML = exibirIrpf;
        campoIrpf2.innerHTML = exibirIrpf;

        }else if( subTotal >=2826.66 && subTotal<=3751.05){
            irpf =  354.80;
            let liquides = subTotal - irpf;
            exibirLiquides = liquides.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            exibirInss = inss.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            exibirIrpf = irpf.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            campoLiq.innerHTML = exibirLiquides;
            campoInss.innerHTML = exibirInss;
            campoIrpf.innerHTML = exibirIrpf;

            campoLiq1.innerHTML = exibirLiquides;
            campoInss1.innerHTML = exibirInss;
            campoIrpf1.innerHTML = exibirIrpf;

            campoLiq2.innerHTML = exibirLiquides;
            campoInss2.innerHTML = exibirInss;
            campoIrpf2.innerHTML = exibirIrpf;
            
        }else if(subTotal >=3751.06 && subTotal<=4664.68){
            irpf =  636.13;
            let liquides = subTotal - irpf;
            exibirLiquides = liquides.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            exibirInss = inss.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            exibirIrpf = irpf.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            campoLiq.innerHTML = exibirLiquides;
            campoInss.innerHTML = exibirInss;
            campoIrpf.innerHTML = exibirIrpf;

            campoLiq1.innerHTML = exibirLiquides;
            campoInss1.innerHTML = exibirInss;
            campoIrpf1.innerHTML = exibirIrpf;

            campoLiq2.innerHTML = exibirLiquides;
            campoInss2.innerHTML = exibirInss;
            campoIrpf2.innerHTML = exibirIrpf;

        }else if(subTotal>=4664.69){
            irpf =  869.36;
            let liquides = subTotal - irpf;
            exibirLiquides = liquides.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            exibirInss = inss.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            exibirIrpf = irpf.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            campoLiq.innerHTML = exibirLiquides;
            campoInss.innerHTML = exibirInss;
            campoIrpf.innerHTML = exibirIrpf;

            campoLiq1.innerHTML = exibirLiquides;
            campoInss1.innerHTML = exibirInss;
            campoIrpf1.innerHTML = exibirIrpf;

            campoLiq2.innerHTML = exibirLiquides;
            campoInss2.innerHTML = exibirInss;
            campoIrpf2.innerHTML = exibirIrpf;

        };

    }else if(total >=6101.06 ){
        aliquota = 14.0;
        inss = (total/100) * aliquota;
        subTotal = total - inss;
        console.log(subTotal);
        
        if(subTotal>=4664.69){
            irpf =  869.36
           
            let liquides = subTotal - irpf;
            exibirLiquides = liquides.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            exibirInss = inss.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            exibirIrpf = irpf.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
            campoLiq.innerHTML = exibirLiquides;
            campoInss.innerHTML = exibirInss;
            campoIrpf.innerHTML = exibirIrpf;

            campoLiq1.innerHTML = exibirLiquides;
            campoInss1.innerHTML = exibirInss;
            campoIrpf1.innerHTML = exibirIrpf;

            campoLiq2.innerHTML = exibirLiquides;
            campoInss2.innerHTML = exibirInss;
            campoIrpf2.innerHTML = exibirIrpf;
        }
    };
        
        
           
           
});  


 