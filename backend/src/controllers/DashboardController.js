const connection = require('../database/connection');

module.exports = {
    async index(request,response) {
        const [totalRegisters] = await connection('people').count();
        const totalRegs = totalRegisters['count(*)'];

        const [fetchMinAge] = await connection('people').min('age');
        const minAge = fetchMinAge['min(`age`)']

        const [fetchMaxAge] = await connection('people').max('age');
        const maxAge = fetchMaxAge['max(`age`)']

        const [fetchAvgAge] = await connection('people').avg('age')
        const avgAge = fetchAvgAge['avg(`age`)']

        const cities = await connection('people').select('city','uf').groupByRaw('city').orderBy('city','asc')
    
        return response.json([totalRegs,minAge,maxAge,avgAge,cities]);
    }
};