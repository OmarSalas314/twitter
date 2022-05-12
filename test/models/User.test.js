const User = require('./../../app/models/User')

describe("Unit Test for User class", () => {

    test('Requerimiento 1 Create an User object', () => {
        //Aqui invocamos el codigo que vas a usar en tu app
        const user = new User(1, "carlogilmal", "Carlo", "Bio")

        //Aqui validas los resultados de ese codigo
        //Esta es una compracion que va a igualar a ese valor de la izquierda con
        //el de la derecha(valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmal")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        //expect(user.dateCreated).toBe("dateCreated")
        //expect(user.lastUpdated).toBe("lastUpdate")
    })

    test('Requerimiento 2: Fechas en atributos de User', () => {
        const user = new User(1, "carlogilmal", "Carlo", "Bio",)
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
})
