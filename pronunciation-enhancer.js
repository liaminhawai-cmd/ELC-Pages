(() => {
  const build = "20260805-anatomy-1";
  const parts = [1,2,3,4,5].map(n => `pronunciation-enhancer.part${n}.txt?v=${build}`);
  Promise.all(parts.map(url => fetch(url,{cache:"no-cache"}).then(r => {
    if(!r.ok) throw new Error(`${url}: HTTP ${r.status}`);
    return r.text();
  }))).then(sourceParts => {
    const script = document.createElement("script");
    script.textContent = sourceParts.join("");
    document.body.appendChild(script);
  }).catch(err => console.error("Could not load pronunciation anatomy enhancement",err));
})();
