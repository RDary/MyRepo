import superagent from 'superagent';

const baseUrl = 'https://reqres.in/api';
let response: any;

const objForPost = {
  name: 'Darya',
  surname: 'Ruban',
};

const objForPut = {
  name: 'morpheus',
  job: 'zion resident',
  updatedAt: '2022-08-25T17:16:11.988Z',
};
const emailForPatch = 'ruban1ds@gmail.com';
describe('Test HTTP-methods', () => {
  test('Should correctly read GET response', async () => {
    try {
      response = await superagent.get(`${baseUrl}/users`);
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect(response.status).toBe(200);
  });

  test('Should correctly read GET response with quries', async () => {
    try {
      response = await superagent.get(`${baseUrl}/users`).query({ id: 7 });
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect(response.status).toBe(200);
  });

  test('Should correctly read GET response with 404 status', async () => {
    try {
      response = await superagent.get(`${baseUrl}/users/23`);
    } catch (err: any) {
      expect(err.status).toBe(404);
    }
  });

  test('Should correctly read POST response with a body', async () => {
    try {
      response = await superagent
        .post(`${baseUrl}/users`)
        .set('Content-Type', 'application/json')
        .send({ name: 'Darya', surname: 'Ruban' });
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect(response.status).toBe(201);
    expect(response.body.name).toBe(objForPost.name);
  });

  test('Should correctly read POST response with 400 status', async () => {
    try {
      response = await superagent
        .post(`${baseUrl}/users`)
        .set('Content-Type', 'application/json')
        .send({ name: 'Dasha', surname: 'Ruban' });
    } catch (err: any) {
      expect(err.status).toBe(400);
    }
  });

  test('Should correctly read PUT response', async () => {
    try {
      response = await superagent
        .put(`${baseUrl}/users/2`)
        .set('Content-Type', 'application/json')
        .send(objForPut);
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect(response.status).toBe(200);
    expect(response.body.job).toBe(objForPut.job);
  });

  test('Should correctly read DELETE response', async () => {
    try {
      response = await superagent.delete(`${baseUrl}/users/2`);
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect(response.status).toBe(204);
  });

  test('Should correctly read PATCH response', async () => {
    try {
      response = await superagent
        .patch(`${baseUrl}/users/4`)
        .set('Content-Type', 'application/json')
        .send({
          email: emailForPatch,
        });
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect(response.status).toBe(200);
    expect(response.body.email).toBe(emailForPatch);
  });

  test('Should correctly read HEAD response', async () => {
    try {
      response = await superagent.head(`${baseUrl}/users`);
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect(response.status).toBe(200);
  });

  test('Should correctly read HEAD response with 404 status', async () => {
    try {
      response = await superagent.head(`${baseUrl}/users/23`);
    } catch (err: any) {
      expect(err.status).toBe(404);
    }
  });
});
