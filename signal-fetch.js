// Archived fetch script
async function fetchSignals() {
  const res = await fetch('/signals-archive.json');
  const data = await res.json();
  console.log("Archived signals:", data);
}
