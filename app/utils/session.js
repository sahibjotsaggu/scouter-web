import Server from './server';

const server = new Server();

export function create(body) {
  return server.post('/auth', body);
}
