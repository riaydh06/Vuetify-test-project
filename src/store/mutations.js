export default {

    removeTodo: ({ todos }, todo) => {
        todos.splice(todos.indexOf(todo), 1)
    },
    markTodo({ todos }, todo) {
        todos[todos.indexOf(todo)].completed = !todo.completed
    },
    markAllTodo({ todos }, completed) {
        todos.forEach(todo => (todo.completed = completed))
    },
    clearCompleted({ todos }) {
        todos.map(
            todo => (todo.completed ? todos.splice(todos.indexOf(todo), 1) : null)
        )
    },
    addCar({ cars }, {name, type}) {
        cars.push({
            id: Math.floor(Math.random() * 1000),
            name,
            type
        })
    },
    deleteCar({ cars }, {id}) {
       if (id > -1) {
        cars.splice(id, 1);
      }
    },
    updateCar({ cars }, {id, name, type}) {
        if (id > -1) {
         cars[id].name=name;
         cars[id].type=type
       }
     },
     addCities({ cities }, {name, country}) {
        cities.push({
            id: Math.floor(Math.random() * 1000),
            name,
            country
        })
    },
    deleteCities({ cities }, {id}) {
       if (id > -1) {
        cities.splice(id, 1);
      }
    },
    updateCities({ cities }, {id, name, country}) {
        if (id > -1) {
         cities[id].name=name;
         cities[id].country=country
       }
     },
}