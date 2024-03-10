import React from "react";

export default function Alert(p) {
  return (
    p.alert && (
      <div
        className={`alert alert-${"success"} alert-dismissible fade show`}
        role="alert"
      >
        {p.alert.message}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  );
}
