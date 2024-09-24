import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";
import { MovieType } from "./types";
import { toggleFav } from "../store/moviesSlice";
export const addFavMovieFS = async (movie: MovieType) => {
  try {
    const docRef = await addDoc(collection(db, "fav_movies"), {
      ...movie,
      liked: true,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const removeFavMovieFS = async (id: string) => {
  try {
    const deletedMovie = await deleteDoc(doc(db, "fav_movies", id));
    console.log("sucess deleting movie", deletedMovie);
  } catch (e) {
    console.error("Error Removing Movie: ", e);
  }
};

export const deleteFavMoviesCollection = async () => {
  const collectionRef = collection(db, "fav_movies");

  const querySnapshot = await getDocs(collectionRef);

  const batchDeletePromises = querySnapshot.docs.map((docSnapshot) => {
    return deleteDoc(doc(db, "fav_movies", docSnapshot.id));
  });

  await Promise.all(batchDeletePromises);

  console.log("All documents in fav_movies successfully deleted!");
};
export const getFavMoviesFS = async () => {
  let favMovies: MovieType[] = [];
  try {
    const querySnapshot = await getDocs(collection(db, "fav_movies"));
    querySnapshot.forEach((doc: any) => {
      // set fav movies
      favMovies.push({ ...doc.data(), fsId: doc.id });
      //   console.log(`${doc.id} => ${doc.data()}`);
      //   console.log("ss", doc.data().liked);
    });
  } catch (error) {
    console.log("error getting data", error);
  } finally {
    // console.log({ favMovies });
  }
  return favMovies;
};
