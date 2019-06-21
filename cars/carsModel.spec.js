const db = require('../data/dbConfig.js');

const { insert } = require('./carsModel');

describe('cars model', () => {
  beforeEach(async () => {
    await db('cars').truncate();
  });

  // that process.env.DB_ENV is pointing to 'testing'
  it('should set environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('insert()', () => {
    it('should insert cars', async () => {
      await insert({ year: '1920', make:'Ford', model:'100' });
      await insert({ year: '1972', make:'Ford', model:'Mustang'  });

      const cars = await db('cars');

      expect(cars).toHaveLength(2);
    });

    it('should insert the provided car', async () => {
      let car = { year: '2015', make:'Ford', model:'Raptor' };
      let inserted = await insert(car);
        expect(inserted.make).toBe(car.make)
        expect(inserted.year).toBe(car.year)
        expect(inserted.model).toBe(car.model)


      car = { year: '2015', make:'Ford', model:'Raptor' };
      inserted = await insert(car);model
        expect(inserted.year).toBe(car.year);
      expect(inserted.make).toBe(car.make);
      expect(inserted.model).toBe(car.model);

    });
  });
});
