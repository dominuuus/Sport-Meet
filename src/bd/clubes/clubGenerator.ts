// Função para gerar um ID aleatório
function generateRandomId(): number {
    return Math.floor(Math.random() * 100000);
}

// Função para gerar uma data aleatória a partir de agosto de 2024
function generateRandomDate(): string {
    const start = new Date(2024, 7, 1); // Agosto é o mês 7 (0-indexed)
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toISOString().split('T')[0];
}

// Lista de cidades e estados do Brasil
const cities = [
    { city: 'São Paulo', state: 'SP' },
    { city: 'Rio de Janeiro', state: 'RJ' },
    { city: 'Belo Horizonte', state: 'MG' },
    { city: 'Brasília', state: 'DF' },
    { city: 'Salvador', state: 'BA' },
    { city: 'Fortaleza', state: 'CE' },
    { city: 'Curitiba', state: 'PR' },
    { city: 'Manaus', state: 'AM' },
    { city: 'Recife', state: 'PE' },
    { city: 'Porto Alegre', state: 'RS' }
];

// Lista de esportes
const sports = ['Futebol', 'Vôlei', 'Karatê', 'Corrida', 'Ciclimo', 'Natação', 'Basket', 'Jiu-Jitsu', 'Capoeira'];

// Lista de tags
const group1Tags = ['novo', 'popular', 'antigo'];
const group2Tags = ['iniciante', 'praticante', 'experiente', 'profissional'];

// Função para gerar tags aleatórias
function generateRandomTags(): string[] {
    const tags = [];
    // Pelo menos uma tag do grupo 1
    tags.push(group1Tags[Math.floor(Math.random() * group1Tags.length)]);
    // Pelo menos uma tag do grupo 2
    tags.push(group2Tags[Math.floor(Math.random() * group2Tags.length)]);
    // Adicionar mais tags aleatórias se necessário
    if (Math.random() > 0.5) {
        tags.push(group1Tags[Math.floor(Math.random() * group1Tags.length)]);
    }
    if (Math.random() > 0.5) {
        tags.push(group2Tags[Math.floor(Math.random() * group2Tags.length)]);
    }
    return tags;
}

// Função para gerar status aleatório (90% ativo)
function generateRandomStatus(): string {
    return Math.random() < 0.9 ? 'ativo' : ['inativo', 'bloqueado'][Math.floor(Math.random() * 2)];
}

// Função para gerar popularidade baseada em membros e atividades
function generatePopularity(members: number, weeklyActivities: number): number {
    return members * 0.6 + weeklyActivities * 0.4;
}

// Função para gerar um clube aleatório
function generateRandomClub(): Club {
    const cityState = cities[Math.floor(Math.random() * cities.length)];
    const members = Math.floor(Math.random() * 1000);
    const weeklyActivities = Math.floor(Math.random() * 20);
    const popularity = generatePopularity(members, weeklyActivities);

    return {
        id: generateRandomId(),
        bannerImg: '../../assets/images/sport1.png',
        name: `Clube de ${sports[Math.floor(Math.random() * sports.length)]}`,
        creationDate: generateRandomDate(),
        city: cityState.city,
        state: cityState.state,
        members: members,
        weeklyActivities: weeklyActivities,
        tags: generateRandomTags(),
        status: generateRandomStatus(),
        sport: sports[Math.floor(Math.random() * sports.length)],
        popularity: popularity
    };
}

// Gerar uma lista de clubes
const clubs: Club[] = [];
for (let i = 0; i < 10; i++) { // Altere o número para a quantidade de clubes que deseja gerar
    clubs.push(generateRandomClub());
}

console.log(clubs);