import * as express from "express";
import * as cors from 'cors';

import { appDataSource } from '../app-data-source';
appDataSource.initialize().then(() => console.log("Veri tabani basarili bir sekilde getirildi.."))

import kullaniciRoute from './routes/Kullanici';
import malzemeRouter from './routes/MalzemeKodlama';
import birimRouter from './routes/BirimKodlama';
import girisRouter from './routes/Giris';

const app = express();
app.use(express.json());
app.use(cors());

const kodlamaRouter = express.Router();

/* kodlama*/
kodlamaRouter.use("/malzemekodlama", malzemeRouter)
kodlamaRouter.use("/birimkodlama",birimRouter)

app.use("/kullanici", kullaniciRoute);
app.use("/kodlama", kodlamaRouter);
app.use("/giris", girisRouter);

app.listen(3001, function () {
    console.log("http://localhost:3001 started")
})