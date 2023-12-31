const { getDataFromDb, createDocument, findByIdAndUpadte } = require('../service/database/db-service');

const getCar = async (req, res) => {
    console.log('Yes')
    try {
        const response = await getDataFromDb();
        res.status(201).send(response);
    }
    catch (err) {
        res.status(500).send(err)
    }
};
const createCar = async (req, res) => {
    try {
        createDocument(req.body)
        res.status(200).json({ message: 'Thank you for purchasing(BMW X5)' });
    }
    catch (err) {
        res.status(500).send(err)
    }
};

const updatedCar = async(req, res) => {
    try{
        const response = await findByIdAndUpadte();
        res.status(201).json({
            'brand': 'Hyundai',
             'price': 1200000,
              'model': 'Grand i10',
               'carId': 234452,
                'status':'SOLD'
        }

            );
    }
    catch (err) {
        res.status(500).send(err)
    }
    }

/*
const updatedCar = await Car.findByIdAndUpdate(
    carId,
    { status: 'SOLD' },
    { new: true }
  );

  if (!updatedCar) {
    return res.status(404).json({ error: 'Car not found' });
  }

/*const soldCar = async (req, res) => {
    console.log('Yes')
    try {
        const response = await soldDataFromDb();
        res.status(201).send(response);
    }
    catch (err) {
        res.status(500).send(err)
    }
};*/

module.exports = { getCar, createCar, updatedCar }