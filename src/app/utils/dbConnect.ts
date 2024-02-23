import {connect, connection} from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local",
  );
}

const conn: any = {
  isConnected: false,
}

export async function dbConnect() {
  if (conn.isConnected) {
    return;
  }
  const db = await connect(MONGODB_URI);
  console.log('Se ha conectado a la base de datos de:',db.connection.db.namespace);
  conn.isConnected = db.connections[0].readyState;
}

connection.on('connected', () => {
  console.log('Mongoose connected to db');
})

connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
})

