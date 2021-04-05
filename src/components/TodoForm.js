import React from 'react';

class TodoForm extends React.component {
    constructor() {
        super();

        this.state = {
            input:''
        }
    }

    render() {
        return (
            <form>
                <input type='text' name='item' />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;
