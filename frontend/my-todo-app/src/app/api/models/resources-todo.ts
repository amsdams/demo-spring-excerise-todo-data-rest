/* tslint:disable */
import { EmbeddedCollectionTodo } from './embedded-collection-todo';
import { Link } from './link';

/**
 * Resources of Todo
 */
export interface ResourcesTodo {
  _embedded: EmbeddedCollectionTodo;

  /**
   * Link collection
   */
  _links: {[key: string]: Link};
}
