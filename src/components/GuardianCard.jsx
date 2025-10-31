// src/components/GuardianCard.js
import React from "react";
import styles from "../styles/GuardianCard.module.css";

/**
 * GuardianCard - displays a compact card for each guardian
 */
export default function GuardianCard({ guardian, onOpen }) {
  return (
    <article className={styles.card}>
      <button 
        className={styles.cardBtn} 
        onClick={() => onOpen(guardian)}
        aria-label={`View details about ${guardian.name}`}
      >
        <div className={styles.cardMedia}>
          {guardian.imageUrl ? (
            <img 
              src={guardian.imageUrl} 
              alt={`${guardian.name} - ${guardian.territory}`} 
            />
          ) : (
            <span aria-hidden="true">📷</span>
          )}
        </div>
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>{guardian.name}</h3>
          <p className={styles.cardMeta}>
            {guardian.murder_year || 'Year unknown'} • {guardian.territory || 'Territory unknown'}
          </p>
          <p className={styles.cardRole}>{guardian.role}</p>
        </div>
        <span className={styles.cardAction} aria-hidden="true">›</span>
      </button>
    </article>
  );
}
