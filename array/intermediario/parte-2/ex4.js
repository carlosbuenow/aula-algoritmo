const funcionarios = [
    { nome: 'Ana', salario: 2500, cargo: 'Desenvolvedora' },
    { nome: 'Bruno', salario: 1800, cargo: 'Designer' },
    { nome: 'Carla', salario: 3000, cargo: 'Gerente de Projetos' },
    { nome: 'Daniel', salario: 2200, cargo: 'Desenvolvedor' },
    { nome: 'Eva', salario: 1600, cargo: 'Analista de Sistemas' }
]

for (let i = 0; i < funcionarios.length; i++){
    if(funcionarios[i].salario > 2000){
        console.log(funcionarios[i])
    }
}