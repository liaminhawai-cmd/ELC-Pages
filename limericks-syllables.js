(() => {
  const stages = [...document.querySelectorAll('main > section.stage')];
  if (stages.length < 3 || document.getElementById('syllableStage')) return;

  const lines = [
    { text: 'There once was a young man from Ealing', answer: 9, scheme: 'A', target: 'long line' },
    { text: 'Who would always hang from the ceiling', answer: 9, scheme: 'A', target: 'long line' },
    { text: 'He couldn’t wear a hat', answer: 6, scheme: 'B', target: 'short line' },
    { text: 'But could hang like a bat', answer: 6, scheme: 'B', target: 'short line' },
    { text: 'And said, “What a wonderful feeling!”', answer: 9, scheme: 'A', target: 'long line' }
  ];

  const stage = document.createElement('section');
  stage.className = 'stage';
  stage.id = 'syllableStage';
  stage.innerHTML = `
    <div class="stagehead"><span class="num">4</span><h2>You do — count the syllables</h2></div>
    <p class="hint">After the guided builder, count each model line yourself. Say it slowly or clap it, enter your answer, then check. The computer will not show the count first.</p>
    <div class="card">
      <div id="syllableRows" style="display:grid;gap:10px"></div>
      <button class="btn primary" id="checkSyllables">Check my counts</button>
      <div id="syllableFeedback"></div>
    </div>`;

  stages[2].after(stage);

  // Renumber the later stages so the sequence stays clear.
  [...document.querySelectorAll('main > section.stage')].forEach((s, i) => {
    const n = s.querySelector('.num');
    if (n) n.textContent = i + 1;
  });

  const rows = stage.querySelector('#syllableRows');
  rows.innerHTML = lines.map((line, i) => `
    <div class="builder-row" data-syllable-row="${i}">
      <div class="rowtop">
        <span class="pill ${line.scheme}">${line.scheme} · ${line.target}</span>
        <span>${line.text}</span>
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:8px">
        <label for="syllable-${i}"><b>My count:</b></label>
        <input id="syllable-${i}" data-syllable-input="${i}" type="number" min="1" max="20" inputmode="numeric" style="width:90px">
        <span class="hint" data-syllable-result="${i}" style="margin:0"></span>
      </div>
    </div>`).join('');

  stage.querySelector('#checkSyllables').addEventListener('click', () => {
    let complete = true;
    let correct = 0;

    lines.forEach((line, i) => {
      const input = stage.querySelector(`[data-syllable-input="${i}"]`);
      const result = stage.querySelector(`[data-syllable-result="${i}"]`);
      const value = Number(input.value);

      if (!input.value) {
        complete = false;
        result.textContent = 'Enter your count first.';
        result.style.color = 'var(--bad)';
        return;
      }

      if (value === line.answer) {
        correct += 1;
        result.textContent = '✓ Correct';
        result.style.color = 'var(--good)';
      } else {
        result.textContent = 'Not yet — say the line slowly and clap every syllable.';
        result.style.color = 'var(--bad)';
      }
    });

    const feedback = stage.querySelector('#syllableFeedback');
    feedback.className = `feedback ${complete && correct === lines.length ? 'good' : 'bad'}`;
    if (!complete) {
      feedback.textContent = 'Count every line before checking the whole pattern.';
    } else if (correct === lines.length) {
      feedback.textContent = 'All five counts are correct. Notice the long–long–short–short–long shape.';
    } else {
      feedback.textContent = `${correct} of ${lines.length} correct. Try the others again; the answers stay hidden until you get them right.`;
    }
  });
})();