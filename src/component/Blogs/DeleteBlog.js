import { deleteDoc, doc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import React from 'react';
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import { db, storage } from '../../firebaseConfigue';

export default function DeleteBlog(props) {

    const {id, imgUrl} = props;
   const handleDelete = async () =>{
    try{
        await  deleteDoc(doc(db, "Blog" , id))
        alert("Article deleted");
        const storageRef = ref(storage , imgUrl)
        await deleteObject(storageRef)
       } catch (err) {
         toast("Error" , {type: "error"})
       }
   }

  return (
    <div onClick={handleDelete}>
         <MdDelete />
    </div>
  )
}
