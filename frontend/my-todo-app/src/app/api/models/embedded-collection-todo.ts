/* tslint:disable */
import { Todo } from './todo';

/**
 * Embedded collection of Todo
 */
export interface EmbeddedCollectionTodo {

  /**
   * Resource collection
   */
  todo: Array<Todo>;
}
