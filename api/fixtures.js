const mongoose = require('mongoose');
const config = require('./config');
const Cocktail = require('./models/Cocktail');
const User = require('./models/User');
const { nanoid } = require('nanoid');

const run = async () => {
  await mongoose.connect(config.db.url, config.db.options);

  const collections = await mongoose.connection.db.listCollections().toArray();

  for (const coll of collections) {
    // [{name: 'users'}, {name: 'products'}]
    await mongoose.connection.db.dropCollection(coll.name);
  }

  const [admin, user] = await User.create(
    {
      email: 'Mirafal@bar',
      password: '123',
      token: nanoid(),
      role: 'admin',
      displayName: 'Mirafal',
    },
    {
      email: 'user@bar',
      password: '123',
      token: nanoid(),
      role: 'user',
      displayName: 'User',
    }
  );

  await Cocktail.create(
    {
      title: 'Gin tonic',
      published: false,
      recipe: 'Shake and bip bop',
      user: admin,
      ingredients: [
        { title: 'Gin', amount: '50cl' },
        { title: 'Tonic', amount: '150cl' },
      ],
    },
    {
      title: 'Cuba libre',
      published: false,
      recipe: 'Shake and bip bop',
      user,
      ingredients: [
        { title: 'Bacardi black', amount: '50cl' },
        { title: 'Coke', amount: '150cl' },
      ],
    }
  );

  await mongoose.connection.close();
};

run().catch(console.error);
