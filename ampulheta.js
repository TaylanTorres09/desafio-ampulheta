function ampulheta(n) {
    try {

        console.log('\nAmpulheta em seu estado inicial: \n');

        let estadoInicial = ampulhetaEstadoInicial(n);

        for (let i of estadoInicial) {
            console.log(i);
        }

        console.log('n = ' + n);

        console.log('\nAmpulheta em seu estado Final: \n');

        let ampulhetaReverse = ampulhetaEstadoFinal(n);

        for (let i of ampulhetaReverse) {
            console.log(i);
        }
        
        console.log('n = ' + n);

    }catch(err) {
        console.log(err);
    }
}

function ampulhetaEstadoInicial (n) {
        let ampulhetaFinal = ['#'.repeat(n)];
        let space = 1;

        // Ampulheta parte Superior
        // Numero de linhas
        for (let i = 0; i < (n - 2) / 2; i++) {
            let ampLinha = '#';
            ampLinha = ampLinha.concat(' '.repeat(i));
            ampLinha = ampLinha.concat('#'.repeat(n - i - space - 1));
            ampLinha = ampLinha.concat(' '.repeat(i));
            ampLinha = ampLinha.concat('#');
            ampulhetaFinal.push(ampLinha);
            space ++;
        }

        // Ampulheta parte inferior para n Impar
        if (n % 2 !== 0) {
            let ampulhetaReverse = ampulhetaFinal.slice(2).reverse();
 
            for ( let amp of ampulhetaReverse) {
                
                let index = ampulhetaReverse.indexOf(amp);
                let ampSemEspacos = amp.replace(/\s+/g, '');
                let ampLength = ampSemEspacos.length;
                let numEspacos = n - ampLength;

                let ampLinha = ampSemEspacos[0];
                ampLinha = ampLinha.concat(' '.repeat(numEspacos/2));

                if (ampLength > 3) {
                    ampLinha = ampLinha.concat('#');
                    ampLinha = ampLinha.concat(' '.repeat(index*2 - 1))
                    ampLinha = ampLinha.concat('#');
                } else {
                    ampLinha = ampLinha.concat('#');
                }
                
                ampLinha = ampLinha.concat(' '.repeat(numEspacos/2))
                ampLinha = ampLinha.concat('#');

                ampulhetaFinal.push(ampLinha);
            }
        }

        // Ampulheta parte Inferior para n par
        if (n % 2 === 0) {
            for (let j = (n / 2) - 1; j > 0; j--) {
                let ampLinha = '#';
                ampLinha = ampLinha.concat(' '.repeat(j -1));
                ampLinha = ampLinha.concat('#');
                ampLinha = ampLinha.concat('  '.repeat((n / 2) - 1 - j));
                ampLinha = ampLinha.concat('#');
                ampLinha = ampLinha.concat(' '.repeat(j-1));
                ampLinha = ampLinha.concat('#');
                ampulhetaFinal.push(ampLinha);
            } 
        }

        ampulhetaFinal.push('#'.repeat(n));

        return ampulhetaFinal;
}

function ampulhetaEstadoFinal (n) {

    let ampulhetaReverse;
    if (n % 2 == 0) {
        ampulhetaReverse = ampulhetaEstadoInicial(n + 1);
        ampulhetaReverse = ampulhetaReverse.reverse()
        let linha = '##'.concat(' '.repeat(n-3)).concat('##')
        ampulhetaReverse.splice(1, 0, linha)
    } else {
        ampulhetaReverse = ampulhetaEstadoInicial(n);
        ampulhetaReverse = ampulhetaReverse.reverse()
        let linha = '##'.concat(' '.repeat(n-4)).concat('##')
        ampulhetaReverse.splice(1, 0, linha)
    }
    ampulhetaReverse.splice(n/2 + 1, 1)

    return ampulhetaReverse;
}

module.exports = {ampulheta};
