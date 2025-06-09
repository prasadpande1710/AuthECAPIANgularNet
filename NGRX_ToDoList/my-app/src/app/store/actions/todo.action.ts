import {createAction,props} from '@ngrx/store'
import { Todo } from '../../models/todo.model';


export const addTodo = createAction(
    '[Todo] Add Todo',
     props<{todo:Todo}>()
    );


    export const toggleTodo = createAction(
    '[Todo] Toggle Todo',
     props<{id:string }>()
    );


    export const removeTodo = createAction(
    '[Todo] Remove Todo',
     props<{id:string}>()
    );
