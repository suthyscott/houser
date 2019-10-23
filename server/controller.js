

module.exports = {
    getHouses: async (req, res) => {
        const db = req.app.get('db')
        let houses = await db.get_houses()
        res.status(200).send(houses)
    },

    addHouse: async  (req, res) => {
        // console.log('hit')
        const db = req.app.get('db')
        const {name, address, city, state, zipcode, img, mortgage, rent} = req.body

        let house = await db.add_house([name, address, city, state, zipcode, img, mortgage, rent])
        res.status(200).send(house)
    },

    deleteHouse: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        let house = await db.delete_house(id)
        res.status(200).send(house)
    }
}