import Server from './server';

const server = new Server();

export function get(id) {
  return server.get(`/locations/${id}`);
}

export function search() {
  return server.get('/location');
}

export function create(data) {
  return server.post('/locations', data);
}
