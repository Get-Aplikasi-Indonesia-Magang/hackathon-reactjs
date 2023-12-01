import React, { useState, useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDate, setNewDate] = useState(
    todo.selectedDate ? todo.selectedDate.toDate().toLocaleDateString() : ""
  );

  useEffect(() => {
    setNewDate(todo.selectedDate ? todo.selectedDate.toDate().toLocaleDateString() : "");
  }, [todo.selectedDate]);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.completed === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  const handleDateChange = (e) => {
    setNewDate(e.target.value);
  };

  const handleComplete = () => {
    const confirmationMessage = todo.completed
      ? "Apakah Anda ingin batal menandai tugas ini selesai?"
      : "Apakah Anda ingin menandai tugas ini selesai?";

    const shouldMarkComplete = window.confirm(confirmationMessage);

    if (shouldMarkComplete) {
      toggleComplete(todo);
      window.alert(todo.completed ? "Batal tandai tugas." : "Tugas telah selesai!");
    } else {
      window.alert("Batal tandai tugas.");
    }
  };

  const handleEditClick = () => {
    const shouldEdit = window.confirm("Apakah Anda ingin edit tugas ini?");
    if (shouldEdit) {
      handleEdit(todo, newTitle, newDate);
      window.alert("Tugas berhasil di edit!");
    } else {
      window.alert("Batal edit tugas.");
    }
  };

  const handleDeleteClick = () => {
    const shouldDelete = window.confirm("Apakah Anda ingin menghapus tugas ini?");
    if (shouldDelete) {
      handleDelete(todo.id);
      window.alert("Tugas berhasil dihapus!");
    } else {
      window.alert("Batal hapus tugas.");
    }
  };

  return (
    <div className="todo">
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChange}
      />
      <span>Tanggal: {todo.selectedDate?.toDate().toLocaleDateString()}</span>
      <div>
        {/* <input
          style={{ textDecoration: todo.completed && "line-through" }}
          type="date"
          value={newDate}
          onChange={handleDateChange}
        /> */}
        
        <button className="button-complete" onClick={handleComplete}>
          <CheckCircleIcon id="i" />
          <span>Selesai</span>
        </button>
        <button className="button-edit" onClick={handleEditClick}>
          <EditIcon id="i" />
          <span>Edit</span>
        </button>
        <button className="button-delete" onClick={handleDeleteClick}>
          <DeleteIcon id="i" />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
}
