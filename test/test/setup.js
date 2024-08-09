
// MongoDB bağlantısı için gerekli modülleri yükleyin
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

// Testlerin başlamasından önce MongoDB'yi başlatın
before(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

// Testlerden sonra MongoDB'yi kapatın
after(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});
