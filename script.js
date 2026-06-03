let temp = 0;
  const MAX = 1200;

  function update() {
    const pct = (temp / MAX) * 100;
    const v = document.getElementById('tempVal');
    const bar = document.getElementById('bar');
    const alert = document.getElementById('alert');
    const btn = document.getElementById('btnHeat');
    const dot = document.getElementById('dot');

    v.textContent = temp + '°C';
    bar.style.width = pct + '%';

    v.className = 'temp';
    bar.className = 'bar-fill';
    alert.classList.remove('show');
    dot.classList.remove('alarm');
    btn.disabled = false;

    if (temp >= MAX) {
      v.classList.add('crit');
      bar.classList.add('crit');
      alert.classList.add('show');
      dot.classList.add('alarm');
      btn.disabled = true;
    } else if (temp > 800) {
      v.classList.add('warn');
      bar.classList.add('warn');
    }
  }

  function aquecer() {
    if (temp >= MAX) return;
    temp = Math.min(temp + 200, MAX);
    update();
  }

  function resfriar() {
    temp = 0;
    update();
  }

  update();