const baseUrl = 'http://localhost:5000';

export const getUsers = () =>
    fetch([baseUrl, 'users'].join('/')).then((res) => res.json());

export const getListOfAgesOfUsersWithHandler = (hobby) =>
    fetch([baseUrl, 'users', `age?hobby=${hobby}`].join('/')).then((res) =>
        res.json(),
    );
export const getHobbiesHandler = () =>
    fetch([baseUrl, 'hobbies'].join('/')).then((res) => res.json());
