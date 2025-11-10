async function lookup(){
  const uid = document.getElementById('uidInput').value;
  const out = document.getElementById('result');
  if(!uid){ out.innerText = 'Please enter UID'; return; }
  out.innerText = 'Checking...';
  try{
    const r = await fetch('https://free-ff-api-src-5plp.onrender.com/api/v1/account?region=IND&uid=' + uid);
    const j = await r.json();
    const name = j?.data?.nickname || j?.nickname || 'Unknown';
    out.innerHTML = 'Player Name: <b>' + name + '</b>';
  }catch(e){
    out.innerText = 'Error fetching IGN. Please enter manually.';
  }
}

function buy(pack, price){
  document.getElementById('payment').hidden = false;
  alert(pack + ' selected. Pay ' + price + ' to UPI Q009237318@ybl and send screenshot to Telegram bot.');
}
