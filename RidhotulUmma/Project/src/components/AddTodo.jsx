import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "" && selectedDate !== "") {
      const shouldAddTodo = window.confirm("Apakah Anda ingin menambahkan tugas ini?");
      
      if (shouldAddTodo) {
        await addDoc(collection(db, "todos"), {
          title,
          completed: false,
          createdAt: serverTimestamp(),
          selectedDate: new Date(selectedDate), 
        });
        setTitle("");
        setSelectedDate("");
        window.alert("Tugas berhasil ditambahkan!");
      } else {
        window.alert("Tugas batal ditambahkan.");
      }
    } else {
      window.alert("Harap isi semua field!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Masukkan Notemu..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>+Tambah Tugas</button>
      </div>
    </form>
  );
}
