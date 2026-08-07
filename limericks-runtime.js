(() => {
  'use strict';

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  const FAMILIES = {
    '-oo': { ipa: '/ʉː/', words: ['Drew','zoo','blue','flew','too','stew','shoe','canoe','kangaroo','shampoo'] },
    '-ay': { ipa: '/eɪ/', words: ['May','day','play','stay','grey','away','tray','hooray'] },
    '-ight': { ipa: '/aɪt/', words: ['light','night','bright','fright','kite','right','sight','flight'] },
    '-at': { ipa: '/æt/', words: ['cat','hat','bat','flat','mat','that','sat'] },
    '-ake': { ipa: '/eɪk/', words: ['cake','lake','snake','shake','awake','mistake','break'] },
    '-ore': { ipa: '/ɔː/', words: ['door','floor','more','roar','snore','shore','four'] },
    '-oon': { ipa: '/ʉːn/', words: ['moon','spoon','soon','balloon','baboon','cartoon'] },
    '-ee': { ipa: '/iː/', words: ['sea','tree','free','three','agree','knee','bee'] },
    '-ed': { ipa: '/ed/', words: ['bed','red','head','said','spread','shed'] },
    '-og': { ipa: '/ɔg/', words: ['dog','frog','log','jog','blog'] }
  };

  const GUIDED_STEMS = [
    'There once was a ___ from ___',
    'Who always ___',
    'One day they ___',
    'And then they ___',
    'So everyone ___'
  ];
  const SCHEME = ['A','A','B','B','A'];

  const CLASS_TUBS = [
    { id:'blue', label:'A rhyme · /ʉː/', className:'blue', family:'-oo', items:[
      {word:'Drew', slot:0}, {word:'blue', slot:1}, {word:'canoe', slot:4}, {word:'shoe', slot:null}
    ]},
    { id:'purple', label:'A rhyme · /eɪ/', className:'purple', family:'-ay', items:[
      {word:'May', slot:0}, {word:'day', slot:1}, {word:'Hooray', slot:4}, {word:'tray', slot:null}
    ]},
    { id:'orange', label:'B rhyme · /æt/', className:'orange', family:'-at', items:[
      {word:'hat', slot:2}, {word:'cat', slot:3}, {word:'bat', slot:null}
    ]},
    { id:'green', label:'B rhyme · /ɔː/', className:'green', family:'-ore', items:[
      {word:'floor', slot:2}, {word:'door', slot:3}, {word:'roar', slot:null}
    ]}
  ];

  const CLASS_LINES = [
    'There once was a dancer named',
    'Who wore a bright jacket of',
    'They balanced a',
    'On a sleepy old',
    'Then sailed home at noon in a'
  ];
  const CLASS_LINES_ALT = {
    1: {'-ay':'Who practised their steps every'},
    2: {'-ore':'They slipped on the'},
    3: {'-ore':'And rolled through the'},
    4: {'-ay':'Then bowed as the crowd cried'}
  };

  const SYLLABLE_LINES = [
    { text:'There once was a dancer named May', words:[
      {w:'There',cuts:[]},{w:'once',cuts:[]},{w:'was',cuts:[]},{w:'a',cuts:[]},{w:'dancer',cuts:[4]},{w:'named',cuts:[]},{w:'May',cuts:[]}
    ]},
    { text:'Who danced in the sunshine all day', words:[
      {w:'Who',cuts:[]},{w:'danced',cuts:[]},{w:'in',cuts:[]},{w:'the',cuts:[]},{w:'sunshine',cuts:[3]},{w:'all',cuts:[]},{w:'day',cuts:[]}
    ]},
    { text:'They balanced a hat', words:[
      {w:'They',cuts:[]},{w:'balanced',cuts:[3]},{w:'a',cuts:[]},{w:'hat',cuts:[]}
    ]},
    { text:'On a sleepy old cat', words:[
      {w:'On',cuts:[]},{w:'a',cuts:[]},{w:'sleepy',cuts:[5]},{w:'old',cuts:[]},{w:'cat',cuts:[]}
    ]},
    { text:'Then bowed as the crowd cried hooray', words:[
      {w:'Then',cuts:[]},{w:'bowed',cuts:[]},{w:'as',cuts:[]},{w:'the',cuts:[]},{w:'crowd',cuts:[]},{w:'cried',cuts:[]},{w:'hooray',cuts:[3]}
    ]}
  ];

  const normalise = (value) => String(value || '').toLowerCase().replace(/[^a-z]/g, '');
  const lastWord = (line) => normalise(String(line || '').trim().split(/\s+/).pop() || '');
  const familyOf = (word) => {
    const normal = normalise(word);
    return Object.entries(FAMILIES).find(([, data]) => data.words.some((item) => normalise(item) === normal))?.[0] || null;
  };
  const rhymes = (a, b) => {
    const familyA = familyOf(a);
    const familyB = familyOf(b);
    return Boolean(familyA && familyA === familyB);
  };
  const setFeedback = (element, message, okay) => {
    if (!element) return;
    element.className = `feedback ${okay ? 'good' : 'bad'}`;
    element.textContent = message;
  };

  const slides = $$('.slide');
  if (!slides.length) return;

  const state = {
    slide: 0,
    completed: new Set([0, 1]),
    classSlots: Array(5).fill(null),
    selected: null,
    syllableDone: 0,
    banks: { A: [], B: [] }
  };

  const isComplete = (index) => Boolean(slides[index]?.dataset.free) || state.completed.has(index);
  const canVisit = (index) => {
    if (index <= state.slide) return true;
    for (let i = 0; i < index; i += 1) {
      if (!isComplete(i)) return false;
    }
    return true;
  };

  function drawDots() {
    const dots = $('#dots');
    if (!dots) return;
    dots.innerHTML = slides.map((_, index) => (
      `<button class="dot ${index === state.slide ? 'active' : ''} ${isComplete(index) ? 'done' : ''} ${canVisit(index) ? '' : 'locked'}" data-slide="${index}" aria-label="Slide ${index + 1}"></button>`
    )).join('');
  }

  function showSlide(index) {
    if (index < 0 || index >= slides.length || !canVisit(index)) return;
    state.slide = index;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    if ($('#slideLabel')) $('#slideLabel').textContent = slides[index].dataset.title || '';
    if ($('#progressText')) $('#progressText').textContent = `${index + 1} of ${slides.length}`;
    if ($('#progressBar')) $('#progressBar').style.width = `${((index + 1) / slides.length) * 100}%`;
    if ($('#prevBtn')) $('#prevBtn').disabled = index === 0;
    if ($('#nextBtn')) {
      $('#nextBtn').textContent = index === slides.length - 1 ? 'Finish' : 'Next →';
      $('#nextBtn').disabled = index < slides.length - 1 && !isComplete(index);
    }
    drawDots();
    slides[index].scrollTop = 0;
  }

  function completeSlide(index) {
    state.completed.add(index);
    if ($('#nextBtn')) $('#nextBtn').disabled = false;
    drawDots();
  }

  $('#prevBtn')?.addEventListener('click', () => showSlide(state.slide - 1));
  $('#nextBtn')?.addEventListener('click', () => {
    if (state.slide < slides.length - 1) showSlide(state.slide + 1);
  });
  $('#dots')?.addEventListener('click', (event) => {
    const target = event.target.closest('[data-slide]');
    if (target) showSlide(Number(target.dataset.slide));
  });

  const reveals = [
    '<b>Five lines:</b> a limerick is short and complete.',
    '<b>AABBA:</b> Ealing, ceiling and feeling are the A rhyme. Hat and bat are the B rhyme.',
    '<b>Shape:</b> lines 1, 2 and 5 are longer. Lines 3 and 4 are shorter.',
    '<b>Ending:</b> the last line gives the feeling, consequence or joke.'
  ];
  let revealCount = 0;
  $('#revealBtn')?.addEventListener('click', () => {
    if (revealCount < reveals.length) {
      revealCount += 1;
      $('#reveal')?.classList.add('on');
      if ($('#revealList')) {
        $('#revealList').innerHTML = reveals.slice(0, revealCount).map((item) => `<div class="reveal-row">${item}</div>`).join('');
      }
      $('#revealBtn').textContent = revealCount === reveals.length ? 'Hide features' : `Reveal feature ${revealCount + 1}`;
    } else {
      $('#reveal')?.classList.toggle('on');
    }
  });

  const getTubItem = (tubId, itemIndex) => {
    const tub = CLASS_TUBS.find((item) => item.id === tubId);
    return { ...tub.items[itemIndex], tub: tubId, idx: itemIndex, family: tub.family };
  };
  const classLineText = (index) => {
    const item = state.classSlots[index];
    return item ? (CLASS_LINES_ALT[index]?.[item.family] || CLASS_LINES[index]) : CLASS_LINES[index];
  };

  function placeSelected(slotIndex) {
    if (!state.selected) return;
    state.classSlots[slotIndex] = getTubItem(state.selected.tub, state.selected.idx);
    state.selected = null;
    renderClassBuild();
  }

  function renderClassBuild() {
    if (!$('#tubs') || !$('#classPoem')) return;
    $('#tubs').innerHTML = CLASS_TUBS.map((tub) => (
      `<div class="tub ${tub.className}"><h3>${tub.label}</h3>${tub.items.map((item, index) => {
        const used = state.classSlots.some((slot) => slot && slot.tub === tub.id && slot.idx === index);
        const selected = state.selected && state.selected.tub === tub.id && state.selected.idx === index;
        return `<button draggable="true" class="wordbox ${selected ? 'selected' : ''}" data-tubword="${tub.id}" data-idx="${index}" aria-disabled="${used}">${item.word}</button>`;
      }).join('')}</div>`
    )).join('');

    $('#classPoem').innerHTML = CLASS_LINES.map((_, index) => {
      const item = state.classSlots[index];
      return `<div class="build-line ${index === 2 || index === 3 ? 'short' : ''}">
        <span class="badge ${SCHEME[index]}">${SCHEME[index]}</span>
        <span>${classLineText(index)}</span>
        <div class="slot ${item ? 'filled' : ''}" data-slot="${index}">${item ? `<button class="wordbox" data-return="${index}">${item.word}</button>` : 'drop a word'}</div>
      </div>`;
    }).join('');

    $$('[data-tubword]').forEach((button) => {
      button.addEventListener('click', () => {
        if (button.getAttribute('aria-disabled') === 'true') return;
        state.selected = { tub: button.dataset.tubword, idx: Number(button.dataset.idx) };
        renderClassBuild();
      });
      button.addEventListener('dragstart', (event) => {
        if (button.getAttribute('aria-disabled') === 'true') {
          event.preventDefault();
          return;
        }
        event.dataTransfer.setData('text/plain', JSON.stringify({ tub: button.dataset.tubword, idx: Number(button.dataset.idx) }));
      });
    });

    $$('.slot').forEach((slot) => {
      slot.addEventListener('click', () => placeSelected(Number(slot.dataset.slot)));
      slot.addEventListener('dragover', (event) => {
        event.preventDefault();
        slot.classList.add('over');
      });
      slot.addEventListener('dragleave', () => slot.classList.remove('over'));
      slot.addEventListener('drop', (event) => {
        event.preventDefault();
        slot.classList.remove('over');
        try {
          state.selected = JSON.parse(event.dataTransfer.getData('text/plain'));
          placeSelected(Number(slot.dataset.slot));
        } catch (_) { }
      });
    });

    $$('[data-return]').forEach((button) => {
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        state.classSlots[Number(button.dataset.return)] = null;
        renderClassBuild();
      });
    });
  }

  $('#resetClassPoem')?.addEventListener('click', () => {
    state.classSlots = Array(5).fill(null);
    state.selected = null;
    if ($('#classFeedback')) {
      $('#classFeedback').className = '';
      $('#classFeedback').textContent = '';
    }
    renderClassBuild();
  });

  $('#checkClassPoem')?.addEventListener('click', () => {
    const slots = state.classSlots;
    if (slots.some((item) => !item)) {
      setFeedback($('#classFeedback'), 'No. Every line needs a rhyme word. Put a word in each blank and try again.', false);
      return;
    }
    if (new Set([slots[0].family, slots[1].family, slots[4].family]).size !== 1 || new Set([slots[2].family, slots[3].family]).size !== 1) {
      setFeedback($('#classFeedback'), 'No. The three A lines need one colour family. The two B lines need one other colour family. Try again.', false);
      return;
    }
    if (slots.some((item, index) => item.slot !== index)) {
      setFeedback($('#classFeedback'), 'No. The rhyme works, but at least one line does not make sense. Move the words and try again.', false);
      return;
    }
    setFeedback($('#classFeedback'), 'Yes. This is one of four correct poems: AABBA, sensible lines and two clear rhyme families.', true);
    completeSlide(2);
  });
  renderClassBuild();

  let familyA = '-oo';
  let familyB = '-at';

  function drawGuided() {
    if (!$('#pickA') || !$('#pickB') || !$('#guidedBuilder')) return;
    const previous = $$('[data-guided]').map((item) => item.value);
    $('#pickA').innerHTML = Object.keys(FAMILIES).map((family) => `<button class="btn ${family === familyA ? 'onA' : ''}" data-fam="A" data-name="${family}">${family}</button>`).join('');
    $('#pickB').innerHTML = Object.keys(FAMILIES).map((family) => `<button class="btn ${family === familyB ? 'onB' : ''}" data-fam="B" data-name="${family}">${family}</button>`).join('');
    $('#guidedBuilder').innerHTML = SCHEME.map((scheme, index) => {
      const family = scheme === 'A' ? familyA : familyB;
      const hint = index === 0 ? 'introduce the subject' : index === 4 ? 'finish with a consequence or joke' : index < 2 ? 'add detail' : 'short action line';
      return `<div class="builder-row"><div class="rowtop"><span class="badge ${scheme}">Line ${index + 1} · ${scheme}</span><span class="hint">${hint}</span></div>
        <textarea data-guided="${index}" placeholder="Write line ${index + 1}">${previous[index] || ''}</textarea>
        <div class="stems"><button class="stem" data-gstem="${index}">${GUIDED_STEMS[index]}</button>${FAMILIES[family].words.slice(0, 7).map((word) => `<button class="stem" data-gword="${index}" data-word="${word}">${word}</button>`).join('')}</div></div>`;
    }).join('');

    $$('[data-fam]').forEach((button) => button.addEventListener('click', () => {
      if (button.dataset.fam === 'A') familyA = button.dataset.name;
      else familyB = button.dataset.name;
      if (familyA === familyB) {
        const other = Object.keys(FAMILIES).find((family) => family !== familyA);
        if (button.dataset.fam === 'A') familyB = other;
        else familyA = other;
      }
      drawGuided();
    }));
    $$('[data-gstem]').forEach((button) => button.addEventListener('click', () => {
      const input = $(`[data-guided="${button.dataset.gstem}"]`);
      input.value = button.textContent;
      input.focus();
    }));
    $$('[data-gword]').forEach((button) => button.addEventListener('click', () => {
      const input = $(`[data-guided="${button.dataset.gword}"]`);
      input.value = `${input.value.trim().replace(/[,.!?]$/, '')} ${button.dataset.word}`.trim();
      input.focus();
    }));
  }

  $('#guidedCheck')?.addEventListener('click', () => {
    const lines = $$('[data-guided]').map((item) => item.value.trim());
    const endings = lines.map(lastWord);
    if (lines.some((line) => !line)) {
      setFeedback($('#guidedFeedback'), 'No. Finish all five lines before checking.', false);
      return;
    }
    if (!(rhymes(endings[0], endings[1]) && rhymes(endings[0], endings[4]))) {
      setFeedback($('#guidedFeedback'), 'No. Lines 1, 2 and 5 do not all use the same A rhyme. Change the endings and try again.', false);
      return;
    }
    if (!rhymes(endings[2], endings[3])) {
      setFeedback($('#guidedFeedback'), 'No. Lines 3 and 4 do not rhyme. Change the endings and try again.', false);
      return;
    }
    setFeedback($('#guidedFeedback'), 'Yes. Your guided poem follows AABBA. Now prove you can hear its syllables.', true);
    completeSlide(3);
  });
  drawGuided();

  const syllableState = SYLLABLE_LINES.map((line) => line.words.map(() => new Set()));
  const attempts = Array(SYLLABLE_LINES.length).fill(0);
  const chunks = (word, cutSet) => {
    const output = [];
    let start = 0;
    [...cutSet].sort((a, b) => a - b).forEach((cut) => {
      output.push(word.slice(start, cut));
      start = cut;
    });
    output.push(word.slice(start));
    return output;
  };

  function renderSyllables() {
    if (!$('#syllableTask')) return;
    $('#syllableTask').innerHTML = SYLLABLE_LINES.map((line, lineIndex) => {
      const unlocked = lineIndex <= state.syllableDone;
      const done = lineIndex < state.syllableDone;
      const wordsHtml = line.words.map((word, wordIndex) => {
        const letters = [...word.w].map((letter, characterIndex) => {
          const cutButton = characterIndex ? `<button class="cut ${syllableState[lineIndex][wordIndex].has(characterIndex) ? 'on' : ''}" data-cut="${lineIndex},${wordIndex},${characterIndex}" ${!unlocked || done ? 'disabled' : ''}></button>` : '';
          return `${cutButton}<span class="letter">${letter}</span>`;
        }).join('');
        return `<span class="split-word">${letters}</span>`;
      }).join('');
      const boxesHtml = line.words.map((word, wordIndex) => {
        const boxes = chunks(word.w, syllableState[lineIndex][wordIndex]).map((chunk) => `<span class="sylbox">${chunk}</span>`).join('');
        return `${boxes}${wordIndex < line.words.length - 1 ? '<span class="word-gap"></span>' : ''}`;
      }).join('');
      return `<div class="syllable-card ${!unlocked ? 'locked' : ''} ${done ? 'good' : ''}" data-scard="${lineIndex}">
        <div class="rowtop"><span class="badge ${SCHEME[lineIndex]}">Line ${lineIndex + 1}</span><b>${line.text}</b></div>
        <div class="split-instruction">${done ? 'Correct — locked.' : unlocked ? 'Tap a dotted gap to split a word.' : 'Complete the previous line first.'}</div>
        <div class="split-words">${wordsHtml}</div><div class="box-preview">${boxesHtml}</div>
        <div class="syllable-actions"><button class="btn primary" data-check-syl="${lineIndex}" ${!unlocked || done ? 'disabled' : ''}>Check this line</button><span class="attempts">${attempts[lineIndex] ? `Attempts: ${attempts[lineIndex]}` : ''}</span><span data-syl-result="${lineIndex}"></span></div>
      </div>`;
    }).join('');

    $$('[data-cut]').forEach((button) => button.addEventListener('click', () => {
      const [lineIndex, wordIndex, characterIndex] = button.dataset.cut.split(',').map(Number);
      const cutSet = syllableState[lineIndex][wordIndex];
      if (cutSet.has(characterIndex)) cutSet.delete(characterIndex);
      else cutSet.add(characterIndex);
      renderSyllables();
    }));

    $$('[data-check-syl]').forEach((button) => button.addEventListener('click', () => {
      const lineIndex = Number(button.dataset.checkSyl);
      attempts[lineIndex] += 1;
      const correct = SYLLABLE_LINES[lineIndex].words.every((word, wordIndex) => {
        const guess = [...syllableState[lineIndex][wordIndex]].sort((a, b) => a - b);
        return guess.length === word.cuts.length && guess.every((value, index) => value === word.cuts[index]);
      });

      if (correct) {
        state.syllableDone = lineIndex + 1;
        renderSyllables();
        const result = $(`[data-scard="${lineIndex}"] [data-syl-result="${lineIndex}"]`);
        if (result) {
          const count = SYLLABLE_LINES[lineIndex].words.reduce((total, word, wordIndex) => total + chunks(word.w, syllableState[lineIndex][wordIndex]).length, 0);
          result.textContent = `Yes — ${count} syllables.`;
          result.style.color = 'var(--good)';
        }
        if (state.syllableDone === SYLLABLE_LINES.length) completeSlide(4);
      } else {
        renderSyllables();
        const card = $(`[data-scard="${lineIndex}"]`);
        const result = card?.querySelector(`[data-syl-result="${lineIndex}"]`);
        card?.classList.add('bad');
        if (result) {
          result.textContent = attempts[lineIndex] < 3 ? 'No. Say it slowly and try again.' : 'Still no. Use your chin or clap each syllable, then change your splits.';
          result.style.color = 'var(--bad)';
        }
      }
    }));
  }
  renderSyllables();

  function drawFinal() {
    if (!$('#finalBuilder')) return;
    const previous = $$('[data-final]').map((item) => item.value);
    $('#finalBuilder').innerHTML = SCHEME.map((scheme, index) => `<div class="builder-row"><div class="rowtop"><span class="badge ${scheme}">Line ${index + 1} · ${scheme}</span></div>
      <textarea data-final="${index}" placeholder="Write freely, or use a stem below">${previous[index] || ''}</textarea>
      <div class="stems"><button class="stem" data-fstem="${index}">${GUIDED_STEMS[index]}</button></div>
      <div class="bank-strip">${state.banks[scheme].filter((item) => item.ok).map((item) => `<button class="chip good" data-fword="${index}" data-word="${item.word}">${item.word}</button>`).join('')}</div></div>`).join('');
    $$('[data-final]').forEach((input) => input.addEventListener('input', updatePreview));
    $$('[data-fstem]').forEach((button) => button.addEventListener('click', () => {
      const input = $(`[data-final="${button.dataset.fstem}"]`);
      input.value = button.textContent;
      input.focus();
      updatePreview();
    }));
    $$('[data-fword]').forEach((button) => button.addEventListener('click', () => {
      const input = $(`[data-final="${button.dataset.fword}"]`);
      input.value = `${input.value.trim().replace(/[,.!?]$/, '')} ${button.dataset.word}`.trim();
      input.focus();
      updatePreview();
    }));
    updatePreview();
  }

  function updatePreview() {
    if (!$('#preview')) return;
    const lines = $$('[data-final]').map((item) => item.value);
    $('#preview').textContent = lines.join('\n');
    try { localStorage.setItem('elc_limerick_final', JSON.stringify(lines)); } catch (_) { }
  }

  function renderBank(which, anchor) {
    if (!$('#chips' + which)) return;
    $('#chips' + which).innerHTML = state.banks[which].map((item) => `<span class="chip ${item.ok ? 'good' : 'bad'}">${item.ok ? '✓' : '✕'} ${item.word}</span>`).join('');
    const last = state.banks[which].at(-1);
    const help = $('#help' + which);
    if (help && last && !last.ok) {
      const family = familyOf(anchor);
      const ipa = family ? FAMILIES[family].ipa : 'an unknown ending';
      help.innerHTML = `<div class="sound-help"><div class="face">🗣️</div><div><b>No — ${last.word}</b> is not recognised as the same rhyme as <b>${anchor}</b> (${ipa}). Try another word.<br><a href="pronunciation.html">Open the Pronunciation Hub to compare the sounds</a>. Teacher audio will be added later.</div></div>`;
    } else if (help) help.innerHTML = '';
    drawFinal();
  }

  function checkRhymeDone() {
    const aCount = state.banks.A.filter((item) => item.ok).length;
    const bCount = state.banks.B.filter((item) => item.ok).length;
    if (aCount >= 3 && bCount >= 2) {
      setFeedback($('#rhymeProgress'), 'Good. You have at least three A words and two B words. Your own builder is ready.', true);
      completeSlide(5);
    } else {
      setFeedback($('#rhymeProgress'), `Keep going: ${Math.max(0, 3 - aCount)} more A rhyme(s) and ${Math.max(0, 2 - bCount)} more B rhyme(s) needed.`, false);
    }
  }

  function addRhyme(which) {
    const anchor = $('#anchor' + which)?.value.trim();
    const input = $('#try' + which);
    const word = input?.value.trim();
    if (!anchor || !word) {
      setFeedback($('#rhymeProgress'), 'Choose an anchor and enter a word first.', false);
      return;
    }
    const anchorFamily = familyOf(anchor);
    const wordFamily = familyOf(word);
    state.banks[which].push({ word, ok: Boolean(anchorFamily && anchorFamily === wordFamily) });
    input.value = '';
    renderBank(which, anchor);
    checkRhymeDone();
  }

  $$('[data-add]').forEach((button) => button.addEventListener('click', () => addRhyme(button.dataset.add)));
  ['A','B'].forEach((which) => $('#try' + which)?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') addRhyme(which);
  }));

  $('#finalCheck')?.addEventListener('click', () => {
    const lines = $$('[data-final]').map((item) => item.value.trim());
    const endings = lines.map(lastWord);
    const notes = [];
    if (lines.some((line) => !line)) notes.push('Finish all five lines.');
    if (!(rhymes(endings[0], endings[1]) && rhymes(endings[0], endings[4]))) notes.push('Lines 1, 2 and 5 need the same A rhyme.');
    if (!rhymes(endings[2], endings[3])) notes.push('Lines 3 and 4 need the same B rhyme.');
    if (!(lines[2]?.split(/\s+/).length < lines[0]?.split(/\s+/).length && lines[3]?.split(/\s+/).length < lines[1]?.split(/\s+/).length)) notes.push('Make lines 3 and 4 shorter than the A lines.');
    setFeedback($('#finalFeedback'), notes.length ? notes.join(' ') : 'AABBA works. Read it aloud. Improve the bounce and make the last line land like a joke.', notes.length === 0);
  });

  drawFinal();
  try {
    const saved = JSON.parse(localStorage.getItem('elc_limerick_final') || '[]');
    saved.forEach((value, index) => {
      const input = $(`[data-final="${index}"]`);
      if (input) input.value = value;
    });
    updatePreview();
  } catch (_) { }

  showSlide(0);
})();