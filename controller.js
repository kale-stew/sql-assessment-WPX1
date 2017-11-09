module.exports = {
    getUsers: (req, res, next) => {
        const db = req.app.get('db');
        db.read_users()
            .then( users => res.status(200).send(users) )
            .catch( () => res.status(500).send() );        
    },

    getCars: (req, res, next) => {
        const db = req.app.get('db');
        db.read_vehicles()
            .then( vehicles => res.status(200).send(vehicles) )
            .catch( () => res.status(500).send() ); 
    },

    createUser: (req, res, next) => {
        const db = req.app.get('db');
        const { name, email } = req.body;
        db.create_user([ name, email ])
            .then( user => res.status(200).send(user) )
            .catch( () => res.status(500).send() );
    },

    createCar: (req, res, next) => {
        const db = req.app.get('db');
        const { make, model, year, owner_id } = req.body;
        db.create_vehicle([ make, model, year, owner_id ])
            .then( vehicle => res.status(200).send(vehicle) )
            .catch( () => res.status(500).send() );
    },

    getCarCount: (req, res, next) => {
        const db = req.app.get('db');
        const { params } = req;
        db.cars_by_count([ params.userId ])
            .then( num => res.status(200).send(num))
            .catch( () => res.status(500).send() );
    },

    getCarsById: (req, res, next) => {
        const db = req.app.get('db');
        const { params } = req;
        db.cars_by_id([ params.userId ])
            .then( cars => res.status(200).send(cars) )
            .catch( () => res.status(500).send() );
    },

}