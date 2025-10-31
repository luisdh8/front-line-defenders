// src/components/Modal.jsx
import React, { useEffect, useRef } from "react";
import styles from "../styles/Modal.module.css";

/**
 * Modal component (accessible)
 */
export default function Modal({ open, onClose, title, children }) {
  const ref = useRef();

  // close on ESC and trap focus minimally
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // focus the modal container
    const node = ref.current;
    if (node) {
      node.focus();
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.modalBackdrop} role="dialog" aria-modal="true" aria-label={title || "Details"}>
      <div className={styles.modal} ref={ref} tabIndex="-1">
        <header className={styles.modalHeader}>
          <h2>{title}</h2>
          <button onClick={onClose} aria-label="Close" className={styles.modalClose}>✕</button>
        </header>
        <div className={styles.modalContent}>
          {children}
        </div>
      </div>
    </div>
  );
}
