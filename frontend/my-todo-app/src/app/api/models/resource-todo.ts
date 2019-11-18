/* tslint:disable */
import { Link } from './link';
export interface ResourceTodo {
  description?: string;
  done?: boolean;
  id?: number;
  links?: Array<Link>;
  title?: string;
}
