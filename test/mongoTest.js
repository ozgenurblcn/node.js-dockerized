const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app'); // Uygulamanızın ana dosyasını buraya dahil edin
const should = chai.should();

chai.use(chaiHttp);

// Test işlemlerini tanımlayın
describe('MongoDB Test', () => {
  it('should connect to MongoDB and perform CRUD operations', (done) => {
    // CRUD işlemlerini burada test edin
    done();
  });
});
