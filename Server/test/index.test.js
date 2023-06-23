const app = require('../src/app.js');
const loginInfo = require('./src/utils/users.js')
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", () => {
	describe('GET /rickandmorty/character/:id', () => {
		it('Responde con status: 200', async() => {
			await agent.get('/rickandmorty/character/1').expect(200);
		});
		it("Responde un objecto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'", async () => {
			const response = await agent.get('/rickandmorty/character/1');
			expect(response.body).toHaveProperty('id');
			expect(response.body).toHaveProperty('name');
			expect(response.body).toHaveProperty('species');
			expect(response.body).toHaveProperty('gender');
			expect(response.body).toHaveProperty('status');
			expect(response.body).toHaveProperty('origin');
			expect(response.body).toHaveProperty('image');
		});
		it('Si hay un error responde con status: 500', async () => {
			await agent.get('/rickandmorty/character/none-id').expect(500);
		});
	});

	describe('GET /rickandmorty/login', () => {
		it('Valida que el logueo sea correcto así entonces devuelve un objeto con la propiedad access igual a true', async () => {
			const loginInfo = {
				email: 'moreno83marcos@gmail.com',
				password: 'passRandM23',
			};
			const response = await agent.get('/rickandmorty/login').query(loginInfo);
			expect(response.body).toEqual({ access: true });
		});

		it('Debe devolver un objeto con la propiedad access igual a false si la info de login es incorrecta', async () => {
			const loginInfo = {
				email: 'incorrect@example.com',
				password: 'falsepassword',
			};
			const response = await agent.get('/rickandmorty/login').query(loginInfo);
			expect(response.body).toEqual({ access: false });
		});
	});

	describe('POST /rickandmorty/fav', () => {
		it('Debe devolver un arreglo que incluye el elemento enviado por body', async () => {
			const newFavorite = {
				name: 'Rick Sanchez',
				species: 'Human',
				status: 'Alive',
			};
			const response = await agent.post('/rickandmorty/fav').send(newFavorite)
			expect(response.body).toEqual([newFavorite]);		
		});

		it('Debe devolver un arreglo que incluye todos los elementos enviados previamente por body', async () => {
			const favorite1 = {
				name: 'Rick Sanchez',
				species: 'Human',
				status: 'Alive',
			};
			const favorite2 = {
				name: 'Morty Smith',
				species: 'Human',
				status: 'Alive',
			};
			await agent.post('/rickandmorty/fav').send(favorite1);
			const response = await agent.post('/rickandmorty/fav').send(favorite2);

			expect(response.body).toEqual([favorite1, favorite2]);	
		});
	});

	describe('DELETE /rickandmorty/fav/:id', () => {
		it('Debe devolver un arreglo sin modificar si no hay personaje con el ID enviado', async () => {
			const invalidId = 9999;
			const response = await agent.delete(`/rickandmorty/fav/${invalidId}`);
			expect(response.body).toEqual([]);
		});

		it('Debe eliminar correctamente al personaje con el ID enviado', async () => {
			const favorite1 = {
				id: 1,
				name: 'Rick Sanchez',
				species: 'Human',
				status: 'Alive',
			};
			const favorite2 = {
				id: 2,
				name: 'Morty Smith',
				species: 'Human',
				status: 'Alive',
			};
			await agent.post('/rickandmorty/fav').send(favorite1);
			await agent.post('/rickandmorty/fav').send(favorite2);

			const deleteResponse = await agent.delete(`/rickandmorty/fav/${favorite1.id}`);
			const getResponse = await agent.get('/rickandmorty/fav');

			expect(deleteResponse.status).toBe(200);
			expect(getResponse.body).toEqual([favorite2]);			
		});
	});
});