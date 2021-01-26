const connection = require('../database/connection');

module.exports = {
    async index(request,response) {
        const people = await connection('people').select('*');
    
        return response.json(people);
    },

    async profile(request,response) {
        const { id } = request.params;
        const person = await connection('people').where('id', id).first('*');
    
        return response.json(person);
    },

    async create(request, response) {
        const { name, email, birthdate, city, uf } = request.body;

        function calculateAge(birthdate) {
            var date = birthdate.split("-");
            var birthDate = new Date(parseInt(date[0], 10), parseInt(date[1], 10) - 1, parseInt(date[2], 10));
        
            var diferenceMs = Date.now() -  birthDate.getTime();
            var age = new Date(diferenceMs);
        
            return Math.abs(age.getUTCFullYear() - 1970);
        }

        const age = calculateAge(birthdate);

        await connection('people').insert({
            name,
            email,
            birthdate,
            city,
            uf,
            age
        })
    
        return response.status(201).send();
    },

    async update(request, response) {
        const { id } = request.params;

        const { name, email, birthdate, city, uf } = request.body;

        function calculateAge(birthdate) {
            var date = birthdate.split("-");
            var birthDate = new Date(parseInt(date[0], 10), parseInt(date[1], 10) - 1, parseInt(date[2], 10));
        
            var diferenceMs = Date.now() -  birthDate.getTime();
            var age = new Date(diferenceMs);
        
            return Math.abs(age.getUTCFullYear() - 1970);
        }

        const age = calculateAge(birthdate);

        await connection('people')
            .where('id', id)
            .update({
                name,
                email,
                birthdate,
                city,
                uf,
                age
            })
    
        return response.status(204).send();
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('people').where('id', id).delete();
    
        return response.status(204).send();
    }
};