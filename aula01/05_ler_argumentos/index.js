console.log(process.argv);


const args = process.argv.slice(2);
console.log(args);

//args[0] = 2 

const nome = args[0].split('=')[1];
// const sobrenome = args[1];

const idade = args[1].split('=')[1];

console.log(`Meu nome é ${nome} e tenho ${idade} anos!`);