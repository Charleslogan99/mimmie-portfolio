export function Arrow({ diagonal = false }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={diagonal ? "M5 19 19 5M8 5h11v11" : "M5 12h14M13 6l6 6-6 6"} /></svg>;
}
