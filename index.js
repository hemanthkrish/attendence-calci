import './style.css';

document.getElementById('submit').onclick = function () {
  let tot = document.getElementById('tot_classes').value;
  let pre = document.getElementById('pre_classes').value;
  let glpc = document.getElementById('goal_percent').value;

  let answ = (pre - (glpc / 100) * tot) / (glpc / 100 - 1);
  answ = Math.round(answ);

  document.getElementById('answer').innerHTML = answ + ' classes'+'🤟';
};
