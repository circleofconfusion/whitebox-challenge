const mysql = require('promise-mysql');
const DATABASE_NAME = 'code-challenge';

module.exports = {
  domesticQuery,
  internationalQuery,
  endPool
}

const poolPromise = mysql.createPool({
  host: '172.17.0.2',
  user: 'testuser',
  password: 'testpass',
  database: DATABASE_NAME
});

async function domesticQuery(clientId, shippingSpeed) {
  const pool = await poolPromise;
  pool.getConnection();

  const sql = `SELECT rates.start_weight, rates.end_weight,
  SUM(CASE WHEN rates.zone = '1' THEN rates.rate END) "zone_1",
  SUM(CASE WHEN rates.zone = '2' THEN rates.rate END) "zone_2",
  SUM(CASE WHEN rates.zone = '3' THEN rates.rate END) "zone_3",
  SUM(CASE WHEN rates.zone = '4' THEN rates.rate END) "zone_4",
  SUM(CASE WHEN rates.zone = '5' THEN rates.rate END) "zone_5",
  SUM(CASE WHEN rates.zone = '6' THEN rates.rate END) "zone_6",
  SUM(CASE WHEN rates.zone = '7' THEN rates.rate END) "zone_7",
  SUM(CASE WHEN rates.zone = '8' THEN rates.rate END) "zone_8"
  FROM rates
  WHERE client_id = ? AND locale = 'domestic' AND shipping_speed = ?
  GROUP BY start_weight, end_weight
  ORDER BY start_weight`;
  return pool.query(sql, [clientId, shippingSpeed]);
}

async function internationalQuery(clientId, shippingSpeed) {
  const pool = await poolPromise;
  pool.getConnection();

  const sql = `SELECT rates.start_weight, rates.end_weight,
  SUM(CASE WHEN rates.zone = 'A' THEN rates.rate END) "zone_A",
  SUM(CASE WHEN rates.zone = 'B' THEN rates.rate END) "zone_B",
  SUM(CASE WHEN rates.zone = 'C' THEN rates.rate END) "zone_C",
  SUM(CASE WHEN rates.zone = 'D' THEN rates.rate END) "zone_D",
  SUM(CASE WHEN rates.zone = 'E' THEN rates.rate END) "zone_E",
  SUM(CASE WHEN rates.zone = 'F' THEN rates.rate END) "zone_F",
  SUM(CASE WHEN rates.zone = 'G' THEN rates.rate END) "zone_G",
  SUM(CASE WHEN rates.zone = 'H' THEN rates.rate END) "zone_H",
  SUM(CASE WHEN rates.zone = 'I' THEN rates.rate END) "zone_I",
  SUM(CASE WHEN rates.zone = 'J' THEN rates.rate END) "zone_J",
  SUM(CASE WHEN rates.zone = 'K' THEN rates.rate END) "zone_K",
  SUM(CASE WHEN rates.zone = 'L' THEN rates.rate END) "zone_L",
  SUM(CASE WHEN rates.zone = 'M' THEN rates.rate END) "zone_M",
  SUM(CASE WHEN rates.zone = 'N' THEN rates.rate END) "zone_N",
  SUM(CASE WHEN rates.zone = 'O' THEN rates.rate END) "zone_O"
  FROM rates
  WHERE client_id = ? AND locale = 'international' AND shipping_speed = ?
  GROUP BY start_weight, end_weight
  ORDER BY start_weight`;
  return pool.query(sql, [clientId, shippingSpeed]);
}

async function endPool() {
  const pool = await poolPromise;
  pool.end();
}