import { ApolloServer } from 'apollo-server-express';
import { config } from './config';

/**
 * 
 */
export class GraphQlZeroServer extends ApolloServer {
  constructor () {
    super(config);
  }
}
