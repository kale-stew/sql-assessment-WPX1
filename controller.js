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

    getCarsByQuery: (req, res, next) => {
        const db = req.app.get('db');
        const { query } = req;
        if (query.userEmail) {
            return db.cars_by_email([ query.userEmail ])
                .then( cars => res.status(200).send(cars) )
                .catch( () => res.status(500).send() );
        } else if (query.userFirstStart) {
            return db.cars_by_letter([ query.userFirstStart + '%' ])
                .then( cars => res.status(200).send(cars) )
                .catch( () => res.status(500).send() );
        }
    },

    getNewerCars: (req, res, next) => {
        const db = req.app.get('db');
        db.newer_cars_by_year()
            .then( cars => res.status(200).send(cars) )
            .catch( () => res.status(500).send() );
    },

    changeOwnership: (req, res, next) => {
        const db = req.app.get('db');
        const { params } = req;
        db.change_owner([ params.vehicleId, params.userId ])
            .then( cars => res.status(200).send(cars) )
            .catch( () => res.status(500).send() );
    },

    removeOwnership: (req, res, next) => {
        const db = req.app.get('db');
        const { params } = req;
        db.remove_owner([ params.vehicleId, params.userId ])
            .then( cars => res.status(200).send(cars) )
            .catch( () => res.status(500).send() );
    },

    deleteCar: (req, res, next) => {
        const db = req.app.get('db');
        const { params } = req;
        db.remove_car([ params.vehicleId ])
            .then( cars => res.status(200).send(cars) )
            .catch( () => res.status(500).send() );
    }
}