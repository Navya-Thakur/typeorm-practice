import * as express from "express";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Photo } from "./Entities/User";
const app = express();
app.use(express.json());
const port = 3000;
// app.get("/", function (req, res) {
// res.send("Hellow From Express updated");
// });



const AppDataSource= new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "test",
    entities: [Photo],
    synchronize: true,
    logging: true,
});

app.get("/", async function (req, res) {

    // INSERT


        // const photo = new Photo()
        // photo.name = "Me and Bears"
        // photo.description = "I am near polar bears"
        // photo.filename = "photo-with-bears.jpg"
        // photo.views = 1
        // photo.isPublished = true

        // await AppDataSource.manager.save(photo)
        // console.log("Photo has been saved. Photo id is", photo.id)

    //FIND

        // const savedPhotos = await AppDataSource.manager.find(Photo)
        // console.log("All photos from the db: ", savedPhotos)

    //LOADING

        // const photoRepository = AppDataSource.getRepository(Photo)
        // const allPhotos = await photoRepository.find()
        // console.log("All photos from the db: ", allPhotos)

        // const firstPhoto = await photoRepository.findOneBy({
        //     id: 1,
        // })
        // console.log("First photo from the db: ", firstPhoto)

        // const meAndBearsPhoto = await photoRepository.findOneBy({
        //     name: "Me and Bears",
        // })
        // console.log("Me and Bears photo from the db: ", meAndBearsPhoto)

        // const allViewedPhotos = await photoRepository.findBy({ views: 1 })
        // console.log("All viewed photos: ", allViewedPhotos)

        // const allPublishedPhotos = await photoRepository.findBy({ isPublished: true })
        // console.log("All published photos: ", allPublishedPhotos)

        // const [photos, photosCount] = await photoRepository.findAndCount()
        // console.log("All photos: ", photos)
        // console.log("Photos count: ", photosCount)

    //DELETE

        //         const photoRepository = AppDataSource.getRepository(Photo)
        // const photoToRemove = await photoRepository.findOneBy({
        //     id: 1,
        // })
        // await photoRepository.remove(photoToRemove)
});
    



AppDataSource.initialize().then(() => {
    console.log("DataBase Connected Sucessfully;");
});


app.listen(port, ()=> {
    console.log(`Timezones by location application is running on port ${port}.`);
});