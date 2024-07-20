import "./Note.css";
import "../../GlobalCSS/GlobalCSS.css";
import { useState } from "react";
import NoteFooterBtnEdit from "../NoteFooterBtnEdit/NoteFooterBtnEdit";
import NoteFooterBtn from "../NoteFooterBtn/NoteFooterBtn";
import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import { Navigate, useNavigate } from "react-router-dom";

function Note(props) {
  const navigate = useNavigate();

  function clicked(e) {
    const id = props.noteDetails._id;
    navigate(`/note/${id}`);
  }

  return (
    <div className="card pb-3 note-card" onClick={clicked}>
      <div className="card-header card-date">{props.noteDetails.date}</div>
      <div className="card-body text-start overflow-hidden">
        <h5 className="card-title text-start">{props.noteDetails.heading}</h5>
        <p className="card-text text-start">{props.noteDetails.body}</p>
      </div>
    </div>

      // <div className="note b1" onClick={clicked}>
      //   {/* <div className="note-close-btn b1">
      //     <span class="material-symbols-outlined">close</span>
      //   </div> */}
      //   <div className="date b1 flex p5 jcl">
      //     <p className="">{props.noteDetails.date}</p>
      //   </div>
      //   <div className="heading b1 flex p5 jcl ofh">
      //     <h4 className="text-overflow">
      //     {props.noteDetails.heading}
      //     </h4>
      //   </div>
      //   <div className="body b1 flex p5 jcl ofh">
      //     <p className="ofh">
      //       {props.noteDetails.body}
      //     </p>
      //   </div>
      //     {/* <NoteFooterBtn /> */}
      // </div>
  );
}

export default Note;
