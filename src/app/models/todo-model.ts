
/**
 * Modelul pentru TODO list
 * 
 * id - id-ul todo-ului
 * title - titlul todo-ului
 * completed - daca a fost completat sau nu
 */

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}