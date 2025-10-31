// src/main.jsx

import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { getGuardians } from "./api/guardiansApi";
import GuardianCard from "./components/GuardianCard";
import Modal from "./components/Modal";
import styles from "./styles/main.module.css";

function App() {
  const [guardians, setGuardians] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await getGuardians();
        const normalized = data.map(d => ({
          ...d,
          murder_year: d.murder_year || null
        })).sort((a,b) => {
          if (a.murder_year === null && b.murder_year === null) return 0;
          if (a.murder_year === null) return 1;
          if (b.murder_year === null) return -1;
          return b.murder_year - a.murder_year;
        });
        setGuardians(normalized);
        setFiltered(normalized);
      } catch (e) {
        setError("No se pudieron cargar los datos.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  useEffect(() => {
    if (!query) {
      setFiltered(guardians);
      return;
    }
    const q = query.toLowerCase();
    setFiltered(guardians.filter(g => (
      (g.name && g.name.toLowerCase().includes(q)) ||
      (g.territory && g.territory.toLowerCase().includes(q)) ||
      (g.role && g.role.toLowerCase().includes(q))
    )));
  }, [query, guardians]);

  return (
    <main className={styles.app}>
      <header className={styles.header}>
        <h1>Guardianes del Territorio</h1>
        <p className={styles.subtitle}>Reconocimiento de las personas que fueron asesinadas por intentar proteger un territorio y la naturaleza de México</p>
      </header>

      <section className={styles.controls}>
        <input
          aria-label="Search guardians"
          placeholder="Buscar por nombre, territorio o rol…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className={styles.status}>
          {loading && <span>Loading…</span>}
          {error && <span className={styles.error}>{error}</span>}
          {!loading && !error && <span>{filtered.length} registros</span>}
        </div>
      </section>

      <section className={styles.grid} aria-live="polite">
        {filtered.map(g => (
          <GuardianCard key={g.id} guardian={g} onOpen={(item) => setSelected(item)} />
        ))}
      </section>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected ? selected.name : ""}>
        {selected && (
          <div className={styles.detail}>
            <div className={styles.detailMedia}>
              <img src={selected.imageUrl || ""} alt={selected.imageUrl ? `${selected.name} - ${selected.territory}` : `No image for ${selected.name}`} />
            </div>
            <div className={styles.detailBody}>
              <h3>{selected.name}</h3>
              <p className={styles.muted}>{selected.murder_year ? selected.murder_year : "Year unknown"} • {selected.territory || "Territory unknown"} • {selected.role}</p>
              <p>{selected.bio}</p>
              {selected.source && selected.source.length > 0 && (
                <>
                  <h4>Sources</h4>
                  <ul>
                    {selected.source.map((s, i) => (
                      <li key={i}><a href={s} target="_blank" rel="noopener noreferrer">{s}</a></li>
                    ))}
                  </ul>
                </>
              )}
              <div className={styles.detailActions}>
              </div>
            </div>
          </div>
        )}
      </Modal>

      <footer className={styles.footer}>
        <small>Made by Luis Diaz</small>
      </footer>
    </main>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
